
// // // // src/DashboardPage.js
// // // import React, { useEffect, useState } from 'react';
// // // import { useSpring, animated } from 'react-spring';
// // // import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
// // // import '../../App.css'; // Ensure Tailwind CSS is imported
// // // import Headers from './headers';
// // // import axios from 'axios';



// // // const COLORS = ['#4caf50', '#ff9800', '#f44336'];

// // // const tasks = [
// // //     { task: 'Finish project report', dueDate: '2024-08-15' },
// // //     { task: 'Update website content', dueDate: '2024-08-20' },
// // //     { task: 'Prepare presentation slides', dueDate: '2024-08-25' },
// // // ];

// // // const warnings = [
// // //     { issue: 'Missed meeting with client on 02/08', date: '2024-08-02' },
// // //     { issue: 'Delayed submission of quarterly report', date: '2024-07-30' },
// // //     { issue: 'Pending feedback from team', date: '2024-08-01' },
// // // ];






// // // const EmpDashboardPage = () => {
// // //     const name = localStorage.getItem('name')
// // //     console.log("name", name)

// // //     const [data, setData] = useState([])

// // //     // const performanceData = [
// // //     //     { name: 'ontime', value: 60 },
// // //     //     { name: 'late', value: 30 },
// // //     //     { name: 'absent', value: 10 },
// // //     // ];

// // //     const fetchApi = async () => {
// // //         const empCode = localStorage.getItem('empCode')
// // //         const response = await axios.post('http://157.245.109.206:8093/emp-handler/attendence/emp-chart-mounth/attendence-monitor?empCode=' + empCode)
// // //         console.log("response", response.data)




// // //         const formattedData = [
// // //             { name: 'On-Time', value: response.result.onTime },
// // //             { name: 'Late', value: response.result.late },
// // //             { name: 'Absent', value: response.result.Absent },

// // //         ];
// // //         setData(formattedData)
// // //     }
// // //     useEffect(() => {
// // //         fetchApi()

// // //     }, [])
// // //     const animationProps = useSpring({
// // //         opacity: 1,
// // //         from: { opacity: 0 },
// // //         config: { duration: 2000 },
// // //     });






// // //     return (
// // //         <>
// // //             <Headers className='flex-1 flex flex-col overflow-hidden' />
// // //             <div className="p-6 md:p-12 lg:p-8 bg-blue-50 ">
// // //                 <div className="flex flex-col lg:flex-row gap-6 mb-12">
// // //                     <div className="lg:w-1/2 flex items-center ml-6">
// // //                         {/* <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 mr-6 " style={{ fontFamily: 'Montserrat' }}>
// // //                         Hello {name}! <div className="text-2xl">Welcome To Venture consultancy Services</div> <div className="text-gray-400">Employee Portal</div>

// // //                         </div> */}
// // //                         <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 mr-6" style={{ fontFamily: 'Montserrat' }}>
// // //                             {/* Hello {name ? name : 'Guest'}! */} <div className="">{name}</div>
// // //                             <div className="text-2xl">Welcome To Venture Consultancy Services</div>
// // //                             <div className="text-gray-400">Employee Portal</div>
// // //                         </div>



// // //                     </div>
// // //                     <div className="lg:w-1/2 flex justify-center items-center">
// // //                         <PieChart width={400} height={400}>
// // //                             <Pie
// // //                                 data={data}
// // //                                 cx={200}
// // //                                 cy={200}
// // //                                 labelLine={false}
// // //                                 outerRadius={150}
// // //                                 fill="#8884d8"
// // //                                 dataKey="value"
// // //                             >
// // //                                 {data.map((entry, index) => (
// // //                                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// // //                                 ))}
// // //                             </Pie>
// // //                             <Tooltip />
// // //                             <Legend />
// // //                         </PieChart>
// // //                     </div>
// // //                 </div>
// // //                 <div className="flex flex-col lg:flex-row gap-6 justify-center">
// // //                     <div className="lg:w-[500px] mb-6 lg:mb-0 ">
// // //                         <h2 className="text-2xl font-semibold mb-4 text-gray-600" style={{ fontFamily: 'Montserrat' }}>Tasks</h2>
// // //                         <div className="overflow-x-auto">
// // //                             <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-lg">
// // //                                 <thead className="bg-gray-100">
// // //                                     <tr>
// // //                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
// // //                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
// // //                                     </tr>
// // //                                 </thead>
// // //                                 <tbody className="bg-white divide-y divide-gray-200 shadow-md">
// // //                                     {tasks.map((task, index) => (
// // //                                         <tr key={index}>
// // //                                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.task}</td>
// // //                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.dueDate}</td>
// // //                                         </tr>
// // //                                     ))}
// // //                                 </tbody>
// // //                             </table>
// // //                         </div>
// // //                     </div>
// // //                     <div className="lg:w-[500px] ">
// // //                         <h2 className="text-2xl font-semibold mb-4 text-gray-600" style={{ fontFamily: 'Montserrat' }}>Warnings</h2>
// // //                         <div className="overflow-x-auto">
// // //                             <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-lg">
// // //                                 <thead className="bg-gray-100">
// // //                                     <tr>
// // //                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue</th>
// // //                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
// // //                                     </tr>
// // //                                 </thead>
// // //                                 <tbody className="bg-white divide-y divide-gray-200 shadow-md">
// // //                                     {warnings.map((warning, index) => (
// // //                                         <tr key={index}>
// // //                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">{warning.issue}</td>
// // //                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{warning.date}</td>
// // //                                         </tr>
// // //                                     ))}
// // //                                 </tbody>
// // //                             </table>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </>
// // //     );
// // // };

