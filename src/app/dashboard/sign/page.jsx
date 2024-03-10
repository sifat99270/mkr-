
import Sign from "@/components/sign";
import Test from "@/components/test";
import { cookies } from "next/headers";

async function submit(obj) {
  "use server";
  const res = await fetch(`${process.env.HOST}/api/user/mkrcheck`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "content-type": "application/json",
    },
    cache: "no-store",
  });
  const result=await res.json();
 if(result['status']==="success"){
  const cookie=cookies().set('check',result['data']['token'],{
    httpOnly: true
  });
 }
 return result;
}
async function king(){
  "use server"
  console.log('ok')
}

export default async function page() {
  return (
    <div>
      <Sign submit={submit} />
    </div>
  );
}
