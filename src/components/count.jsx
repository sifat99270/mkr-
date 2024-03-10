"use client"
import { useEffect, useRef, useState } from "react"

export default function Count() {
    const allRef = useRef();
    const [one, setOne] = useState();
    const [two, setTwo] = useState();
    const [three, setThree] = useState();
    function king(o,coun) {
        
        let i=0;
        let interval;
        interval=setInterval(()=>{
            count(o,coun);
        },50)
       function count(op,ok){
         
           i++
            if(i===coun){
            clearInterval(interval)
            if(op==='one'){
                setOne(i);
            }else if(op==='two'){
                setTwo(i)
            }else if(op==='three'){
                setThree(i)
            }
            }else{
                if(op==='one'){
                    setOne(i);
                }else if(op==='two'){
                    setTwo(i)
                }else if(op==='three'){
                    setThree(i)
                }
            }
       }
    }
      
   useEffect(()=>{
    const observer=new IntersectionObserver((item)=>{
        item.forEach((item1)=>{
            if(item1.isIntersecting){
                item1.target.classList.add('mkrani1')
            }
        })
    })
    allRef.current.childNodes.forEach((item) => {
        observer.observe(item);
    })
   },[])
    useEffect(() => {
        const observer = new IntersectionObserver((item, b) => {
            if (item[0]['isIntersecting']) {
                item.forEach((item1,index)=>{
                    if(item1['target']['classList']['contains']('visible')){
                        return;
                    }else{
                        item1['target']['classList']['add']('visible')
                       if(index===0){
                        king('one',100);
                       }else if(index===1){
                        king('two',600)
                       }else{
                        king('three',1000)
                       }
                    }
                })
               
            }
        })
       
        allRef.current.childNodes.forEach((item) => {
            observer.observe(item);
        })
    })
    return (
        <div ref={allRef} className="flex gap-3 justify-evenly items-center w-full md:flex-row flex-wrap p-1">
            <div className=" -translate-x-28 mkrleft w-56 bg-gray-300 rounded-md shadow-md shadow-slate-100 py-2 flex flex-col justify-center items-center">
                <div className="w-14 h-14 bg-slate-400 flex justify-center items-center rounded-md shadow-sm shadow-gray-50">
                    <i className="bi bi-people-fill text-2xl"></i>
                </div>
                <p className="font-bold text-2xl text-green-300 p-1">{one}<span>+</span></p>
                <p className=" font-bold text-lg text-cyan-500">members</p>
            </div>
            <div className=" scale-0  w-56 mkrscale bg-gray-300 rounded-md shadow-md shadow-slate-100 py-2 flex flex-col justify-center items-center">
                <div className="w-14 h-14 bg-slate-400 flex justify-center items-center rounded-md shadow-sm shadow-gray-50">
                    <i className="bi bi-hammer text-2xl"></i>
                </div>
                <p className="font-bold text-2xl text-green-300 p-1">{two}<span>+</span></p>
                <p className=" font-bold text-lg text-cyan-500">workers</p>
            </div>
            <div className=" translate-x-28 w-56 bg-gray-300 mkrleft rounded-md shadow-md shadow-slate-100 py-2 flex flex-col justify-center items-center">
                <div className="w-14 h-14 bg-slate-400 flex justify-center items-center rounded-md shadow-sm shadow-gray-50">
                    <i className="bi bi-person-arms-up text-2xl"></i>
                </div>
                <p className="font-bold text-2xl text-green-300 p-1">{three}<span>+</span></p>
                <p className=" font-bold text-lg text-cyan-500">supporters</p>
            </div>
        </div>
    )
}