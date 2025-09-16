import React from "react";
const IconPreview = ({
  icon_color_stroke,
  icon_color_fill,
  icon_size,
  icon_style = "thick",
  //    handleClick,
}) => {
  const iconSize = ["0.5x", "small"].includes(icon_size)
    ? "30px"
    : ["1x", "default"].includes(icon_size)
    ? "45px"
    : ["1.5x", "large"].includes(icon_size)
    ? "65px"
    : ["2x", "larger"].includes(icon_size)
    ? "90px"
    : "45px";

  const strokeR =
    icon_style === "solid" ? "50" : icon_style === "thick" ? "49" : "49";
  const gapR =
    icon_style === "solid" ? "0" : icon_style === "thick" ? "41" : "43";
  const fillR =
    icon_style === "solid" ? "40" : icon_style === "thick" ? "35" : "40";
  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        height: iconSize,
        width: iconSize,
        zIndex: 9999998,
        cursor: "pointer",
        borderRadius: "50%",
        backgroundColor: "white",
      }}
    >
      <div>
        <svg style={{ height: "100%", width: "100%" }} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={strokeR} fill={icon_color_stroke} />
          <circle cx="50" cy="50" r={gapR} fill="white" />
          <circle cx="50" cy="50" r={fillR} fill={icon_color_fill} />
        </svg>
      </div>

      <div
        style={{
          height: "52%",
          width: "52%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          className="relative"
          style={{ width: "90%", height: "90%" }}
          viewBox="0 0 512 512"
        >
          <path d="M256,112a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,112Z" />
          <path d="M432,112.8l-.45.12h0l-.42.13c-1,.28-2,.58-3,.89-18.61,5.46-108.93,30.92-172.56,30.92-59.13,0-141.28-22-167.56-29.47a73.79,73.79,0,0,0-8-2.58c-19-5-32,14.3-32,31.94,0,17.47,15.7,25.79,31.55,31.76v.28l95.22,29.74c9.73,3.73,12.33,7.54,13.6,10.84,4.13,10.59.83,31.56-.34,38.88l-5.8,45L150.05,477.44q-.15.72-.27,1.47l-.23,1.27h0c-2.32,16.15,9.54,31.82,32,31.82,19.6,0,28.25-13.53,32-31.94h0s28-157.57,42-157.57,42.84,157.57,42.84,157.57h0c3.75,18.41,12.4,31.94,32,31.94,22.52,0,34.38-15.74,32-31.94-.21-1.38-.46-2.74-.76-4.06L329,301.27l-5.79-45c-4.19-26.21-.82-34.87.32-36.9a1.09,1.09,0,0,0,.08-.15c1.08-2,6-6.48,17.48-10.79l89.28-31.21a16.9,16.9,0,0,0,1.62-.52c16-6,32-14.3,32-31.93S451,107.81,432,112.8Z" />
        </svg>
      </div>
    </div>
  );
};

export default IconPreview;
