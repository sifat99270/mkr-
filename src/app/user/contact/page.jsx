
import Contact from "@/components/contact";

async function submit(obj){
  "use server"
  const res=await fetch(`${process.env.HOST}/api/public/contact`,{
    method:"POST",
    body:obj
  })
  const data=await res.json();
  return data;
}

export default function page() {
  return (
  <Contact submit={submit} />
  );
}
