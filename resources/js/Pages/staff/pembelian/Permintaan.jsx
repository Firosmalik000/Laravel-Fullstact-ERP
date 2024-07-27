import React from "react";
import { useForm, usePage } from "@inertiajs/react";
import CustomButton from "@/Components/CustomButton";

const Permintaan = ({ pembelians }) => {
    const { data, setData, post } = useForm({
        status: "", // initialize with empty status
    });

    const handleStatusChange = (id, status) => {
        setData("status", status); // set the status in form data
        post(route("staff.pembelian.update-status", { pembelian: id }), {
            onSuccess: () => {
                console.log("Status updated successfully");
            },
            onError: (errors) => {
                console.error(errors);
            },
            preserveScroll: true,
        });
    };

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Permintaan Pembelian
                        </h2>
                        <table className="w-full border border-3">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-3 py-2">Name</th>
                                    <th className="px-3 py-2">Jumlah</th>
                                    <th className="px-3 py-2">Harga</th>
                                    <th className="px-3 py-2">Total</th>
                                    <th className="px-3 py-2">Supplier</th>
                                    <th className="px-3 py-2">Catatan</th>
                                    <th className="px-3 py-2">Status</th>
                                    <th className="px-3 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pembelians.map((beli) => (
                                    <tr
                                        key={beli.id}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="px-3 py-2">
                                            {beli.nama}
                                        </td>
                                        <td className="px-3 py-2">
                                            {beli.jumlah}
                                        </td>
                                        <td className="px-3 py-2">
                                            {beli.harga}
                                        </td>
                                        <td className="px-3 py-2">
                                            {beli.total}
                                        </td>
                                        <td className="px-3 py-2">
                                            {beli.supplier}
                                        </td>
                                        <td className="px-3 py-2">
                                            {beli.catatan}
                                        </td>
                                        <td className="px-3 py-2">
                                            {beli.status}
                                        </td>
                                        {beli.status === "pending" ? (
                                            <td className="px-3 py-2">
                                                <div className="flex gap-x-2 justify-center">
                                                    <CustomButton
                                                        title="Accept"
                                                        className="bg-green-500 text-white px-2 py-1 rounded-[10px] transition duration-300 hover:bg-green-700"
                                                        onClick={() =>
                                                            handleStatusChange(
                                                                beli.id,
                                                                "Accepted"
                                                            )
                                                        }
                                                    />
                                                    <CustomButton
                                                        title="Reject"
                                                        className="bg-red-500 text-white px-2 py-1 rounded-[10px] transition duration-300 hover:bg-red-700"
                                                        onClick={() =>
                                                            handleStatusChange(
                                                                beli.id,
                                                                "Rejected"
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </td>
                                        ) : (
                                            "-"
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Permintaan;
