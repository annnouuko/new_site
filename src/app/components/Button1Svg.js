"use client";
import { useState } from "react";

export default function ButtonSvg({ onClick, className }) {
  const [pressed, setPressed] = useState(false);

  return (
    <div className={`relative ${className} flex justify-center items-center`}>
      <img
        src={pressed ? "/img/button2.svg" : "/img/button1.svg"}
        alt="Button"
        className="w-full h-full md:w-[300px] md:h-[100px] cursor-pointer transition-all duration-150"
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
