// src/shared/Footer.jsx
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center font-bold py-1">
      <div className="h-[.12rem] max-w-7xl mx-auto bg-bbTeal/60 dark:bg-bbTealDark/60 my-4 rounded-full" />
      <div className="flex flex-wrap justify-center gap-6 text-lg mt-3 mb-3 text-bbOffBlack dark:text-bbOffWhiteSoft">
        <Link href="#about" className="text-black dark:text-bbOffWhite/80 hover:text-bbPinkDark/70 dark:hover:text-bbPink/80 transition">About</Link>
        <Link href="#experience" className="text-black dark:text-bbOffWhite/80 hover:text-bbPinkDark/70 dark:hover:text-bbPink/80 transition">Experience</Link>
        <Link href="#skills" className="text-black dark:text-bbOffWhite/80 hover:text-bbPinkDark/70 dark:hover:text-bbPink/80 transition">Skills</Link>
        <Link href="https://hub.bethanybaril.com/" target="_blank" className="text-black dark:text-bbOffWhite/80 hover:text-bbPinkDark/70 dark:hover:text-bbPink/80 transition">Projects</Link>
        <Link href="https://bethanybaril.com/#cards" target="_blank" className="text-black dark:text-bbOffWhite/80 hover:text-bbPinkDark/70 dark:hover:text-bbPink/80 transition">Contact</Link>
      </div>
      <div className="h-[2px] max-w-full mx-auto bg-bbTeal dark:bg-bbTealDark/90 my-2 rounded-full" />
      <div className="mt-10 mb-6 text-xs text-gray-500 dark:text-gray-400">
        Version 2.0 Copyright © {new Date().getFullYear()} Bethany Baril. All Rights Reserved.
      </div>
    </footer>
  );
}
