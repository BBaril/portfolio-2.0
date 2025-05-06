'use client';


import ThemeToggle from "@/shared/ThemeToggle";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
  
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);
  
  
  return (
    <header className="w-full bg-bbOffWhite text-bbOffBlack dark:text-bbOffWhite dark:bg-bbOffBlack">
      <div className="flex justify-between items-center px-1 py-1.5 mt-1 mb-1 max-w-7xl mx-auto">
        {/* Logo + Title */}
        <div className="flex items-center gap-2 ml-6">
          <Link href="https://bethanybaril.com">
            <Image
              src="/bbLogo3.png"
              alt="Bethany Baril Logo"
              width={25}
              height={25}
              className="rounded-full border border-none shadow-sm hover:opacity-70 transition"
              priority
            />
          </Link>
          <h1 className="text-lg tracking-tight text-black dark:text-bbOffWhiteSoft/90  ">
            Portfolio
          </h1>
        </div>

        {/* Theme Toggle + Hamburger */}
        <div className="flex items-center gap-3 relative pr-0.5 w-48">
          <ThemeToggle />
          <div className="relative" ref={menuRef}>
            <div
              className="flex flex-col justify-center items-center space-y-1 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="w-5 h-0.5 bg-bbOffBlack dark:bg-bbPinkDark/80 rounded-full"></div>
              <div className="w-5 h-0.5 bg-bbOffBlack dark:bg-bbPinkDark/80 rounded-full"></div>
              <div className="w-5 h-0.5 bg-bbOffBlack dark:bg-bbPinkDark/80 rounded-full"></div>
            </div>

            {/* Dropdown menu */}
            {menuOpen && (
              <div className="absolute right-0 top-full mt-2 w-24 bg-bbOffWhiteSoft dark:bg-bbOffBlackSoft dark:text-bbOffWhiteSoft text-sm font-bold shadow-lg rounded-md z-50 p-2 space-y-2">
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="block text-black dark:text-bbOffWhiteSoft/85 hover:text-bbPinkDark hover:font-bold dark:hover:text-bbPinkDark hover:dark:font-bold font-semibold"
                >
                  About
                </a>
                <a
                  href="#experience"
                  onClick={() => setMenuOpen(false)}
                  className="block text-black dark:text-bbOffWhiteSoft/85 hover:text-bbPinkDark hover:font-bold dark:hover:text-bbPinkDark hover:dark:font-bold font-semibold"
                >
                  Experience
                </a>
                <a
                  href="#skills"
                  onClick={() => setMenuOpen(false)}
                  className="block text-black dark:text-bbOffWhiteSoft/85 hover:text-bbPinkDark hover:font-bold dark:hover:text-bbPinkDark dark:hover:font-bold font-semibold"
                >
                  Skills
                </a>
                <a
                  href="#cards"
                  onClick={() => setMenuOpen(false)}
                  className="block text-black dark:text-bbOffWhiteSoft/85 hover:text-bbPinkDark hover:font-bold dark:hover:text-bbPinkDark dark:hover:font-bold font-semibold"
                >
                  Projects
                </a>
                <a
                  href="#cards"
                  onClick={() => setMenuOpen(false)}
                  className="block text-black dark:text-bbOffWhiteSoft/85 hover:text-bbPinkDark hover:font-bold dark:hover:text-bbPinkDark dark:hover:font-bold font-semibold"
                >
                  Contact
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-[2px] max-w-screen-xl mx-auto bg-bbTeal dark:bg-bbTealDark/90 my-1" />
    </header>
  );
}
