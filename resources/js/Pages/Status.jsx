import CustomButton from "@/Components/CustomButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Status({ auth, status }) {
    const { setData, post } = useForm({
        status: "",
    });

    const handleStatusChange = (id, newStatus) => {
        setData("status", newStatus);
        post(route("status.update-status", id), {
            onSuccess: (response) => {
                console.log("Status updated successfully:", response);

                window.location.reload();
            },
            onError: (errors) => {
                console.error("Error updating status:", errors);
            },
        });
    };
    console.log({ status });

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Status Pembelian
                </h2>
            }
        >
            <Head title="Status" />

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
                                        {status?.map((sty, index) => (
                                            <tr
                                                key={sty.id}
                                                className={`hover:bg-gray-100 ${
                                                    sty.status === "Accepted"
                                                        ? "bg-green-200"
                                                        : sty.status ===
                                                          "Rejected"
                                                        ? "bg-red-200"
                                                        : sty.status ===
                                                          "Pending"
                                                        ? "bg-yellow-200"
                                                        : "bg-gray-100"
                                                }`}
                                            >
                                                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                    {index + 1}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {sty.pembelian_id}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {sty.status}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {sty.user?.name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {sty.status ===
                                                    "Pending" ? (
                                                        <div className="flex gap-x-2 justify-center">
                                                            <CustomButton
                                                                title="Accept"
                                                                className="bg-green-500 text-white px-2 py-1 rounded-[10px] transition duration-300 hover:bg-green-700"
                                                                onClick={() =>
                                                                    handleStatusChange(
                                                                        sty.id,
                                                                        "Accepted"
                                                                    )
                                                                }
                                                            />
                                                            <CustomButton
                                                                title="Reject"
                                                                className="bg-red-500 text-white px-2 py-1 rounded-[10px] transition duration-300 hover:bg-red-700"
                                                                onClick={() =>
                                                                    handleStatusChange(
                                                                        sty.id,
                                                                        "Rejected"
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    ) : (
                                                        "-"
                                                    )}
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
