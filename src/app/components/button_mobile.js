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
      router.push("/projects"); // переход на страницу, можешь заменить
    }, 150);
  };

  return (
    <div className="flex md:hidden justify-center items-center h-[100px] w-full">
      <div className="flex justify-center items-center h-[60px] w-[200px] ">
        <img
          src={
            isPressed
              ? "/img/project_list 2.svg"
              : "/img/project_list.svg"
          }
          alt="project list button"
          className="h-[120px] w-[200px] cursor-pointer transition-all duration-150"
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={handleClick}
          onMouseLeave={() => setIsPressed(false)}
        />
      </div>
    </div>
  );
}
