import React from "react";
import {
  ArrowDropDownIcon,
  BitcoinIcon,
  SettingIcon,
} from "../../components/Icons/icon";
import PerpStats from "../../components/PerpStats";
import Sidebar from "../../components/Sidebar";

const TokenDetails = () => {
  return (
    <div className=" bg-red-400 h-full w-full  ">
      <PerpStats />
      <div className="flex h-full  w-full ">
        <div className="w-[6rem] bg-filament-card-bg border border-[#25272A] border-r-0 border-b-0"></div>
        <div className="w-full h-full bg-white flex-1   ">
          {/* <div className="w-full flex h-full">
            <div className="bg-red-400 w-full h-full">Chart</div>
            <div className="bg-white w-[25rem] h-full">Orderbook</div>
          </div> */}
        </div>

        <div className="w-[356px] bg-filament-card-bg border border-[#25272A] border-r-0 border-b-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default TokenDetails;
