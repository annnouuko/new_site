export default function Button1_mobile(){
  return(
    <div className="flex justify-center md:justify-end items-center w-full md:w-[280px] h-[80px] md:h-[150px]">
  <div className="relative w-[140px] md:w-[200px] h-[80px] md:h-[55px] flex justify-center items-center">
    <img
      src={pressed ? "/img/button2_mobile.png" : "/img/button1_mobile.png"}
      alt="Button"
      className="w-full h-auto cursor-pointer transition-all duration-150"
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => {
        setPressed(false);
        setIsOpen(true);
      }}
      onMouseLeave={() => setPressed(false)}
    />
  </div>
</div>
  )
}