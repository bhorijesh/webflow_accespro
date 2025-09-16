import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

const Popover = ({
  isOpen,
  onClose,
  children,
  size = "large",
  adaptHeight = false,
  title,
  onBackAction,
  zIndex = 10,
}) => {
  // close the popover in esc key press
  React.useEffect(() => {
    const closePopover = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", closePopover);
    return () => {
      document.removeEventListener("keydown", closePopover);
    };
  }, [onClose]);

  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } fixed top-0 left-0 w-screen flex-col items-center justify-center h-screen z-[9]  bg-black/20 backdrop-blur-[2px]`}
      style={{ zIndex: zIndex }}
    >
      <div
        className={`${
          !adaptHeight && "h-full"
        } w-full ml-auto mt-auto lg:mt-0 bg-white shadow-lg relative overflow-y-auto  ${
          size === "small"
            ? "max-w-[800px] max-h-[800px] mx-auto rounded-lg"
            : size === "extrasmall"
            ? "max-w-[800px] max-h-[90%] mx-auto rounded-lg"
            : "max-w-ful lg:max-w-[90%]"
        }`}
        style={{ zIndex: zIndex }}
      >
        <div
          className="flex justify-between items-center sticky top-0 px-4 py-4 xl:p-6 bg-white"
          style={{ zIndex: zIndex * 999999 }}
        >
          <div className="flex gap-2 lg:gap-4 items-center">
            {onBackAction && (
              <button
                className="size-8 bg-darkPurple/20 rounded-full flex items-center justify-center mt-1"
                onClick={onBackAction}
              >
                <ArrowLeftIcon className="h-5 w-5 fill-darkPurple" />
              </button>
            )}
            <h4 className="h2 font-bold text-darkBlue">{title}</h4>
          </div>
          <button
            className=" right-4 top-4 size-8 flex flex-col items-center justify-center bg-darkBlue rounded-full"
            onClick={onClose}
            role="button"
            aria-label="Close Popover"
          >
            <XMarkIcon className="h-5 w-5 fill-white" />
          </button>
        </div>
        <div className="h-full py-3 px-4 xl:px-6 ">{children}</div>
      </div>
    </div>
  );
};

export default Popover;
