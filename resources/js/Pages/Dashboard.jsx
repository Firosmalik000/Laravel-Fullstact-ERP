import NavLink from "@/Components/NavLink";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function Dashboard({ auth }) {
    const chartData = {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
        ],
        datasets: [
            {
                label: "Users",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 bg-blue-400 min-h-[100vh]">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex gap-x-5 flex-wrap mb-5">
                                <div
                                    className="relative w-[370px] h-[200px] bg-white rounded-[15px] mb-5
                                hover:scale-105 hover:shadow-xl transition-all duration-300"
                                >
                                    <p className="text-3xl font-semibold absolute top-5 mb-5 left-5">
                                        Total User
                                    </p>
                                    <p className="text-5xl font-semibold absolute top-20 mb-5 left-10">
                                        4
                                    </p>
                                    <NavLink
                                        className="absolute bottom-5 left-5 text-2xl text-sky-600"
                                        href={route("manager.users")}
                                        active={route().current(
                                            "manager.users"
                                        )}
                                    >
                                        View
                                    </NavLink>
                                </div>
                                <div className="relative w-[370px] h-[200px] bg-white rounded-[15px] mb-5 hover:scale-105 hover:shadow-xl transition-all duration-300">
                                    <p className="text-3xl font-semibold absolute top-5 mb-5 left-5">
                                        Companies
                                    </p>
                                    <p className="text-5xl font-semibold absolute top-20 mb-5 left-10">
                                        100+
                                    </p>
                                    <NavLink className="absolute bottom-5 left-5 text-2xl text-sky-600">
                                        View
                                    </NavLink>
                                </div>
                                <div className="relative w-[370px] h-[200px] bg-white rounded-[15px] mb-5 hover:scale-105 hover:shadow-xl transition-all duration-300">
                                    <p className="text-3xl font-semibold absolute top-5 mb-5 left-5">
                                        Product Saled
                                    </p>
                                    <p className="text-5xl font-semibold absolute top-20 mb-5 left-10">
                                        5000+
                                    </p>
                                    <NavLink className="absolute bottom-5 left-5 text-2xl text-sky-600">
                                        View
                                    </NavLink>
                                </div>
                            </div>
                            <div className="flex gap-x-5 flex-wrap mb-5">
                                <div
                                    className="relative w-[760px] h-[400px] bg-white rounded-[15px] mb-5
                                hover:scale-105 hover:shadow-xl transition-all duration-300"
                                >
                                    <Bar
                                        data={chartData}
                                        options={{
                                            responsive: true,
                                            plugins: {
                                                legend: {
                                                    position: "top",
                                                },
                                                title: {
                                                    display: true,
                                                    text: "Users Growth Chart",
                                                },
                                            },
                                        }}
                                    />
                                </div>
                                <div
                                    className="relative w-[370px] h-[400px] bg-white rounded-[15px] mb-5
                                hover:scale-105 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="p-8">
                                        <div className="mb-3">
                                            <p className="text-xl mb-1">
                                                lorem ipsum
                                            </p>
                                            <div className="w-[150px] h-[20px] rounded-r-xl bg-blue-400"></div>
                                        </div>
                                        <div className="mb-3">
                                            <p className="text-xl mb-1">
                                                lorem ipsum
                                            </p>
                                            <div className="w-[180px] h-[20px] rounded-r-xl bg-blue-400"></div>
                                        </div>
                                        <div className="mb-3">
                                            <p className="text-xl mb-1">
                                                lorem ipsum
                                            </p>
                                            <div className="w-[100px] h-[20px] rounded-r-xl bg-blue-400"></div>
                                        </div>
                                        <div className="mb-3">
                                            <p className="text-xl mb-1">
                                                lorem ipsum
                                            </p>
                                            <div className="w-[200px] h-[20px] rounded-r-xl bg-blue-400"></div>
                                        </div>
                                        <div className="mb-3">
                                            <p className="text-xl mb-1">
                                                lorem ipsum
                                            </p>
                                            <div className="w-[250px] h-[20px] rounded-r-xl bg-blue-400"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
