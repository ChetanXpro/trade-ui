import { ChevronUpIcon } from "../Icons/icon";

const Footer = () => {
  return (
    <div className="w-full border items-center border-[#25272A] flex justify-between px-6 footer-bg">
      <div className="flex  items-center  gap-6">
        <div className="flex items-center gap-1">
          <p className="bg-filament-text-success h-1.5 w-1.5 rounded-full"></p>{" "}
          <span className="text-filament-text-success text-[11px] font-medium">
            Operational
          </span>
        </div>
        <p className=" h-[90%] text-[#25272A]">|</p>
        <div className="flex items-center gap-1">
          <ChevronUpIcon />
          <p className="text-[11px] font-medium text-filament-text-secondary">
            Scheduled Update
          </p>
        </div>
      </div>
      <div className="text-filament-text-secondary text-[11px] font-medium flex gap-5 items-center">
        <p>Help</p>
        <p>Docs</p>
        <p>Share Feedback</p>
      </div>
    </div>
  );
};

export default Footer;
