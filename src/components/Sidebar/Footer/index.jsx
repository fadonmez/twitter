import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 mt-auto mb-4 mr-2 rounded-full cursor-pointer hover:bg-[#eef3f41a] transition-colors">
      <img
        className="w-10 h-10 rounded-full"
        src="https://pbs.twimg.com/profile_images/1636465678180818956/lQ8gtLTW_400x400.jpg"
        alt="Rounded avatar"
      ></img>
      <div className="flex flex-col gap-0.5">
        <h1 className="text-sm font-bold">Fatih</h1>
        <p className="text-sm text-gray-500">@fatihdonmezq</p>
      </div>
      <div className="ml-auto">
        <svg viewBox="0 0 24 24" width={20} height={20} fill="#fff">
          <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
        </svg>
      </div>
    </div>
  );
};

export default Footer;
