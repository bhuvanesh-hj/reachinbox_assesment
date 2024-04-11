import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className='bg-black max-w-[1440px] h-screen m-auto text-white  flex flex-col justify-between'>
        <div className=" w-full h-16 flex justify-center items-center border border-slate-800">
          <Image src="/Login/Logo 12.png" alt="reachinbox_logo" width={156.77} height={24} />
        </div>
        <div className='w-auto flex justify-center items-center'>
          <div className=' m-auto w-[460px] h-auto md:h-[312px]  bg-[#111214] rounded-2xl border border-gray-700  py-6  px-10 '>
            <div className=' w-[380px] m-auto'>
              <p className=' text-xl mb-6 text-center font-sans'>Create a new account</p>
              <Link href={"https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-assesment-mmlt-38z531iuh-bhuvanesh-hjs-projects.vercel.app/dashboard"}>
                <div className='rounded border border-gray-500 h-12 flex justify-center items-center gap-2.5  mb-12'>
                  <Image src="/Login/Frame.png" alt="google_logo" className='bg-black rounded-full mt-0.5' width={16} height={21} />
                  <p className='text-sm text-gray-400 cursor-pointer font-sans'> Sign Up with Google </p>
                </div>
              </Link>
              <p className='w-[195px] h-12 bg-gradient-to-r from-[rgb(69,94,219)] to-[rgb(5,35,189)]
 rounded m-auto text-center pt-2.5 mb-6 cursor-pointer font-sans'>Create an Account</p>
              <p className='text-base text-center text-gray-500 font-sans'>Already have an account? <span className="font-normal text-[#C1C2C5]">Sign In</span></p>
            </div>

          </div>
        </div>
        <div className=" w-full h-8 flex justify-center items-center border border-slate-800">
          <p className='h-5 text-gray-600 text-xs'> ©️ 2023 Reachinbox. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}
