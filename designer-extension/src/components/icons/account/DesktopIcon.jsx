import React from "react";

const DesktopIcon = ({ fill = "#A5A5A5" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="64"
      viewBox="0 0 72 64"
      fill="none"
    >
      <path
        d="M66 0C69.25 0 72 2.75 72 6V46C72 49.375 69.25 52 66 52H40L42 58H53C54.625 58 56 59.375 56 61C56 62.75 54.625 64 53 64H19C17.25 64 16 62.75 16 61C16 59.375 17.25 58 19 58H30L32 52H6C2.625 52 0 49.375 0 46V6C0 2.75 2.625 0 6 0H66ZM65 48C66.6569 48 68 46.6569 68 45V7C68 5.34315 66.6569 4 65 4H7C5.34315 4 4 5.34315 4 7V45C4 46.6569 5.34315 48 7 48H36H65Z"
        fill={fill}
      />
    </svg>
  );
};

export default DesktopIcon;
