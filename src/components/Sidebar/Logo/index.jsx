import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="w-[50px] h-[50px] rounded-full hover:bg-[#eff3f41a] transition-colors inline-flex items-center justify-center cursor-pointer"
    >
      <svg viewBox="0 0 24 24" width={30} height={30} fill="#fff">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    </Link>
  );
};

export default Logo;
