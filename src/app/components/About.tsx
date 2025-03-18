"use client";
import React, { useState } from "react";
import Button from "./ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";
import { PiFileSqlFill } from "react-icons/pi";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

interface AboutProps {
  activeContent: string;
  setActiveContent: (content: string) => void;
}
const About: React.FC<AboutProps> = ({ setActiveContent }) => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div className="w-full flex flex-col sm:h-[55vh] sm:p-8 backdrop-blur-sm">
      <h1 className="text-2xl sm:text-4xl font-mono font-bold text-primary glow text-center">
        About Me
      </h1>

      {/* Tabs */}
      <div className="mt-2 justify-center flex text-xs sm:text-sm shadow-[0px_10px_10px_-10px_rgba(0,229,225,0.6)] font-medium text-center rounded-2xl">
        <ul className="flex -mb-px">
          <li className="me-2 ">
            <button
              onClick={() => setActiveTab("education")}
              className={`inline-block p-4 border-b-2 hover:cursor-pointer rounded-t-lg ${
                activeTab === "education"
                  ? "border-[rgba(0, 229, 255, 0.8)] text-primary glow"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300"
              }`}
            >
              Education
            </button>
          </li>
          <li className="me-2 ">
            <button
              onClick={() => setActiveTab("certificate")}
              className={`inline-block p-4 border-b-2 hover:cursor-pointer rounded-t-lg ${
                activeTab === "certificate"
                  ? "border-[rgba(0, 229, 255, 0.8)] text-primary glow"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300"
              }`}
            >
              Certificate
            </button>
          </li>
          <li className="me-2 ">
            <button
              onClick={() => setActiveTab("tools")}
              className={`inline-block p-4 border-b-2 hover:cursor-pointer rounded-t-lg ${
                activeTab === "tools"
                  ? "border-[rgba(0, 229, 255, 0.8)] text-primary glow"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300"
              }`}
            >
              Tools
            </button>
          </li>
        </ul>
      </div>

      {/* Konten yang Berubah Sesuai Tab */}
      <div className="overflow-auto py-4 sm:px-0 font-mono">
        {activeTab === "education" && (
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-2 mt-2 px-4"
          >
            <li className="font-bold text-xl glow">Electrical Engineering</li>
            <li className="font-semibold text-md glow-accent">
              UNIVERSITAS ISLAM NEGERI SUNAN GUNUNG DJATI BANDUNG
            </li>
            <li className="font-light text-sm">YEAR: 2018-2024</li>
            <li className="font-bold text-sm">GPA: 3.34</li>
          </motion.ul>
        )}
        {activeTab === "certificate" && (
          <div className="space-y-2 mt-2 px-4">
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <li className="font-bold text-md sm:text-xl glow hover:cursor-pointer underline">
                <Link
                  href={
                    "https://www.coursera.org/account/accomplishments/specialization/certificate/65Q2Y9EFRLND"
                  }
                  target="_blank"
                >
                  Google Project Management
                </Link>
              </li>
              <li className="font-semibold text-md glow-accent">March 2024</li>
              <hr className="my-2 h-0.5 border-t-0 bg-white/10" />
            </motion.ul>
            <ul className="space-y-2">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7 }}
                className="font-bold text-md sm:text-xl glow hover:cursor-pointer underline"
              >
                <Link
                  href={
                    "https://media.licdn.com/dms/document/media/v2/D562DAQHknTIcROGRSA/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1685897096675?e=1743033600&v=beta&t=aULVZUrKNyNI4ZW3Z179RaFzEl1JGpvyTVCq6bSgMB8"
                  }
                  target="_blank"
                >
                  Backend Developer Virtual Internship
                </Link>
              </motion.li>
              <li className="font-semibold text-md glow-accent">June 2023</li>
              <hr className="my-2 h-0.5 border-t-0 bg-white/10" />
            </ul>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.9 }}
              className="space-y-2"
            >
              <li className="font-bold text-md sm:text-xl glow hover:cursor-pointer underline">
                <Link
                  href={
                    "https://media.licdn.com/dms/document/media/v2/D562DAQEC6ygJjPmwUA/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1693647154928?e=1743033600&v=beta&t=is3fl-CepBw_TEN8NCue4MAwodEa6dl48YfFrsjvsPI"
                  }
                  target="_blank"
                >
                  Programmer Internship
                </Link>
              </li>
              <li className="font-semibold text-md glow-accent">
                December 2021
              </li>
              <hr className="my-2 h-0.5 border-t-0 bg-white/10" />
            </motion.ul>
          </div>
        )}
        {activeTab === "tools" && (
          <div className="flex mt-3 space-y-2 justify-center space-x-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.9 }}
              className="text-3xl sm:text-5xl shadow-[0px_0px_10px_4px_rgba(255,255,0,0.4)] text-yellow-300 bg-white rounded"
            >
              <SiJavascript />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl shadow-[0px_0px_10px_4px_rgba(255,255,255,0.8)] text-black bg-white rounded-4xl"
            >
              <RiNextjsFill />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.9 }}
              className="text-3xl sm:text-5xl shadow-[0px_0px_10px_4px_rgba(47,255,0,0.8)] rounded-4xl text-green-600 bg-white"
            >
              <BiLogoSpringBoot />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl shadow-[0px_0px_10px_4px_rgba(0,229,225,0.8)] glow bg-blue-300 rounded-4xl"
            >
              <PiFileSqlFill />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.9 }}
              className="text-3xl sm:text-5xl shadow-[0px_2px_10px_4px_rgba(255,0,127,0.8)] bg-white text-red-600 rounded"
            >
              <FaJava />
            </motion.div>
          </div>
        )}
      </div>

      <div className="flex gap-4 justify-start mt-auto">
        <Button text="Back to Menu" onClick={() => setActiveContent("home")} />
      </div>
    </div>
  );
};

export default About;
