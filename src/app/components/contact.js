// components/LeftContactBlock.tsx
import React from "react";

export default function LeftContactBlock() {
  return (
    <div className="bg-[#1b1e1f] text-white flex flex-col justify-between p-12 min-h-screen w-full md:w-1/2">
      {/* Верхняя часть */}
      <div>
        <a href="#" className="text-sm tracking-wide underline">
          VOLUME CG
        </a>

        <h1 className="mt-12 text-2xl  md:text-4xl font-bold leading-snug">
          WE ARE ALWAYS HAPPY
          <br />
          TO DISCUSS YOUR FURIOUS
          <br />
          PROJECT OR COLLABORATE WITH A
          <br />
          NEW PROMISING SPECIALISTS.
        </h1>
      </div>

      {/* Нижняя часть */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm mt-16">
        {/* Office */}
        <div>
          <h3 className="uppercase text-gray-400 text-xs mb-2">Office</h3>
          <p>
            Carrer D’en Bosch
            <br />
            25, 07500 Manacor
            <br />
            Illes Balears, España
          </p>
          <p className="mt-4">
            +34 695 935 848
            <br />
            <a href="mailto:work@volumecg.com" className="underline">
              work@volumecg.com
            </a>
          </p>
        </div>

        {/* Contact for ongoing projects */}
        <div>
          <h3 className="uppercase text-gray-400 text-xs mb-2">
            Contact for ongoing projects
          </h3>
          <p>
            Julia Fonarkova
            <br />
            <a href="mailto:work@volumecg.com" className="underline">
              work@volumecg.com
            </a>
          </p>
        </div>

        {/* Join our team */}
        <div>
          <h3 className="uppercase text-gray-400 text-xs mb-2">
            We are always looking for talented people to join our team
          </h3>
          <p>
            Julia Fonarkova
            <br />
            <a href="mailto:work@volumecg.com" className="underline">
              work@volumecg.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
