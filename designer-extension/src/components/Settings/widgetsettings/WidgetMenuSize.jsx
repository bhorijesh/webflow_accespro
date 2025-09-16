import React from "react";
import ListBoxComponent from "../../common/ListBoxComponent";
import { WIDGET_MENU_SIZE_OPTIONS } from "../../../constants/widgetsettings";

const WidgetMenuSize = ({ size, handleChange }) => {
  return (
    <ListBoxComponent
      options={WIDGET_MENU_SIZE_OPTIONS}
      value={size}
      onChange={(value) => handleChange("widget_size", value)}
      label="Widget Size"
      zIndex="99999"
    />
  );
};

export default WidgetMenuSize;
