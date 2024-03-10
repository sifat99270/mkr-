"use client"
import { error, success } from "@/utility/tost";
import { useState } from "react"
import Fetch from "./featcher";

export default function Contact({submit}){

    const [obj,setObj]=useState({
        name:"",
        email:"",
        number:"",
        subject:"",
        message:""
    });
    const [loading,setLoading]=useState(false);
    function change(name,value){
        setObj((pre)=>{
            return{
                ...pre,
                [name]:value
            }
        })
    }
    return(
        <div className=" w-full">
        <p className="font-extrabold text-center p-2 text-2xl ">CONTACT US</p>
        <form onSubmit={async(e)=>{
            e.preventDefault();
            setLoading(true);
            const result=await submit(obj);
            if(result['status']==="success"){
                success('message sent successfully');
            }else{
                error('message sent fail');
            }
            setLoading(false);
        }} className=" p-4  rounded-md shadow-md shadow-slate-400 w-11/12 md:w-3/4 flex flex-col md:flex-row gap-4 md:flex-wrap mx-auto">
          <div className="md:ws input">
            <input value={obj['name']}
            onChange={(e)=>{
                change('name',e.target.value)
            }}
              required
              className="w-11/12 border border-green-300 rounded-md p-2 outline-none focus:border-fuchsia-400 focus:shadow-pink-500"
              type="text"
            />
            <p className="p">name</p>
          </div>
          <div className="md:ws input">
            <input value={obj['email']}
            onChange={(e)=>{
                change('email',e.target.value)
            }}
              required
              className="w-11/12 border border-green-300 rounded-md p-2 outline-none focus:border-fuchsia-400 focus:shadow-pink-500"
              type="email"
            />
            <p className="p">email</p>
          </div>
          <div className="md:ws input">
            <input value={obj['number']}
            onChange={(e)=>{
                change('number',e.target.value)
            }}
              required
              className="w-11/12 border border-green-300 rounded-md p-2 outline-none focus:border-fuchsia-400 focus:shadow-pink-500"
              type="number"
            />
            <p className="p">number</p>
          </div>
          <div className="md:ws input">
            <input value={obj['subject']}
            onChange={(e)=>{
                change('subject',e.target.value)
            }}
              required
              className="w-11/12 border border-green-300 rounded-md p-2 outline-none focus:border-fuchsia-400 focus:shadow-pink-500"
              type="text"
            />
            <p className="p">subject</p>
          </div>
          <div className="md:w-full input">
            <input value={obj['message']}
            onChange={(e)=>{
                change('message',e.target.value)
            }}
              required
              className="w-full  border border-green-300 rounded-md p-2 outline-none focus:border-fuchsia-400 focus:shadow-pink-500"
              type="text"
            />
            <p className="p">message</p>
          </div>
          
         {loading ? <Fetch />: <button
            className="px-2 py-1 rounded-md font-bold mx-auto border border-emerald-500"
            type="submit"
          >
            Submit
          </button>}
        </form>
      </div>
    )
}