"use client";
import { useContext } from "react";
import Header from "./Header";
import Share from "./Share";
import Posts from "./Posts";

const MainFlow = () => {
  return (
    <div className="relative flex flex-col items-start justify-start flex-1 border-x border-[#2f3336] z-0 ">
      <Header />
      <Share />
      <Posts />
    </div>
  );
};

export default MainFlow;
