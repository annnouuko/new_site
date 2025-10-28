"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function One_Text() {
  const [isPressed, setIsPressed] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
      router.push("/projects");
    }, 150);
  };

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[620px] w-full">
      <div className="flex flex-col md:flex-row h-auto md:h-[600px] m-4 md:m-6">
        {/* Левая колонка */}
        <div className="flex flex-col h-auto md:h-[600px] w-full md:w-[800px]">
          {/* Заголовок */}
          <div className="w-full md:w-[800px] h-auto md:h-[70px]">
            <div className="text-[32px] md:text-[65px] text-black">
              CAREEM VIDEO PAY
            </div>
          </div>

          {/* Пустое пространство (только для десктопа) */}
          <div className="hidden md:block h-[200px] w-[800px]" />

          {/* --- Мобильная версия: CLIENT / INDUSTRY / SCOPE --- */}
          <div className="flex flex-col md:hidden mt-6 text-black text-[14px] gap-6 justify-start items-start">
            <div className="flex flex-col gap-[3px]">
              <div>CLIENT : NAME NAME</div>
              <div>INDUSTRY : CGI</div>
              <div>YEAR : 2025</div>
            </div>
            <div className="flex flex-col gap-[3px]">
              <div>SCOPE :</div>
              <div>COMPOSITING</div>
              <div>TRACKING</div>
              <div>AI CONCEPTS</div>
            </div>
          </div>

          {/* --- Текст описания --- */}
          <div className="h-auto md:h-[400px] w-full md:w-[800px] mt-6 md:mt-0">
            <div className="text-[15px] md:text-[25px] text-[#BABABA] w-full md:w-[700px] text-left leading-relaxed">
              DVKVNvrv jvlkvljsfvj ijiourbfjf ldskldlvlvkdsvnd anlsajrlf . wrlfnklfnqrf .
              vjvjvjfv . kjlkdfkbjf ldknnldn . fljrfbrfljflewfkn skklfkldfklf alksffhfrlkeklwlkdf
              lkdfhlrhflkrhflnadlnf djbjkrbkjrbfkwkrf kjrfbkjwebrkjfbkrjfb wkjrfjkbrkjfbwjkberf
              wlflrbf rkfjwbrfjbwjkrf kwrjfblwberljbfjw
            </div>
          </div>

          {/* --- Кнопка (только десктоп) --- */}
          <div className="hidden md:flex justify-start items-end h-[100px] w-full md:w-[800px]">
            <div className="flex justify-center items-center h-[60px] w-[270px]">
              <img
                src={
                  isPressed
                    ? "/img/project_list 2.svg"
                    : "/img/project_list.svg"
                }
                alt="project list button"
                className="h-[150px] w-[270px] cursor-pointer transition-all duration-150"
                onMouseDown={() => setIsPressed(true)}
                onMouseUp={handleClick}
                onMouseLeave={() => setIsPressed(false)}
              />
            </div>
          </div>
        </div>

        {/* Правая колонка (только для десктопа) */}
        <div className="hidden md:flex justify-end items-end w-[480px] h-[600px]">
          <div className="flex h-[300px] w-[270px]">
            <div className="flex flex-col h-[250px] w-[270px] gap-[7rem]">
              <div className="flex flex-col h-[75px] w-[270px] gap-[3px]">
                <div className="text-black text-[16px]">CLIENT : NAME NAME</div>
                <div className="text-black text-[16px]">INDUSTRY : CGI</div>
                <div className="text-black text-[16px]">YEAR : 2025</div>
              </div>

              <div className="flex flex-col h-[75px] w-[270px] gap-[3px]">
                <div className="text-black text-[16px]">SCOPE :</div>
                <div className="text-black text-[16px]">COMPOSITING</div>
                <div className="text-black text-[16px]">TRACKING</div>
                <div className="text-black text-[16px]">AI CONCEPTS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
