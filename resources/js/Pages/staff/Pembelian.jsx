import CustomButton from "@/Components/CustomButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import axios from "axios";

import Permintaan from "./pembelian/Permintaan";

export default function Pembelian({ auth, pembelians }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Pembelian
                </h2>
            }
        >
            <Head title="Pembelian" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-end mb-5">
                                <CustomButton
                                    title="Tambah Pembelian"
                                    href={route("staff.pembelian.create")}
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                />
                            </div>
                            <table className="w-full border border-3">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-3 py-2">Name</th>
                                        <th className="px-3 py-2">Jumlah</th>
                                        <th className="px-3 py-2">Harga</th>
                                        <th className="px-3 py-2">Total</th>
                                        <th className="px-3 py-2">Supplier</th>
                                        <th className="px-3 py-2">
                                            Request By
                                        </th>
                                        <th className="px-3 py-2">status</th>
                                        <th className="px-3 py-2">Catatan</th>
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
                                                {beli.request_by}
                                            </td>
                                            <td className="px-3 py-2">
                                                {beli.status}
                                            </td>
                                            <td className="px-3 py-2">
                                                {beli.catatan}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Permintaan pembelians={pembelians} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
