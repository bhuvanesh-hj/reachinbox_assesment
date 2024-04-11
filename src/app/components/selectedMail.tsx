import React from 'react'

interface SingleProps {
  currentMode: Boolean;
  subject: string;
  fromEmail: string;
  toEmail: string;
  body: string
}
const SelectedMail: React.FC<SingleProps> = ({ currentMode, subject, fromEmail, toEmail, body }) => {
  return (
    <div className={`mr-4 border ${currentMode ? "border-gray-700" : "border-gray-400"} ${currentMode ? "bg-[#141517]" : "bg-[#F9F9F9]"} rounded-t-[4px] rounded-r-[4px] p-3 text-[14px] flex flex-col gap-2.5 text-left mb-3`}>
      <div className='flex justify-between'>
        <p>{subject}</p>
        <p className='text-[#AEAEAE]'>20 june 2022 : 9:16AM</p>
      </div>
      <p className='text-[#AEAEAE]'>from : {fromEmail} </p>
      <p className='text-[#AEAEAE]'>to : {toEmail}</p>
      <p className={`${currentMode ? 'text-[#b7abab]' : 'text-[#2a2626]'} w-[500px]`}>{body?.split("<p>").join("").split("</p>").join("").split("<br/>").join("").split(",")[0]} ,</p>
      <p className={`${currentMode ? 'text-[#bfb4b4]' : 'text-[#2a2626]'} w-[500px]`}>{body?.split("<p>").join("").split("</p>").join("").split("<br/>").join("").split(",").slice(1)}</p>

    </div>
  )
}

export default SelectedMail