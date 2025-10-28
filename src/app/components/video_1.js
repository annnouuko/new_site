import Button_mobile from "./button_mobile";

export default function Video_1() {
  return (
    <div className="flex flex-col justify-center w-[430px] md:w-[1500px] m-6">
      {/* Видео блок */}
      <div className="w-[430px] md:w-full h-[250px] md:h-[800px] mt-7 bg-slate-500">
        {/* сюда можно вставить <video> или <img> */}
      </div>

      {/* Кнопка только для мобильной версии */}
      <div className="md:hidden mt-2  ml-1 flex justify-center">
        <Button_mobile />
      </div>
    </div>
  );
}
