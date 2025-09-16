import React from "react";

import ToggleButton from "../common/ToggleButton";
import { settingsOptions } from "./menuSettingsOptions";

const MenuSettings = ({ settings, onChange }) => {
  // Ensure settings is an object, fallback to empty object if undefined
  const menuSettings = settings || {};

  return (
    <div className="flex flex-col gap-8 lg:gap-10 max-w-screen-2xl mx-auto">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-lightBlue/20 to-blue60/10 rounded-xl p-6 border border-lightBlue/30">
        <h2 className="text-xl font-bold text-darkBlue mb-2">Menu Widget Settings</h2>
        <p className="text-brandingGray leading-relaxed">
          Configure which features are available in your accessibility widget menu. 
          Toggle settings to customize the user experience and ensure optimal accessibility coverage.
        </p>
      </div>

      <WidgetSettingList
        settings={settingsOptions}
        _MenuSettings={menuSettings}
        handleSave={(name) => {
          onChange(name);
        }}
      />
    </div>
  );
};

export default MenuSettings;

// Widget Settings Group
const WidgetSettingList = ({ settings, _MenuSettings, handleSave }) => {
  return (
    <div className="space-y-8">
      {settings.map((item, index) => (
        <div
          className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 overflow-hidden"
          key={`item-${index}`}
        >
          {/* Section Header */}
          <div className="bg-gradient-to-r from-darkBlue/5 to-brandingBlue/5 px-8 py-6 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-custom-gradient rounded-full"></div>
              <div>
                <h3 className="text-lg font-bold text-darkBlue mb-1">{item.title}</h3>
                <p className="text-brandingGray text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>

          {/* Settings Content */}
          <div className="p-8">
            <div className="space-y-6">
              {item?.options &&
                item.options.map((option, optionIndex) => (
                  <React.Fragment key={`option-${index}-${optionIndex}`}>
                    <WidgetSettingListItem
                      key={`item-${index}-${optionIndex}`}
                      _MenuSettings={_MenuSettings}
                      el={option}
                      handleSave={handleSave}
                    />

                    {option.children && _MenuSettings && _MenuSettings[option.name] && (
                      <div className="ml-8 pl-6 border-l-2 border-lightBlue/50 space-y-4 bg-lightBlue/5 rounded-r-lg py-4 pr-4">
                        <div className="text-xs font-medium text-brandingBlue uppercase tracking-wide mb-3">
                          Sub-features
                        </div>
                        {option.children.map((child, childIndex) => (
                          <WidgetSettingListItem 
                            key={`item-${index}-${optionIndex}-${childIndex}`} 
                            _MenuSettings={_MenuSettings} 
                            el={child} 
                            handleSave={handleSave} 
                          />
                        ))}
                      </div>
                    )}
                    
                    {optionIndex < item.options.length - 1 && (
                      <div className="border-b border-gray-100"></div>
                    )}
                  </React.Fragment>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Single widget setting item
const WidgetSettingListItem = ({ _MenuSettings, el, handleSave }) => {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="flex gap-4 items-center">
        {el?.svg && (
          <div className="size-12 flex flex-col items-center justify-center  p-2 rounded-md border border-brandingGray">
            {el.svg}
          </div>
        )}

        <div className="flex flex-col gap-1">
          <h5 className="font-semibold text-darkBlue">{el.title}</h5>
          <span className="text-brandingGray">{el.description}</span>
        </div>
      </div>
      <ToggleButton
        onChange={() => {
          handleSave(el.name);
        }}
        enabled={_MenuSettings && _MenuSettings[el.name] ? _MenuSettings[el.name] : false}
      />
    </div>
  );
};
