import CustomButton from "@/Components/CustomButton";
import LaporanGudang from "@/Components/Drawer/LaporanGudang";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import axios from "axios";

export default function Gudang({ auth, gudang }) {
    const [open, setOpen] = useState(false);
    const [selectedGudang, setSelectedGudang] = useState(null);

    const handleRowClick = async (id) => {
        try {
            const response = await axios.get(`/gudang/${id}`);
            setSelectedGudang(response.data);
            setOpen(true);
        } catch (error) {
            console.error("Error fetching gudang details:", error);
        }
    };
    console.log({ gudang });
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Gudang
                </h2>
            }
        >
            <Head title="Gudang" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                    <thead className="text-xs text-white uppercase bg-blue-600">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                No
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Pembelian
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Accepted By
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {gudang?.map((gdg, index) => (
                                            <tr
                                                key={gdg.id}
                                                className={`hover:bg-gray-100 ${
                                                    gdg.status.status ===
                                                    "Accepted"
                                                        ? "bg-green-200"
                                                        : gdg.status.status ===
                                                          "Rejected"
                                                        ? "bg-red-200"
                                                        : gdg.status.status ===
                                                          "Pending"
                                                        ? "bg-yellow-200"
                                                        : "bg-gray-100"
                                                }`}
                                            >
                                                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                    {index + 1}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {gdg.status_id}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {gdg.status.status}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {gdg.status?.user?.name}
                                                </td>

                                                <td className="px-6 py-4">
                                                    {console.log(
                                                        `gdg.gudang for gdg id ${gdg.id}:`,
                                                        gdg.gudang
                                                    )}
                                                    {gdg && gdg.code ? (
                                                        <>-</>
                                                    ) : (
                                                        <CustomButton
                                                            title="Lapor Kedatangan"
                                                            onClick={() =>
                                                                handleRowClick(
                                                                    gdg.id
                                                                )
                                                            }
                                                        />
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <LaporanGudang
                                open={open}
                                setOpen={setOpen}
                                gudang={selectedGudang}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
