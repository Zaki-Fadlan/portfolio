"use client";
import React from "react";
import Button from "./ui/Button";
import { motion } from "framer-motion";

interface ContactProps {
  activeContent: string;
  setActiveContent: (content: string) => void;
}

const Contact: React.FC<ContactProps> = ({ setActiveContent }) => {
  return (
    <div className="w-full flex flex-col sm:h-[55vh] sm:p-8 p-2 backdrop-blur-sm">
      <div className="flex w-full flex-col sm:flex-row justify-center sm:h-[50vh] items-center sm:space-x-12 sm:space-y-0 space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-mono font-bold text-primary glow text-center"
        >
          <span className="glow-purple font-sans text-secondary">
            Let&apos;s{" "}
          </span>
          Connect
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 flex flex-col justify-center items-center"
        >
          <a
            className="flex items-center text-primary font-mono font-semibold text-md md:text-xl glow"
            href="https://id.linkedin.com/in/zakifadlan"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="#fff"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin text-primary drop-shadow-[0px_0px_20px_rgba(0,299,255,0.8)] mr-2"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            Zaki Fadlan
          </a>
          <a
            className="flex items-center text-secondary font-mono font-semibold text-md md:text-xl glow-purple"
            href="https://www.instagram.com/zackyfdlnn/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="#a83232"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram text-yellow-500 drop-shadow-[0px_0px_20px_rgba(47,255,100,0.8)] mr-2"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            zackyfdlnn
          </a>
          <a
            className="flex items-center text-accent font-mono font-semibold text-md md:text-xl glow-accent"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-at-sign text-accent drop-shadow-[0px_0px_20px_rgba(47,255,0,0.8)] mr-2"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
            </svg>
            zakifadlan@hotmail.com
          </a>
        </motion.div>
      </div>
      <div className="flex w-full justify-start mt-4 sm:mt-0">
        <Button text="Back to Menu" onClick={() => setActiveContent("home")} />
      </div>
    </div>
  );
};

export default Contact;
