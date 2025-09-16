import React, { useEffect, useState } from "react";

const RadioButtonsComponent = ({
    options,
    value,
    onChange,
    label,
    labelHidden,
    name,
    disabled = false,
    required = false,
    error,
    className = "",
    inline = true,
}) => {
    const [selected, setSelected] = useState(value);

    const handleSelectionChange = (selectedValue) => {
        setSelected(selectedValue);
        onChange(selectedValue);
    };

    useEffect(() => {
        if (!value && options.length > 0) {
            setSelected(options[0]?.value);
            return;
        }
        setSelected(value);
    }, [value, options]);

    const radioGroupId = `radio-group-${name || 'default'}`;

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && (
                <div
                    className={`text-darkBlue font-semibold text-sm ${labelHidden ? "sr-only" : ""}`}
                    id={`${radioGroupId}-label`}
                >
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </div>
            )}

            <fieldset
                className={`${inline ? 'flex flex-wrap gap-4' : 'space-y-2'}`}
                role="radiogroup"
                aria-labelledby={label ? `${radioGroupId}-label` : undefined}
                aria-describedby={error ? `${radioGroupId}-error` : undefined}
                aria-required={required}
                aria-disabled={disabled}
            >
                {options.map((option, index) => {
                    const optionId = `${radioGroupId}-${option.value}`;
                    const isSelected = selected === option.value;

                    return (
                        <div key={option.value} className="flex items-center">
                            <input
                                type="radio"
                                id={optionId}
                                name={name || radioGroupId}
                                value={option.value}
                                checked={isSelected}
                                onChange={() => handleSelectionChange(option.value)}
                                disabled={disabled}
                                required={required}
                                className="sr-only"
                                aria-describedby={`${optionId}-description`}
                            />
                            <label
                                htmlFor={optionId}
                                className={`
                                    flex items-center cursor-pointer
                                    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                                `}
                            >
                                {/* Custom Radio Button */}
                                <div className="relative flex-shrink-0">
                                    <div className={`
                                        w-6 h-6 rounded-full border-2 flex items-center justify-center
                                        transition-all duration-200 ease-in-out
                                        ${isSelected
                                            ? 'border-blue-500 bg-blue-500'
                                            : 'border-gray-300 bg-white hover:border-gray-400'
                                        }
                                        ${disabled ? 'border-gray-200' : ''}
                                        focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2
                                    `}>
                                        {isSelected && (
                                            <div className="w-3 h-3 rounded-full bg-white"></div>
                                        )}
                                    </div>
                                </div>

                                {/* Label */}
                                <span className="ml-3 text-sm font-medium text-gray-700">
                                    {option.label}
                                </span>

                                {/* Description */}
                                {option.description && (
                                    <div
                                        id={`${optionId}-description`}
                                        className="ml-2 text-xs text-gray-500"
                                    >
                                        {option.description}
                                    </div>
                                )}
                            </label>
                        </div>
                    );
                })}
            </fieldset>

            {error && (
                <div
                    id={`${radioGroupId}-error`}
                    className="text-sm text-red-600 mt-1"
                    role="alert"
                >
                    {error}
                </div>
            )}
        </div>
    );
};

export default RadioButtonsComponent;
