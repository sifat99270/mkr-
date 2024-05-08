"use client"

import { useState } from "react"
import Fetch from "./featcher";
import { useRouter } from "next/navigation";
import { error, success } from "@/utility/tost";

export default function Login({submit}){
    const [obj,setObj]=useState({
        email:"",
        password:""
    })
    const router=useRouter();
    const [Loading,setLoading]=useState(false);
    function onChange(name, value) {
        setObj((pre) => {
          return {
            ...pre,
            [name]: value,
          };
        });
      }
  return (
    <form className=" w-80 flex p-4 shadow-md border border-slate-300 rounded-md shadow-gray-200 bg-white flex-col gap-4 justify-center items-center mx-auto">
      <p className=" font-serif text-xl text-green-600">Login</p>
      <div className="input">
        <input onChange={(e) => {
          onChange("email", e.target.value);
        }} required value={obj['email']} type="text" className=" w-72 p-2 border  border-gray-300 outline-none rounded-md  focus:border-green-400" />
        <p className="p">email</p>
      </div>
      <div className="input">
        <input onChange={(e) => {
          onChange("password", e.target.value);
        }} required value={obj['password']} type="password" className=" w-72 p-2 border border-gray-300 outline-none rounded-md  focus:border-green-400" />
        <p className="p">password</p>
      </div>
      {Loading ? <Fetch /> : <button onClick={async (e) => {
        setLoading(true);
        const res = await submit(obj);
        console.log(res);
        if (res['status'] === "success") {
          success('login success');
          router.push('/dashboard');
        } else {
          error('login failure');
        }
        setLoading(false)
      }} className="p-1 hover:bg-gray-300 border border-slate-300 rounded-md font-bold text-sm " type="submit">Submit</button>}
    </form>
    )
}