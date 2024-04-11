"use client";

import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context'
import { ChevronDown, Reply } from 'lucide-react';
import SelectedMail from './selectedMail';
import SendReply from './sendReply';


interface replyProps {
  selectedMail: any
}

const MailSection: React.FC<replyProps> = ({ selectedMail }) => {
  const { currentMode } = useAppContext();
  const [showReply, setShowReply] = useState<Boolean>(false);


  useEffect(() => {

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'r' || event.key === "R") {
        setShowReply(true)
      }

    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showReply]);

  return (
    <div className={`w-[779.5px] h-[600px] border border-l-0 border-t-0 border-gray-700 flex justify-between flex-col ${currentMode ? "bg-black" : "bg-[#F4F6F8]"} `}>
      <div className=' relative w-[779px] flex justify-between flex-col ' >
        <div className={`flex h-[70px] border border-t-0 border-r-0 border-l-0 border-gray-700 py-3 pl-4 ${currentMode ? "bg-black" : "bg-[#FFFFFF]"}`}>
          <div className='text-left w-full'>
            <h1 className='text-[14px]'>{selectedMail && selectedMail[0]?.fromName}</h1>
            <p className='text-[12px] text-gray-400'>{selectedMail && selectedMail[0]?.toEmail}</p>
          </div>
          <div className='flex justify-end mr-6  gap-4 h-8 my-2 w-full text-right'>
            <div className={`flex justify-center gap-2 p-2 items-center border border-gray-700 rounded ${currentMode ? 'bg-[#222426]' : 'bg-[#F4F6F8]'}`} >
              <p className='w-5 h-5 rounded-full bg-[#444234]'>
                <p className='w-3 h-3 rounded-3xl bg-[#E6D162] mt-1 ml-1'></p>
              </p>
              <p className='text-[12px]'>Meeting Completed</p>
              <ChevronDown />
            </div>
            <div className={` flex justify-center p-2 items-center border border-gray-700 rounded ${currentMode ? 'bg-[#222426]' : 'bg-[#F4F6F8]'}`} >
              <p className='text-[12px]'>Move</p>
              <ChevronDown className='h-4' />
            </div>
            <div className={` flex justify-center gap-2 p-2 items-center border border-gray-700 rounded ${currentMode ? 'bg-[#222426]' : 'bg-[#F4F6F8]'}`} >
              <p className='mb-2'>...</p>
            </div>
          </div>
        </div>
        <div className='py-3 pl-4 '>
          <div className='flex justify-center align-middle'>
            <hr className={`w-[350px] ${currentMode ? "bg-[#F8FAFC33]" : "bg-black"} opacity-[20%] mt-5`} />
            <h2 className={`text-[10px] text-center mt-2 mb-3 ${currentMode ? "bg-[#171819]" : "bg-[#F4F6F8]"} w-[50px] h-[24px] p-1 rounded-sm`}>Today</h2>
            <hr className='w-[350px] bg-[#F8FAFC33] opacity-[20%] mt-5' />
          </div>

          {
            selectedMail?.length > 0 && selectedMail?.map((item: any) => {
              return <SelectedMail currentMode={currentMode} {...item} key={item.id} />
            })
          }
        </div>
        {
          showReply && <div className={`absolute mt-[134px] w-[760px] ml-4 rounded-2xl  z-10  overflow-hidden  h-[450px] ${currentMode ? 'bg-[#141517]' : 'bg-white'}  border border-gray-700`}>
            <SendReply currentMode={currentMode} selectedMail={selectedMail[0]} handleCancel={() => setShowReply(!showReply)} />
          </div>
        }
      </div>

      <div className='w-[136px] h-[40px] bg-gradient-to-r from-[rgb(69,94,219)] to-[rgb(5,35,189)] flex items-center ml-4 mb-3 rounded gap-1 flex justify-center items-center cursor-pointer' onClick={() => setShowReply(!showReply)}>
        <Reply color='white' />
        <button className='text-white'>Reply</button>
      </div>
    </div>
  )
}

export default MailSection