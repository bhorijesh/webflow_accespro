import React from "react";
import ColorPickerPopover from "../../common/ColorPicker";

const ColorOptions = ({ headerBg, headerText, contentText, handleChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ColorPickerPopover
        label="Header Background"
        value={headerBg}
        onChange={(color) =>
          handleChange("menu_header_background_color", color)
        }
      />

      <ColorPickerPopover
        label="Header Text"
        value={headerText}
        onChange={(color) => handleChange("menu_header_font_color", color)}
      />

      <ColorPickerPopover
        label="Content Text"
        value={contentText}
        onChange={(color) => handleChange("menu_content_color", color)}
      />
    </div>
  );
};

export default ColorOptions;
