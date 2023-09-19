import React from "react";

const Trend = ({ trend }) => {
  return (
    <div className="flex items-center justify-between py-10 px-5 hover:bg-gray-800 h-[70px] transition-colors cursor-pointer">
      <div className="flex flex-col justify-center gap-y-0.5">
        <span className="text-xs font-light">
          <span>{trend.category}</span> - Trending
        </span>
        <span className="font-bold ">{trend.title}</span>
        {trend.postCount && (
          <span className="text-xs text-gray-400">{trend.postCount} Posts</span>
        )}
      </div>
    </div>
  );
};

export default Trend;
