import React, { useState } from "react";
import Button from "../../ui/Button";
import Image from "next/image";
import Link from "next/link";
interface ProjectProps {
  activeContent: string;
  setActiveContent: (content: string) => void;
}
const ProjectPortfolio: React.FC<ProjectProps> = ({ setActiveContent }) => {
  return (
    <div className="w-full flex flex-col h-[55vh] sm:p-8 p-2 backdrop-blur-sm">
      <h1 className="text-xl sm:text-2xl font-mono font-bold text-primary glow text-center">
        My Portfolio Website
      </h1>
      <div className="overflow-auto flex items-center flex-col space-y-4 mt-4 mb-2">
        <Image
          className="rounded"
          src={"/asset/image/porfolio.jpeg"}
          width={400}
          height={400}
          alt="IOT"
        />
        <div className="sm:text-md text-sm font-mono text-accent glow-accent w-full mx-auto mb-2 px-2 space-y-2">
          <p className="text-justify">
            This portfolio website is designed to showcase my skills, projects,
            and knowledge in a visually engaging way. It features a dark theme
            with neon-glow typography, creating a futuristic and stylish
            aesthetic. One of the unique elements in this portfolio is the
            inclusion of a 3D VRM avatar, created using VRoid and animated with
            Mixamo. The avatar is interactive, capable of responding to user
            interactions such as gestures, animations, or simple reactions to
            visitor actions. For now, the website follows a traditional
            portfolio structure, displaying my about section, projects,
            educational content, and contact information. However, in the
            future, I plan to evolve this portfolio into an RPG-inspired
            experience, where users can navigate a virtual world to explore my
            work in a more immersive way.
          </p>
          <h2 className="font-bold">Key Features:</h2>
          <ul>
            <li>
              ✅ Interactive 3D VRM Avatar: A personalized 3D model that reacts
              to user interactions.
            </li>
            <li>
              ✅ Modern Dark Theme with Neon Glow: A futuristic aesthetic for a
              unique look and feel.
            </li>
            <li>
              ✅ Portfolio Showcase: Displays my previous projects in a
              structured and accessible format.
            </li>
            <li>
              ✅ Educational Section: Contains articles, insights, or
              explanations of technical topics.
            </li>
            <li>
              ✅ Easy Contact & Social Links: Allows visitors to connect with me
              seamlessly.
            </li>
          </ul>
          <h2 className="font-bold">Planned Future Features (RPG Concept)</h2>
          <ul>
            <li>
              1️⃣ Explorable 3D World: Users will be able to navigate a
              custom-designed field.
            </li>
            <li>
              2️⃣ Controllable Avatar: My 3D model will walk and interact with
              objects in the virtual space.
            </li>
            <li>
              3️⃣ Gamified Portfolio: Instead of a simple list, projects and
              information will be presented as interactive elements in a
              game-like environment.
            </li>
          </ul>

          <h2 className="font-bold">Technologies Used:</h2>
          <ul>
            <li>Frontend: Next.js </li>
            <li>3D Model & Animations: VRoid, Mixamo</li>
            <li>Styling: Tailwind CSS (with neon-glow effects)</li>
          </ul>
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

export default ProjectPortfolio;
