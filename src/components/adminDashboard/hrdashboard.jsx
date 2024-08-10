import React from 'react'
import Headers from './headers'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);



const Hrdashboard = () => {

    const data = {
        labels: ['India', 'USA', 'Sri Lanka', 'Australia'],
        datasets: [
            {
                data: [23, 32, 12, 32],
                backgroundColor: ['#00bcd4', '#42a5f5', '#ff9800', '#66bb6a'],
                hoverBackgroundColor: ['#00acc1', '#1e88e5', '#fb8c00', '#43a047'],
                borderWidth: 1,
                cutout:'75%'
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
    };
    return (
        <div>
            <Headers className='flex-1 flex flex-col overflow-hidden' />
            <div className=" min-h-screen p-4 shadow-lg">
                <div className="grid grid-cols-4 h-[150px] gap-3 m-4">
                    <div className="border border-gray-200 rounded-md flex flex-col items-start gap-4 p-4 text-white" style={{ fontFamily: 'monserrat',backgroundColor:'#41B4A2' }}>
                        <div className="text-2xl font-bold">New Projects</div>
                        <div className="text-xl">102</div>
                        <div className="h-[2px] bg-white w-[95%]"></div>
                        <div className="text-lg">10% since last 10 Months</div>
                    </div>
                    <div className="border border-gray-200 rounded-md flex flex-col items-start gap-4 p-4 text-white" style={{ fontFamily: 'monserrat',backgroundColor:'#3C94D6' }}>
                        <div className="text-2xl font-bold">New Projects</div>
                        <div className="text-lg">102</div>
                        <div className="h-[2px] bg-white w-[95%]"></div>
                        <div className="text-lg">10% since last 10 Months</div>
                    </div>
                    <div className="border border-gray-200 rounded-md flex flex-col items-start gap-4 p-4 text-white" style={{ fontFamily: 'monserrat',backgroundColor:'#A34FDE' }}>
                        <div className="text-2xl font-bold">New Projects</div>
                        <div className="text-lg">102</div>
                        <div className="h-[2px] bg-white w-[95%]"></div>
                        <div className="text-lg">10% since last 10 Months</div>
                    </div>
                    <div className="border border-gray-200 rounded-md flex flex-col items-start gap-4 p-4 text-white" style={{ fontFamily: 'monserrat',backgroundColor:'#EA8959' }}>
                        <div className="text-2xl font-bold">New Projects</div>
                        <div className="text-lg">102</div>
                        <div className="h-[2px] bg-white w-[95%]"></div>
                        <div className="text-lg">10% since last 10 Months</div>
                    </div>
                </div>
                <div className="mt-10">

                <div className="grid grid-cols-[900px,1fr] h-[500px]  gap-5 m-5">
                    <div className="border border-black"></div>
                    <div className="border ">
                        <div className="w-full md:w-1/2 lg:w-full p-4">
                            <div className="bg-white shadow rounded-lg p-6">
                                <h2 className="text-lg font-medium text-gray-700 mb-4">Country Wise Clients</h2>
                                <div className="relative h-48">
                                    <Doughnut data={data} options={options} />
                                </div>
                                <div className="mt-6">
                                    <ul className="space-y-2">
                                        <li className="flex items-center justify-between text-sm">
                                            <div className="flex items-center">
                                                <span className="block h-3 w-3 rounded-full bg-[#00bcd4] mr-2"></span>
                                                India
                                            </div>
                                            <div className="text-gray-700">23 <span className="text-green-500">+32%</span></div>
                                        </li>
                                        <li className="flex items-center justify-between text-sm">
                                            <div className="flex items-center">
                                                <span className="block h-3 w-3 rounded-full bg-[#42a5f5] mr-2"></span>
                                                USA
                                            </div>
                                            <div className="text-gray-700">32 <span className="text-green-500">+12%</span></div>
                                        </li>
                                        <li className="flex items-center justify-between text-sm">
                                            <div className="flex items-center">
                                                <span className="block h-3 w-3 rounded-full bg-[#ff9800] mr-2"></span>
                                                Sri Lanka
                                            </div>
                                            <div className="text-gray-700">12 <span className="text-red-500">-12%</span></div>
                                        </li>
                                        <li className="flex items-center justify-between text-sm">
                                            <div className="flex items-center">
                                                <span className="block h-3 w-3 rounded-full bg-[#66bb6a] mr-2"></span>
                                                Australia
                                            </div>
                                            <div className="text-gray-700">32 <span className="text-green-500">+3%</span></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>




            </div>
        </div>
    )
}

export default Hrdashboard
