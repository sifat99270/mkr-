import Login from "@/components/login";
import { cookies } from "next/headers";
async function submit(obj) {
    "use server";
    const res = await fetch(`${process.env.HOST}/api/user/mkrlogin`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "content-type": "application/json",
      },
      cache: "no-store",
    });
    const result=await res.json();
    if(result['status']==="success"){
      const cookie=cookies().set('token',result['data']['token'],{
        httpOnly: true
      });
    }
    return result;
  }
export default async function page(){
    return(
        <div>
            <Login submit={submit} />
        </div>
    )
}
