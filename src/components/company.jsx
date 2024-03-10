 "use client"

import { useEffect, useRef } from "react"

 
 export default function Company(){
const fullRef=useRef();

useEffect(()=>{
    let observer= new IntersectionObserver((item)=>{
     
        item.forEach((item1)=>{
           if(item1.isIntersecting){
            item1.target.classList.add('mkrani');
           }
        })
    })
    fullRef.current.childNodes.forEach((item)=>{
        observer.observe(item)
                   })
},[])
    return(
        <div ref={fullRef} className="w-full flex justify-center items-center flex-wrap gap-3 transition-all overflow-hidden">
            <div className=" scale-0  mkrscaleani  w-80 bg-slate-200 rounded-md border p-2 flex justify-center items-center flex-col hover:border-emerald-600 hover:scale-105  transition-all">
                <img className=" rounded-lg object-cover object-center w-11/12 h-44"  src="/ark.png" alt="img" />
                <p  className="text-sm p-2 text-emerald-500">Ataur Rahman Khan Ltd (ARK Group)</p>
            </div>
            <div className="  translate-x-28 mkrscaleani1   w-80 bg-slate-200 rounded-md border p-2 flex justify-center items-center flex-col hover:border-emerald-600 hover:scale-105  transition-all">
                <img className=" rounded-lg object-cover object-center w-11/12 h-44"  src="/max.jpeg" alt="img" />
                <p className="text-sm p-2 text-emerald-500">MAX Group</p>
            </div>
            <div className=" -translate-x-28 mkrscaleani2  w-80 bg-slate-200 rounded-md border p-2 flex justify-center items-center flex-col hover:border-emerald-600 hover:scale-105  transition-all">
                <img className=" rounded-lg object-cover w-11/12 h-44 "  src="/jil.jpeg" alt="img" />
                <p className=" text-sm p-2 text-emerald-500">jamil iqbal khan limited</p>
            </div>
            <div className="mkrscaleani3  translate-y-28  w-80 bg-slate-200 rounded-md border p-2 flex justify-center items-center flex-col hover:border-emerald-600 hover:scale-105  transition-all">
                <img className=" rounded-lg  object-cover w-11/12  h-44"  src="/bas.jpeg" alt="img" />
                <p className="text-sm p-2 text-emerald-500">Bashundhara Group</p>
            </div>
        </div>
    )
  }