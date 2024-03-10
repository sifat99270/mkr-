"use client"

import { useRef, useState } from "react";
import { error, success } from "./tost";

export default function Button({submit,id}){
    const [scaleState,setScalestate]=useState(false);
    const scalRef=useRef()
    function scaleSee(){
  
    }
    return(
        <div ref={scalRef}   onClick={(e)=>{
            if(scaleState){
                setScalestate(false)
            }else{
                setScalestate(true)
            }
            }} className="text-xl cursor-pointer relative "><i className="bi bi-trash text-green-600"></i>
        <div className={scaleState?` absolute w-full p-2  bg-slate-400 rounded-md shadow-sm shadow-white z-50 scale-100 top-0 left-0 `:` absolute w-full  bg-slate-400 rounded-md shadow-sm shadow-white z-50  scale-0`} >
            <p className=" text-xs">do you want to delete this item</p>
            <div className="flex text-xs gap-2 p-2 " >
            <div onClick={async(e)=>{
            const res=await submit(id);
            if(res['status']==="success"){
                success("successfully deleted")
            }else{
                error("delete fail")
            }
        }} className=" flex p-1 rounded-md border border-green-400 ">yes</div>
            <div onClick={(e)=>{
            if(scaleState){
                setScalestate(false)
            }else{
                setScalestate(true)
            }
            }} className=" flex justify-between p-1 rounded-md border border-green-400" >no</div>
            </div>
        </div>
        
        </div>
    )
}