import Button from "@/utility/button";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const fs=require('fs');
import Image from "next/image";
const prisma=new PrismaClient();
async function submit(id){
    "use server"
    const del=await prisma.service.delete({
        where:{
            id:id
        }
    })
    revalidatePath('/dashboard/servicedelete');
    if(del['id']){
        fs.promises.unlink(`public/${del['img']}`);
        return {status:"success"}
    }else{
        return {status:"fail"}
    }
}

async function getData(){
try{
    const res=await prisma.service.findMany();
return res;
}catch(e){
    return [];
}
}
export default async function page(){
    const data=await getData();
    return(
       <div className="flex flex-col gap-4 ">
        {data.map((item)=>{
            return(
                <div key={item['id']} className=" bg-white  justify-evenly items-center w-11/12 font-bold flex p-2 rounded-md shadow-md shadow-slate-400">
                <p className=" font-extrabold text-3xl ">{item['name']}</p>
                <Image className=" w-16 h-16 object-cover rounded-full" src={`/${item['img']}`} width={20} height={20} alt="img"/>
                <div className="w-2/6" >
                <Button submit={submit} id={item['id']} />

                </div>
            </div>
            )
        })}
       </div>
    )
}