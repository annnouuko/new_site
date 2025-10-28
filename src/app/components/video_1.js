import Button_mobile from "./button_mobile";

export default function Video_1() {
  return (
    <div className="flex flex-col justify-center w-[1500px]">
      {/* Видео блок */}
      <div className="w-full max-w-full mx-3 sm:mx-6 bg-slate-500
                      h-[300px] sm:h-[500px] md:h-[800px] mt-7">
        {/* сюда можно вставить <video> или <img> */}
      </div>
      <div className="md:hidden">
        <Button_mobile/>
      </div>
    </div>
  );
}
