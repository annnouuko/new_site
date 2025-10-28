export default function VolumeCgValues() {
  return (
    <div className="w-full h-auto md:h-[780px] overflow-hidden">
      <div className="flex flex-col md:flex-row h-auto md:h-[1000px] m-4 md:m-6 gap-[2rem] md:gap-0 overflow-hidden">

        {/* Левая колонка */}
        <div className="flex flex-col h-auto md:h-[700px] w-full md:w-[800px] overflow-hidden">
          <div className="flex flex-row -ml-1 md:flex-row h-auto md:h-[80px] w-full md:w-[900px] gap-[0.5rem] md:gap-[1rem]">
            <div className="text-[#9D9D9D] text-[32px] md:text-[65px] leading-none">VOLUME CG</div>
            <div className="text-black text-[32px] md:text-[65px] leading-none">VALUES</div>
          </div>

          <div className="flex flex-col justify-start md:justify-end items-start md:items-center h-auto md:h-[600px] w-full md:w-[900px] mt-4 md:mt-0">
            <div className="flex flex-col justify-start items-start h-auto md:h-[160px] w-full md:w-[600px]">
              <div className="text-black text-[16px] md:text-[20px] mb-2">TRANSPARENCY</div>
              <div className="text-black text-[15px] md:text-[20px] leading-relaxed w-full md:w-[600px]">
                VOLUME CG is a creative studio. Our studio is a team
                of the finest creative and technical minds.
                We create CGI, VFX, 2D&3D animations and etc.
                We are an ambitious team creating amazing stories.
              </div>
            </div>
          </div>
        </div>

        {/* Правая колонка */}
        <div className="flex flex-col items-start md:items-end justify-start md:justify-end h-auto md:h-[750px] w-full md:w-[720px] overflow-hidden md:-mt-[50px]">
          <div className="flex flex-col h-auto md:h-[380px] w-full md:w-[600px] gap-[2rem] md:gap-[5rem]">

            <div className="flex flex-col justify-start items-start md:items-start h-auto md:h-[119px] w-full md:w-[600px]">
              <div className="text-black text-[16px] md:text-[20px] mb-2">TRANSPARENCY</div>
              <div className="text-black text-[15px] md:text-[20px] leading-relaxed w-full md:w-[600px]">
                VOLUME CG is a creative studio. Our studio is a team
                of the finest creative and technical minds.
                We create CGI, VFX, 2D&3D animations and etc.
                We are an ambitious team creating amazing stories.
              </div>
            </div>

            <div className="flex flex-col justify-start items-start md:items-start h-auto md:h-[150px] w-full md:w-[600px]">
              <div className="text-black text-[16px] md:text-[20px] mb-2">TRANSPARENCY</div>
              <div className="text-black text-[15px] md:text-[20px] leading-relaxed w-full md:w-[600px]">
                VOLUME CG is a creative studio. Our studio is a team
                of the finest creative and technical minds.
                We create CGI, VFX, 2D&3D animations and etc.
                We are an ambitious team creating amazing stories.
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
