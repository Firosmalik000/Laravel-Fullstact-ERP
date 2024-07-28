import React from "react";

const CustomDetailField = ({ label, value }) => {
    return (
        <div className="mx-3 grid grid-cols-2 gap-4 mb-3">
            <h1 className="text-l text-gray-500">{label}</h1>{" "}
            <p className="text-sm text-gray-500">{value}</p>
        </div>
    );
};

export default CustomDetailField;
