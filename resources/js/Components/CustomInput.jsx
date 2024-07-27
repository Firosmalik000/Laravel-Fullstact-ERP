import React from "react";

const CustomInput = ({
    title,
    onChange,
    value,
    type = "text",
    placeholder = "",
    id = "custom-input",
    name = "",
    className = "",
    ...props
}) => {
    return (
        <div className="mb-4">
            {title && (
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor={id}
                >
                    {title}
                </label>
            )}
            <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${className}`}
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                {...props}
            />
        </div>
    );
};

export default CustomInput;
