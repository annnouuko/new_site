export default function One_Text_1() {
  return (
    <div className="h-auto md:h-[650px] w-full">
      <div className="flex flex-col md:flex-row h-auto md:h-[650px] m-4 md:m-6 gap-6 md:gap-0">

        {/* Заголовок */}
        <div className="w-full md:w-[800px] h-auto md:h-[70px]">
          <div className="text-[32px] md:text-[65px] text-black">PROJECT OVERVIEW</div>
        </div>

        {/* Контент */}
        <div className="flex flex-col md:flex-col items-start md:items-center h-auto md:h-[650px] w-full md:w-[900px] gap-6 md:gap-[3rem]">
          
          {/* Блоки текста */}
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="flex flex-col justify-start items-start h-auto md:h-[160px] w-full md:w-[600px]">
              <div className="text-black text-[16px] md:text-[20px] mb-2">TRANSPARENCY</div>
              <div className="text-black text-[14px] md:text-[20px] leading-relaxed">
                VOLUME CG is a creative studio. Our studio is a team
                of the finest creative and technical minds.
                We create CGI, VFX, 2D&3D animations and etc.
                We are an ambitious team creating amazing stories.
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
