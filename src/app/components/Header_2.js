import Link from "next/link";


export default function Header_2(){
    return(
        <div>
            <div className="flex h-[180px] w-full gap-[2rem] ">

                <div className="h-[400p]"></div>
      {/* Левая часть — название */}
      <div className="flex items-end justify-end w-[200px] h-[100px] bg-[#1D2426]   ">
        <div className="flex justify-start items-end w-[150px] h-[50px]">
          <div className="text-black text-[16px] font-semibold">VOLUME CG</div>
        </div>
      </div>

      {/* Логотип */}
      <div className="flex justify-end w-[600px] h-[100px] bg-slate-500">
        <div className="flex items-end justify-center h-[100px] w-[100px]">
          
        </div>
      </div>

      {/* Навигация */}
      <div className="flex items-end justify-end h-[180px] w-[410px]">
        <div className="flex flex-col h-[150px] w-[200px] space-y-[2px] ">
          <Link
            href="/"
            className="h-[30px] w-[280px] text-black hover:text-gray-500 transition-colors"
          >
            HOMEPAGE
          </Link>
          <Link
            href="/about"
            className="h-[30px] w-[280px] text-[#A3A3A3] hover:text-black transition-colors"
          >
            ABOUT US
          </Link>
          <Link
            href="/projects"
            className="h-[30px] w-[280px] text-[#A3A3A3] hover:text-black transition-colors"
          >
            PROJECTS
          </Link>
          <Link
            href="/contact"
            className="h-[30px] w-[280px] text-[#A3A3A3] hover:text-black transition-colors"
          >
            CONTACT
          </Link>
        </div>
      </div>

      {/* Кнопка */}
      <div className="flex h-[150px] justify-end items-center w-[280px]">
        <div className="flex items-end w-[200px] h-[55px]">
          <img
            src="/img/button.svg"
            alt="Button"
            className="h-[100px] w-[300px]"
          />
        </div>
      </div>
    </div>
        </div>
    )
}