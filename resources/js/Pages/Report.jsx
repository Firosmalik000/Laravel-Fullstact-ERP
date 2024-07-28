import React, { useState } from "react";
import { saveAs } from "file-saver";
import Papa from "papaparse";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { Head } from "@inertiajs/react";

export default function Report({ auth, report }) {
    const [detail, setDetail] = useState(null);

    const handleRowClick = (pembelian) => {
        console.log("Row clicked, pembelian data:", pembelian);
        setDetail(pembelian);
    };

    console.log({ report });

    const generateCSV = () => {
        const data = report.map((gdg) => ({
            created_at:
                gdg?.status?.created_at || gdg?.gudang?.status?.created_at,
            product:
                gdg?.status?.pembelian.nama ||
                gdg?.gudang?.status?.pembelian.nama,
            jumlah:
                gdg?.status?.pembelian.jumlah ||
                gdg?.gudang?.status?.pembelian.jumlah,
            harga:
                gdg?.status?.pembelian.harga ||
                gdg?.gudang?.status?.pembelian.harga,
            total:
                gdg?.status?.pembelian.total ||
                gdg?.gudang?.status?.pembelian.total,
            supplier:
                gdg?.status?.pembelian.supplier ||
                gdg?.gudang?.status?.pembelian.supplier,
            request_by:
                gdg?.status?.pembelian?.user?.name ||
                gdg?.gudang?.status?.pembelian?.user?.name,
            authorize_by:
                gdg?.status?.user?.name || gdg?.gudang?.status?.user?.name,
            status: gdg?.status?.status || gdg?.gudang?.status?.status,
            catatan:
                gdg?.status?.pembelian.catatan ||
                gdg?.gudang?.status?.pembelian.catatan,
        }));

        const csv = Papa.unparse(data);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        saveAs(blob, "report.csv");
    };

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
                                                ID Pembelian
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Nama
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Code
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Kondisi
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Lokasi
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Kedatangan
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
                                                    handleRowClick(gdg?.status)
                                                }
                                                key={gdg?.id}
                                                className={`hover:bg-gray-100 ${
                                                    gdg?.status?.status ===
                                                    "Accepted"
                                                        ? "bg-green-200"
                                                        : gdg?.status
                                                              ?.status ===
                                                          "Rejected"
                                                        ? "bg-red-200"
                                                        : gdg?.status
                                                              ?.status ===
                                                          "Pending"
                                                        ? "bg-yellow-200"
                                                        : "bg-gray-100"
                                                }`}
                                            >
                                                <td className="px-6 py-4">
                                                    {gdg?.status?.created_at ??
                                                        gdg?.gudang?.status
                                                            ?.created_at}
                                                </td>

                                                <td className="px-6 py-4">
                                                    {gdg?.status?.pembelian_id
                                                        ?.catatan ??
                                                        gdg?.gudang?.status
                                                            ?.pembelian_id}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {gdg?.gudang?.nama}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {gdg?.gudang?.code}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {gdg?.gudang?.kondisi}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {gdg?.gudang?.lokasi}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {gdg?.gudang?.kedatangan}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {gdg?.gudang?.catatan}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <button
                                onClick={generateCSV}
                                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
                            >
                                Download Data Pembelian
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
