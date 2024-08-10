import React, { useEffect, useState } from 'react';
import Header from './headers';
import Image from '../../assets/images.png' // Adjust the import path if needed
import Checkinbutton from './checkinbutton';
import CheckOutButton from './checkoutpage';
import BackgroundImage from '../../assets/background-image.webp'
import axios from 'axios';
import '../../App.css'
import { useNavigate } from 'react-router-dom';

const Page = () => {
  const navigate = useNavigate()

  // const handleLocation = () => {
  //   navigate('https://66b629d4b4d6400db224f4ec--scintillating-malabi-236885.netlify.app/')
  // }

  let content;
  const [data, setData] = useState([])
  const empCode = localStorage.getItem('empCode');
  const token = localStorage.getItem('token');
  const empNumber = localStorage.getItem('empNumber')
  const name = localStorage.getItem('name')
  const [isToggled, setIsToggled] = useState(false);
  const [baseImage, setBaseImage] = useState("");
  const designation = localStorage.getItem('designation')
  const [selectedFile, setSelectedFile] = useState(null);



  const fetchImageApi = async () => {
    try {
      const response = await axios.get('http://157.245.109.206:8093/emp-handler/image/get-emp-image?empCode=' + empCode);
      console.log("response", response.data);

      if (response.status === 202) {
        setIsToggled(true);
        setBaseImage("data:image/png;base64," + response.data.result);
      } else {
        setIsToggled(false);
      }
    } catch (error) {
      console.error("Error fetching image:", error);
      setIsToggled(false);
    }

  };


  useEffect(() => {
    fetchImageApi()
  }, [])


  return (
    <>
      {/* Header Component */}
      <Header />
      <div className="relative w-full h-screen"> {/* Full height container */}
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center p-1 "
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
          {/* Optional: Add a dark overlay to improve text readability */}
          <div className="absolute inset-0 "></div>
        </div>

        {/* Foreground Content */}
        <div className="relative flex items-center justify-start h-full ml-10 ">
          <div className="flex space-x-8">
            {/* Profile Card */}
            <div className="w-[420px] h-[470px] border border-blue-300 rounded-xl flex flex-col justify-center items-center relative z-10 bg-transparent filter bg-blur-sm" >
              <div className="w-[360px] h-[400px]">
                <div className="">
                  <div className="w-full ">
                    <div className='flex items-center justify-center'>
                      <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-green-500 bg-white overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center">
                          {isToggled ? (
                            <img src={baseImage} alt="Profile" className="w-full h-full object-cover" />
                          ) : (
                            <img src={Image} alt="Profile" className="w-full h-full object-cover opacity-50" />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex flex-col items-center mt-4">
                      <p className="text-xl text-black">{designation}</p>
                      <p className="text-2xl text-gray-400 font-bold">{name}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-center mt-8">
                  <div className="flex h-[45px] w-[270px] justify-center gap-2">
                    <Checkinbutton className='ml-2' />
                    <CheckOutButton />
                  </div>
                </div>
                <div className="w-full flex justify-center mt-4">
                  <div className="font-medium text-md m-2 rounded-lg h-[100px] w-[320px] border-2 border-gray-200 shadow-inner bg-opacity-90 p-3 text-gray-700">
                    Hi, You Can Mark Your Attendance at 10:00-10:40 am for <i className='text-blue-500 text-xl ' style={{ fontFamily: '', padding: '5px' }}>ON-TIME</i>
                  </div>
                </div>
                <div className="flex justify-center   ">
                  <a href="https://66b629d4b4d6400db224f4ec--scintillating-malabi-236885.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <div className="w-full">
                    <button className="border border-blue-300 px-12 py-1 rounded-lg  " style={{ fontFamily: 'Montserrat' }}>
                      Add Your Location
                    </button>

                    </div>
                    
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </>
  );
};

export default Page;
