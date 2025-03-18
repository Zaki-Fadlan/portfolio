"use client";

import React from "react";
import Button from "./ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
interface ProjectProps {
  activeContent: string;
  setActiveContent: (content: string) => void;
}
const projectList = [
  {
    title:
      "Implementation of MobileNet V3 Transfer Learning for Alzheimer's Classification on Brain MRI Images",
    description: "p",
    thumbnail: "p",
    galeri: "p",
    link: "https://digilib.uinsgd.ac.id/94243/",
  },
  {
    title: "Home",
    description: "p",
    thumbnail: "p",
    galeri: "p",
    link: "home",
  },
  {
    title: "About",
    description: "p",
    thumbnail: "p",
    galeri: "p",
    link: "about",
  },
  {
    title: "Projects",
    description: "p",
    thumbnail: "p",
    galeri: "p",
    link: "projects",
  },
];
const Project: React.FC<ProjectProps> = ({ setActiveContent }) => {
  return (
    <div className="w-full flex flex-col sm:h-[55vh] sm:p-8 p-2 backdrop-blur-sm">
      <h1 className="text-2xl sm:text-4xl font-mono font-bold text-primary glow text-center">
        Project List
      </h1>
      <div className="overflow-auto space-y-2 font-mono mt-2 sm:mt-4 px-2">
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-2"
        >
          <li
            className="font-bold text-md sm:text-xl glow hover:cursor-pointer underline"
            onClick={() => setActiveContent("portfolio")}
          >
            Portfolio Website
          </li>
          <li className="font-semibold text-md glow-accent">2025</li>
          <hr className="my-2 h-0.5 border-t-0 bg-white/10" />
        </motion.ul>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <li
            className="font-bold text-md sm:text-xl glow hover:cursor-pointer underline"
            onClick={() => setActiveContent("thesis")}
          >
            Implementation of MobileNet V3 Transfer Learning for Alzheimer's
            Classification on Brain MRI Images
          </li>
          <li className="font-semibold text-md glow-accent">2024</li>
          <hr className="my-2 h-0.5 border-t-0 bg-white/10" />
        </motion.ul>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          className="space-y-2"
        >
          <li
            className="font-bold text-md sm:text-xl glow hover:cursor-pointer underline"
            onClick={() => setActiveContent("atsamf")}
          >
            Smart Centralized ATS-AMF Power Management System
          </li>
          <li className="font-semibold text-md glow-accent">2023</li>
          <hr className="my-2 h-0.5 border-t-0 bg-white/10" />
        </motion.ul>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.9 }}
          className="space-y-2"
        >
          <li
            className="font-bold text-md sm:text-xl glow hover:cursor-pointer underline"
            onClick={() => setActiveContent("backoffice")}
          >
            Backoffice Order Management System for ISP
          </li>
          <li className="font-semibold text-md glow-accent">2022</li>
          <hr className="my-2 h-0.5 border-t-0 bg-white/10" />
        </motion.ul>
      </div>
      <div className="flex gap-4 justify-start mt-auto">
        <Button text="Back to Menu" onClick={() => setActiveContent("home")} />
      </div>
    </div>
  );
};

export default Project;
