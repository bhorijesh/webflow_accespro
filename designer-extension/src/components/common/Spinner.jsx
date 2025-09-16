import React from "react";

const Spinner = ({ className = "" }) => {
  return (
    <div
      className={`spinner-border animate-spin inline-block mx-auto size-5 border-2 border-t-transparent rounded-full ${className}`}
    ></div>
  );
};

export default Spinner;
