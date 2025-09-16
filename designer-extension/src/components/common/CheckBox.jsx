import React from "react";

const CheckboxField = ({ label, checked, onChange, name  }) => {
    return (
        <div className="w-fit flex flex-col gap-2">
        <div className="flex items-center gap-3 px-4 py-2 lg:py-3 ">
        {label && (
            <label htmlFor={name} className="text-darkBlue font-light cursor-pointer">
                {label}
            </label>
            )}

            <input
            type="checkbox"
            label
            name={name}
            checked={checked}
            onChange={onChange}
            className="form-checkbox h-6 w-6 border-4 border-[#DAE6EE] rounded-2xl transition-all ease-in-out duration-200 checked:bg-darkPurple checked:border-darkPurple"

            />
            
        </div>

        </div>
    );
};

export default CheckboxField;
