"use client";
import { useState } from "react";

export default function ButtonSvg({ onClick, className }) {
  const [pressed, setPressed] = useState(false);

  // Пути к SVG в папке public (регистр очень важен!)
  const BUTTON1 = "/svgs/Button1.svg";
  const BUTTON2 = "/svgs/Button2.svg";

  return (
    <div className={`relative ${className} flex justify-center items-center`}>
      <img
        src={pressed ? BUTTON2 : BUTTON1}
        alt="Button"
        className="w-full h-auto md:w-[300px] md:h-[100px] cursor-pointer transition-all duration-150"
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => {
          setPressed(false);
          onClick && onClick();
        }}
        onMouseLeave={() => setPressed(false)}
      />
    </div>
  );
}
