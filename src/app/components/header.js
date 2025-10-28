"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Form2 from "../components/Form2";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pressed, setPressed] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (href) => {
    return pathname === href
      ? "h-[30px] w-[280px] text-black transition-colors"
      : "h-[30px] w-[280px] text-[#A3A3A3] hover:text-black transition-colors";
  };

  return (
    <div className="relative flex h-[180px] w-full gap-[2rem] px-4 md:px-0">
      {/* === БУРГЕР (мобилка) === */}
      <button
        className="absolute left-4 top-6 flex flex-col justify-center items-center w-8 h-8 space-y-1 md:hidden z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className={`block h-[2px] w-6 bg-black transition-all ${menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
        ></span>
        <span
          className={`block h-[2px] w-6 bg-black transition-all ${menuOpen ? "opacity-0" : ""
            }`}
        ></span>
        <span
          className={`block h-[2px] w-6 bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
        ></span>
      </button>

      {/* === ЛЕВАЯ ЧАСТЬ (desktop only) === */}
      <div className="hidden md:flex items-end justify-end w-[200px] h-[100px]">
        <div className="flex justify-end items-start w-[150px] h-[50px]">
          <div className="text-black text-[16px] font-semibold">VOLUME CG</div>
        </div>
      </div>

      {/* === ЛОГО === */}
      <div className="flex justify-center md:justify-end  w-full md:w-[600px] h-[100px] ">
  <div className="flex items-center justify-end md:justify-end  h-[100px] w-[200px]">
    <img
      src="/img/logo_v3cg.svg"
      alt="Logo"
      className="h-[40px] w-[30px] md:h-[67px] md:w-[40px]"
    />
  </div>
</div>

      {/* === НАВИГАЦИЯ (desktop only) === */}
      <div className="hidden md:flex items-end justify-end h-[180px] w-[410px]">
        <div className="flex flex-col h-[150px] w-[200px] space-y-[2px]">
          <Link href="/" className={getLinkClass("/")}>
            HOMEPAGE
          </Link>
          <Link href="/about" className={getLinkClass("/about")}>
            ABOUT US
          </Link>
          <Link href="/projects" className={getLinkClass("/projects")}>
            PROJECTS
          </Link>
          <Link href="/contacts" className={getLinkClass("/contacts")}>
            CONTACT
          </Link>
        </div>
      </div>

      {/* === КНОПКА === */}
      <div className="flex h-[80px] md:h-[150px] justify-end items-center w-[140px] md:w-[280px]">
        <div className="bg-slate-400 md:flex items-end w-[140px] md:w-[200px] h-[80px] md:h-[55px] relative">
          <img
            src={pressed ? "/img/button2.svg" : "/img/button1.svg"}
            alt="Button"
            className="h-[100px] md:h-[100px] w-[140px] md:w-[300px] cursor-pointer transition-all duration-150"
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => {
              setPressed(false);
              setIsOpen(true);
            }}
            onMouseLeave={() => setPressed(false)}
          />
        </div>
      </div>

            

      {/* === МОБИЛЬНОЕ МЕНЮ === */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] max-w-[320px] bg-white shadow-xl transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <div className="flex flex-col p-19 -mt-13 space-y-6 text-lg text-black">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            HOMEPAGE
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            ABOUT US
          </Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>
            PROJECTS
          </Link>
          <Link href="/contacts" onClick={() => setMenuOpen(false)}>
            CONTACT
          </Link>
          <Link href="/contacts" onClick={() => setMenuOpen(false)}>
            CHECK OUR SHOWREEL
          </Link>
        </div>
      </div>

      {/* === ЗАТЕМНЕНИЕ === */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </div>
  );
}
