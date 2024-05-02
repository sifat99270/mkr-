"use client"
import Input from "@/utility/input";
import { useEffect, useRef, useState } from "react";
import Fetch from "./featcher";
import { error, success } from "@/utility/tost";
export default function Add({fun,data}){
    const [obj,setObj]=useState({
        name   : "",
        hazira  : '0',
        rate  : '0',
        khoraki : "0",
        barti   : "0",
        gotoMas  : "0",
    })
    const [loading,setLoading]=useState(false);
    const [mot,setMot]=useState('0');
    const[paona,setPaona]=useState("0");
   const[monthId,setMonthId]=useState(0);
   const scrollRef=useRef();
   const [scrollDec,setScrollDec]=useState(true);
const heightRef=useRef();
const addHeightRef=useRef();
   function test(){
    if(scrollDec){
      scrollRef.current.scrollLeft=-scrollRef.current.clientWidth
      scrollRef.current.style.height=addHeightRef.current.clientHeight+50+"px"
     }else{
      scrollRef.current.scrollLeft=scrollRef.current.clientWidth
      scrollRef.current.style.height=heightRef.current.clientHeight+50+"px"
     }
   }
   useEffect(()=>{
    scrollRef.current.style.height=addHeightRef.current.clientHeight+50+"px"
   },[])
   useEffect(()=>{
    window.addEventListener('resize',test);

    return ()=>{
      window.removeEventListener('resize',test)
    }
})
   function scrollLeft(id){ 
    setScrollDec(false);
    setMonthId(id)
    scrollRef.current.scrollLeft=scrollRef.current.clientWidth
    scrollRef.current.style.height=heightRef.current.clientHeight+50+"px"
   };
   function scrollRight(){
    console.log(addHeightRef.current.clientHeight)
    setScrollDec(true);
    scrollRef.current.scrollLeft=-scrollRef.current.clientWidth
    scrollRef.current.style.height=addHeightRef.current.clientHeight+50+"px"
   }
    useEffect(() => {
        setMot((parseInt(obj["hazira"]) * parseInt(obj["rate"])).toString());
        setPaona(
          (
            (parseInt(mot) +
            parseInt(obj["gotoMas"])) -
            (parseInt(obj["khoraki"]) + parseInt(obj["barti"]))
          ).toString()
        );
      }, [obj,mot]);

     async function pass(){
        setLoading(true);
        const data={
            name   : obj['name'],
            hazira  : obj['hazira'],
            rate  : obj['rate'],
            mot:mot,
            khoraki : obj['khoraki'],
            barti   : obj['barti'],
            gotoMas  :obj['gotoMas'],
            paona:paona,
            monthId:monthId
        }
        const result=await fun(data);
        if(result['status']==='success'){
            success("add successfull")
        }else{
            error("add fail")
        }
        setLoading(false)
      }
    return(
        <div ref={scrollRef} className="flex w-screen overflow-hidden relative py-4">
          <div ref={addHeightRef} className=" absolute flex justify-center items-center w-screen  flex-col gap-2 ">
          {data.map((item)=>{
                return(
                    <div onClick={()=>{
                      scrollLeft(item['id'])
                    }} key={item['id']} className="w-11/12 md:w-3/4 flex gap-2 rounded-md shadow-md shadow-gray-400 p-2 cursor-pointer" href="/user/account/see">
                    <div className=" w-1/2 rounded-lg shadow-md shadow-slate-500 p-2 text-center font-extrabold text-emerald-400">{item['name']}</div>
                    <div className="w-1/2  rounded-lg shadow-md shadow-slate-500 p-2 text-center font-extrabold text-emerald-400">{item['year']}</div>
                    <div><i className=" text-2xl bi bi-box-arrow-in-right"></i></div>
                </div>
                )
            })}
          </div>
            <div ref={heightRef}  className="w-screen  absolute -right-full">
              <div className="p-2 " onClick={scrollRight}><i className="bi bi-arrow-left-square-fill text-2xl cursor-pointer ml-2 "></i></div>
            <form className="flex flex-col md:flex-row w-full gap-4 md:gap-2 p-2">
           <Input wid="wis"  type="text" name="name" set={setObj} textName="name" />
            <Input wid="wis" type="number" name="hazira" set={setObj} textName="hazira" />
            <Input wid="wis" type="number" name="rate" set={setObj} textName="rate" />
            <div className="relative w-3/4 md:wis">
            <input readOnly  value={mot} 
            type="text" required className=" w-full outline-none border border-slate-600 md:p-2 p-1 rounded-sm shadow-md shadow-slate-500 font-bold  focus:border-green-400"  />
            <p className=" font-bold absolute -top-3 bg-white left-1  ">mot</p>
        </div>
            <Input wid="wis" type="number" name="khoraki" set={setObj} textName="khoraki" />
            <Input wid="wis" type="number" name="barti" set={setObj} textName="barti" />
            <Input wid="wis" type="number" name="gotoMas" set={setObj} textName="gotoMas" />
            <div className="relative w-3/4 md:wis">
            <input readOnly  value={paona} 
            type="text" required className=" w-full outline-none border border-slate-600 md:p-2 p-1 rounded-sm shadow-md shadow-slate-500 font-bold  focus:border-green-400"  />
            <p className=" font-bold absolute -top-3 bg-white left-1  ">paona</p>
        </div>
            
           </form>
           {loading?<Fetch />:<button onClick={pass} className="px-2 py rounded-md mt-2 font-bold hover:bg-emerald-400 mx-auto flex justify-center items-center border border-emerald-400 z-10">ADD</button>}
            </div>
        </div>
    )
}