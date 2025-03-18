"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="sticky top-0 z-50 text-text px-6 flex justify-between items-center w-full bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 dark:border-border">
      {/* Logo */}
      <Link
        href="/"
        className=" text-2xl font-mono font-bold glow-accent transition-colors duration-700 text-center"
      >
        Zaki Fadlan
      </Link>
    </nav>
  );
};

export default Navbar;
