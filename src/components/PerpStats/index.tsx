import { ArrowDropDownIcon, BitcoinIcon, SettingIcon } from "../Icons/icon";

const PerpStats = () => {
  return (
    <div className="h-14 flex  items-center border-l-0 justify-between  border-y-[#FFFFFF0D] bg ">
      <div className="flex items-center h-full">
        <div className="flex gap-5 h-full px-4  border border-[#FFFFFF0D] items-center">
          <div className="flex gap-3 items-center">
            <BitcoinIcon />
            <p className="font-semibold text-lg text-white">BTC-PERP</p>
          </div>
          <span className="scale-150">
            <ArrowDropDownIcon />
          </span>
        </div>
        <div className="flex gap-2.5 px-8   items-center">
          <p className="text-lg  text-filament-text-success font-medium">
            $225.62
          </p>
          <p className="text-filament-text-secondary font-medium text-sm">
            $224.89
          </p>
        </div>
        <p className="bg-red-400 h-[70%] border-[0.5px] border-gray-800"></p>
        <div className="flex gap-4  h-full px-4   items-center   justify-center ">
          <div className=" flex flex-col px-4 justify-center">
            <p className="text-xs  text-filament-text-secondary font-light">
              24h change
            </p>
            <div className="text-filament-text-success gap-2 font-medium items-center  flex text-sm">
              <p>+0.81%</p>
              <p>+1.65</p>
            </div>
          </div>

          <div className=" flex flex-col px-4 justify-center">
            <p className="text-xs  text-filament-text-secondary font-light">
              24h change
            </p>
            <div className="text-white gap-2 font-medium items-center  flex text-sm">
              <p>$24,363,353</p>
            </div>
          </div>
          <div className=" flex flex-col px-4 justify-center">
            <p className="text-xs font-light text-filament-text-secondary">
              Open Interest
            </p>
            <div className="text-white gap-2  font-medium items-center  flex text-sm">
              <p>$228.48</p>
            </div>
          </div>
          <div className=" flex flex-col px-4 justify-center">
            <p className="text-xs  text-filament-text-secondary font-light">
              Market Cap
            </p>
            <div className="text-white gap-2  font-medium items-center  flex text-sm">
              <p>$3,044,363,353</p>
            </div>
          </div>
          <p className="bg-red-400 h-[70%] border-[0.5px] border-gray-800"></p>
          <div className=" flex flex-col px-3 justify-center">
            <p className="text-xs  text-filament-text-secondary font-light">
              Funding Rate
            </p>
            <div className="text-white gap-2  font-medium items-center  flex text-sm">
              <p>80.47%</p>
            </div>
          </div>
          <div className=" flex flex-col px-3 justify-center">
            <p className="text-xs  text-filament-text-secondary font-light">
              Borrowing Rate
            </p>
            <div className="text-white gap-2  font-medium items-center  flex text-sm">
              <p>80.47%</p>
            </div>
          </div>
        </div>
      </div>
      <button className="flex mr-8 border border-[#FFFFFF14] bg-[#FFFFFF14] px-3 rounded-md py-3 items-center justify-center">
        <span className="scale-125">
          <SettingIcon />
        </span>
      </button>
    </div>
  );
};

export default PerpStats;
