import React from "react";

export default function Form2() {
  return (
    <div className="bg-[#e9e9e9] w-full min-h-screen flex flex-col items-center px-10 py-12 overflow-y-auto">
      {/* Заголовок */}
      <div className="w-full max-w-[650px] flex justify-start mb-12">
        <h1 className="text-[42px] font-semibold text-black tracking-tight">
          LET’S TALK
        </h1>
      </div>

      {/* ФОРМА */}
      <div className="w-full max-w-[650px] flex flex-col gap-10 text-sm">
        {/* Name */}
        <div>
          <p className="uppercase text-gray-500 text-xs mb-2">Name</p>
          <div className="bg-white rounded-md border border-gray-200 px-5 py-4">
            AMELIE HARRISON
          </div>
        </div>

        {/* Email */}
        <div>
          <p className="uppercase text-gray-500 text-xs mb-2">Your Email</p>
          <div className="bg-white rounded-md border border-gray-200 px-5 py-4">
            AMELYHARRISON@GMAIL.COM
          </div>
        </div>

        {/* Message */}
        <div>
          <p className="uppercase text-gray-500 text-xs mb-2">
            Tell us about you or your project
          </p>
          <div className="bg-white rounded-md border border-gray-200 px-5 py-4 h-32 leading-relaxed">
            I want to tell you about my unique idea
          </div>
        </div>

        {/* Радио-варианты */}
        <div className="flex flex-rows gap-40 text-gray-500 text-xs uppercase">
          <label className="flex items-center gap-2">
            <div className="w-4 h-4 border border-gray-400 rounded-full" />
            <span>I have a project for you</span>
          </label>
          <label className="flex items-center gap-2">
            <div className="w-4 h-4 border border-gray-400 rounded-full" />
            <span>I am an artist and I want to collaborate</span>
          </label>
        </div>

        {/* Кнопка отправки */}
        <button className="bg-white border border-gray-300 text-black font-semibold py-3 uppercase tracking-wider text-center cursor-pointer hover:bg-gray-100 transition">
          Send Request
        </button>

        {/* Согласие на обработку */}
        <div className="flex items-start gap-2 text-gray-400 text-xs leading-snug">
          <div className="w-4 h-4 border border-gray-400 flex-shrink-0 mt-[2px]" />
          <span>
            I agree to the processing of my personal data in order to process
            the above inquiry.
          </span>
        </div>
      </div>
    </div>
  );
}
