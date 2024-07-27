import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function User({ auth, users }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    User List
                </h2>
            }
        >
            <Head title="Users" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="w-full border border-3 table ">
                                <thead className="bg-gray-100  ">
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        {/* <th>Action</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index) => (
                                        <tr key={user.id} className="px-5">
                                            <th className="px-3 py-3">
                                                {index + 1}
                                            </th>
                                            <td className="px-3 py-3">
                                                {user.name}
                                            </td>
                                            <td className="px-3 py-3">
                                                {user.email}
                                            </td>
                                            <td className="px-3 py-3">
                                                {user.role}
                                            </td>
                                            {/* <th className="flex gap-x-2 justify-center">
                                                <button className="bg-yellow-300 text-white px-2 py-1 rounded-[10px] transition duration-300 hover:bg-yellow-500">
                                                    Edit
                                                </button>
                                                <button className="bg-red-500 text-white px-2 py-1 rounded-[10px] transition duration-300 hover:bg-red-700">
                                                    Delete
                                                </button>
                                            </th> */}
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