// // // export default EmpDashboardPage;




// // import React, { useEffect, useState } from 'react';
// // import { useSpring, animated } from 'react-spring';
// // import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
// // import axios from 'axios';
// // import Headers from './headers';

// // const COLORS = ['#4caf50', '#ff9800', '#f44336'];

// // const tasks = [
// //     { task: 'Finish project report', dueDate: '2024-08-15' },
// //     { task: 'Update website content', dueDate: '2024-08-20' },
// //     { task: 'Prepare presentation slides', dueDate: '2024-08-25' },
// // ];

// // const warnings = [
// //     { issue: 'Missed meeting with client on 02/08', date: '2024-08-02' },
// //     { issue: 'Delayed submission of quarterly report', date: '2024-07-30' },
// //     { issue: 'Pending feedback from team', date: '2024-08-01' },
// // ];

// // const EmpDashboardPage = () => {
// //     const name = localStorage.getItem('name');
// //     const [data, setData] = useState([]);
// //     const [toggle, setToggel] = useState(true)

// //     const fetchApi = async () => {
// //         try {
// //             const empCode = localStorage.getItem('empCode');
// //             const response = await axios.post(`http://157.245.109.206:8093/emp-handler/attendence/emp-chart-mounth/attendence-monitor?empCode=${empCode}`);
// //             console.log("response", response.data);
// //             if (response.status === 202) {
// //                 const result = response?.data?.result; // Ensure correct access
// //                 const attendance = response?.data?.result?.onTime
// //                 if (result && attendance) {
// //                     const formattedData = [
// //                         { name: 'On-Time', value: result.onTime || 0 },
// //                         { name: 'Late', value: result.late || 0 },
// //                         { name: 'Absent', value: result.absent || 0 },
// //                     ];
// //                     setData(formattedData);
// //                 } else {

// //                     console.error('Invalid response structure', response.data);
// //                     const formattedData = [
// //                         { name: 'No-Attendence Found', value: result.onTime || 0 },
// //                     ];
// //                 }

// //             }


// //         } catch (error) {
// //             console.error('Error fetching data:', error);
// //         }
// //     };

// //     useEffect(() => {
// //         fetchApi();
// //     }, []);

// //     const animationProps = useSpring({
// //         opacity: 1,
// //         from: { opacity: 0 },
// //         config: { duration: 2000 },
// //     });

// //     return (
// //         <>
// //             <Headers className='flex-1 flex flex-col overflow-hidden' />
// //             <div className="p-6 md:p-12 lg:p-8 bg-blue-50 ">
// //                 <div className="flex flex-col lg:flex-row gap-6 mb-12">
// //                     <div className="lg:w-1/2 flex items-center ml-6">
// //                         <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 mr-6" style={{ fontFamily: 'Montserrat' }}>
// //                             <div className="">{name}</div>
// //                             <div className="text-2xl">Welcome To Venture Consultancy Services</div>
// //                             <div className="text-gray-400">Employee Portal</div>
// //                         </div>
// //                     </div>
// //                     <div className="lg:w-1/2 flex justify-center items-center">
// //                         <PieChart width={400} height={400}>
// //                             <Pie
// //                                 data={data}
// //                                 cx={200}
// //                                 cy={200}
// //                                 labelLine={false}
// //                                 outerRadius={150}
// //                                 fill="#8884d8"
// //                                 dataKey="value"
// //                             >
// //                                 {data.map((entry, index) => (
// //                                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// //                                 ))}
// //                             </Pie>
// //                             <Tooltip />
// //                             <Legend />
// //                         </PieChart>
// //                     </div>
// //                 </div>
// //                 <div className="flex flex-col lg:flex-row gap-6 justify-center">
// //                     <div className="lg:w-[500px] mb-6 lg:mb-0 ">
// //                         <h2 className="text-2xl font-semibold mb-4 text-gray-600" style={{ fontFamily: 'Montserrat' }}>Tasks</h2>
// //                         <div className="overflow-x-auto">
// //                             <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-lg">
// //                                 <thead className="bg-gray-100">
// //                                     <tr>
// //                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
// //                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
// //                                     </tr>
// //                                 </thead>
// //                                 <tbody className="bg-white divide-y divide-gray-200 shadow-md">
// //                                     {tasks.map((task, index) => (
// //                                         <tr key={index}>
// //                                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.task}</td>
// //                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.dueDate}</td>
// //                                         </tr>
// //                                     ))}
// //                                 </tbody>
// //                             </table>
// //                         </div>
// //                     </div>
// //                     <div className="lg:w-[500px] ">
// //                         <h2 className="text-2xl font-semibold mb-4 text-gray-600" style={{ fontFamily: 'Montserrat' }}>Warnings</h2>
// //                         <div className="overflow-x-auto">
// //                             <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-lg">
// //                                 <thead className="bg-gray-100">
// //                                     <tr>
// //                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue</th>
// //                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
// //                                     </tr>
// //                                 </thead>
// //                                 <tbody className="bg-white divide-y divide-gray-200 shadow-md">
// //                                     {warnings.map((warning, index) => (
// //                                         <tr key={index}>
// //                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">{warning.issue}</td>
// //                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{warning.date}</td>
// //                                         </tr>
// //                                     ))}
// //                                 </tbody>
// //                             </table>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // };

