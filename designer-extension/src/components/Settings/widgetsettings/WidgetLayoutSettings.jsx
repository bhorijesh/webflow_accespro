import React from "react";
import ListBoxComponent from "../../common/ListBoxComponent";
import { WIDGET_MENU_SIZE_OPTIONS, WIDGET_HEIGHT_OPTIONS, LAYOUT_TEMPLATE_OPTIONS } from "../../constants/widgetsettings";
import LANGUAGE_OPTIONS from "../../constants/languages";

const WidgetLayoutSettings = ({ data, handleChange }) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <ListBoxComponent
                    options={WIDGET_MENU_SIZE_OPTIONS}
                    value={data.widget_size === "medium" ? "large" : data.widget_size}
                    onChange={(value) => handleChange("widget_size", value)}
                    label="Widget Size"
                    zIndex="99999"
                />
                <ListBoxComponent
                    options={WIDGET_HEIGHT_OPTIONS}
                    value={data.widgetheight}
                    onChange={(value) => handleChange("widgetheight", value)}
                    label="Widget Height"
                    zIndex="99999"
                />
                <ListBoxComponent
                    options={LAYOUT_TEMPLATE_OPTIONS}
                    value={data.template || "default"}
                    onChange={(value) => handleChange("template", value)}
                    label="Layout Template"
                    zIndex="99999"
                />
                <ListBoxComponent
                    options={LANGUAGE_OPTIONS}
                    value={data.default_menu_language || "en"}
                    onChange={(value) => handleChange("default_menu_language", value)}
                    label="Language"
                    zIndex="99999"
                />
            </div>
        </div>
    );
};

export default WidgetLayoutSettings;
