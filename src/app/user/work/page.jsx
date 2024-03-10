import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import AllLoading from "@/utility/allloading";
async function getData(){
    try{
        const res=await fetch(`${process.env.HOST}/api/public/work`) ;
        const result=await res.json();
        return result['data']
    }catch(e){
        return [];
    }
}
export default async function page(){
    const data=await getData();
    return(
      <Suspense fallback={<AllLoading />}>
          <div className=" text-black font  font-bold text-xl p-4 md:text-3xl lg:text-4xl">
        <p>The work we have completed so<br/><spna className=" text-green-500">far</spna></p>
        <p className=" text-pink-600 p-2 text-center">OUR WORKS</p>
        <div className="flex  flex-wrap gap-3 justify-center items-center">
            {data.map((item)=>{
                return(
                    <div key={item['id']} className=" relative w-80 md:rounded-lg md:shadow-gray-600 p-2 rounded-md shadow-md shadow-gray-200">
                <p className=" text-center text-2xl text-emerald-500">{item['name']}</p>
                <p className="text-center text-sm md:text-xs p-1">{item['title']}</p>
                <Image className=" w-11/12 mx-auto h-44 object-cover rounded-md shadow-md shadow-gray-200" src={`/${item['img']}`} width={20} height={20} alt="img" />
                <div className=" mkrtext w-full text-xs max-h-20  p-2  ">{item['longDes']}</div>
                <Link  className=" mt-3 px-2 text-lg flex border mx-auto rounded-md hover:bg-fuchsia-500 border-cyan-500 w-28" href="#">Read more</Link>
            </div>
                )
            })}
        
          
        </div>
    </div>
      </Suspense>
    )
}