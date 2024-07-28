import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Report({ auth, report }) {
    const [detail, setDetail] = useState(null);

    const handleRowClick = (pembelian) => {
        console.log("Row clicked, pembelian data:", pembelian);
        setDetail(pembelian);
    };

    console.log({ report });

    useEffect(() => {
        console.log("Detail updated:", detail);
    }, [detail]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Laporan Pembelian
                </h2>
            }
        >
            <Head title="Report" />
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
                                                Created At
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Product
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Jumlah
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Harga
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Total
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Supplier
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Request By
                                            </th>{" "}
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Authorize By
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Catatan
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {report?.map((gdg, index) => (
                                            <tr
                                                onClick={() =>
                                                    handleRowClick(gdg.status)
                                                }
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
                                                <td className="px-6 py-4">
                                                    {gdg.status?.created_at}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {gdg.status?.pembelian.nama}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {
                                                        gdg.status?.pembelian
                                                            .jumlah
                                                    }
                                                </td>
                                                <td className="px-6 py-4">
                                                    {
                                                        gdg.status?.pembelian
                                                            .harga
                                                    }
                                                </td>
                                                <td className="px-6 py-4">
                                                    {
                                                        gdg.status?.pembelian
                                                            .total
                                                    }
                                                </td>
                                                <td className="px-6 py-4">
                                                    {
                                                        gdg.status?.pembelian
                                                            .supplier
                                                    }
                                                </td>
                                                <td className="px-6 py-4">
                                                    {
                                                        gdg.status.pembelian
                                                            ?.user?.name
                                                    }
                                                </td>
                                                <td className="px-6 py-4">
                                                    {gdg.status?.user?.name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {gdg.status.status}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {
                                                        gdg.status.pembelian
                                                            .catatan
                                                    }
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
