import React, { useState } from "react";
import Button from "../../ui/Button";
import Image from "next/image";
import Link from "next/link";
interface ProjectProps {
  activeContent: string;
  setActiveContent: (content: string) => void;
}
const ProjectThesis: React.FC<ProjectProps> = ({ setActiveContent }) => {
  return (
    <div className="w-full flex flex-col h-[55vh] sm:p-8 p-2 backdrop-blur-sm">
      <h1 className="text-xl sm:text-2xl font-mono font-bold text-primary glow text-center">
        Implementation of MobileNet V3 Transfer Learning for Alzheimer's
        Classification on Brain MRI Images
      </h1>
      <div className="overflow-auto flex items-center flex-col space-y-4 mt-4 mb-2">
        <Image
          className="rounded"
          src={"/asset/image/Alzheimer.jpeg"}
          width={400}
          height={400}
          alt="IOT"
        />
        <div className="sm:text-md text-sm font-mono text-accent glow-accent w-full mx-auto mb-2 px-2 space-y-2">
          <p className="text-justify">
            This project is a Medical Image Classification System that utilizes
            Transfer Learning to classify medical images. The system is built
            with Next.js for the web interface and Flask for the backend,
            enabling seamless interaction with the trained deep learning model.
            The model is trained using Google Colab. This project successfully
            demonstrates the potential of deep learning and transfer learning in
            medical image classification. By leveraging a lightweight CNN model,
            the system achieves high accuracy with minimal computational
            resources. The integration of a Next.js frontend and Flask backend
            provides an intuitive and efficient platform for real-time medical
            image analysis.{" "}
            <Link
              href={"https://digilib.uinsgd.ac.id/94243/"}
              className="glow-purple underline font-bold"
            >
              More Information
            </Link>
          </p>
          <h2 className="font-bold">Key Features:</h2>
          <ul>
            <li>
              ✅ Deep Learning-based Classification – Utilizes MobileNet V3 for
              high-accuracy image classification.
            </li>
            <li>
              ✅ Web-Based Interface – Built with Next.js, ensuring a fast and
              responsive UI.
            </li>
            <li>
              ✅ REST API Backend – Flask handles model inference and API
              requests.
            </li>
            <li>
              ✅ Cloud-based Model Training – Uses Google Colab to train deep
              learning models efficiently.
            </li>
            <li>
              ✅ Real-time Image Analysis – Users can upload images for instant
              classification.
            </li>
            <li>
              ✅ Scalable & Lightweight – Optimized for deployment with minimal
              computational resources.
            </li>
          </ul>
          <h2 className="font-bold">System Workflow:</h2>
          <ul>
            <li>
              1️⃣ User Uploads an Image – The user selects and uploads a medical
              image via the web interface.
            </li>
            <li>
              2️⃣ Image Preprocessing – The image is resized and preprocessed to
              match the input format of MobileNet V3.
            </li>
            <li>
              3️⃣ Model Inference – The Flask backend loads the trained model and
              performs classification.
            </li>
            <li>
              4️⃣ Result Display – The classification result is displayed on the
              web UI, along with confidence scores.
            </li>
          </ul>

          <h2 className="font-bold">Technologies Used:</h2>
          <ul>
            <li>Backend: Flask (Python-based REST API)</li>
            <li>Frontend: Next.js </li>
            <li>Machine Learning Model: MobileNet V3 (Transfer Learning)</li>
            <li>Model Training: Google Colab (TensorFlow, Keras)</li>
          </ul>

          <h2 className="font-bold">Galery:</h2>
          {/* <div>
            <iframe
              width={560}
              height={315}
              src="https://www.youtube.com/embed/rgNdeflYdYw?si=GdcVR4wWqPaXD0TW"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div> */}
        </div>
      </div>
      <div className="flex gap-4 justify-start mt-auto">
        <Button
          text="Project List"
          onClick={() => setActiveContent("projects")}
        />
      </div>
    </div>
  );
};

export default ProjectThesis;
