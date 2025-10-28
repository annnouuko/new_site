export default function One_1() {
  return (
    <div className="h-auto w-full">
      <div className="m-4 md:m-6">
        <div className="flex flex-col gap-6">

          {/* Блоки */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-[2rem]">
            <div className="flex justify-center items-center h-[300px] md:h-[500px] w-full md:w-[750px] bg-slate-500"></div>
            <div className="flex justify-center items-center h-[300px] md:h-[500px] w-full md:w-[750px] bg-slate-500"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-[2rem]">
            <div className="flex justify-center items-center h-[300px] md:h-[500px] w-full md:w-[450px] bg-slate-500"></div>
            <div className="flex justify-center items-center h-[300px] md:h-[500px] w-full md:w-[1015px] bg-slate-500"></div>
          </div>

          {/* Текст */}
          <div className="flex h-auto">
            <div className="text-black text-[16px] md:text-[26px] w-full md:w-[650px]">
              VOLUME CG is a creative studio. Our studio is a team
              of the finest creative and technical minds.
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
