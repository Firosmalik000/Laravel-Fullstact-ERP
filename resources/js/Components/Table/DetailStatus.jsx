import React from "react";

const DetailStatus = ({ items, user }) => {
    console.log("DetailStatus received items:", user);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-white uppercase bg-indigo-600">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Jumlah
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Harga
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Supplier
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Request By
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Catatan
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b hover:bg-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {items.nama}
                        </td>
                        <td className="px-6 py-4">{items.jumlah}</td>
                        <td className="px-6 py-4">{items.harga}</td>
                        <td className="px-6 py-4">{items.total}</td>
                        <td className="px-6 py-4">{items.supplier}</td>
                        <td className="px-6 py-4">{user?.name}</td>
                        <td className="px-6 py-4">{items.catatan}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DetailStatus;
