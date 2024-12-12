import React from "react";

const StatsBox = ({ Icon, count, label, bgColor }) => {
  return (
    <div className={`w-[17.5rem] h-[17.5rem] ${bgColor} rounded-full flex flex-col items-center justify-center space-y-4`}>
      <Icon className="text-4xl mb-2 text-white" />
      <h2 className={`text-5xl font-bold font-sansita`}>{count}</h2>
      <p className={`text-2xl pt-2 text-[#ef7a54] font-sansita`}>{label}</p>
    </div>
  );
};

export default StatsBox;
