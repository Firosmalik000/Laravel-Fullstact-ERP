import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

const Create = ({ auth }) => {
    const { data, setData, post, errors, processing, reset } = useForm({
        nama: "",
        jumlah: "",
        harga: "",
        total: "",
        catatan: "",
        supplier: "",
        riwayat: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("staff.pembelian.save"));
    };
    const classnameInput =
        "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50";

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Pembelian
                </h2>
            }
        >
            <Head title="Create Pembelian" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form
                                onSubmit={handleSubmit}
                                className="grid grid-cols-2 gap-4"
                                encType="multipart/form-data"
                            >
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Material
                                    </label>
                                    <input
                                        type="text"
                                        name="nama"
                                        value={data.nama}
                                        onChange={(e) =>
                                            setData("nama", e.target.value)
                                        }
                                        className={classnameInput}
                                    />
                                    {errors.nama && (
                                        <span className="text-red-500 text-sm">
                                            {errors.nama}
                                        </span>
                                    )}
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Jumlah
                                    </label>
                                    <input
                                        type="number"
                                        name="jumlah"
                                        value={data.jumlah}
                                        onChange={(e) =>
                                            setData("jumlah", e.target.value)
                                        }
                                        className={classnameInput}
                                    />
                                    {errors.jumlah && (
                                        <span className="text-red-500 text-sm">
                                            {errors.jumlah}
                                        </span>
                                    )}
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Harga
                                    </label>
                                    <input
                                        type="number"
                                        name="harga"
                                        value={data.harga}
                                        onChange={(e) =>
                                            setData("harga", e.target.value)
                                        }
                                        className={classnameInput}
                                    />
                                    {errors.harga && (
                                        <span className="text-red-500 text-sm">
                                            {errors.harga}
                                        </span>
                                    )}
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Total
                                    </label>
                                    <input
                                        type="number"
                                        name="total"
                                        value={data.total}
                                        onChange={(e) =>
                                            setData("total", e.target.value)
                                        }
                                        className={classnameInput}
                                    />
                                    {errors.total && (
                                        <span className="text-red-500 text-sm">
                                            {errors.total}
                                        </span>
                                    )}
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Riwayat
                                    </label>
                                    <input
                                        type="text"
                                        name="riwayat"
                                        value={data.riwayat}
                                        onChange={(e) =>
                                            setData("riwayat", e.target.value)
                                        }
                                        className={classnameInput}
                                    />
                                    {errors.riwayat && (
                                        <span className="text-red-500 text-sm">
                                            {errors.riwayat}
                                        </span>
                                    )}
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Catatan
                                    </label>
                                    <input
                                        type="text"
                                        name="catatan"
                                        value={data.catatan}
                                        onChange={(e) =>
                                            setData("catatan", e.target.value)
                                        }
                                        className={classnameInput}
                                    />
                                    {errors.catatan && (
                                        <span className="text-red-500 text-sm">
                                            {errors.catatan}
                                        </span>
                                    )}
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Supplier
                                    </label>
                                    <input
                                        type="text"
                                        name="supplier"
                                        value={data.supplier}
                                        onChange={(e) =>
                                            setData("supplier", e.target.value)
                                        }
                                        className={classnameInput}
                                    />
                                    {errors.supplier && (
                                        <span className="text-red-500 text-sm">
                                            {errors.supplier}
                                        </span>
                                    )}
                                </div>
                                <div className="flex gap-x-2 col-span-2">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Simpan
                                    </button>
                                    <a
                                        href={route("staff.pembelian")}
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                    >
                                        Kembali
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
