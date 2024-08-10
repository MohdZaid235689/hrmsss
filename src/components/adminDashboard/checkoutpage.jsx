import React, { useState, useEffect } from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import '../../App.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CheckOutButton = () => {


    const navigate = useNavigate()
    const [isPending, setIsPending] = useState(true);
    const [checkOutTime, setcheckOutTime] = useState('')
    const [attendanceApplied, setAttendanceApplied] = useState(false);
    const [checkInTime, setCheckInTime] = useState('');
    const [status, setStatus] = useState('Pending');
    const [workingHours, setWorkingHours] = useState(0)

    const todayDate = new Date().toISOString().split('T')[0];

    const [selectedWorkMode, setSelectedWorkMode] = useState('');

    // Handle change event for selecting work mode
    const handleChange = (event) => {
        setSelectedWorkMode(event.target.value);
        console.log("mode", selectedWorkMode)
    };

    const empNumber = localStorage.getItem('empNumber');
    const empCode = localStorage.getItem('empCode');

    const handleApplyAttendance = async () => {


        const getLocation = () => {
            return new Promise((resolve, reject) => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            resolve({
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                            });
                        },
                        (error) => {
                            console.log("Error fetching location:", error);
                            resolve({}); // Return an empty object if location fetch fails
                        }
                    );
                } else {
                    resolve({});
                }
            });
        };

        const location = await getLocation();

        const data = {
            name: localStorage.getItem('name'),
            empNumber: empNumber, // Replace with actual employee number
            empCode: empCode, // Replace with actual employee code

            latitude: location.latitude,
            longitude: location.longitude,

            remoteWork: localStorage.getItem('remoteWork'),
            description: description
        };
        console.log("checkout", data)


        const response = await axios.post('http://157.245.109.206:8093/emp-handler/attendence/check-out', data)
        console.log(response.data)
        if (response.status === 202) {
            // setIsPending(false)
            localStorage.setItem('checkout-Time', response.data.result.checkIn)
            localStorage.setItem('remoteWork', response.data.result.remoteWork)
            setCheckInTime(response.data.result.checkIn);
            setcheckOutTime(response.data.result.checkOut)
            setWorkingHours(response.data.result.workingHours)
            console.log(response);
            navigate("/attendence")
            setIsPending(false);
        }
        else {
            alert("you are already mark attendence");
        }
    };

    const apidata = async () => {

        const response = await axios.post('http://157.245.109.206:8093/emp-handler/attendence/today-emp-atttendence?empCode=' + empCode)
        if (response.status === 202) {
            if (response.data.result.checkOut != null) {
                setIsPending(false)
            }
            setSelectedWorkMode(response.data.result.remoteWork)
            setCheckInTime(response.data.result.checkIn);
            setcheckOutTime(response.data.result.checkOut)
            setWorkingHours(response.data.result.workingHours)
            console.log("data", response.data);
        }

    }

    useEffect(() => {
        const savedWorkMode = localStorage.getItem('workMode');
        if (savedWorkMode) {
            setSelectedWorkMode(savedWorkMode);
        }
    }, [])

    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <button className='font-medium text-gray-500  px-4 py-2 rounded-full border-2 border-blue-500' onClick={apidata}>Check-out</button>
                    {/* <button className="text-md font-medium text-green-800 bg-green-200 rounded-full ">
                        Check-out
                    </button> */}
                </SheetTrigger>
                <SheetContent className="max-h-screen overflow-auto">
                    <SheetHeader>
                        <SheetTitle>
                            <div className="flex justify-center items-center   text-white h-[30px] mt-5 rounded-lg" style={{ backgroundColor: "#00BCD4" }}>
                                CHECK-Out PAGE
                            </div>
                        </SheetTitle>
                        <SheetDescription>
                            <div className="mt-4">
                                <div className="mb-4">
                                    <div className="flex gap-4 mb-4">
                                        <div className="flex items-center">
                                            <label className="flex items-center mr-4">
                                                <input
                                                    type="radio"
                                                    name="workMode"
                                                    value="WFH"
                                                    className="form-radio h-5 w-5 "

                                                    checked={selectedWorkMode === "WFH"}
                                                    disabled
                                                />
                                                <span className="ml-2  ">WFH</span>
                                            </label>
                                            <label className="flex items-center mr-4">
                                                <input
                                                    type="radio"
                                                    name="workMode"
                                                    value="WFF"
                                                    className="form-radio h-5 w-5 "
                                                    checked={selectedWorkMode === "WFF"}
                                                    disabled
                                                />
                                                <span className="ml-2  ">WFF</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="workMode"
                                                    value="WFO"
                                                    className="form-radio h-5 w-5 "
                                                    checked={selectedWorkMode === "WFO"}
                                                    disabled
                                                />
                                                <span className="ml-2  ">WFO</span>
                                            </label>
                                        </div>
                                    </div>







                                    <label className="block  mb-2 " htmlFor="date">
                                        Check-In Time
                                    </label>
                                    <input

                                        value={checkInTime}
                                        className="border rounded p-2 w-full "
                                        readOnly
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block  mb-2" htmlFor="employee-number">
                                        Employee Number
                                    </label>
                                    <input
                                        type="text"
                                        id="employee-number"
                                        className="border rounded p-2 w-full "
                                        value={localStorage.getItem('empNumber')}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block   mb-2" htmlFor="description">
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        className="border rounded p-2 w-full "
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>

                                {<div className="flex justify-end">
                                    <button
                                        onClick={handleApplyAttendance}
                                        className={`px-4 py-2 rounded border text-black ${isPending
                                            ? 'bg-white border-blue-300 text-blue-300 '
                                            : 'border-2 border-blue-300 text-blue-300  cursor-not-allowed filter blur-xs'
                                            }`}
                                        disabled={!isPending}
                                    >
                                        Check-out Button
                                    </button>
                                </div>}
                                <div className="flex justify-center items-center   text-white h-[30px] mt-3 mb-3 text-xl font-medium rounded-lg" style={{ backgroundColor: "#00BCD4" }}>
                                    Attendance Status
                                </div>

                                <div>
                                    {isPending ? (
                                        <p className=' '>Attendance pending...</p>
                                    ) : (
                                        <div >
                                            <div className="mb-1 flex items-center">
                                                <label className="block  mb-2 w-1/2  ">
                                                    Check-in Time
                                                </label>
                                                <div className="w-2/3">
                                                    : {isPending ? '--' : checkInTime}
                                                </div>
                                            </div>

                                            <div className="mb-1 flex items-center">
                                                <label className="block   mb-2 w-1/2 ">
                                                    Check-out Time
                                                </label>
                                                <div className=" w-2/3">
                                                    : {isPending ? '--' : checkOutTime}
                                                </div>
                                            </div>

                                            <div className="mb-4 flex items-center">
                                                <label className="block   mb-2 w-1/2">
                                                    Working Hours
                                                </label>
                                                <div className="  w-2/3">
                                                    : {isPending ? '--' : workingHours}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default CheckOutButton;
