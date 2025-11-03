"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Works_Grid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPressed, setIsPressed] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
      router.push("/projects");
    }, 150);
  };

  // --- универсальные анимации для hover и touch ---
  const animationProps = (index) => ({
    onHoverStart: () => setHoveredIndex(index),
    onHoverEnd: () => setHoveredIndex(null),

    // 👉 поддержка тач-событий для мобильных
    onTouchStart: () => setHoveredIndex(index),
    onTouchEnd: () => {
      setTimeout(() => setHoveredIndex(null), 200);
    },

    animate: {
      scale: hoveredIndex === index ? 1.02 : 1,
      boxShadow:
        hoveredIndex === index
          ? "50px 40px 30px rgba(0,0,0,0.8)"
          : "0px 0px 0px rgba(0,0,0,0)",
    },
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 40,
      duration: 0.6,
      ease: "easeInOut",
    },
    className: "cursor-pointer rounded-xl overflow-hidden",
  });

  return (
    <div className="w-full">
      <div className="m-6 flex flex-col gap-[2rem]">
        {/* === Первая строка === */}
        <div className="flex flex-col md:flex-row gap-[2rem]">
          <motion.div
            {...animationProps(1)}
            className="relative w-full md:w-[750px] h-[250px] md:h-[500px] rounded-xl shadow-inner"
          >
            <Link
              href="/one_project"
              className="block h-full w-full rounded-xl overflow-hidden"
            >
              <img
                src="/img/1.png"
                alt="Project 1"
                className="block h-full w-full object-cover rounded-xl"
              />
              <span className="absolute top-4 left-6 text-white text-2xl md:text-3xl font-semibold drop-shadow-lg">
                Project One
              </span>
            </Link>
          </motion.div>

          <motion.div
            {...animationProps(2)}
            className="relative w-full md:w-[750px] h-[250px] md:h-[500px] rounded-xl shadow-inner"
          >
            <Link
              href="/two_project"
              className="block h-full w-full rounded-xl overflow-hidden"
            >
              <img
                src="/img/2.png"
                alt="Project 2"
                className="block h-full w-full object-cover rounded-xl"
              />
              <span className="absolute top-4 left-6 text-white text-2xl md:text-3xl font-semibold drop-shadow-lg">
                Project Two
              </span>
            </Link>
          </motion.div>
        </div>

        {/* === Вторая строка === */}
        <div className="flex flex-col md:flex-row gap-[2rem]">
          <div className="flex flex-col gap-[1rem] w-full md:w-[620px]">
            <motion.div
              {...animationProps(3)}
              className="relative w-full h-[250px] md:h-[443px] rounded-xl"
            >
              <Link
                href="/three_project"
                className="block h-full w-full rounded-xl overflow-hidden"
              >
                <img
                  src="/img/3.png"
                  alt="Project 3"
                  className="block h-full w-full object-cover rounded-xl"
                />
                <span className="absolute top-4 left-6 text-white text-2xl md:text-3xl font-semibold drop-shadow-lg">
                  Project Three
                </span>
              </Link>
            </motion.div>

            <motion.div
              {...animationProps(4)}
              className="relative w-full h-[250px] md:h-[443px] rounded-xl"
            >
              <Link
                href="/four_project"
                className="block h-full w-full rounded-xl overflow-hidden"
              >
                <img
                  src="/img/4.png"
                  alt="Project 4"
                  className="block h-full w-full object-cover rounded-xl"
                />
                <span className="absolute top-4 left-6 text-white text-2xl md:text-3xl font-semibold drop-shadow-lg">
                  Project Four
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            {...animationProps(5)}
            className="relative w-full md:w-[900px] h-[400px] md:h-[900px] rounded-xl shadow-inner"
          >
            <Link
              href="/five_project"
              className="block h-full w-full rounded-xl overflow-hidden"
            >
              <img
                src="/img/5.png"
                alt="Project 5"
                className="block h-full w-full object-cover rounded-xl"
              />
              <span className="absolute top-4 left-6 text-white text-2xl md:text-3xl font-semibold drop-shadow-lg">
                Project Five
              </span>
            </Link>
          </motion.div>
        </div>

        {/* === Последняя строка === */}
        <motion.div
          {...animationProps(6)}
          className="relative w-full md:w-[1500px] h-[300px] md:h-[800px] rounded-xl"
        >
          <Link
            href="/six_project"
            className="block h-full w-full rounded-xl overflow-hidden"
          >
            <img
              src="/img/6.png"
              alt="Project 6"
              className="block h-full w-full object-cover rounded-xl"
            />
            <span className="absolute top-4 left-6 text-white text-3xl md:text-4xl font-semibold drop-shadow-lg">
              Project Six
            </span>
          </Link>
        </motion.div>

        {/* === Кнопка Project List === */}
        <div className="flex justify-center items-center w-full mt-8">
          <img
            src={
              isPressed
                ? "/img/see_other_projects2.png"
                : "/img/see_other_projects.png"
            }
            alt="see other projects button"
            className="max-w-[220px] md:max-w-[270px] h-auto cursor-pointer transition-transform duration-150 hover:scale-105 active:scale-95"
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={handleClick}
            onMouseLeave={() => setIsPressed(false)}
            onTouchStart={() => setIsPressed(true)}
            onTouchEnd={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
