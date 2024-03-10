import Link from "next/link";


export default function Choose(){

    return(
        <div className=" flex flex-col md:flex-row justify-center items-center">
           <div className=" bg-zinc-400 p-2 w-full md:w-1/2 h-[400px] flex flex-col justify-center items-start">
           <p className=" text-sm font-bold text-gray-200 p-2">WE PUT RESPONSIBILITY FIRST</p>
            <p className=" font-extrabold text-3xl text-emerald-500 p-1 md:text-4xl ">Why Choose Us</p>
            <p className=" text-sm w-full p-2 text-slate-50 md:text-lg">It is essential that we operate in a manner consistent with our values, in compliance with our ethical principles, and the law.</p>

            <div className=" justify-center items-center mt-4 flex bg-black text-white gap-2 p-2"><Link className=" hover:text-emerald-500" href="user/work" >OUR WORK</Link> <div className=" h-1 w-1 bg-green-500"></div><p>WHY CHOOSE US</p></div>
           </div>
           <img className=" w-full md:w-1/2 object-cover object-center h-[300px] md:h-[400px]" src="/draw.jpg" />


        </div>
    )
}