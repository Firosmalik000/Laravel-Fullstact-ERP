import React, { useEffect } from "react";
import CustomInput from "../CustomInput";
import { useForm } from "@inertiajs/react";

const LaporanGudang = ({ open, setOpen, gudang }) => {
    const { data, setData, post, errors, reset } = useForm({
        nama: "",
        code: "",
        lokasi: "",
        kedatangan: "",
        kondisi: "",
        catatan: "",
    });

    useEffect(() => {
        if (gudang) {
            setData({
                nama: gudang.nama,
                code: gudang.code,
                lokasi: gudang.lokasi,
                kedatangan: gudang.kedatangan,
                kondisi: gudang.kondisi,
                catatan: gudang.catatan,
            });
        }
    }, [gudang]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/gudang/update-gudang/${gudang.id}`, {
            onSuccess: () => setOpen(false),
        });
    };

    return (
        <div
            className={`fixed overflow-x-auto shadow-md sm:rounded-lg mt-4 min-h-[100vh] w-[400px] top-0 right-0 bg-white p-10 px-6 transform ${
                open ? "translate-x-0 " : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
        >
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Status Detail</h1>
                <button
                    className="text-red-500 hover:text-red-700 text-4xl"
                    onClick={() => setOpen(false)}
                >
                    x
                </button>
            </div>
            <hr />
            <div className="mt-8" />
            <form onSubmit={handleSubmit}>
                <CustomInput
                    title="Nama"
                    value={data.nama}
                    onChange={(e) => setData("nama", e.target.value)}
                    error={errors.nama}
                />
                <CustomInput
                    title="Code"
                    value={data.code}
                    onChange={(e) => setData("code", e.target.value)}
                    error={errors.code}
                />
                <CustomInput
                    title="Lokasi"
                    value={data.lokasi}
                    onChange={(e) => setData("lokasi", e.target.value)}
                    error={errors.lokasi}
                />
                <CustomInput
                    title="Kedatangan"
                    type="date"
                    value={data.kedatangan}
                    onChange={(e) => setData("kedatangan", e.target.value)}
                    error={errors.kedatangan}
                />
                <CustomInput
                    title="Kondisi"
                    value={data.kondisi}
                    onChange={(e) => setData("kondisi", e.target.value)}
                    error={errors.kondisi}
                />
                <CustomInput
                    title="Catatan"
                    value={data.catatan}
                    onChange={(e) => setData("catatan", e.target.value)}
                    error={errors.catatan}
                />
                <button
                    type="submit"
                    className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default LaporanGudang;
