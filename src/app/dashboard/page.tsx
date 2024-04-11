"use client";
import React, { useEffect, useState } from 'react'

import InboxSection from '../components/inboxSection'
import MailSection from '../components/mailSection'
import UserSection from '../components/userSection'
import axios from 'axios';
import { Modal } from '../components/modal';


const getMailList = (token: string | null) => {
  return (axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
    headers: {
      'authorization': `Bearer ${token}`
    }
  }).then((res) => res.data.data)
    .catch(err => console.log(err)))
};

// let token = localStorage.getItem('reachinbox');

const Dashboard = () => {
  const [selectedMail, setSelectedMail] = useState<Object>({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      // const res = await getMailList(token);
      // if (res?.length > 0) {
      //   setSelectedMail(res[0]);
      // } else {
      //   console.log("Email not Found");
      // }
    } catch (error: any) {
      console.error('Error:', error);
    }
  };

  const handleChangeEmail = (id: number) => {
    setSelectedMail([{
      fromName: "Bhuvanesh HJ", fromEmail: "bhuvi@gmail.com", toEmail: "Bhuvaneshhj@gmail.com", subject: "New Product Launch", body: `Hi {FIRST_NAME},

I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups.Our aim is to help you enhance the user experience and boost the visual appeal of your software products.
`}])
  }

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const deleteEmail = () => {
    setSelectedMail([{}])

    alert(`The message has been Deleted Successful`);

    closeModal()


  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "d" || event.key === "D") {
        openModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className='flex'>
      <InboxSection handleChangeEmail={handleChangeEmail} />
      <MailSection selectedMail={selectedMail} />
      <UserSection />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className='w-[443px] h-[249px] text-white text-center rounded-lg'>
          <div className=' h-full '>
            <h1 className='text-[24px] font-bold mt-8'>Are you Sure ?</h1>
            <p className='mt-8 text-[#E8E8E8]'>Your selected email will be deleted.</p>
            <div className='mt-8 flex justify-center gap-5 '>
              <button className='w-[120px] h-12 bg-[#25262B] rounded' onClick={closeModal}>Cancel</button>
              <button className='w-[140px] h-12 bg-gradient-to-r from-[#FA5252] to-[#A91919] rounded' onClick={deleteEmail}>Delete</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Dashboard