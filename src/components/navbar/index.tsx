import React from "react";
import {
  ArrowDropDownIcon,
  Logo,
  NotificationIcon,
  TetherIcon,
} from "../Icons/icon";

const Navbar = () => {
  return (
    <div className="flex py-3.5 px-6 bg-filament-card-bg justify-between ">
      <div className="flex gap-10 items-center">
        <div className="flex gap-2">
          <Logo />
          <p className="text-filament-text-brand text-base">FILAMENT</p>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex gap-10">
            <a href="" className="text-white text-sm font-bold">
              Trade
            </a>
            <a href="" className="text-[#ffffffcc] text-sm font-medium">
              Pool
            </a>
            <a href="" className="text-[#ffffffcc] text-sm font-medium">
              Stake
            </a>
            <a href="" className="text-[#ffffffcc] text-sm font-medium">
              Referral
            </a>
            <a href="" className="text-[#ffffffcc] text-sm font-medium">
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

      <div className="flex gap-6 items-center">
        <div>
          <button className="bg-gradient flex items-center gap-2 rounded-md py-2 px-2 text-sm font-semibold text-filament-text-brand border border-[#40e0d033]">
            <TetherIcon />
            Earn 62% APR on USDT
          </button>
        </div>
        <p className="bg-red-400 h-[90%] border border-gray-600"></p>
        <div className=" flex gap-2 ">
          <button className="bg-[#40E0D0] py-[7px] rounded-md text-white px-6 ">
            Connect Wallet
          </button>
          <button className="flex border border-[#FFFFFF14] bg-[#FFFFFF14] px-3 rounded-md py-2.5 items-center justify-center">
            <span className="scale-125">
              <NotificationIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
