"use client";
import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Navbar from "./components/ui/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import ProjectATSAMF from "./components/projects/atsamf/ProjectATSAMF";
import ProjectBackOffice from "./components/projects/backoffice/ProjectBackOffice";
import ProjectThesis from "./components/projects/thesis/ProjectThesis";
import ProjectPortfolio from "./components/projects/portfolio/ProjectPortfolio";
import Avatars from "./components/Avatar";
export default function Homes() {
  const [activeContent, setActiveContent] = useState("home"); // Default ke "home"
  return (
    <div className=" w-full flex items-center justify-items-center min-h-screen p-6 gap-16 font-[family-name:var(--font-geist-sans)]">
      {/* <Navbar /> */}
      <main className="flex flex-col sm:p-4 md:flex-row gap-[32px] row-start-2 items-center sm:items-start w-full justify-between relative sm:static">
        {/* Konten 1 */}
        <Avatars activeContent={activeContent} />
        {/* Konten 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className=" w-full sm:min-h-[55vh] p-2 shadow-[0px_0px_10px_10px_rgba(0,229,225,0.6)] rounded-2xl"
        >
          <AnimatePresence mode="wait">
            {activeContent === "home" && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Home
                  setActiveContent={setActiveContent}
                  activeContent={activeContent}
                />
              </motion.div>
            )}
            {activeContent === "about" && (
              <motion.div
                key="about"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <About
                  setActiveContent={setActiveContent}
                  activeContent={activeContent}
                />
              </motion.div>
            )}
            {activeContent === "projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <Project
                  setActiveContent={setActiveContent}
                  activeContent={activeContent}
                />
              </motion.div>
            )}
            {activeContent === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <Contact
                  setActiveContent={setActiveContent}
                  activeContent={activeContent}
                />
              </motion.div>
            )}
            {activeContent === "atsamf" && (
              <motion.div
                key="atsamf"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectATSAMF
                  setActiveContent={setActiveContent}
                  activeContent={activeContent}
                />
              </motion.div>
            )}
            {activeContent === "backoffice" && (
              <motion.div
                key="backoffice"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectBackOffice
                  setActiveContent={setActiveContent}
                  activeContent={activeContent}
                />
              </motion.div>
            )}
            {activeContent === "thesis" && (
              <motion.div
                key="thesis"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectThesis
                  setActiveContent={setActiveContent}
                  activeContent={activeContent}
                />
              </motion.div>
            )}
            {activeContent === "portfolio" && (
              <motion.div
                key="portfolio"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectPortfolio
                  setActiveContent={setActiveContent}
                  activeContent={activeContent}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
}
