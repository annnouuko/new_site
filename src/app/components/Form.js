"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Form() {
  const [selected, setSelected] = useState(null);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className="bg-[#e9e9e9] w-full md:w-1/2 flex flex-col items-center px-4 md:px-0 pb-16 md:pb-0">
      {/* HEADER — скрываем на мобилке */}
      <div className="hidden md:flex h-[180px] w-[570px] gap-[7.5rem] ml-[210px]">
        <div className="flex items-end justify-end h-[180px] w-[410px]">
          <div className="flex flex-col h-[150px] w-[200px] space-y-[2px]">
            <Link href="/" className="h-[30px] w-[280px] text-[#A3A3A3] hover:text-gray-500 transition-colors">
              HOMEPAGE
            </Link>
            <Link href="/about" className="h-[30px] w-[280px] text-[#A3A3A3] hover:text-black transition-colors">
              ABOUT US
            </Link>
            <Link href="/projects" className="h-[30px] w-[280px] text-[#A3A3A3] hover:text-black transition-colors">
              PROJECTS
            </Link>
            <Link href="/contacts" className="hidden md:block h-[30px] w-[280px] text-black font-medium">
              CONTACT
            </Link>
          </div>
        </div>

        <div className="flex h-[150px] justify-end items-center w-[280px]">
          <div className="flex items-end w-[200px] h-[55px]">
            <img src="/img/button.svg" alt="Button" className="h-[100px] w-[300px]" />
          </div>
        </div>
      </div>

      {/* === ТЕЛО ФОРМЫ === */}
      <div className="mt-10 md:mt-16 w-full max-w-[600px] flex flex-col gap-10 md:gap-10 text-sm">
        {/* NAME */}
        <div>
          <p className="uppercase text-gray-500 text-xs mb-2">Name</p>
          <input
            type="text"
            className="w-full h-[65px] md:h-[60px] px-5 text-black text-sm rounded-md outline-none border-none bg-transparent"
            style={{
              backgroundImage: "url('/img/name.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          />
        </div>

        {/* EMAIL */}
        <div>
          <p className="uppercase text-gray-500 text-xs mb-2">Your Email</p>
          <input
            type="email"
            className="w-full h-[65px] md:h-[60px] px-5 text-black text-sm rounded-md outline-none border-none bg-transparent"
            style={{
              backgroundImage: "url('/img/email.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          />
        </div>

        {/* PROJECT */}
        <div>
          <p className="uppercase text-gray-500 text-xs mb-2">
            Tell us about you or your project
          </p>
          <textarea
            className="w-full h-40 md:h-32 px-5 py-4 text-black text-sm rounded-md outline-none border-none resize-none bg-transparent leading-relaxed"
            style={{
              backgroundImage: "url('/img/your_project.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          />
        </div>

        {/* RADIO */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm uppercase mt-3 gap-8 md:gap-10">
          <div
            onClick={() => setSelected("project")}
            className="flex items-center gap-3 cursor-pointer select-none transition-colors"
          >
            <img
              src={selected === "project" ? "/img/agree 2.svg" : "/img/agree.svg"}
              alt="agree1"
              className="w-8 h-8 md:w-9 md:h-9"
            />
            <span
              className={`font-medium ${
                selected === "project" ? "text-black" : "text-gray-500"
              }`}
            >
              I have a project for you
            </span>
          </div>

          <div
            onClick={() => setSelected("artist")}
            className="flex items-center gap-3 cursor-pointer select-none transition-colors"
          >
            <img
              src={selected === "artist" ? "/img/agree 2.svg" : "/img/agree.svg"}
              alt="agree2"
              className="w-8 h-8 md:w-9 md:h-9"
            />
            <span
              className={`font-medium ${
                selected === "artist" ? "text-black" : "text-gray-500"
              }`}
            >
              I am an artist and I want to collaborate
            </span>
          </div>
        </div>

        {/* SEND REQUEST */}
        <div
          className="flex justify-center cursor-pointer mt-4"
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => setIsPressed(false)}
        >
          <img
            src={isPressed ? "/img/sr.png" : "/img/sr.png"}
            alt="Send Request"
            className="w-full max-w-[600px] h-auto"
          />
        </div>

        {/* CHECKBOX */}
        <div className="flex items-start gap-2 text-gray-400 text-xs leading-snug mt-[-10px] md:mt-[-30px] max-w-[600px]">
          <div className="w-4 h-4 border border-gray-400 flex-shrink-0" />
          <span className="flex-1 break-words">
            I agree to the processing of my personal data in order to process the above inquiry.
          </span>
        </div>
      </div>
    </div>
  );
}
