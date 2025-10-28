"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Animation() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <div className="flex justify-center items-start h-[1000px] w-full">
      <div className="flex justify-center h-[700px] w-full">
        <div className="flex flex-row h-[500px] m-6 gap-[3rem]">
          {/* Первый блок */}
          <div className="flex justify-center items-center h-[500px] w-[700px] rounded-xl shadow-inner">
            <motion.div
              onHoverStart={() => setIsHovered1(true)}
              onHoverEnd={() => setIsHovered1(false)}
              animate={{
                scale: isHovered1 ? 1.05 : 1,
                boxShadow: isHovered1
                  ? "50px 40px 30px rgba(0,0,0,0.8)"
                  : "0px 0px 0px rgba(0,0,0,0)",
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 40,
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="h-[490px] w-[695px] bg-white rounded-xl cursor-pointer overflow-hidden"
            >
              <img
                src="/img/1.png"
                alt="Careem Pay"
                className="h-full w-full object-cover rounded-xl"
              />
            </motion.div>
          </div>

          {/* Второй блок */}
          <div className="flex justify-center items-center h-[500px] w-[700px] bg-black rounded-xl shadow-inner">
            <motion.div
              onHoverStart={() => setIsHovered2(true)}
              onHoverEnd={() => setIsHovered2(false)}
              animate={{
                scale: isHovered2 ? 1.05 : 1,
                boxShadow: isHovered2
                  ? "50px 40px 30px rgba(0,0,0,0.8)"
                  : "0px 0px 0px rgba(0,0,0,0)",
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 40,
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="h-[490px] w-[690px] bg-white rounded-xl cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
