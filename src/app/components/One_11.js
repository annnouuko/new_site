export default function One_11() {
  return (
    <div className="h-auto w-full">
      <div className="m-4 md:m-6">
        <div className="flex flex-col gap-6">

          {/* Большой верхний блок */}
          <div className="flex h-[300px] md:h-[800px] w-full bg-slate-500"></div>

          {/* Два нижних блока с текстом */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-[2rem]">
            <div className="flex flex-col">
              <div className="flex justify-center items-center h-[300px] md:h-[500px] w-full md:w-[732px] bg-slate-500"></div>
              <div className="text-black text-[16px] md:text-[20px] w-full md:w-[500px] mt-2">
                VOLUME CG is a creative studio. Our studio is a team
                of the finest creative and technical minds.
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex justify-center items-center h-[300px] md:h-[500px] w-full md:w-[732px] bg-slate-500"></div>
              <div className="text-black text-[16px] md:text-[20px] w-full md:w-[500px] mt-2">
                VOLUME CG is a creative studio. Our studio is a team
                of the finest creative and technical minds.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
