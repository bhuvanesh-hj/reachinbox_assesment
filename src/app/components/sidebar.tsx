"use client"

import { BarChart2, Home, InboxIcon, List, Mail, Send, UserRoundSearchIcon } from 'lucide-react';
import React, { useState } from 'react'
import Tab from "./tab"
import Image from 'next/image';

interface sideBarProps {
  currentMode: Boolean,
  userName: String | undefined,
  handleChange: any,
  messagesTab: number
}

const Sidebar: React.FC<sideBarProps> = ({ currentMode, userName, handleChange, messagesTab }) => {
  const [presentTab, setPresentTab] = useState<number>(0);

  const handleTabClick = (num: number) => {
    setPresentTab(num);
    handleChange(num);
  };

  return (
    <div className={`w-full h-full flex flex-col justify-between ${currentMode ? "bg-[#101113]" : "bg-white"}   px-1 `}>
      <div>

        <div className='w-12 h-[70px] flex justify-center items-center'>
          {currentMode ? <Image src="/dashboard/Logo_white.svg" alt="logo" width={26} height={24} /> : <Image src="/dashboard/Logo_dark.svg" alt="logo" width={26} height={24} />}
        </div>
        <div className='pt-12 px-2  flex flex-col gap-8 '>

          <Tab currentMode={currentMode} color={currentMode ? 'white' : 'black'} present={presentTab === 0} onClick={() => handleTabClick(0)}>
            <Home color={currentMode ? 'white' : "black"} />
          </Tab>
          <Tab currentMode={currentMode} color={currentMode ? 'white' : 'black'} present={presentTab === 1} onClick={() => handleTabClick(1)}>
            <UserRoundSearchIcon color={currentMode ? 'white' : "black"} />
          </Tab>
          <Tab currentMode={currentMode} color={currentMode ? 'white' : 'black'} present={presentTab === 2} onClick={() => handleTabClick(2)}>
            <Mail color={currentMode ? 'white' : "black"} />
          </Tab>
          <Tab currentMode={currentMode} color={currentMode ? 'white' : 'black'} present={presentTab === 3} onClick={() => handleTabClick(3)}>
            <Send color={currentMode ? 'white' : "black"} />
          </Tab>
          <Tab currentMode={currentMode} color={currentMode ? 'white' : 'black'} present={presentTab === 4} onClick={() => handleTabClick(4)}>
            <List color={currentMode ? 'white' : "black"} />
          </Tab>
          <Tab currentMode={currentMode} color={currentMode ? 'white' : 'black'} present={presentTab === 5} onClick={() => handleTabClick(5)}>
            <InboxIcon color={currentMode ? 'white' : "black"} />
          </Tab>
          <Tab currentMode={currentMode} color={currentMode ? 'white' : 'black'} present={presentTab === 6} onClick={() => handleTabClick(6)}>
            <BarChart2 color={currentMode ? 'white' : "black"} />
          </Tab>
        </div>

      </div>

      <div className='w-12 h-[70px] flex justify-center items-center'>
        <p className={`w-8 bg-green-900 h-8 rounded-3xl text-center pt-1 pr-1 text-white pl-1 uppercase`} >{userName}</p>
      </div>
    </div>
  )
}

export default Sidebar