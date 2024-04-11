import React, { MouseEventHandler, ReactNode } from 'react'

interface tabProps {
  color: string;
  currentMode: Boolean;
  present: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
}

const Tab: React.FC<tabProps> = ({ color, currentMode, present, onClick, children }) => {
  return (
    <div className={`p-1 rounded cursor-pointer ${currentMode && present ? 'bg-[#2F3030]' : ''} ${!currentMode && present ? "bg-gray-200" : ''}`} onClick={onClick}>
      {children}
    </div>
  )
}

export default Tab