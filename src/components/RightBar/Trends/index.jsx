"use client";
import React from "react";
import Trend from "./Trend";
import { useDataContext } from "@/app/context/data";

const Trends = () => {
  const { trends } = useDataContext();

  return (
    <aside className="bg-[#16181c] rounded-xl py-3 flex flex-col ">
      <h1 className="px-5 mb-5 text-xl font-bold">
        İlgini çekebilecek gündemler
      </h1>
      {trends.map((trend, index) => {
        return <Trend key={index} trend={trend} />;
      })}
    </aside>
  );
};

export default Trends;
