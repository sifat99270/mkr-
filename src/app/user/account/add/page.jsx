
import Add from "@/components/add";
import Scalaton from "@/components/scalaton";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { Suspense } from "react";

async function dataSubmit(obj){
    "use server"

    const header=headers();
    const id=header.get('id');
    const res=await fetch(`${process.env.HOST}/api/accounting/mkrcreateperson`,{
        method:"POST",
        headers:{
            'content-type':"application/json",
            id:id
        },
        body:JSON.stringify(obj)

    })
    const result=await res.json();
    return result;
}

async function getData(){
    
   try{
    const header=headers();
    const id=header.get('id');
    const res=await fetch(`${process.env.HOST}/api/accounting/mkrcreatemonth`,{
        headers:{
            id:id
        },
        cache:"no-store"
    })
   
    const monthData=await res.json();
    return monthData['data']
   }catch(e){
    return  [];
   }
}
export default async function page(){
const month=await getData();
    return(
        
            <div className="mb-10 flex justify-center items-center flex-col"> 
            <Suspense fallback={<Scalaton />} >
          <Add fun={dataSubmit} data={month} />
          </Suspense>
        </div>
       
    )
}