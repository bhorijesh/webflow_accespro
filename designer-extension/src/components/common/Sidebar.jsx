import React from "react";
import accessProImage from "../../assets/images/accesspro.png";
import { Link } from "react-router-dom";
import { ACCESSPRO_LOGO_URL } from "../../constants/variables";

const Sidebar = ({ children, type = "signup" }) => {
  if (type === "account") {
    return (
      <div className="flex flex-col h-full gap-6 lg:gap-12 max-w-sm w-full py-8 lg:py-12   px-3 lg:px-8 border-r-2 border-lightBlue sticky top-0 md:w-sm">
        <Link to="/" className="h-12">
          <img
            src={ACCESSPRO_LOGO_URL}
            alt="AccessPro"
            className="h-12 w-auto object-contain lg:w-"
          />
        </Link>
        {children}
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-col lg:h-full gap-6 lg:gap-12 max-w-full lg:max-w-sm w-full py-4 lg:py-12 px-3 lg:px-8 border-b-2 lg:border-b-0 lg:border-r-2 border-lightBlue lg:sticky lg:top-0 lg:w-sm">
      <Link to="/" className="h-12 flex justify-center lg:justify-start">
        <img
          src={ACCESSPRO_LOGO_URL}
          alt="AccessPro"
          className="h-12 w-auto object-contain"
        />
      </Link>
      <div className="flex lg:flex-col justify-center lg:justify-start">
        {children}
      </div>
    </div>
  );
};

export default Sidebar;