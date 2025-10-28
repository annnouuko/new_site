"use client";

import { useState } from "react";

export default function Footer() {
  const [isPressed, setIsPressed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full h-auto md:h-[220px]">
      <div className="flex flex-col md:flex-row h-auto md:h-[230px] m-4 md:m-6 gap-[1rem]">

        {/* ЛОГО */}
        <div className="flex justify-start items-center md:items-start justify-center md:justify-start h-auto md:h-[220px] w-full md:w-[850px]">
          <div className="text-black text-[40px] md:text-[100px]">VOLUME CG</div>
        </div>

        {/* ССЫЛКИ */}
        <div className="flex flex-col items-center md:items-start h-auto md:h-[220px] w-full md:w-[400px]">
          <div className="flex flex-col gap-[0.5rem] md:gap-[1rem] w-full md:w-[350px]">
            {["INSTAGRAM", "BEHANCE", "LINKEDIN"].map((name) => (
              <div key={name} className="flex flex-row gap-[10px] md:gap-[15px] items-center w-full">
                <div className="h-[20px] w-[20px] md:h-[23px] md:w-[23px]">
                  <img
                    src="img/Vector.svg"
                    alt={name}
                    className="h-[20px] w-[15px] md:h-[23px] md:w-[15px]"
                  />
                </div>
                <div className="text-black text-[14px] md:text-[20px] h-[18px] md:h-[20px] w-full md:w-[300px]">
                  {name}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-start mt-5 md:justify-start items-center h-auto md:h-[150px] w-full md:w-[460px] mt-2 md:mt-0">
            <div className=" flex justify-start text-black text-[14px] md:text-[20px] h-auto md:h-[20px] w-full md:w-[300px] text-center md:text-left whitespace-nowrap">
              VOLUME CG © 2025 ALL RIGHTS RESERVED
            </div>
          </div>
        </div>

        {/* КНОПКА "TO THE TOP" */}
        <div className="flex justify-center md:justify-start items-center h-auto md:h-[220px] w-full md:w-[270px] mt-4 md:mt-0">
          <div className="flex justify-center items-center h-[60px] w-full md:w-[470px]">
            <img
              src={
                isPressed
                  ? "/img/button_to_the_top.svg"
                  : "/img/button_to_the_top2.svg"
              }
              alt="button to the top"
              className={`h-[150px] md:h-[340px] w-[200px] md:w-[440px] cursor-pointer transform transition-all ease-[cubic-bezier(0.4,0,0.2,1)] duration-500 ${isPressed ? "scale-[0.97]" : "scale-100"
                }`}
              onMouseDown={() => setIsPressed(true)}
              onMouseUp={() => {
                setIsPressed(false);
                scrollToTop();
              }}
              onMouseLeave={() => setIsPressed(false)}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
