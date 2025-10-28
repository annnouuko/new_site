import Header from "./header";

export default function MainScreen() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row items-start m-6 gap-[1rem]">
        {/* === КАРТИНКА === */}
        <div className="flex justify-center md:justify-end items-start w-full md:w-[660px] h-[250px] md:h-[700px]">
          <div className="flex items-start justify-end w-full   md:w-[783px] -mt-30 h-[250px] md:h-[699px]">
            <img
              src="img/Frame 34.png"
              alt="Image 22 2"
              className="w-[390px]    md:w-[783px]  h-[370px] md:h-[799px] object-cover"
            />
          </div>
        </div>

        {/* === ПРАВЫЙ БЛОК === */}
        <div className="flex flex-col w-full md:w-[825px] gap-[1rem] h-auto md:h-[900px]">
          {/* Видео + Контакты */}
          <div className="flex flex-col md:flex-row w-full gap-[1rem] h-auto md:h-[410px]">
            <div className="relative w-full md:w-[600px] aspect-[16/9] md:h-[380px] overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1054442757?autoplay=1&loop=1&title=0&byline=0&portrait=0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Vimeo Video"
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>

            <div className="flex flex-col w-full md:w-[210px] gap-[0.5rem] h-auto md:h-[380px]">
              <div className="flex items-center w-full md:w-[210px] h-[20px] md:h-[40px]">
                <nav className="text-[14px] md:text-[17px] text-[#A3A3A3]">OFFICE</nav>
              </div>
              <div className="flex items-center w-full md:w-[210px] h-[40px] md:h-[80px]">
                <nav className="text-[14px] md:text-[17px] text-[#A3A3A3]">
                  CARRER D'EN BOSCH 25, 07500 MANACOR IllES BALEARS, ESPANA
                </nav>
              </div>
              <div className="flex items-center w-full md:w-[210px] h-[25px] md:h-[44px]">
                <nav className="text-[14px] md:text-[17px] text-black">
                  + (34) 695 935 848 WORK@VOLUMECG.COM
                </nav>
              </div>
            </div>
          </div>

          {/* Описание студии */}
          <div className="flex flex-col md:flex-row w-full gap-[0.5rem] h-auto md:h-[230px] justify-end">
            <div className="flex items-end w-full md:w-[540px] h-auto md:h-[230px]">
              <nav className="text-black text-[16px] md:text-[20px]">
                VOLUME CG IS A CREATIVE STUDIO. OUR STUDIO IS A TEAM OF THE FINEST
                CREATIVE AND TECHNICAL MINDS. WE CREATE CGI, VFX, 2D&3D ANIMATIONS
                AND ETC. WE ARE AN AMBITIOUS TEAM CREATING AMAZING STORIES.
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
