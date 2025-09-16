import React from "react";
import ListBoxComponent from "../../common/ListBoxComponent";
import ColorPickerPopover from "../../common/ColorPicker";

const ICON_STYLE_OPTIONS = [
  {
    label: "Thick Stroke",
    value: "thick",
  },
  {
    label: "Thin Stroke",
    value: "thin",
  },
  {
    label: "Fill",
    value: "solid",
  },
];

const ICON_SIZE_OPTIONS = [
  {
    label: "Small",
    value: "0.5x",
  },
  {
    label: "Medium",
    value: "default",
  },
  {
    label: "Large",
    value: "1.5x",
  },
  {
    label: "Extra Large",
    value: "2x",
  },
];

const BadgeStyle = ({ style, size, fill, stroke, handleChange }) => {
  const handleIconStyleChange = (iconStyle) => {
    handleChange("icon_style", iconStyle);
  };

  const handleIconSizeChange = (iconSize) => {
    handleChange("icon_size", iconSize);
  };

  const handleIconStrokeColorChange = (iconStrokeColor) => {
    handleChange("icon_color_stroke", iconStrokeColor);
  };

  const handleIconFillColorChange = (iconFillColor) => {
    handleChange("icon_color_fill", iconFillColor);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
        <ListBoxComponent
          options={ICON_STYLE_OPTIONS}
          value={style}
          onChange={handleIconStyleChange}
          label="Icon Style"
          zIndex="99999"
        />

        <ListBoxComponent
          options={ICON_SIZE_OPTIONS}
          value={size}
          onChange={handleIconSizeChange}
          label="Icon Size"
          zIndex="99999"
        />

        {/* <ColorPickerPopover
          label={"Stroke Color"}
          value={stroke}
          onChange={handleIconStrokeColorChange}
          type="stroke"
        />
        <ColorPickerPopover
          label={"Fill Color"}
          value={fill}
          onChange={handleIconFillColorChange}
        /> */}
      </div>
    </div>
  );
};

export default BadgeStyle;
