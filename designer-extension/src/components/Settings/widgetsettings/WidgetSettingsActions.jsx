import React from "react";
import Button from "../../common/Button";

const WidgetSettingsActions = ({ saveSettings, loading }) => {
  return (
    <div className="flex justify-end items-center gap-4">
      <Button
        variant={"secondary"}
        size={"small"}
        className={"w-24"}
        onClick={saveSettings}
        loading={loading}
      >
        Save
      </Button>
      <Button
        variant={"secondary"}
        size={"small"}
        className={"w-24 bg-gray-300 hover:bg-gray-400"}
      >
        Cancel
      </Button>
    </div>
  );
};

export default WidgetSettingsActions;
