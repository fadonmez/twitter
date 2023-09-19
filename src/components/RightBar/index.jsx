import React from "react";
import Search from "./Search";
import Trends from "./Trends";
import Premium from "./Premium";
import Footer from "./Footer";

const RightBar = () => {
  return (
    <div className="w-[350px] flex flex-col gap-y-3 sticky bottom-0 ">
      <Search />
      <Premium />
      <Trends />
      <Footer />
    </div>
  );
};

export default RightBar;
