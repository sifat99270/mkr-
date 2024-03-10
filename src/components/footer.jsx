"use client"
import Logo from "@/utility/logo";
import Link from "next/link";
import Seelogin from "./seelogin";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Footer({submit,check}) {
const [login,setLogin]=useState(false);
const router=useRouter();
useEffect(()=>{
  if(check){
    setLogin(true);
  }
},[check])
  async function advance(){
    const data=await submit();
    if(data['status']==='success'){
      setLogin(false);
      router.replace('/')
    }
  }
  return (
    <div className=" flex flex-col  border border-green-400 shadow-md shadow-gray-200 rounded-md mx-auto w-full">
      <div className=" flex gap-2 lg:justify-evenly items-center flex-wrap sm:justify-start p-2">
      <div className="flex gap-2 w-[300px] justify-evenly items-center bg-gray-300 shadow-sm shadow-slate-50 p-2 rounded-md"> 
          <i className="animate-bounce bi bi-geo-alt text-xl text-pink-500 px-2 py-1 rounded-md bg-teal-300 "></i>
          <p className=" text-xs font-bold">Chilahati,Domar,Nilphamari,Rangpur</p>
        </div>
        <div className="flex gap-2 w-[300px] justify-evenly items-center bg-gray-300 shadow-sm shadow-slate-50 p-2 rounded-md"> 
        <i className="animate-bounce bi bi-envelope text-xl text-pink-500 px-2 py-1 rounded-md bg-teal-300 "></i>
          <p className="text-xs font-bold">mail to:rasifat@gmail.com</p>
        </div>
        <div className="flex gap-2 w-[300px] justify-evenly items-center bg-gray-300 shadow-sm shadow-slate-50 p-2 rounded-md"> 
        <i className="animate-bounce bi bi-phone-vibrate text-xl text-pink-500 px-2 py-1 rounded-md bg-teal-300"></i>
          <p className=" text-xs font-bold">call us 24/7:+8801890808496</p>
        </div>
      </div>
      <div className=" z-10 relative mx-auto w-11/12 h-[1px] bg-gray-500 before:w-[8px] before:h-[8px] before:absolute before:bg-green-400 before:-left-2 before:-top-0.5  before:z-50 mt-3 mb-3 after:w-[8px] after:h-[8px] after:absolute after:bg-green-400 after:-right-2 after:-top-0.5  after:z-50" > </div>
    <div className=" w-full rounded-md shadow shadow-slate-400 flex flex-col md:flex-row p-2 md:p-4 font-mono md:justify-start lg:justify-center md:gap-4 mb-4 gap-3 md:flex-wrap">
      <div className=" flex flex-col gap-1 md:p-2">
      <div className="flex gap-2 justify-start items-center">
      <img src="/lab.jpg" className=" w-10 h-10 rounded-full" />
        <Logo />
      </div>
        <p className=" font-extrabold">Lorem ipsum dolor sit amet</p>
        <p className=" text-xs font-bold">Stay connected with the community</p>
        <div className=" flex text-pink-500 gap-3 text-2xl">
          <i className="bi bi-facebook cursor-pointer"></i>
          <i className="bi bi-instagram cursor-pointer"></i>
          <i className="bi bi-youtube cursor-pointer"></i>
        </div>
      </div>
      <div className=" md:p-2">
        <p className=" font-black">Contact Us</p>
        <div className=" flex gap-2 ">
          <i className="bi bi-envelope text-xl text-pink-500"></i>{" "}
          <p>rasifat@gmail.com</p>
        </div>
        <div className="flex gap-2">
          <i className="bi bi-geo-alt text-xl text-pink-500"></i>
          <p>Chilahati,Domar,Nilphamari,Rangpur</p>
        </div>
      </div>
      <div className="md:p-2 flex flex-col">
        <p className="font-black">Company</p>
        <div className=" flex flex-col md:text-xs gap-1 p-1 ">
          <Link href="#">about us</Link>
          <Link href="#">Privacy Policy</Link>
          <Link  href="#">Terms and Conditions</Link>
        </div>
      </div>
      <div className="flex justify-start items-center flex-shrink-0">
        {login?<Seelogin submit={advance} />:<Link href="/user/login" className=" hover:bg-slate-300 font-extrabold border border-gray-400 p-1 rounded-md text-center"> Login</Link>}
      </div>
    </div>
    </div>
  );
}
