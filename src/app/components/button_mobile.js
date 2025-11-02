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
        src="/img/project_list_3.png"
        alt="project list button"
        className={`max-w-[180px] h-auto cursor-pointer transition-transform duration-150 ${
          isPressed ? "scale-95" : "scale-100"
        }`}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={handleClick}
        onMouseLeave={() => setIsPressed(false)}
      />
    </div>
  );
}
