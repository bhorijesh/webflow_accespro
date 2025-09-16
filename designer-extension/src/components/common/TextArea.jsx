import React from "react";

const TextArea = ({
  label,
  placeholder,
  value,
  onChange,
  name,
  error,
  rows = 4,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <div className="text-darkBlue font-light">{label}</div>}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        rows={rows}
        className={`w-full py-2 lg:py-3 px-4 lg:px-5 focus:outline-brandingBlue/30 placeholder:text-brandingGray rounded-2xl border-2 border-[#DAE6EE] transition-all ease-in-out duration-200 focus-within:border-lightBlue`}
      />

      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default TextArea;
