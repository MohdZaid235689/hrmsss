import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import OtpPage from "./components/OtpPage";
import Dashboard from "./components/adminDashboard/DashBoard";

import './App.css'
import Reacttabs from "./components/reacttabs";
import Joblist from "./components/adminDashboard/jobs/joblist";
import Interviewshedulelist from "./components/adminDashboard/interview/interviewshedulelist";
import InterviewDetails from "./components/adminDashboard/jobs/formsheduleinterview";
import Inntervieweedetails from "./components/adminDashboard/interview/intervieweedetails";
import SmartDataTable from "./components/adminDashboard/smarttable";
import Leavetypes from "./components/adminDashboard/Leavemanage/leavetypes";
import Leavebalance from "./components/adminDashboard/Leavemanage/leavebalance";
import Leaverequest from "./components/adminDashboard/Leavemanage/leaverequest";
import Allemployees from "./components/adminDashboard/employeemanage/allemployees";
import Addemployees from "./components/adminDashboard/employeemanage/addemployees";
import EmployeeDashboard from "./components/adminDashboard/employeedashboard";
import EmpDashboardPage from "./components/adminDashboard/employeemanagement";
import Mainpage from "./components/adminDashboard/mainpage";
import Monitordashboard from "./components/adminDashboard/monitordashboard";
import Employeeattendence from "./components/adminDashboard/employeeattendence";
import Attendencehistory from "./components/adminDashboard/attendencehistory";
import EmployeeTasks from "./components/adminDashboard/employeetasks";
import Warningemployee from "./components/adminDashboard/warningemployee";
import Attendence from "./components/adminDashboard/attendence";
import Employeelistpage from "./components/adminDashboard/employeelistpage";
import FileUploader from "./components/pages/fiels";
import Hrdashboard from "./components/adminDashboard/hrdashboard";
// import Apple from "./components/adminDashboard/manage";
// import Mainbar from "./components/chatbot";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/homepage" element={<Mainpage />} />
        <Route path="/monitor-dashboard" element={<Monitordashboard />} />
        <Route path="/employee-attendence-page" element={<Employeeattendence />} />
        <Route path="/attendence-history-page" element={<Attendencehistory />} />

        <Route path="/tabs" element={<Reacttabs />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/Joblist" element={<Joblist />} />
        <Route path="/interviewlist" element={<Interviewshedulelist/>}/>
        <Route path="/details/:id" element={<InterviewDetails />} />
        <Route path="/interview-details/:id" element={<Inntervieweedetails />} />
        <Route path="/Joblist" element={<Joblist />} />
        <Route path="/smarttable" element={<SmartDataTable />} />
        <Route path="/leave-types" element={<Leavetypes />} />
        <Route path="/leave-balance" element={<Leavebalance/>} />
        <Route path="/leave-request" element={<Leaverequest/>} />
        <Route path="/all-employees" element={<Allemployees/>} />
        <Route path="/add-employees" element={<Addemployees/>} />
        <Route path="/employee-profile" element={<EmployeeDashboard/>} />
        <Route path="/employee-dashboard" element={<EmpDashboardPage/>} />
        <Route path="/employee-tasks" element={<EmployeeTasks/>} />
        <Route path="/employee-warning" element={<Warningemployee/>} />
        <Route path="/attendence" element={<Attendence/>} />
        <Route path="/employee-list-page" element={<Employeelistpage/>} />
        <Route path="/file" element={<FileUploader/>} />
        <Route path="/hr-dashboard" element={<Hrdashboard/>} />

        {/* <Route path="/component" element={<Apple/>} />
        <Route path="/chatbot" element={<Mainbar/>} /> */}
        {/* <Route path="/example" element={<Example/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;




// // import React, { useState } from 'react';

// // const SidebarItem = ({ label, children }) => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleDropdown = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <div className="w-full">
// //       <div 
// //         onClick={toggleDropdown} 
// //         className="cursor-pointer p-2 bg-gray-700 text-white hover:bg-gray-600">
// //         {label}
// //       </div>
// //       {isOpen && (
// //         <div className="ml-4 bg-gray-800 text-white">
// //           {children}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // const Sidebar = ({ isOpen, toggleSidebar }) => {
// //   return (
// //     <div 
// //       className={`fixed inset-y-0 left-0 transform ${
// //         isOpen ? 'translate-x-0' : '-translate-x-full'
// //       } w-64 bg-gray-900 text-white transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}>
// //       <button 
// //         className="block md:hidden p-4 text-white" 
// //         onClick={toggleSidebar}>
// //         Close
// //       </button>
// //       <div className="p-4">
// //         <SidebarItem label="Item 1">
// //           <div className="p-2">Dropdown 1</div>
// //           <div className="p-2">Dropdown 2</div>
// //         </SidebarItem>
// //         <SidebarItem label="Item 2">
// //           <div className="p-2">Dropdown 1</div>
// //           <div className="p-2">Dropdown 2</div>
// //         </SidebarItem>
// //         <SidebarItem label="Item 3">
// //           <div className="p-2">Dropdown 1</div>
// //           <div className="p-2">Dropdown 2</div>
// //         </SidebarItem>
// //       </div>
// //     </div>
// //   );
// // };

// // const App = () => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// //   const toggleSidebar = () => {
// //     setIsSidebarOpen(!isSidebarOpen);
// //   };

// //   return (
// //     <div className="flex">
// //       <button 
// //         className="p-4 md:hidden text-white bg-blue-500" 
// //         onClick={toggleSidebar}>
// //         Menu
// //       </button>
// //       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
// //       <div className="flex-1 p-4">
// //         {/* Main content goes here */}
// //         <h1 className="text-2xl">Main Content</h1>
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;




// // import { useState } from 'react';
// // import { AiOutlineMenu } from 'react-icons/ai';

// // const SidebarItem = ({ label, children }) => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleDropdown = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <div className="w-full">
// //       <div
// //         onClick={toggleDropdown}
// //         className="cursor-pointer p-2 bg-gray-700 text-white hover:bg-gray-600"
// //       >
// //         {label}
// //       </div>
// //       {isOpen && (
// //         <div className="ml-4 bg-gray-800 text-white">
// //           {children}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // const Sidebar = ({ isOpen }) => {
// //   return (
// //     <div
// //       className={`fixed inset-y-0 left-0 transform ${
// //         isOpen ? 'translate-x-0' : '-translate-x-full'
// //       } w-64 bg-gray-900 text-white transition-transform duration-300 ease-in-out md:translate-x-0`}
// //     >
// //       <div className="p-4">
// //         <SidebarItem label="Item 1">
// //           <div className="p-2">Dropdown 1</div>
// //           <div className="p-2">Dropdown 2</div>
// //         </SidebarItem>
// //         <SidebarItem label="Item 2">
// //           <div className="p-2">Dropdown 1</div>
// //           <div className="p-2">Dropdown 2</div>
// //         </SidebarItem>
// //         <SidebarItem label="Item 3">
// //           <div className="p-2">Dropdown 1</div>
// //           <div className="p-2">Dropdown 2</div>
// //         </SidebarItem>
// //       </div>
// //     </div>
// //   );
// // };

// // const SidebarPage = () => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// //   const handleMouseEnter = () => {
// //     setIsSidebarOpen(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setIsSidebarOpen(false);
// //   };

// //   return (
// //     <div className="flex">
// //       <div
// //         className="relative"
// //         onMouseEnter={handleMouseEnter}
// //         onMouseLeave={handleMouseLeave}
// //       >
// //         <button className="p-4 text-white bg-blue-500">
// //           <AiOutlineMenu size={24} />
// //         </button>
// //         {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} />}
// //       </div>
// //       <div className="flex-1 p-4">
// //         <h1 className="text-2xl">Main Content</h1>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SidebarPage;



// // import { useState } from 'react';
// // import { AiOutlineMenu } from 'react-icons/ai';

// // const SidebarItem = ({ label, children }) => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleDropdown = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <div className="w-full">
// //       <div
// //         onClick={toggleDropdown}
// //         className="cursor-pointer p-2 bg-gray-700 text-white hover:bg-gray-600"
// //       >
// //         {label}
// //       </div>
// //       {isOpen && (
// //         <div className="ml-4 bg-gray-800 text-white">
// //           {children}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // const Sidebar = () => {
// //   return (
// //     <div className="w-64 bg-gray-900 text-white">
// //       <div className="p-4">
// //         <SidebarItem label="Item 1">
// //           <div className="p-2">Dropdown 1</div>
// //           <div className="p-2">Dropdown 2</div>
// //         </SidebarItem>
// //         <SidebarItem label="Item 2">
// //           <div className="p-2">Dropdown 1</div>
// //           <div className="p-2">Dropdown 2</div>
// //         </SidebarItem>
// //         <SidebarItem label="Item 3">
// //           <div className="p-2">Dropdown 1</div>
// //           <div className="p-2">Dropdown 2</div>
// //         </SidebarItem>
// //       </div>
// //     </div>
// //   );
// // };

// // const SidebarPage = () => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// //   const handleMouseEnter = () => {
// //     setIsSidebarOpen(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setIsSidebarOpen(false);
// //   };

// //   return (
// //     <div className="flex">
// //       <div
// //         className="relative"
// //         onMouseEnter={handleMouseEnter}
// //         onMouseLeave={handleMouseLeave}
// //       >
// //         <button className="p-4 text-black font-bold bg-white  ">
// //           <AiOutlineMenu className='shadow-xl' size={24} />
// //         </button>
// //         <div
// //           className={`fixed inset-y-0 left-0 transform ${
// //             isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
// //           } w-64 bg-gray-900 text-white transition-transform duration-300 ease-in-out`}
// //         >
// //           <Sidebar />
// //         </div>
// //       </div>
// //       <div className="flex-1 p-4">
// //         <h1 className="text-2xl">Main Content</h1>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SidebarPage;













// import React from 'react';
// import image1 from './assets/immm.jpg'; // Import your image
// import image3 from './assets/bgimagee.jpg';// Import your image

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navbar */}
//       <header className="bg-white shadow-md fixed w-full z-10 top-0">
//         <nav className="flex items-center justify-between p-4 mx-auto max-w-screen-xl">
//           <div className="text-2xl font-bold text-black">
//             ONE<i className="text-blue-500">sol</i>
//           </div>
//           <div className="hidden md:flex space-x-4">
//             <button className="text-gray-700 hover:text-blue-500">home</button>
//             <button className="text-gray-700 hover:text-blue-500">create</button>
//             <button className="text-gray-700 hover:text-blue-500">about</button>
//           </div>
//           <div className="flex space-x-4">
//             <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">home</button>
//             <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50">Sign in</button>
//           </div>
//         </nav>
//       </header>

