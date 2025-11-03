"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Button_mobile() {
  const [isPressed, setIsPressed] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
      router.push("/projects"); // переход на страницу
    }, 150);
  };

  return (
    <div className="flex md:hidden justify-center items-center py-4">
      <img
        src={isPressed ? "/img/project_list_4.png" : "/img/project_list_3.png"} // 👈 смена картинки
        alt="project list button"
        className={`max-w-[180px] h-auto cursor-pointer transition-all duration-200 ease-in-out ${
          isPressed ? "scale-95" : "scale-100"
        }`}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={handleClick}
        onMouseLeave={() => setIsPressed(false)}
        onTouchStart={() => setIsPressed(true)} // 👈 для мобильных
        onTouchEnd={handleClick}
      />
    </div>
  );
}
