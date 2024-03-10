"use client"

import { useEffect, useRef } from "react"

export default function Hero(){
    const scrolRef=useRef();
    const absRef=useRef();
    const houseRef=useRef();

    

    useEffect(()=>{
        function scrolle(){
            if(window.scrollY<480){
                absRef.current.style.left=`${((window.scrollY/5)+128)}px`
                houseRef.current.style.transform =`translateY(${(window.scrollY/5)}px)`
            }
        }
        window.addEventListener('scroll',scrolle);
        return ()=>{
            window.removeEventListener('scroll',scrolle)
        }
    },[])
    return(
        <div ref={scrolRef} className=" mb-4 w-full  md:h-[400px] flex flex-col  md:flex-row overflow-hidden">
           <div className=" w-full md:w-1/2 flex flex-col justify-center">
           <p className=" text-xs md:text-lg text-slate-500 p-2 md:ml-6 w-full ">BUILD ROADS AND HOUSES PERFECTLY</p>
            <p  className=" p-2 md:ml-6 w-full font-bold text-2xl md:text-3xl lg:text-4xl">WE ARE ON EVERYONES FIRST CHOICE LIST </p>
           </div>
           <div className=" relative w-full md:w-1/2 h-full ">
            <img ref={houseRef} className=" duration-1000 w-full h-full object-center object-cover " src="/ld39.webp" />
            <img ref={absRef} className=" duration-1000  absolute left-32 lg:left-32 top-0 h-full object-center  w-1/2  " src="/ld2.webp" />
            
           </div>
        </div>
    )
}