"use client";

import React, { useEffect, useState } from "react";

import SideBar from "../components/sidebar";
import Header from "../components/header";
import NoMessages from "../components/noMessages";
import { useAppContext } from "../context";



export default function Layout({ children }: { children: React.ReactNode }) {
  const [messagesTab, setMessagesTab] = useState(0);
  const [userName, setUserName] = useState<String | null>("");

  const { currentMode, setCurrentMode } = useAppContext();

  const handleChange = (num: number) => setMessagesTab(num);

  useEffect(() => {
    setUserName(localStorage.getItem("reachinbox-userName"));
  }, [currentMode])

  return (
    <div className={`w-full h-full m-auto max-w-[1440px] ${currentMode ? "bg-black" : "bg-white"} ${currentMode ? "text-white" : "text-black"} h-10 flex`}>
      <div className='w-[56px] h-screen '>
        <SideBar currentMode={currentMode} userName={userName?.slice(1,3)} handleChange={handleChange} messagesTab={messagesTab} />
      </div>
      <div className="w-full max-w-[1350]">
        <Header currentMode={currentMode} onClick={() => setCurrentMode(!currentMode)} userName={userName} />
        {messagesTab != 5 ? <NoMessages /> : children}
      </div>
    </div>
  )
}