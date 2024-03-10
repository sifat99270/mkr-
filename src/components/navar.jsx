"use client";

import Logo from "@/utility/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [decition, setDecition] = useState(false);
  const buttonRef = useRef();
  const imgRef = useRef();
const path=usePathname();
  useEffect(() => {
    if (decition) {
      imgRef.current.classList.replace("bi-justify", "bi-x-lg");
      buttonRef.current.classList.replace("-right-full", "right-0");
    } else {
      imgRef.current.classList.replace("bi-x-lg", "bi-justify");
      buttonRef.current.classList.replace("right-0", "-right-full");
    }
  }, [decition]);
  return (
    <div className="  w-full z-50 flex items-center fixed top-0 h-16 bg-white shadow-lg shadow-gray-200 rounded-md ">
      <div className="p-4  duration-1000 font-extrabold text-2xl lg:w-1/4 flex relative ">
        <img src="/lab.jpg" className=" w-10 h-10 rounded-full" />
        <Logo />
        <div className={ path.startsWith("/user/account") ? " flex gap-1 justify-center items-center bg-clip-text text-transparent bg-gradient-to-r background bg-f ml-auto px-4 cursor-pointer hi": "bg-clip-text flex gap-1 justify-center items-center   ml-auto px-4 cursor-pointer hi" } href="/user/account">
          account
          <i className="bi bi-chevron-down text-xs "></i>
        </div>
        
        <div className="  opacity-0  absolute right-0 border rounded-md border-gray-300 w-44  flex-col mkrtz justify-center items-center gap-1 text-lg top-12 flex  fl hover:flex hover:opacity-100 p-1  duration-1000  bg-white ">
          <Link href="/user/account/new" className={path==='/user/account/new'?"bg-green-100 w-full text-center   cursor-pointer hover:bg-green-100":`w-full text-center   cursor-pointer hover:bg-green-100`}>new</Link>
          <hr className=" h-0.5 w-full bg-gray-400"/>
          <Link href="/user/account/add" className={path==='/user/account/add'?"bg-green-100 w-full text-center   cursor-pointer hover:bg-green-100":`w-full text-center   cursor-pointer hover:bg-green-100`}>add</Link>
          <hr className=" h-0.5 w-full bg-gray-400"/>
          <Link href="/user/account/my" className={path==='/user/account/my'?"bg-green-100 w-full text-center   cursor-pointer hover:bg-green-100":`w-full text-center   cursor-pointer hover:bg-green-100`}>my</Link>
          <hr className=" h-0.5 w-full bg-gray-400"/>

        </div>
      </div>
      <div
        ref={buttonRef}
        className=" lg:w-3/4 flex flex-col lg:flex-row lg:justify-evenly lg:items-center  lg:static lg:bg-white items-center p-2 absolute top-16  w-full rounded-md shadow-md shadow-gray-100 bg-slate-200 ml-auto gap-4 text-xl font-bold text-black -right-full transition-all"
      >
        <Link className=" hover:text-pink-300 p-2 relative mkrho transition-all" href="/user">
          <div className={path==='/user'? ` bg-clip-text text-transparent bg-gradient-to-r background`:""}>Home</div>
          <div className=" transition-all w-0 h-0.5 bg-green-300 absolute"></div>
        </Link>
        <Link className="hover:text-pink-300 p-2 mkrho relative transition-all" href="/user/work">
          <div className={path==='/user/work'? ` bg-clip-text text-transparent bg-gradient-to-r background`:""}>Work</div>
          <div className=" transition-all w-0 h-0.5 bg-green-300 absolute"></div>
        </Link>
        <Link className="hover:text-pink-300 p-2 mkrho relative transition-all"  href="/user/service">
          <div className={path==='/user/service' ? `bg-clip-text text-transparent background`:""}>Service</div>
          <div className=" transition-all w-0 h-0.5 bg-green-300 absolute"></div>
        </Link>
        <Link className="hover:text-pink-300 p-2 mkrho relative transition-all" href="/user/about">
          <div className={path==='/user/about'? ` bg-clip-text text-transparent background `:""}>About</div>
          <div className=" transition-all w-0 h-0.5 bg-green-300 absolute"></div>
        </Link>
        <Link className="hover:text-pink-300 p-2 mkrho relative transition-all" href="/user/contact">
          <div className={path==='/user/contact'? `  bg-clip-text text-transparent background`:""}>Contact</div>
          <div className=" transition-all w-0 h-0.5 bg-green-300 absolute"></div>
        </Link>
      </div>
      <div
        onClick={() => {
          if (decition) {
            setDecition(false);
          } else {
            setDecition(true);
          }
        }}
        className=" p-3 cursor-pointer ml-auto text-3xl lg:hidden"
      >
        <i ref={imgRef} className="bi bi-justify "></i>
      </div>
    </div>
  );
}
