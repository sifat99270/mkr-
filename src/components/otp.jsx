"use client"

import { useState } from "react"
import Fetch from "./featcher";
import { useRouter } from "next/navigation";
import { error, success } from "@/utility/tost";

export default function Otp({submit}){
    const [loading,setLoading]=useState(false);
    const [obj,setObj]=useState({
        otp:""
    })
    const router=useRouter();
    function onchange(name, value) {
        setObj((pre) => {
          return {
            ...pre,
            [name]: value,
          };
        });
      }
      async function test(){
        setLoading(true);
        const result=await submit(obj['otp']);
  if (result['status']==='success') {
          success("valid otp");
            router.push('/user/login');
        }else{
            error("invalid otp");
        }
        setLoading(false);

      }
    return(
        <form className=" w-80 flex p-4 shadow-md border border-slate-300 rounded-md shadow-gray-200 bg-white flex-col gap-4 justify-center items-center mx-auto">
          <p className=" font-serif text-xl text-green-600">Check otp</p>
           <div className="input">
           <input onChange={(e)=>{
            onchange("otp", e.target.value)
           }} required value={obj['otp']} type="number" className=" w-72 p-2 border  border-gray-300 outline-none rounded-md  focus:border-green-400" />
           <p className="p">enter otp</p>
           </div>
            {loading?<Fetch />:<button onClick={  (e)=>{
               test();
               
            }} className="p-1 hover:bg-gray-300 border border-slate-300 rounded-md font-bold text-sm " type="submit">Submit</button>}
        </form>
    )
}