// // export default EmpDashboardPage;



// import React, { useEffect, useState } from 'react';
// import { useSpring, animated } from 'react-spring';
// import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
// import axios from 'axios';
// import Headers from './headers';

// const COLORS = ['#4caf50', '#ff9800', '#f44336'];

// const tasks = [
//     { task: 'Finish project report', dueDate: '2024-08-15' },
//     { task: 'Update website content', dueDate: '2024-08-20' },
//     { task: 'Prepare presentation slides', dueDate: '2024-08-25' },
// ];

// const warnings = [
//     { issue: 'Missed meeting with client on 02/08', date: '2024-08-02' },
//     { issue: 'Delayed submission of quarterly report', date: '2024-07-30' },
//     { issue: 'Pending feedback from team', date: '2024-08-01' },
// ];

// const EmpDashboardPage = () => {
//     const name = localStorage.getItem('name');
//     const [data, setData] = useState([]);
//     const [noAttendance, setNoAttendance] = useState(false); // State to track if there's no attendance data

//     const fetchApi = async () => {
//         try {
//             const empCode = localStorage.getItem('empCode');
//             const response = await axios.post(`http://157.245.109.206:8093/emp-handler/attendence/emp-chart-mounth/attendence-monitor?empCode=${empCode}`);
//             console.log("response", response.data);

//             if (response.status === 202) {
//                 const result = response?.data?.result; // Ensure correct access

//                 if (result && result.onTime != null) {
//                     // If onTime is not null, set the attendance data
//                     const formattedData = [
//                         { name: 'On-Time', value: result.onTime || 0 },
//                         { name: 'Late', value: result.late || 0 },
//                         { name: 'Absent', value: result.absent || 0 },
//                     ];
//                     setData(formattedData);
//                     setNoAttendance(false); // Reset the no attendance flag
//                 }
                
