import React, { useEffect, useState } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { SketchPicker } from "react-color"; // Importing react-color's SketchPicker

const ColorPickerPopover = ({ label, value, onChange, type = "fill" }) => {
  const [color, setColor] = useState(`${value}`);

  // Handle color changes from the SketchPicker
  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
    onChange(newColor.hex);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-darkBlue font-semibold">{label}</div>
      <Popover className="relative">
        <PopoverButton className="w-full focus:outline-none">
          {/* Input field with prefix, clicking it opens the Popover */}
          <div className="flex items-center border-2 border-[#DAE6EE] rounded-2xl transition-all ease-in-out duration-200 focus-within:border-lightBlue cursor-pointer">
            <span className="pl-4 pr-1 py-2 lg:py-3 bg-brandingGray-100 text-brandingGray-600 rounded-l-2xl bg-[#F8FCFF] text-brandingGray">
              #
            </span>
            <input
              type="text"
              value={color.replace("#", "")}
              onChange={(e) => handleColorChange({ hex: `#${e.target.value}` })}
              className="w-full py-2 lg:py-3 px-4 lg:px-5 focus:outline-none placeholder:text-brandingGray pl-1 lg:pl-2 rounded-r-none cursor-pointer"
              readOnly
            />
            <div className="flex items-center justify-center pr-3">
              <div
                className={`rounded-full cursor-pointer ${
                  type === "stroke"
                    ? "bg-transparent size-6 border-[6px]"
                    : "size-6"
                }`}
                style={
                  type === "stroke"
                    ? { borderColor: color }
                    : { backgroundColor: color }
                }
              />
            </div>
          </div>
        </PopoverButton>

        <PopoverPanel className="absolute z-[9999999] mt-2">
          {/* Color Picker Component */}
          <div className="shadow-lg rounded-lg p-4 bg-white">
            <SketchPicker
              color={color}
              onChangeComplete={handleColorChange}
              disableAlpha
            />
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  );
};

export default ColorPickerPopover;
