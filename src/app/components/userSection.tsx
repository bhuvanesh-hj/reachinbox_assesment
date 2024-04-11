"use client";

import { Mail, MailOpen, Send } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context'

const UserSection: React.FC = () => {
  const { currentMode } = useAppContext();

  const [userName, setUserName] = useState<String | null>("");
  const [email, setEmail] = useState<String | null>("");

  useEffect(() => {
    setUserName(localStorage.getItem("reachinbox-userName"));
    setEmail(localStorage.getItem("reachinbox-email"));
  }, [])
  
  return (
    <div className='w-[287px] px-2  '>
      <div className={`w-[268px] h-[39px] my-4 py-[8px] px-[12px] rounded ${currentMode ? 'bg-[#222426]' : 'bg-[#ECEFF3]'}`} >
        <p className='w-[237px] text-[16px] text-left font-semibold '>Lead Details</p>
      </div>
      <div className='flex flex-col gap-5'>
        <div className='flex justify-between mx-3 text-[14px]'>
          <p>Name</p>
          <p className='text-[#B9B9B9]'>{userName}</p>
        </div>
        <div className='flex justify-between mx-3 text-[14px]'>
          <p>Contact No</p>
          <p className='text-[#B9B9B9]'>+91 123456789</p>
        </div>
        <div className='flex justify-between mx-3 text-[14px]'>
          <p>Email ID</p>
          <p className='text-[#B9B9B9]'>{email}</p>
        </div>
        <div className='flex justify-between mx-3 text-[14px]'>
          <p>Linkedin</p>
          <p className='text-[#B9B9B9]'>linkedin.com/in/timvadde/</p>
        </div>
        <div className='flex justify-between mx-3  text-[14px]'>
          <p>Company Name</p>
          <p className='text-[#B9B9B9]'>Reachinbox</p>
        </div>

      </div>

      <div className={`w-[268px] h-[39px] my-4 py-[8px] px-[12px] rounded ${currentMode ? 'bg-[#222426]' : 'bg-[#ECEFF3]'}`} >
        <p className='w-[237px] text-[16px] text-left font-semibold'>Activities</p>
        <div className="p-2 sm:p-5 font-sans font-semibold space-y-5">
          <div className={`${currentMode ? 'text-white' : 'text-black'} text-left text-lg `}>Campaign Name</div>
          <div className="text-xs flex gap-2">
            <div className={`${currentMode ? 'border-gray-300' : 'border-gray-700'} border-r pr-2 border-gray-500`}><span className="font-normal">3</span> Steps</div>
            <div><span className="font-normal">7</span> Days in Sequence</div>
          </div>

          <div className="w-full space-y-6">
            <div className="flex gap-4">
              <div className={`${currentMode ? 'bg-[#58595b]' : 'bg-[#dbe4ef]'}  rounded-3xl h-8 w-8 flex justify-center items-center`}>
                <Mail color={currentMode ? "white" : "black"} className='w-4' />
              </div>
              <div >
                <div className={` ${currentMode ? 'text-white' : 'text-black'} text-sm mb-1`}>Step 1: Email</div>
                <div className="flex items-center gap-2">
                  <Send color={currentMode ? "white" : "black"} className='w-3' />
                  <div className={`${currentMode ? 'text-gray-400' : 'text-black'} font-inter font-normal text-xs`}>Sent <span className="font-normal">7th, April</span></div>
                </div>
              </div>
            </div>
            <hr className='rotate-90 w-[40px] absolute ml-[-4px] bottom-[89px] text-[#263238]' />
            <div className="flex gap-4">
              <div className={`${currentMode ? 'bg-[#58595b]' : 'bg-[#dbe4ef]'}  rounded-3xl h-8 w-8 flex justify-center items-center`}>
                <Mail color={currentMode ? "white" : "black"} className='w-4' />
              </div>
              <div >
                <div className={`${currentMode ? 'text-white' : 'text-black'} text-sm mb-1`}>Step 2: Email</div>
                <div className="flex items-center gap-2">
                  <MailOpen color={currentMode ? "orange" : "black"} className='w-3' />
                  <div className={`${currentMode ? 'text-gray-400' : 'text-black'} font-inter font-normal text-xs`}>Opened <span className="font-normal">9th, April</span></div>
                </div>
              </div>
            </div>
            <hr className='rotate-90 w-[40px] absolute ml-[-4px] bottom-[17px] text-[#263238]' />
            <div className="flex gap-4">
              <div className={`${currentMode ? 'bg-[#58595b]' : 'bg-[#dbe4ef]'} rounded-3xl md h-8 w-8 flex justify-center items-center`}>
                <Mail color={currentMode ? "white" : "black"} className='w-4' />
              </div>

              <div >
                <div className={` ${currentMode ? 'text-white' : 'text-black'} text-sm mb-1`}>Step 3: Email</div>
                <div className="flex items-center gap-2">
                  <MailOpen color={currentMode ? "orange" : "black"} className='w-3' />
                  <div className={`${currentMode ? 'text-gray-400' : 'text-black'} font-inter font-normal text-xs`}>Opened <span className="font-normal">14th, April</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default UserSection