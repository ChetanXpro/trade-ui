import React from "react";

interface CollateralInputProps {
  type: string;
  onChange: any;
  value: any;
  token: string;
  inputType: string;
}

const CollateralInput = ({
  type,
  onChange,
  value,
  token,
  inputType,
}: CollateralInputProps) => {
  return (
    <div className="flex items-center rounded-md bg-white border p-2">
      <span className=" text-[#6B7280] text-sm font-medium">{type}</span>
      <div className="flex  items-end justify-end  w-full ">
        <input
          type={inputType}
          onChange={onChange}
          className="border-none  text-right mr-2 appearance-none    focus:outline-none"
          placeholder=""
          value={value}
        />
        <span className="text-[#6B7280] mr-1 text-end  text-base ">
          {token}
        </span>
      </div>
    </div>
  );
};

export default CollateralInput;
