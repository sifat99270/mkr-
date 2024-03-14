
import Choose from "@/components/choose";
import Company from "@/components/company";
import Count from "@/components/count";
import Fetch from "@/components/featcher";
import Hero from "@/components/hero";
import Slider from "@/components/slider";
import AllLoading from "@/utility/allloading";
import Loader from "@/utility/loader";
import { Suspense } from "react";

export default function Home() {
  
  return (
    <main className="w-full flex flex-col gap-8 "> 

<Suspense fallback={<Fetch />} >
<Hero />
<Choose />
   <div className="  w-screen lg:h-[500px] md:h-[400px] h-[250px]    relative">
   
   <Slider />
   </div>
   <Company />
   <Count />
</Suspense>
   {/* <div className=" flex w-full flex-wrap justify-center items-center gap-4 ">
            <div className=" allload w-80 h-60  rounded-md shadow-md shadow-gray-600 flex justify-center items-center flex-col gap-2">
                <div className=" loadchild w-11/12 h-10 bg-zinc-800 rounded-md"></div>
                <div className=" loadchild w-1/2 bg-slate-400 h-10 rounded-md"></div>
                <div className=" loadchild w-11/12 h-32 bg-slate-300 rounded-md "></div>
               
            </div>
            <div className=" allload w-80 h-60  rounded-md shadow-md shadow-gray-600 flex justify-center items-center flex-col gap-2">
                <div className=" loadchild w-11/12 h-10 bg-zinc-800 rounded-md"></div>
                <div className=" loadchild w-1/2 bg-slate-400 h-10 rounded-md"></div>
                <div className=" loadchild w-11/12 h-32 bg-slate-300 rounded-md "></div>
               
            </div>
            <div className=" allload w-80 h-60  rounded-md shadow-md shadow-gray-600 flex justify-center items-center flex-col gap-2">
                <div className=" loadchild w-11/12 h-10 bg-zinc-800 rounded-md"></div>
                <div className=" loadchild w-1/2 bg-slate-400 h-10 rounded-md"></div>
                <div className=" loadchild w-11/12 h-32 bg-slate-300 rounded-md "></div>
               
            </div>
            <div className=" allload w-80 h-60  rounded-md shadow-md shadow-gray-600 flex justify-center items-center flex-col gap-2">
                <div className=" loadchild w-11/12 h-10 bg-zinc-800 rounded-md"></div>
                <div className=" loadchild w-1/2 bg-slate-400 h-10 rounded-md"></div>
                <div className=" loadchild w-11/12 h-32 bg-slate-300 rounded-md "></div>
               
            </div>
            <div className=" allload w-80 h-60  rounded-md shadow-md shadow-gray-600 flex justify-center items-center flex-col gap-2">
                <div className=" loadchild w-11/12 h-10 bg-zinc-800 rounded-md"></div>
                <div className=" loadchild w-1/2 bg-slate-400 h-10 rounded-md"></div>
                <div className=" loadchild w-11/12 h-32 bg-slate-300 rounded-md "></div>
               
            </div>
            <div className=" allload w-80 h-60  rounded-md shadow-md shadow-gray-600 flex justify-center items-center flex-col gap-2">
                <div className=" loadchild w-11/12 h-10 bg-zinc-800 rounded-md"></div>
                <div className=" loadchild w-1/2 bg-slate-400 h-10 rounded-md"></div>
                <div className=" loadchild w-11/12 h-32 bg-slate-300 rounded-md "></div>
               
            </div>
        </div> */}

   {/* <div className="h-10   w-16 mx-auto   flex justify-center items-center flex-col gap-1 loader">
            <div className="flex gap-1  ">
            <div style={{width:'10px',
        height:'10px',backgroundColor:"red",borderRadius:"50%"}}></div>
        <div style={{width:'10px',
        height:'10px',backgroundColor:"red",borderRadius:"50%"}}></div>
            </div>
            <div className="flex gap-1 ">
            <div style={{width:'10px',
        height:'10px',backgroundColor:"red",borderRadius:"50%"}}></div>
        <div style={{width:'10px',
        height:'10px',backgroundColor:"red",borderRadius:"50%"}}></div>
            </div>
        </div> */}
    </main>
  );
}
