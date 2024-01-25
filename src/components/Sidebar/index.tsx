import React, { useEffect, useState } from "react";
import CollateralInput from "../Input";
import LeverageSlider from "../Slider";
import CustomCheckbox from "../CustomCheckbox";
import { ChevronUp, HelpCircle } from "../Icons/icon";

const Sidebar = () => {
  const [currentTab, setCurrentTab] = useState<string>("Market");
  const [collateral, setCollateral] = useState<number>(0);
  const [isTakeProfitChecked, setIsTakeProfitChecked] = useState(false);

  const [isStopLossChecked, setIsStopLossChecked] = useState(false);
  const [isReduceOnlyChecked, setIsReduceOnlyChecked] = useState(false);

  const handleCollateralChange = (e: any) => {
    setCollateral(e.target.value);
  };
  const [leverage, setLeverage] = useState<number>(2);
  const handleLeverageChange = (e: any) => {
    setLeverage(e.target.value);
  };

  const handleTakeProfitChange = (e: any) => {
    setIsTakeProfitChecked(e.target.checked);
  };
  const handleStopLossChange = (e: any) => {
    setIsStopLossChecked(e.target.checked);
  };
  const handleReduceOnlyChange = (e: any) => {
    setIsReduceOnlyChecked(e.target.checked);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center border border-[#25272A]  px-4 h-10 justify-between">
        <div className=" h-full flex border border-x-0 border-t-0  border-b-[#FFFFFF] items-center justify-center flex-1">
          <p className="text-[#FFFFFF] text-sm font-semibold">Market</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-[#BABABA] text-sm font-semibold">Limit</p>
        </div>
      </div>
      <div className="px-5 flex flex-col gap-3">
        <div className="">
          <CollateralInput
            inputType="number"
            onChange={handleCollateralChange}
            token="USDC"
            type="Collateral"
            value={collateral}
          />
        </div>
        <div className="flex  justify-between  items-center">
          <div className="flex gap-2 items-center">
            <p className="text-filament-text-secondary text-xs font-normal">
              Available Collateral :
            </p>
            <p className="text-white text-xs font-normal">$500.68</p>
          </div>
          <div className="text-[#FFFFFF] text-sm px-2 py-0.5 tag-bg border border-gray-700 rounded-md">
            Max
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <CollateralInput
            inputType="number"
            onChange={handleLeverageChange}
            token="x"
            type="Leverage"
            value={leverage}
          />
          <LeverageSlider setLeverage={setLeverage} leverage={leverage} />
          <div className="flex mt-3 justify-between  items-center">
            <div className="flex gap-2 items-center">
              <p className="text-filament-text-secondary text-xs font-normal">
                Position Size
              </p>
            </div>
            <p className="text-white text-xs font-normal">0.024 BTC</p>
          </div>
        </div>
        <p className="border-[0.5px] mt-2 border-[#25272A] text-[#25272A]"></p>

        <div className="flex flex-col gap-2 mt-1">
          <CustomCheckbox
            label="Take Profit"
            isChecked={isTakeProfitChecked}
            handleCheckboxChange={handleTakeProfitChange}
          />
          <CustomCheckbox
            label="Stop Loss"
            isChecked={isStopLossChecked}
            handleCheckboxChange={handleStopLossChange}
          />
          <CustomCheckbox
            label="Reduce Only"
            isChecked={isReduceOnlyChecked}
            handleCheckboxChange={handleReduceOnlyChange}
          />
        </div>
        <p className="border-[0.5px] mt-2 border-[#25272A] text-[#25272A]"></p>

        <div className=" flex flex-col gap-1">
          <div className="flex justify-between items-center mb-1">
            <p className="text-white font-semibold text-xs">Summary</p>
            <ChevronUp />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-filament-text-secondary font-normal text-xs">
              Position Size
            </p>
            <p className="text-white text-xs">$2000</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="flex items-center gap-1 text-filament-text-secondary font-normal text-xs">
              Leverage <HelpCircle />
            </p>
            <p className="text-white text-xs">10x</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="flex items-center gap-1 text-filament-text-secondary font-normal text-xs">
              Take Profit <HelpCircle />
            </p>
            <p className="text-white text-xs">25%</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="flex items-center gap-1 text-filament-text-secondary font-normal text-xs">
              Stop Loss <HelpCircle />
            </p>
            <p className="text-white text-xs">50%</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 text-filament-text-secondary font-normal text-xs">
              Slippage Tolerance
              <p className="text-filament-text-brand text-xs font-medium">
                Adjust
              </p>
            </div>
            <p className="text-white text-xs">5%</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="flex  items-center gap-1 text-filament-text-secondary font-normal text-xs">
              Price Impact <HelpCircle />
            </p>
            <p className="text-white text-xs">20%</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center border border-[#25272A]  px-4 py-2 justify-between">
        <button className="bg-[#059669] py-2 w-full rounded-[5px] text-white text-sm font-semibold">
          Buy / Long
        </button>

        <button className="bg-[#C33F3F] w-full py-2 rounded-[5px] text-white text-sm font-semibold">
          Sell / Short
        </button>
      </div>
    </div>
  );
};

export default Sidebar;