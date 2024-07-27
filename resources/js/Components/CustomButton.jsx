import React from "react";
import { Link } from "@inertiajs/react";

const CustomButton = ({
    title,
    onClick = () => {},
    href = null, // Tambahkan properti href
    color = "bg-blue-500",
    size = "medium",
    type = "button",
    className = "",
    ...props
}) => {
    const sizeClasses = {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
    };

    if (href) {
        return (
            <Link
                href={href}
                className={`text-white rounded transition duration-300 hover:opacity-80 ${color} ${sizeClasses[size]} ${className}`}
                {...props}
            >
                {title}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`text-white rounded transition duration-300 hover:opacity-80 ${color} ${sizeClasses[size]} ${className}`}
            {...props}
        >
            {title}
        </button>
    );
};

export default CustomButton;
