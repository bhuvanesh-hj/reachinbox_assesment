"use client";
``
import React from 'react'

import { Send } from 'lucide-react'

type inboxProps = {
  currentMode: Boolean;
  fromEmail: string;
  subject: string;
  id: number;
  handleChangeEmail: any,
  threadId: number
}
const InboxEmailCard: React.FC<inboxProps> = ({ currentMode, threadId, id, fromEmail, subject, handleChangeEmail }) => {
  return (
    <div className='w-full pt-3 pb-3 px-2 cursor-pointer' onClick={() => handleChangeEmail(threadId)}>
      <div className='flex gap-1 justify-between text-[14px] font-medium'>
        <p >{fromEmail}</p>
        <p className='text-gray-400'> Mar 7</p>
      </div>
      <p className='text-xs text-gray-400'>{subject}</p>
      <div className='flex text-[10px] gap-3 mt-2'>
        <div className={`w-[83px] h-[20px] py-[3px] px-[8px] flex justify-around rounded-2xl ${currentMode ? 'bg-[#25262B]' : 'bg-[#e1e7ee]'} gap-2`} >
          <p className='w-3 h-3 rounded-3xl bg-green-600 mt-[1px]'></p>
          <p className={`${currentMode ? 'text-green-400' : 'text-blue-700'} text-[10px]`}>Interested</p>
        </div>
        <div className={`w-[112px] h-[20px] py-[3px] px-[8px] flex justify-around rounded-2xl ${currentMode ? 'bg-[#25262B]' : 'bg-[#e1e7ee]'}`} >
          <Send color={currentMode ? "#AEAEAE" : "black"} className='h-[12px] mt-[1px] w-[12px]' />
          <p className='text-[10px] font-semibold'>Campaign Name</p>
        </div>

      </div>
    </div>
  )
}

export default InboxEmailCard