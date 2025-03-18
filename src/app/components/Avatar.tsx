"use client";
import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Leva } from "leva";
import { VRM, VRMLoaderPlugin, VRMUtils } from "@pixiv/three-vrm";
import { loadMixamoAnimation } from "../utils/mixamo";

interface AvatarsProps {
  activeContent: string;
}

let currentMixer: THREE.AnimationMixer | null = null;
const clock = new THREE.Clock();
let activeAction: THREE.AnimationAction | null = null;
let previousAction: THREE.AnimationAction | null = null;
export const animationPlaybackRate = 0.8;

const Avatar = ({ setVrm }: { setVrm: (vrm: VRM) => void }) => {
  const { scene, camera } = useThree();
  const [gltf, setGltf] = useState<GLTF>();
  const [progress, setProgress] = useState<number>(0);
  const avatar = useRef<VRM | null>(null);

  useEffect(() => {
    if (!gltf) {
      const loader = new GLTFLoader();
      loader.register((parser) => new VRMLoaderPlugin(parser));

      loader.load(
        "/asset/model/Himari_.vrm",
        (gltf) => {
          setGltf(gltf);
          const vrm: VRM = gltf.userData.vrm;
          avatar.current = vrm;
          setVrm(vrm); // Simpan VRM ke state

          if (vrm.lookAt) {
            vrm.lookAt.target = camera;
          }
          VRMUtils.removeUnnecessaryVertices(gltf.scene);
          vrm.scene.traverse((obj) => (obj.frustumCulled = false));
          vrm.scene.castShadow = true;
          vrm.scene.rotation.y = Math.PI;
        },
        (xhr) => {
          setProgress((xhr.loaded / xhr.total) * 100);
          animate();
        },
        (error) => {
          console.error("Gagal memuat VRM:", error);
        }
      );
    }
  }, [scene, gltf, camera]);

  useFrame(({ clock }, delta) => {
    const t = clock.getElapsedTime();
    if (avatar.current) {
      avatar.current.update(delta);
      const blinkDelay = 10;
      const blinkFrequency = 3;
      if (Math.round(t * blinkFrequency) % blinkDelay === 0) {
        avatar.current.expressionManager?.setValue(
          "blink",
          1 - Math.abs(Math.sin(t * blinkFrequency * Math.PI))
        );
      }
    }
    if (avatar.current && avatar.current.humanoid) {
      const rootBone = avatar.current.humanoid.getBoneNode("hips");
      if (rootBone) {
        rootBone.position.set(0, 1, 0); // Pastikan hips tetap di tengah
      }
    }
  });

  return (
    <>
      {gltf ? (
        <primitive object={gltf.scene} />
      ) : (
        <Html center>{progress} % loaded</Html>
      )}
    </>
  );
};

function animate() {
  requestAnimationFrame(animate);
  const deltaTime = clock.getDelta();
  if (currentMixer) {
    currentMixer.update(deltaTime);
  }
}
async function loadFBX(animationUrl: string, vrm: VRM) {
  console.log("Loading animation from:", animationUrl);

  try {
    const clip = await loadMixamoAnimation(animationUrl, vrm);
    if (!clip) {
      console.error("Gagal memuat animasi:", animationUrl);
      return;
    }

    if (!currentMixer) {
      currentMixer = new THREE.AnimationMixer(vrm.scene);
    }

    const newAction = currentMixer.clipAction(clip);
    newAction.setEffectiveTimeScale(1.3).setEffectiveWeight(1);

    if (activeAction) {
      // **Gunakan crossFade untuk transisi yang lebih halus**
      activeAction.crossFadeTo(newAction, 1.2, true);
    }

    newAction.reset().fadeIn(1).play();
    currentMixer.timeScale = animationPlaybackRate;

    previousAction = activeAction;
    activeAction = newAction;
  } catch (error) {
    console.error("Error loading animation:", error);
  }
}

const Avatars: React.FC<AvatarsProps> = ({ activeContent }) => {
  const [vrm, setVrm] = useState<VRM | null>(null);
  const [isFirstAnimationDone, setIsFirstAnimationDone] = useState(false);
  // Efek pertama kali untuk memainkan animasi Waving
  useEffect(() => {
    if (!vrm) return;

    let animationUrl = "/asset/animation/Catwalk Idle 02.fbx";

    // Jika halaman baru pertama kali dibuka, mainkan animasi Waving dulu
    if (!isFirstAnimationDone) {
      animationUrl = "/asset/animation/Waving (2).fbx";
      setTimeout(() => {
        setIsFirstAnimationDone(true); // Setelah beberapa detik, set animasi default
      }, 3050);
    } else {
      //  jalankan animasi berdasarkan menu aktif
      if (activeContent === "home")
        animationUrl = "/asset/animation/Catwalk Idle 02.fbx";
      else if (activeContent === "about")
        animationUrl = "/asset/animation/Brooklyn Uprock.fbx";
      else if (activeContent === "projects")
        animationUrl = "/asset/animation/Samba Dancing.fbx";
      else if (activeContent === "contact")
        animationUrl = "/asset/animation/Texting.fbx";
    }

    loadFBX(animationUrl, vrm);
  }, [activeContent, vrm, isFirstAnimationDone]);
  return (
    <div className="w-full border-white h-[60vh] sm:w-2/5 p-4 -z-1 absolute sm:static sm:z-auto">
      <Canvas
        performance={{ min: 0.5, max: 1 }}
        camera={{
          position: [0, 1, 1.3],
          fov: 75,
        }}
        shadows
      >
        <Leva hidden />
        <directionalLight
          position={[0, 3, 5]}
          intensity={3}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={65}
          shadow-camera-near={0.08}
          shadow-bias={-0.005}
        />
        <ambientLight intensity={0.65} />
        <spotLight position={[0, 2, -1]} intensity={0.4} />
        <Suspense fallback={null}>
          <Avatar setVrm={setVrm} />
        </Suspense>
        <OrbitControls target={[0, 0.65, -2]} maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
};

export default Avatars;
