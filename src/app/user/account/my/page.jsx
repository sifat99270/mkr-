import My from "@/components/my";
import Scalaton from "@/components/scalaton";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { Suspense } from "react";

async function getData() {
    const header = headers();
    const id = header.get('id');
    const res=await fetch(`${process.env.HOST}/api/accounting/mkrcreateperson`,{
        headers:{
            id:id
        },
        cache:"no-store"
    })
    const res1=await fetch(`${process.env.HOST}/api/accounting/mkrcreatemonth`,{
        headers:{
            id:id
        },
        cache:"no-store"
    })
    const persondata=await res.json();
    const monthData=await res1.json();
    return {
        month: monthData['data'],
        person: persondata['data']
    }
}
async function dataSubmit(obj){
    "use server"
    
    const header=headers();
    const id=header.get('id');
    const res=await fetch(`${process.env.HOST}/api/accounting/mkrpersonupdate`,{
        method:"POST",
        headers:{
            'content-type':"application/json",
            id:id
        },
        body:JSON.stringify(obj)

    })
    const result=await res.json();
    revalidatePath('/user/account/my');
    return result;
}
async function dataDelete(obj){
    "use server"
    
    const header=headers();
    const id=header.get('id');
    const res=await fetch(`${process.env.HOST}/api/accounting/mkrdeleteperson`,{
        method:"POST",
        headers:{
            'content-type':"application/json",
            id:id
        },
        body:JSON.stringify(obj)

    })
    const result=await res.json();
    revalidatePath('/user/account/my');
    return result;
}
export default async function page() {
    const data = await getData();
    return (
        <Suspense fallback={<Scalaton />} >
            <div className="w-screen">
            <My fun2={dataDelete} fun={dataSubmit} data={data['month']} person={data['person']} />
        </div>
        </Suspense>
    )
}