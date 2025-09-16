import React from "react";

const Button = ({
  variant,
  size,
  onClick,
  children,
  className,
  disabled = false,
  loading = false, // Add loading prop
}) => {
  const buttonClasses =
    variant === "outline"
      ? "border-2 border-darkBlue text-darkBlue hover:border-brandingYellow hover:text-brandingYellow"
      : variant === "secondary"
      ? "bg-brandingYellow text-darkBlue hover:bg-darkBlue hover:text-white"
      : "bg-darkBlue text-white hover:bg-brandingYellow hover:text-darkBlue";

  const buttonSizeClasses =
    size === "small"
      ? "px-4 py-2"
      : size === "large"
      ? "px-8 py-4 xl:px-12 xl:py-4 h3"
      : "px-6 xl:px-12 py-3 xl:py-3 ";

  return (
    <button
      disabled={disabled || loading}
      className={`relative flex items-center justify-center transition-all ease-in-out duration-300 ${buttonClasses} ${buttonSizeClasses} rounded-full font-semibold cursor-pointer ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
      onClick={onClick}
    >
      {
        loading && (
          <div className="absolute spinner-border animate-spin inline-block mx-auto size-5 border-2 border-t-transparent rounded-full"></div>
        ) // Loading spinner
      }
      <div className={`flex flex-col ${loading && "invisible"}`}>
        {children}
      </div>
    </button>
  );
};

export default Button;
