import CustomButton from "@/Components/CustomButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Report({ auth, report }) {
    console.log({ report });
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Laporan
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
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {report?.map((gdg, index) => (
                                            <tr
                                                key={gdg.id}
                                                className={`hover:bg-gray-100 ${
                                                    gdg.status === "Accepted"
                                                        ? "bg-green-200"
                                                        : gdg.status ===
                                                          "Rejected"
                                                        ? "bg-red-200"
                                                        : gdg.status ===
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
                                                    {gdg.status}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex gap-x-2 justify-center">
                                                        Print
                                                    </div>
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
