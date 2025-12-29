import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center mt-12">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="w-[280px] h-[360px] bg-gray-200 animate-pulse rounded-lg">
          <div className="h-[200px] bg-gray-300 rounded-t-lg"></div>
          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-6 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
