import React from "react";

const CreditCardInput = ({
  value,
  onChange,
  name,
  error,
  icon,
  label,
  placeholder,
  type = "creditCardNumber",
}) => {
  const [realValue, setRealValue] = React.useState(value);
  const [formattedValue, setFormattedValue] = React.useState(value);

  const formatCreditCard = (value) => {
    let v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    let matches = v.match(/\d{4,16}/g);
    let match = (matches && matches[0]) || "";
    let parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const formatExpiry = (value) => {
    // Remove any non-numeric characters
    let v = value.replace(/\D/g, "");

    // Ensure we only have 4 digits maximum (MMYY)
    if (v.length > 4) {
      v = v.slice(0, 4);
    }

    // Handle month validation (limit to 01-12)
    if (v.length >= 2) {
      let month = parseInt(v.slice(0, 2), 10);
      if (month < 1) {
        month = "01"; // Set to January if less than 01
      } else if (month > 12) {
        month = "12"; // Set to December if greater than 12
      } else {
        month = month.toString().padStart(2, "0"); // Ensure two digits (01-12)
      }
      v = month + v.slice(2);
    }

    // Automatically add the slash after MM
    if (v.length >= 2) {
      v = v.slice(0, 2) + "/" + v.slice(2);
    }

    // check for expiry date in the past
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear() % 100;
    const inputMonth = parseInt(v.slice(0, 2), 10);
    const inputYear = parseInt(v.slice(2), 10);

    return v;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setRealValue(value);
    setFormattedValue(
      type === "creditCardNumber"
        ? formatCreditCard(value)
        : formatExpiry(value)
    );
    onChange(e);
  };

  return (
    <div className="flex flex-col gap-2">
      {label && <div className="text-darkblue font-light">{label}</div>}
      <div className="flex items-center border-2 border-[#DAE6EE] rounded-2xl transition-all ease-in-out duration-200 focus-within:border-lightBlue">
        {icon && <div className="flex items-center pl-2 lg:pl-3">{icon}</div>}
        <input
          type="text"
          placeholder={placeholder}
          value={formattedValue}
          onChange={handleInputChange}
          name={name}
          className={`w-full py-2 lg:py-3 ${
            icon ? "pl-2 pr-4" : "px-4 lg:px-5"
          } focus:outline-none placeholder:text-brandingGray `}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CreditCardInput;
