
import { cookies, headers } from "next/headers";
import { VerifyToken } from "@/utility/token";
import Otp from "@/components/otp";
async function submit(otp){
    "use server";
    const check= cookies().get('check')['value'];
   
    const verify=await VerifyToken(check);
    const id=verify['id'];
    const res = await fetch(`${process.env.HOST}/api/user/mkrcheck?otp=${otp}`, {
      headers: {
        "content-type": "application/json",
        id:id
      },
      cache: "no-store",
    });
    
    const result=await res.json();
    if(result['status']==="success"){
      const cookie=cookies().delete('check');
    }
    return result;
}
export default async function page(){
    return(
        <div>
           <Otp submit={submit} />
        </div>
    )
}