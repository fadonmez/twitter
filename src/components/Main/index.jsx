"use client";
import { useContext } from "react";
import Header from "./Header";
import Share from "./Share";
import Posts from "./Posts";

import { DataContextProvider } from "@/app/context/data";

const MainFlow = () => {
  return (
    <DataContextProvider>
      <div className="relative flex flex-col items-start justify-start flex-1 border-x border-[#2f3336] ">
        <Header />
        <Share />
        <Posts />
      </div>
    </DataContextProvider>
  );
};

export default MainFlow;
