
"use client"
import { error, success } from "@/utility/tost";
import { data } from "autoprefixer";
import { useState,useEffect,useRef } from "react"


export default function See({data,submit,submit2,ind}){
    
    const [obj,setObj]=useState({
        name   : data['name'],
        hazira  : data['hazira'],
        rate  : data['rate'],
        khoraki : data['khoraki'],
        barti   : data['barti'],
        gotoMas  : data['gotoMas'],
    })
    const [loading,setLoading]=useState(false);
    const [mot,setMot]=useState('0');
    const[paona,setPaona]=useState("0");
   const[monthId,setMonthId]=useState(0);
    const [decition,setDecition]=useState(true);
    const updateSliderRef=useRef();
    const deleteSlideRef=useRef();
   
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

      function onchange(name,value){
        return(
            setObj((pre)=>{
                return{
                    ...pre,
                    [name]:value
                }
            })
        )
      }
      async function pass(){
        setLoading(true);
        const datas={
            name   : obj['name'],
            hazira  : obj['hazira'],
            rate  : obj['rate'],
            mot:mot,
            khoraki : obj['khoraki'],
            barti   : obj['barti'],
            gotoMas  :obj['gotoMas'],
            paona:paona,
            id:data['id']
        }
        const result=await submit(datas,ind);
        if(result['status']==='success'){
            setDecition(true);
            success("update successfull")
        }else{
            error("update fail")
        }
        setLoading(false)
      }
      async function pass2(){
        setLoading(true);
        const datas={
            id:data['id']
        }
        const result=await submit2(datas,ind);
        if(result['status']==='success'){
            setDecition(true);
            success("delete successfull")
        }else{
            error("delete fail")
        }
        setLoading(false)
      }

    return(
        <div className="relative ">
           {decition? <div className="w-full flex gap-px tex font-bold p-0 md:p-1 md:text-lg">
            <div className="seeper border h-5 md:h-8 border-slate-400 p-1 rounded-sm  text-center ">{data['name']}</div>
            <div className="seeper border h-5  md:h-8 border-slate-400 p-1 rounded-sm  text-center ">{data['hazira']}</div>
            <div className="seeper border h-5  md:h-8 border-slate-400 p-1 rounded-sm text-center ">{data['rate']}</div>
            <div  className="seeper border h-5  md:h-8 border-slate-400 p-1 rounded-sm  text-center ">{data['mot']}</div>
            <div className="seeper border h-5  md:h-8 border-slate-400 p-1 rounded-sm text-center ">{data['khoraki']}</div>
            <div className="seeper border h-5  md:h-8  border-slate-400 p-1 rounded-sm text-center ">{data['barti']}</div>
            <div className="seeper border h-5  md:h-8 border-slate-400 p-1 rounded-sm text-center ">{data['gotoMas']}</div>
            <div className="seeper border h-5  md:h-8 border-slate-400 p-1 rounded-sm text-center ">{data['paona']}</div>
            {loading?<div onClick={()=>{
                setDecition(true)
            }} className="edit animate-spin  text-center flex items-center justify-center font-bold text-sm cursor-pointer"><i className="bi bi-arrow-clockwise"></i></div>:<><div onClick={()=>{
                setDecition(false)
            }} className="edit text-center flex items-center justify-center  font-bold text-sm cursor-pointer "><i className="bi bi-pencil-square"></i></div>
            <div onClick={()=>{
                deleteSlideRef.current.classList.replace('-right-full',"right-0");
                deleteSlideRef.current.classList.replace('scale-0',"scale-100");
            }} className="edit  text-center flex items-center justify-center font-bold text-sm cursor-pointer"><i className="bi bi-trash3"></i></div></>}
        </div>:<div className="w-full flex gap-px tex font-bold p-0 md:p-1 md:text-lg">
            <input onChange={(e)=>{
                onchange('name',e.target.value)
            }} value={obj['name']} className="seeper outline-none border h-5 md:h-8 border-slate-400 p-1 rounded-sm  text-center " />
            <input onChange={(e)=>{
                onchange('hazira',e.target.value)
            }} value={obj['hazira']} className="seeper outline-none border h-5  md:h-8 border-slate-400 p-1 rounded-sm  text-center " />
            <input onChange={(e)=>{
                onchange('rate',e.target.value)
            }} value={obj['rate']} className="seeper outline-none border h-5  md:h-8 border-slate-400 p-1 rounded-sm text-center " />
            <input readOnly value={mot} className="seeper outline-none border h-5  md:h-8 border-slate-400 p-1 rounded-sm  text-center " />
            <input onChange={(e)=>{
                onchange('khoraki',e.target.value)
            }} value={obj['khoraki']} className="seeper outline-none border h-5  md:h-8 border-slate-400 p-1 rounded-sm text-center " />
            <input onChange={(e)=>{
                onchange('barti',e.target.value)
            }} value={obj['barti']} className="seeper outline-none border h-5  md:h-8  border-slate-400 p-1 rounded-sm text-center " />
            <input onChange={(e)=>{
                onchange('gotoMas',e.target.value)
            }} value={obj['gotoMas']} className="seeper outline-none border h-5  md:h-8 border-slate-400 p-1 rounded-sm text-center " />
            <input readOnly value={paona} className="seeper outline-none border h-5  md:h-8 border-slate-400 p-1 rounded-sm text-center " />
            
           {loading? <div onClick={()=>{
                setDecition(true)
            }} className="edit animate-spin  text-center flex items-center justify-center font-bold text-sm cursor-pointer"><i className="bi bi-arrow-clockwise"></i></div>: <><div onClick={()=>{
                // console.log(updateSliderRef.current.classList);
                updateSliderRef.current.classList.replace('-right-full',"right-0");
                updateSliderRef.current.classList.replace('scale-0',"scale-100");
            }} className="edit text-center flex items-center justify-center  font-bold text-sm cursor-pointer "><i className="bi bi-save-fill"></i></div> <div onClick={()=>{
                setDecition(true)
            }} className="edit  text-center flex items-center justify-center font-bold text-sm cursor-pointer"><i className="bi bi-arrow-repeat"></i></div></>}
        </div>}
       <div ref={updateSliderRef} className=" scale-0 transition-all absolute -right-full z-20 top-0 bg-stone-200 w-48 p-1 rounded-md  ">
        <p className="text-xs p-0.5">do you want to update this item</p>
       <div  className="flex gap-2"> <p onClick={()=>{
          updateSliderRef.current.classList.replace('right-0',"-right-full");
          updateSliderRef.current.classList.replace('scale-100',"scale-0");
                pass();
            }} className="px-1 rounded-md  border-emerald-400 border bg-slate-50 hover:bg-zinc-500">yes</p> <p onClick={()=>{
                updateSliderRef.current.classList.replace('right-0',"-right-full");
            }} className="px-1 rounded-md  border-emerald-400 border bg-slate-50 hover:bg-zinc-500">no</p></div>
       </div>
       <div ref={deleteSlideRef} className=" scale-0 transition-all absolute -right-full z-20 top-0 bg-stone-200 w-48 p-1 rounded-md  ">
        <p className="text-xs p-0.5">do you want to delete this item</p>
       <div  className="flex gap-2"> <p onClick={()=>{
          deleteSlideRef.current.classList.replace('right-0',"-right-full");
          pass2();
            }} className="px-1 rounded-md  border-emerald-400 border bg-slate-50 hover:bg-zinc-500">yes</p> <p onClick={()=>{
                deleteSlideRef.current.classList.replace('right-0',"-right-full");
                deleteSlideRef.current.classList.replace('scale-100',"scale-0");
            }} className="px-1 rounded-md  border-emerald-400 border bg-slate-50 hover:bg-zinc-500">no</p></div>
       </div>
       
        </div>
    )
}