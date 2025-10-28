export default function Team() {
  return (
    <div className="w-full h-auto md:h-[1440px]">
      <div className="flex flex-col h-auto md:h-[1000px] m-4 md:m-6 gap-[2rem] md:gap-[3rem]">

        {/* Заголовок */}
        <div className="flex flex-col md:flex-row h-auto md:h-[80px] w-full gap-[0.5rem] md:gap-[1rem]">
          <div className="text-[#9D9D9D] text-[32px] md:text-[65px] leading-none">VOLUME CG</div>
          <div className="text-black text-[32px] md:text-[65px] leading-none">VALUES</div>
        </div>

        {/* Контент */}
        <div className="flex flex-col h-auto md:h-[1000px] gap-[3rem] md:gap-[8rem]">
          
          {/* Первая строка */}
          <div className="flex flex-col md:flex-row h-auto md:h-[550px] gap-[1.5rem] md:gap-[2rem]">
            {Array(3).fill(0).map((_, i) => (
              <div key={i} className="flex flex-col w-full md:w-[500px]">
                <div className="h-[300px] md:h-[460px] bg-slate-500"></div>
                <div className="flex flex-col justify-start mt-2 md:mt-4">
                  <div className="text-black text-[18px] md:text-[25px] leading-tight">
                    VLAD PASHKEVICH
                  </div>
                  <div className="text-black text-[14px] md:text-[16px]">
                    ETO
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Вторая строка */}
          <div className="flex flex-col md:flex-row h-auto md:h-[550px] gap-[1.5rem] md:gap-[2rem]">
            {Array(3).fill(0).map((_, i) => (
              <div key={i} className="flex flex-col w-full md:w-[500px]">
                <div className="h-[300px] md:h-[460px] bg-slate-500"></div>
                <div className="flex flex-col justify-start mt-2 md:mt-4">
                  <div className="text-black text-[18px] md:text-[25px] leading-tight">
                    VLAD PASHKEVICH
                  </div>
                  <div className="text-black text-[14px] md:text-[16px]">
                    ETO
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
