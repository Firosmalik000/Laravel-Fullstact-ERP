import CustomButton from "@/Components/CustomButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Gudang({ auth, gudang, total }) {
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
                            <table className="w-full border border-3">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-3 py-2">No</th>
                                        <th className="px-3 py-2">Pembelian</th>
                                        <th className="px-3 py-2">Status</th>
                                        <th className="px-3 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {gudang?.map((gdg, index) => (
                                        <tr
                                            key={gdg.id}
                                            className={`hover:bg-gray-50 ${
                                                gdg.status === "Accepted"
                                                    ? "bg-green-100"
                                                    : gdg.status === "Rejected"
                                                    ? "bg-red-100"
                                                    : gdg.status === "Pending"
                                                    ? "bg-yellow-100"
                                                    : ""
                                            }`}
                                        >
                                            <th className="px-3 py-2">
                                                {index + 1}
                                            </th>
                                            <th className="px-3 py-2">
                                                {gdg.status_id}
                                            </th>
                                            <th className="px-3 py-2">
                                                {gdg.status}
                                            </th>
                                            <th className="px-3 py-2">
                                                <div className="flex gap-x-2 justify-center">
                                                    Print
                                                </div>
                                            </th>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