//       {/* Main Content */}
//       <main
//         className="relative flex flex-col items-center justify-center min-h-screen pt-20 bg-cover bg-center"
//         style={{ backgroundImage: `url(${image1})` }}
//       >
//         <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl bg-white bg-opacity-30 backdrop-blur-lg p-8 rounded-lg">
//           <p className="text-3xl font-mono text-gray-500 mb-2">Welcome To ONEsol!</p>
//           <p className="text-3xl font-sans text-red-300 mb-4">Many Problems, One Solution</p>
//           <div className="flex justify-center space-x-4">
//             <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">GO to Monitor</button>
//             <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50">Go To Dashboard</button>
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row justify-between w-full max-w-screen-xl mt-8 px-4">
//           <div className="flex-none mb-8 lg:mb-0">
//             <div className="bg-white rounded-lg overflow-hidden shadow-md">
//               <img
//                 src={image3}
//                 alt="Sample"
//                 className="w-80 h-60 object-cover transition-transform duration-300 transform hover:scale-105"
//               />
//             </div>
//           </div>

//           <div className="flex-1">
//             <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-lg p-8 shadow-md">
//               <h2 className="text-2xl font-bold mb-4">Multiple Problems, One Solution</h2>
//               <p className="text-gray-600 text-base border border-gray-300 rounded-lg p-4">
//                 We create high-quality, responsive websites tailored to your business needs. From initial design concepts to final implementation, our team ensures your website is not only visually appealing but also user-friendly and optimized for search engines.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="w-full h-96 bg-white bg-opacity-10 mt-8 flex items-center justify-center">
//           <h3 className="text-lg text-gray-700">Scrollable Content Here</h3>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;


