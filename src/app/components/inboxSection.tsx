"use client";

import { ChevronDown, RotateCw, Search } from 'lucide-react'

import InboxMailCard from "./inboxMailCard";
import axios from 'axios';

import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/router';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { useLocation } from 'react-router';

interface mailProps {
  handleChangeEmail: any
}

export const getMailList = (token: string) => {
  return (axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
    headers: {
      'authorization': `Bearer ${token}`
    }
  }).then((res) => res.data.data)
    .catch(err => console.log(err)))
};

const InboxSection: React.FC<mailProps> = ({ handleChangeEmail }) => {
  const { currentMode } = useAppContext();

  const [data, setData] = useState([]);

  // const location = use();

  let token: string

  const fetchData = () => {
    getMailList(token).then(res => {
      console.log(res)
    })
  }

  useEffect(() => {
    token = localStorage.getItem("reachinbox") || getToken();
    token = location.search.split("?token=").join("");
    console.log(token);
    if (token) {
      let ParseData = jwtDecode(token);
      localStorage.setItem("reachinbox", JSON.stringify(token));
      localStorage.setItem("reachinbox-userName", JSON.stringify((ParseData as any).user.firstName));
      localStorage.setItem("reachinbox-email", JSON.stringify((ParseData as any).user.email));
    }
    fetchData()
  }, []);

  function getToken(): string {
    try {
      const token = localStorage.getItem("reachinbox");
      return token ? JSON.parse(token) : "";
    } catch (e) {
      console.log("Error:", e);
      return "";
    }
  }


  return (
    <div className='w-[278px] h-screen gap-2 border-r border-l border-gray-700'>
      <div className='flex align-middle justify-normal gap-16'>
        <div className='flex w-[171px] h-[64px] flex-col'>
          <div className='p-[10px] gap-1 flex justify-start align-middle text-xl font-bold text-[#4285F4]'>
            <h2>All Inbox(s) </h2>
            <ChevronDown width={24} height={24} className='mt-1' />
          </div>
          <div>
            <p className='font-bold text-[14px] pl-2'>25/25<span className='font-light'> Inboxes selected</span></p>
          </div>
        </div>
        <div className={`w-[32px] h-[32px] mt-3 rounded-[4px] p-2 ${currentMode ? "bg-[#25262B]" : "bg-[#DFE3E8]"} flex justify-center`}>
          <RotateCw width={16} height={16} />
        </div>
      </div>
      <div className='mx-2 mt-3 pb-3 border border-t-0 border-l-0 border-r-0 border-gray-500'>
        <div className={`p-2 gap-2 border rounded w-[259px] border-[#FFFFFF1A] border-opacity-10 flex align-middle justify-start ${currentMode ? "bg-[#23272C]" : "bg-[#F4F6F8]"}`}>
          <Search />
          <input type='search' placeholder='Search' className={`bg-transparent outline-none placeholder: ${currentMode ? "text-[#FFFFFF33]" : "text-[#F4F6F8]"}`} />
        </div>
        <div className='px-[8px] py-[3px] gap-4 w-[275px] h-[32px] mt-1.5 flex align-middle'>
          <div className='w-[129px] h-[26px] gap-2.5 flex align-middle justify-start'>
            <div className={`w-[34px] h-[26px] rounded-2xl ${currentMode ? "bg-[#222426]" : "bg-[#ECECEC]"} flex justify-center align-middle`}>
              <span className='text-[#5C7CFA] w-[18px] h-[20px]'>26</span>
            </div>
            <p className='text-[14px] font-semibold flex align-middle pt-1'>
              New Replies
            </p>
          </div>
          <div className='flex gap-3.5 mt-1 ml-5'>
            <p className='text-[14px] font-semibold'>Newest</p>
            <ChevronDown color={`${currentMode ? "#E6E6E6" : "#172B4D"}`} />
          </div>
        </div>
      </div>
      <div>
        {/* {
          data?.length > 0 && data.map((item: any) => {
            return <div key={item.id}>
              <InboxMailCard currentMode={currentMode} threadId={1} id={1} fromEmail='bhvuvi@gmail.com' subject='Hello' handleChangeEmail={handleChangeEmail} />
            </div>
          })
        } */}
        <InboxMailCard currentMode={currentMode} threadId={1} id={1} fromEmail='bhvuvi@gmail.com' subject='Hello' handleChangeEmail={handleChangeEmail} />
      </div>
    </div>
  )
}

export default InboxSection