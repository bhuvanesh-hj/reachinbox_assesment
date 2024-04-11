import { CaseUpper, ChevronDown, ChevronsLeftRight, Eye, Image, Link2, Reply, Smile, UserMinus, X, Zap } from 'lucide-react'
import React, { MouseEventHandler, useEffect, useState } from 'react'
import axios from 'axios';

interface sendReplyProps {
  handleCancel: MouseEventHandler<HTMLDivElement>;
  currentMode: Boolean;
  selectedMail: any;
}

interface initalStateType {
  "toName": string,
  "to": string,
  "from": string,
  "fromName": string,
  "subject": string,
  "body": string
}

const initalState: initalStateType = {
  "toName": "",
  "to": "",
  "from": "",
  "fromName": "",
  "subject": "",
  "body": ""
}
const SendReply: React.FC<sendReplyProps> = ({ currentMode, handleCancel, selectedMail }) => {

  const [formData, setFormData] = useState(initalState);
  
  let token: string | null;


  useEffect(() => {
    token = localStorage.getItem("reachinbox");
    token = token ? JSON.parse(token) : "";
    console.log("token :-", token)

    setFormData({
      ...formData, toName: selectedMail.toName, fromName: selectedMail.fromEmail,
      to: selectedMail.toEmail, from: selectedMail.fromEmail
    })
  }, []);

  const postMail = (id: number, messages: any) => {
    return axios.post(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${id}`, messages, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        console.log("Posted:", res.data);
        return res.data;
      })
      .catch(err => {
        console.error("Error:", err);
        throw err;
      });
  };


  const handlesubmit = () => {
    console.log(formData, "data")
    postMail(selectedMail.threadId, formData).then((res: any) => {
      alert("Reply has been Sended")
    }).catch(err => console.log(err));

  }

  return (
    <div className='flex flex-col w-full h-full '>
      <div>
        <div className={`h-10 flex justify-between px-8 py-2 text-[16px]  ${currentMode ? 'bg-[#23272C]' : 'bg-white'}`}>
          <p>Reply</p>
          <p onClick={handleCancel} className='cursor-pointer'><X /></p>
        </div >
        <hr className='border-t border-gray-700' />
        <div className={`text-[12px] h-10 flex pt-2 px-8 py-2 h-7   items-center gap-2`} >
          <p className='text-gray-400'>To :- </p>
          <input type="text" placeholder='' value={formData.to} className={`${currentMode ? 'bg-[#141517]' : "bg-white"} outline-none`} onChange={(e) => setFormData({ ...formData, to: e.target.value })} />
        </div>
        <hr className='border-t border-gray-700' />
        <div className={`text-[12px] h-10 flex pt-2 px-8 py-2   h-7  items-center gap-2`} >
          <p className='text-gray-400'>From :- </p>
          <input type="text" placeholder='' value={formData.from} className={`${currentMode ? 'bg-[#141517]' : "bg-white"} outline-none`} onChange={(e) => setFormData({ ...formData, from: e.target.value })} />
        </div>
        <hr className='border-t border-gray-700' />
        <div className={`text-[12px] h-10 flex pt-2 px-8 py-2  h-7 items-center gap-2`} >
          <p className='text-gray-400'>Subject :- </p>
          <input type="text" placeholder='' value={formData.subject} className={`${currentMode ? 'bg-[#141517]' : "bg-white"} outline-none`} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
        </div>
        <hr className='border-t border-gray-700' />
        <div className={`text-[12px] p-2 text-left`}>
          <textarea placeholder='Hello John...' value={formData.body} className={`ml-6   h-[250px] w-[500px] outline-none ${currentMode ? 'bg-[#141517]' : 'bg-white'}`} onChange={(e) => setFormData({ ...formData, body: e.target.value })} />
        </div>
      </div>
      <div className='h-[54px] 0 w-full '>
        <hr className='border-t border-gray-700 mb-2' />
        <div className='flex text-[12px] gap-1'>
          <div className='w-[100px] h-8 bg-[#4B63DD]  flex items-center ml-4 mb-3 rounded gap-1 flex justify-center gap-2 cursor-pointer items-center'>
            <button className='text-white' onClick={handlesubmit}>Send</button>
            <ChevronDown color={"white"} />
          </div>
          <div className='w-[100px] h-8 flex items-center  mb-3 rounded gap-1 flex justify-center  cursor-pointer items-center'>
            <Zap className='h-4' />
            <button >Variables</button>
          </div>
          <div className='w-[120px] h-8  flex items-center  mb-3 rounded gap-1 flex justify-center  cursor-pointer items-center'>
            <Eye className='h-4' />
            <button >Preview Email</button>
          </div>
          <CaseUpper className='mt-1'/>
          <div className='flex justify-start align-middle gap-2 mt-1'>
            <Link2 size={20}/>
            <Smile size={20} />
            <UserMinus size={20} />
            <ChevronsLeftRight size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SendReply