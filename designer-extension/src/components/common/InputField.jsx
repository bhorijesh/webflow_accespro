import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";

const InputField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  prefix,
  suffix,
  error,
  icon,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-2">
      {label && <div className="text-darkBlue font-light">{label}</div>}
      <div className="flex items-center border-2 border-[#DAE6EE] rounded-2xl transition-all ease-in-out duration-200 focus-within:border-lightBlue">
        {prefix && (
          <span className="pl-4 pr-1 py-2 lg:py-3 bg-brandingGray-100 text-brandingGray-600 rounded-l-2xl bg-[#F8FCFF] text-brandingGray">
            {prefix}
          </span>
        )}
        {icon && <div className="flex items-center pl-2 lg:pl-3">{icon}</div>}
        <input
          type={showPassword && type === "password" ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          className={`w-full py-2 lg:py-3 ${
            icon ? "pl-2 pr-4" : "px-4 lg:px-5"
          } focus:outline-brandingBlue/30 placeholder:text-brandingGray 
                    ${prefix ? "pl-1 lg:pl-2 rounded-r-2xl" : "rounded-2xl"}`}
        />
        {suffix && (
          <span className="pr-4 pl-1 py-2 lg:py-3 bg-brandingGray-100 text-brandingGray-600 rounded-r-2xl bg-[#F8FCFF] text-brandingGray">
            {suffix}
          </span>
        )}
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="px-4 py-2 text-brandingGray focus:outline-brandingBlue/30"
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
