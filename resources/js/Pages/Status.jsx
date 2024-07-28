import CustomButton from "@/Components/CustomButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Status({ auth, status }) {
    const { setData, post } = useForm({
        status: "",
    });

    const handleStatusChange = (id, newStatus) => {
        setData("status", newStatus); // Set the status in form data
        post(route("status.update-status", id), {
            onSuccess: (response) => {
                // Handle success response
                console.log("Status updated successfully:", response);
                // Optionally, reload or update the status state here
                // window.location.reload(); // Uncomment this to refresh the page
            },
            onError: (errors) => {
                // Handle error response
                console.error("Error updating status:", errors);
            },
        });
    };

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
                                    {status?.map((sty, index) => (
                                        <tr
                                            key={sty.id}
                                            className={`hover:bg-gray-50 ${
                                                sty.status === "Accepted"
                                                    ? "bg-green-100"
                                                    : sty.status === "Rejected"
                                                    ? "bg-red-100"
                                                    : sty.status === "Pending"
                                                    ? "bg-yellow-100"
                                                    : ""
                                            }`}
                                        >
                                            <th className="px-3 py-2">
                                                {index + 1}
                                            </th>
                                            <th className="px-3 py-2">
                                                {sty.pembelian_id}
                                            </th>
                                            <th className="px-3 py-2">
                                                {sty.status}
                                            </th>
                                            <th className="px-3 py-2">
                                                {sty.status === "Pending" ? (
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
