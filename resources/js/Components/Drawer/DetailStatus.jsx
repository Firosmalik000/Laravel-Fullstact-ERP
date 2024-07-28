import React from "react";
import CustomDetailField from "../CustomDetailField";

const DetailStatus = ({ items, user, onClose }) => {
    console.log("DetailStatus received items:", user);

    return (
        <div
            className={`fixed overflow-x-auto shadow-md sm:rounded-lg mt-4 min-h-[100vh] w-[400px] top-0 right-0 bg-white p-10 px-6 transform ${
                items ? "translate-x-0 " : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
        >
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Status Detail</h1>
                <button
                    className="text-red-500 hover:text-red-700 text-4xl"
                    onClick={onClose}
                >
                    x
                </button>
            </div>
            <hr />
            <div className="mt-8" />
            <CustomDetailField label={"Product"} value={items?.nama} />
            <CustomDetailField label={"Harga"} value={items?.harga} />
            <CustomDetailField label={"Total"} value={items?.total} />
            <CustomDetailField label={"Supplier"} value={items?.supplier} />
            <CustomDetailField label={"Request By"} value={user?.name} />
            <CustomDetailField label={"Catatan"} value={items?.catatan} />
        </div>
    );
};

export default DetailStatus;
