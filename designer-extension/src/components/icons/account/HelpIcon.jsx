import React from "react";

const HelpIcon = ({ fill = "#003D65" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M11 20.9731C16.5228 20.9731 21 16.496 21 10.9731C21 5.4503 16.5228 0.973145 11 0.973145C5.47715 0.973145 1 5.4503 1 10.9731C1 16.496 5.47715 20.9731 11 20.9731Z"
        stroke={fill}
        strokeWidth="1.8"
      />
      <path
        d="M9 7.45714C9.5 6.46714 10 5.97314 11 5.97314C12.246 5.97314 13 6.96214 13 7.95114C13 8.94014 12.5 9.43414 11 10.4241V11.9731M11 15.4731V15.9731"
        stroke={fill}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HelpIcon;
