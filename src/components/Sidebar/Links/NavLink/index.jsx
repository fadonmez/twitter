import React from "react";
import Link from "next/link";

const NavLink = ({ item, isActive }) => {
  return (
    <Link className="group" href={item.link}>
      <div className=" rounded-full pr-5 pl-1 py-3 inline-flex items-center justify-center gap-5 group-hover:bg-[#eef3f41a] ">
        {isActive ? item?.activeSvg : item?.svg}
        <p className={`text-[19px] ${isActive ? "font-bold" : ""}`}>
          {item.name}
        </p>
      </div>
    </Link>
  );
};

export default NavLink;
