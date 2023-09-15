"use client";
import { useState } from "react";

const Header = () => {
  const [mode, setMode] = useState("you");
  return (
    <div className="sticky top-0 left-0 w-full border-b border-[#2f3336] px-4 pt-3 backdrop-blur-md flex flex-col gap-y-8  ">
      <h2 className="text-xl font-semibold text-white">Anasayfa</h2>
      <div className="flex ">
        <button
          onClick={() => {
            setMode("you");
          }}
          className="flex-1 "
        >
          <div
            className={`${
              mode === "you"
                ? "border-b-4 border-blue-500 text-white font-semibold"
                : "font-base text-gray-500 border-none"
            }  text-sm py-2`}
          >
            <h4 className="text-sm font-semibold">Sana Özel</h4>
          </div>
        </button>
        <button
          onClick={() => {
            setMode("follow");
          }}
          className="flex-1 "
        >
          <div>
            <h4
              className={`${
                mode === "follow"
                  ? "border-b-4 border-blue-500 text-white font-semibold"
                  : "font-base text-gray-500 border-none"
              }  text-sm py-2`}
            >
              Takip Edilenler
            </h4>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
