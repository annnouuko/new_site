"use client";
import { useState } from "react";

export default function ButtonSvg({ onClick, className }) {
  const [pressed, setPressed] = useState(false);

  return (
    <div className={`relative ${className} flex justify-center items-center`}>
      <img
        src={pressed ? "/svgs/Button2.svg" : "/svgs/Button1.svg"}
        alt="Button"
        className="w-[140px] h-auto md:w-[300px] md:h-auto cursor-pointer transition-all duration-150"
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
