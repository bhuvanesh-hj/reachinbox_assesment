import { Moon, Sun } from 'lucide-react'
import React, { MouseEventHandler } from 'react'

interface ModeProps {
  currentMode: Boolean,
  onClick?: MouseEventHandler<HTMLDivElement>
}

const Mode: React.FC<ModeProps> = ({ currentMode, onClick }) => {
  return (
    <div className={`w-[51px] h-[24px] cursor-pointer border rounded-[80px] py-[3px] px-[5px] gap-[7px] border-[#DADEE1] text-[#E9EAEC] flex ${!currentMode ? "bg-[#E9EAEC]" : ""}`} onClick={onClick}>
      {!currentMode ? <Moon color='orange' width={18} height={18} /> : <div className='w-[16px] h-[16px] bg-[#888686] rounded-full'></div>}
      {currentMode ? <Sun color='orange' width={18} height={18} /> : <div className='w-[16px] h-[16px] bg-white rounded-full'></div>}
    </div>
  )
}

export default Mode