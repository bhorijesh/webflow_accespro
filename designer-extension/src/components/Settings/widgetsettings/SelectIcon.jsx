import React from "react";
import PreviewIcon from "../../icons/PreviewIcon";

const SelectIcon = ({ selectedIcon, handleChange }) => {
  const onSelectIcon = (icon) => {
    handleChange("icon", icon);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="text-darkBlue font-semibold">Icon</div>
      <div className="grid grid-cols-3 xl:grid-cols-6 gap-4">
        <IconOption
          icon={"default"}
          active={selectedIcon === "default"}
          onSelectIcon={onSelectIcon}
        />
        <IconOption
          icon={"wheelchair"}
          label={"Center Left"}
          onSelectIcon={onSelectIcon}
          active={selectedIcon === "wheelchair"}
        />
        <IconOption
          icon={"blind"}
          label={"Top Right"}
          onSelectIcon={onSelectIcon}
          active={selectedIcon === "blind"}
        />
        <IconOption
          icon={"eye"}
          label={"Bottom Left"}
          onSelectIcon={onSelectIcon}
          active={selectedIcon === "eye"}
        />
        <IconOption
          icon={"accStraight"}
          label={"Center Right"}
          onSelectIcon={onSelectIcon}
          active={selectedIcon === "accStraight"}
        />
        <IconOption
          icon={"settings"}
          label={"Bottom Right"}
          onSelectIcon={onSelectIcon}
          active={selectedIcon === "settings"}
        />
      </div>
    </div>
  );
};

export default SelectIcon;

const IconOption = ({ icon, label, active, onSelectIcon }) => {
  return (
    <div
      role="button"
      aria-label={`Select ${label} icon`}
      onClick={() => onSelectIcon(icon)}
      className={`py-6 border border-brandingGray rounded-md flex flex-col gap-4 items-center w-full ${active ? "bg-darkBlue" : ""
        }`}
    >
      <div className="size-16">
        <PreviewIcon name={icon} fill={active ? "#ffffff" : "gray"} />
      </div>
    </div>
  );
};
