import React, { useState } from "react";

const CustomCheckbox = ({
  isChecked,

  label,
  handleCheckboxChange,
}: {
  isChecked: boolean;
  handleCheckboxChange: (e: any) => void;
  label: string;
}) => {
  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        id="customCheckbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="hidden"
      />
      <label
        htmlFor="customCheckbox"
        className={`relative cursor-pointer checkbox_input_bg inline-block w-5 h-5 border-2 rounded transition duration-300 ${
          isChecked ? "border-blue-500" : "border-[#363A41] border"
        }`}
      >
        <span
          className={`absolute inset-0 bg-gray-500 rounded transition-opacity ${
            isChecked ? "opacity-100" : "opacity-0"
          }`}
        />
      </label>
      <p className="text-[#E5E7EB] text-xs font-semibold">{label}</p>
    </div>
  );
};

export default CustomCheckbox;
