"use client"
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Seelogin({submit}){
    const scaleRef=useRef();
    function scalebs(){
        if(scaleRef.current.classList.contains("scale-0")){
            scaleRef.current.classList.replace("scale-0","scale-100")
        }else{
        scaleRef.current.classList.replace("scale-100","scale-0")
        }
    }
    return(
        <div>
            <div onClick={scalebs} className=" cursor-pointer">
                <Image className="  cursor-pointer  w-12 h-12" src='/nophoto.png' width={20} height={20} alt="img" />
            </div>
            <div ref={scaleRef} className=" py-1 transition-all scale-0 font-bold text-lg bg-slate-400  p-0.5 text-center flex flex-col gap-2 text-emerald-300 rounded-sm mt-2">
            
                <div className=" hover:bg-indigo-200 bg-white  rounded-sm shadow-sm shadow-gray-200 cursor-pointer">NAME</div>
                <Link href='/dashboard' className=" hover:bg-indigo-200 bg-white px-2  rounded-sm shadow-sm shadow-gray-200 cursor-pointer">DASHBOARD</Link>
                <div onClick={submit} className="bg-white hover:bg-indigo-200 rounded-sm shadow-sm shadow-gray-200 cursor-pointer ">LOGOUT</div>
            </div>
        </div>
    )
}