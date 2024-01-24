import React from "react";
import { ArrowDropDownIcon, Logo, TetherIcon } from "../icons/icon";

const Navbar = () => {
  return (
    <div className="flex py-4 px-6 bg-filament-card-bg justify-between ">
      <div className="flex gap-10 items-center">
        <div className="flex gap-2">
          <Logo />
          <p className="text-filament-text-brand text-[15px]">FILAMENT</p>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex gap-10">
            <a href="" className="text-white text-xs font-bold">
              Trade
            </a>
            <a href="" className="text-[#ffffffcc] text-xs font-medium">
              Pool
            </a>
            <a href="" className="text-[#ffffffcc] text-xs font-medium">
              Stake
            </a>
            <a href="" className="text-[#ffffffcc] text-xs font-medium">
              Referral
            </a>
            <a href="" className="text-[#ffffffcc] text-xs font-medium">
              Leaderboard
            </a>
          </div>
          <p className="text-gray-800">|</p>
          <div className="flex gap-5 ml-2">
            <a href="" className="text-[#ffffffcc] text-xs font-medium">
              Portfolio
            </a>
            <a
              href=""
              className="text-[#ffffffcc] flex  items-center gap-1 text-xs font-medium"
            >
              More
              <ArrowDropDownIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <div>
          <button className="bg-gradient flex items-center gap-2 rounded-md py-2 px-2 text-sm font-semibold text-filament-text-brand border border-[#40e0d033]">
            <TetherIcon />
            Earn 62% APR on USDT
          </button>
        </div>
        <p className="bg-red-400 h-[90%] border border-gray-600"></p>
        <div className="">
          <button className="bg-[#40E0D0] py-[7px] rounded-md text-white px-6 ">
            Connect Wallet
          </button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
