import { ChevronDown } from 'lucide-react'
import React, { MouseEventHandler } from 'react'
import Mode from './mode'

interface headerProps {
  currentMode: Boolean,
  userName: String | null,
  onClick?: MouseEventHandler<HTMLDivElement>
}

const Header: React.FC<headerProps> = ({ currentMode, userName, onClick }) => {
  return (
    <div className={` h-[64px] flex justify-between py-4 pl-8 ${currentMode ? "bg-[#1F1F1F]" : "bg-white"} border ${currentMode ? "border-gray-700" : "border-gray-300"} `}>
      <p className={`w-full text-left text-xl font-semibold ${currentMode ? "text-white-900" : "text-black-900"} `}>Onebox</p>
      <div className='w-[300px] h-7 mr-5 flex justify-center items-center gap-5'>
        <Mode currentMode={currentMode} onClick={onClick} />
        <div className='flex justify-center items-center gap-2'>
          <p className='text-[14px] font-semibold'>{userName?.slice(1, 10)} Workspace </p>
          <span> <ChevronDown /></span>
        </div>
      </div>
    </div>
  )
}

export default Header