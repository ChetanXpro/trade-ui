import React, { useState } from "react";

const LeverageSlider = ({
  setLeverage,
  leverage,
}: {
  setLeverage: any;
  leverage: number;
}) => {
  //   const [leverage, setLeverage] = useState(10);

  const handleChange = (event: any) => {
    setLeverage(event.target.value);
  };

  return (
    <div className="flex flex-col  items-center">
      <div className="relative  w-full">
        <div className="relative z-10 ">
          <input
            type="range"
            min="2"
            max="20"
            step="1"
            value={leverage}
            onChange={handleChange}
            className="w-full  appearance-none slider"
          />
          <div className="flex absolute z-0 w-full pr-2 top-[18px] justify-between h-full text-xs font-medium text-[#25272A]">
            <span className="text-xs ml-2">|</span>
            <span className="text-xs ml-9">|</span>
            <span className="text-xs  ">|</span>
            <span className="text-xs">|</span>
          </div>
        </div>
        <div className="flex justify-between text-xs  font-medium text-[#4B5563] mt-3">
          <span className="text-xs ml-1">2x</span>
          <span className="text-xs ml-12">10x</span>
          <span className="text-xs clear-start ml-1">15x</span>
          <span className="text-xs">20x</span>
        </div>
      </div>
    </div>
  );
};

export default LeverageSlider;
