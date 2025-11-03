export default function One_111() {
  return (
    <div className="h-auto w-full">
      <div className="m-4 md:m-6">
        <div className="flex flex-col gap-4">

          {/* Два блока с контентом */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-[2rem]">
            <div className="flex justify-center items-center h-[300px] md:h-[500px] w-full md:w-[732px] bg-slate-500"></div>
            <div className="flex justify-center items-center h-[300px] md:h-[500px] w-full md:w-[732px] bg-slate-500"></div>
          </div>

          {/* Кнопка */}
          <div className="flex justify-center items-end h-[150px] md:h-[200px]">
            <div className="flex justify-center items-center h-[60px] w-[200px] md:w-[270px] ">
              <img
                src="/img/see_other_projects.svg"
                alt="button"
                className="h-[50px] md:h-[250px] w-[200px] md:w-[270px] object-contain cursor-pointer"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
