import React from "react";
import DesktopIcon from "../../icons/account/DesktopIcon";
import InputField from "../../common/InputField";

const IconPosition = ({ selectedPosition, padding, handleChange }) => {
  const onSelectPosition = (position) => {
    handleChange("icon_position", position);
  };

  const onPaddingChange = (key, value) => {
    const newValue = { ...padding, [key]: value + "px" };
    handleChange("padding", newValue);
  };

  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <div className="text-darkBlue font-semibold">Icon Position</div>
      <div className="grid grid-cols-3 xl:grid-cols-6 gap-4">
        <IconOption
          position={"TL"}
          label={"Top Left"}
          active={selectedPosition === "TL"}
          onSelectPosition={onSelectPosition}
        />
        <IconOption
          position={"CL"}
          label={"Center Left"}
          onSelectPosition={onSelectPosition}
          active={selectedPosition === "CL"}
        />
        <IconOption
          position={"TR"}
          label={"Top Right"}
          onSelectPosition={onSelectPosition}
          active={selectedPosition === "TR"}
        />
        <IconOption
          position={"BL"}
          label={"Bottom Left"}
          onSelectPosition={onSelectPosition}
          active={selectedPosition === "BL"}
        />
        <IconOption
          position={"CR"}
          label={"Center Right"}
          onSelectPosition={onSelectPosition}
          active={selectedPosition === "CR"}
        />
        <IconOption
          position={"BR"}
          label={"Bottom Right"}
          onSelectPosition={onSelectPosition}
          active={selectedPosition === "BR"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {["TL", "TR"].includes(selectedPosition) && (
          <div className="flex flex-col gap-2">
            <span className="text-darkBlue">Padding from top</span>
            <InputField
              type="number"
              // placeholder="0"
              suffix="px"
              value={padding.top?.replace("px", "")}
              onChange={(e) => onPaddingChange("top", e.target.value)}
            />
          </div>
        )}

        {["TR", "BR", "CR"].includes(selectedPosition) && (
          <div className="flex flex-col gap-2">
            <span className="text-darkBlue">Padding from right</span>
            <InputField
              type="number"
              // placeholder="0"
              suffix="px"
              value={padding.right?.replace("px", "")}
              onChange={(e) => onPaddingChange("right", e.target.value)}
            />
          </div>
        )}

        {["BL", "BR"].includes(selectedPosition) && (
          <div className="flex flex-col gap-2">
            <span className="text-darkBlue">Padding from bottom</span>
            <InputField
              type="number"
              // placeholder="0"
              suffix="px"
              value={padding.bottom?.replace("px", "")}
              onChange={(e) => onPaddingChange("bottom", e.target.value)}
            />
          </div>
        )}

        {["TL", "BL", "CL"].includes(selectedPosition) && (
          <div className="flex flex-col gap-2">
            <span className="text-darkBlue">Padding from left</span>
            <InputField
              type="number"
              // placeholder="0"
              suffix="px"
              value={padding.left?.replace("px", "")}
              onChange={(e) => onPaddingChange("left", e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default IconPosition;

const IconOption = ({ position, label, active, onSelectPosition }) => {
  return (
    <div
      role="button"
      aria-label={`Select ${label} position`}
      onClick={() => onSelectPosition(position)}
      className={`px-6 py-3 border border-brandingGray rounded-md flex flex-col gap-4 items-center w-full ${active ? "bg-darkBlue" : ""
        }`}
    >
      <div className="relative">
        <DesktopIcon fill={active ? "white" : "gray"} />
        <div
          className={`absolute ${active ? "bg-white" : "bg-brandingBlue"
            } size-2 rounded-full ${getPositionStyles(position)}`}
        >
          {" "}
        </div>
      </div>
      <span
        className={`text-center text-sm ${active ? "text-white" : "text-brandingGray"
          }`}
      >
        {label}
      </span>
    </div>
  );
};

const getPositionStyles = (position) => {
  switch (position) {
    case "TL":
      return "top-1.5 left-1.5";
    case "CL":
      return "top-6  left-1.5 ";
    case "TR":
      return "top-1.5 right-1.5";
    case "BL":
      return "bottom-5 left-1.5";
    case "CR":
      return "right-1.5 top-6";
    case "BR":
      return "bottom-5 right-1.5";
    default:
      return "top-1.5 left-1.5";
  }
};
