import React from "react";

const ToggleButton = ({
  label,
  value,
  onChange,
  enabled,
  disabled,
  className,
}) => {
    const handleClick = () => {
      if (!disabled && onChange) {
        onChange(!enabled); // pass the toggled value
      }
    };

  return (
    <div
      className="flex items-center"
      role="button"
      aria-label="Toggle button"
      onClick={onChange}
    >
      <div className="sr-only">
        {enabled ? `Disable ${label}` : `Enable ${label}`}
      </div>
      <div
        className={`${
          enabled ? "bg-brandingBlue" : "bg-brandingGray"
        } w-14 rounded-full flex items-center p-1 ${
          enabled ? "justify-end" : "justify-start"
        }`}
      >
        <div className="bg-white size-5 rounded-full"></div>
      </div>
    </div>
  );
};

export default ToggleButton;