//             }
//             else if(response.status === 500){
//                 // If onTime is null, set a different data structure for no attendance
//                 setData([{ name: 'No Attendance Found', value: 1 }]);
//                 setNoAttendance(true); // Set the no attendance flag
//             }
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     useEffect(() => {
//         fetchApi();
//     }, []);

//     const animationProps = useSpring({
//         opacity: 1,
//         from: { opacity: 0 },
//         config: { duration: 2000 },
//     });

//     return (
//         <>
//             <Headers className='flex-1 flex flex-col overflow-hidden' />
//             <div className="p-6 md:p-12 lg:p-8 bg-blue-50 ">
//                 <div className="flex flex-col lg:flex-row gap-6 mb-12">
//                     <div className="lg:w-1/2 flex items-center ml-6">
//                         <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 mr-6" style={{ fontFamily: 'Montserrat' }}>
//                             <div className="">{name}</div>
//                             <div className="text-2xl">Welcome To Venture Consultancy Services</div>
//                             <div className="text-gray-400">Employee Portal</div>
//                         </div>
//                     </div>
//                     <div className="lg:w-1/2 flex justify-center items-center">
//                         <PieChart width={400} height={400}>
//                             <Pie
//                                 data={data}
//                                 cx={200}
//                                 cy={200}
//                                 labelLine={false}
//                                 outerRadius={150}
//                                 fill={noAttendance ? "#0000FF" : "#8884d8"} // Blue if no attendance
//                                 dataKey="value"
//                             >
//                                 {data.map((entry, index) => (
//                                     <Cell key={`cell-${index}`} fill={noAttendance ? "#0000FF" : COLORS[index % COLORS.length]} />
//                                 ))}
//                             </Pie>
//                             <Tooltip />
//                             <Legend />
//                         </PieChart>
//                     </div>
//                 </div>
//                 <div className="flex flex-col lg:flex-row gap-6 justify-center">
//                     <div className="lg:w-[500px] mb-6 lg:mb-0 ">
//                         <h2 className="text-2xl font-semibold mb-4 text-gray-600" style={{ fontFamily: 'Montserrat' }}>Tasks</h2>
//                         <div className="overflow-x-auto">
//                             <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-lg">
//                                 <thead className="bg-gray-100">
//                                     <tr>
//                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
//                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody className="bg-white divide-y divide-gray-200 shadow-md">
//                                     {tasks.map((task, index) => (
//                                         <tr key={index}>
//                                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.task}</td>
//                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.dueDate}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                     <div className="lg:w-[500px] ">
//                         <h2 className="text-2xl font-semibold mb-4 text-gray-600" style={{ fontFamily: 'Montserrat' }}>Warnings</h2>
//                         <div className="overflow-x-auto">
//                             <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-lg">
//                                 <thead className="bg-gray-100">
//                                     <tr>
//                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue</th>
//                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody className="bg-white divide-y divide-gray-200 shadow-md">
//                                     {warnings.map((warning, index) => (
//                                         <tr key={index}>
//                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">{warning.issue}</td>
//                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{warning.date}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default EmpDashboardPage;



















import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import Headers from './headers';

const COLORS = ['#4caf50', '#ff9800', '#f44336'];

const tasks = [
    { task: 'Finish project report', dueDate: '2024-08-15' },
    { task: 'Update website content', dueDate: '2024-08-20' },
    { task: 'Prepare presentation slides', dueDate: '2024-08-25' },
];

const warnings = [
    { issue: 'Missed meeting with client on 02/08', date: '2024-08-02' },
    { issue: 'Delayed submission of quarterly report', date: '2024-07-30' },
    { issue: 'Pending feedback from team', date: '2024-08-01' },
];

const EmpDashboardPage = () => {
    const name = localStorage.getItem('name');
    const [data, setData] = useState([]);
    const [noAttendance, setNoAttendance] = useState(false); // State to track if there's no attendance data

    const fetchApi = async () => {
        try {
            const empCode = localStorage.getItem('empCode');
            const response = await axios.post(`http://157.245.109.206:8093/emp-handler/attendence/emp-chart-mounth/attendence-monitor?empCode=${empCode}`);
            console.log("response", response.data);

            if (response.status === 202) {
                const result = response?.data?.result;

                if (result && result.onTime != null) {
                    const formattedData = [
                        { name: 'On-Time', value: result.onTime || 0 },
                        { name: 'Late', value: result.late || 0 },
                        { name: 'Absent', value: result.absent || 0 },
                    ];
                    setData(formattedData);
                    setNoAttendance(false);
                } else {
                    setData([{ name: 'No Attendance Found', value: 1 }]);
                    setNoAttendance(true);
                }
            } else if (response.status === 500) {
                setData([{ name: 'No Attendance Found', value: 1 }]);
                setNoAttendance(true);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setData([{ name: 'No Attendance Found', value: 1 }]);
            setNoAttendance(true);
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);

    const animationProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 2000 },
    });

    return (
        <>
            <Headers className='flex-1 flex flex-col overflow-hidden' />
            <div className="p-6 md:p-12 lg:p-8 bg-blue-50 ">
                <div className="flex flex-col lg:flex-row gap-6 mb-12">
                    <div className="lg:w-1/2 flex items-center ml-6">
                        <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 mr-6" style={{ fontFamily: 'Montserrat' }}>
                            <div className="">{name}</div>
                            <div className="text-2xl">Welcome To Venture Consultancy Services</div>
                            <div className="text-gray-400">Employee Portal</div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={data}
                                cx={200}
                                cy={200}
                                labelLine={false}
                                outerRadius={150}
                                fill={noAttendance ? "#0000FF" : "#8884d8"} // Blue if no attendance
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={noAttendance ? "#0000FF" : COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                        {noAttendance && (
                            <div className="text-center text-lg font-semibold text-blue-600 mt-4">
                                No Attendance Data Found
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-6 justify-center">
                    <div className="lg:w-[500px] mb-6 lg:mb-0 ">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-600" style={{ fontFamily: 'Montserrat' }}>Tasks</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-lg">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 shadow-md">
                                    {tasks.map((task, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.task}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.dueDate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="lg:w-[500px] ">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-600" style={{ fontFamily: 'Montserrat' }}>Warnings</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-lg">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 shadow-md">
                                    {warnings.map((warning, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">{warning.issue}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{warning.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmpDashboardPage;


