import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import heartMouse from "/public/amos-heart.png";

export default function AmosGreeting() {
  const mouseRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      strokeDashoffset: 0,
      transition: { duration: 4, ease: "easeInOut" },
    });
  }, [controls]);

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 pt-8 pb-4 flex flex-col items-center md:flex-row md:justify-start md:gap-6">
      {/* Mouse writing hi */}
      <svg
        viewBox="0 0 800 400"
        className="w-full h-auto md:w-[700px] md:h-[350px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          ref={mouseRef}
          d="M 20 80 C 100 30, 180 150, 260 90 S 400 140, 480 110 S 600 150, 700 240"
          fill="none"
          stroke="#66cccc"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1200"
          strokeDashoffset="1200"
          animate={controls}
        />

        {/* The "hi" text */}
        <text
          x="60"
          y="75"
          fontFamily="cursive"
          fontSize="48"
          fill="#66cccc"
        >
          hi
        </text>
      </svg>

      {/* Final Mouse with heart */}
      <div className="mt-4 md:mt-0 md:absolute md:bottom-4 md:right-10">
        <Image  
          src={heartMouse}
          alt="Amos the mouse with a heart tail"
          width={70}
          height={70}
          className="opacity-100 transition-opacity duration-500"
        />
      </div>
    </div>
  );
}
