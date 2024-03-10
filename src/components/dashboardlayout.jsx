import Logo from "@/utility/logo";
import Link from "next/link";

export async function DashLayout() {
    return (
        <div className="w-full p-3">
            <div className=" font-extrabold text-3xl text-center p-4"><Logo /></div>
            <div className="flex font-bold gap-2 p-2">
                <i className="bi bi-files text-emerald-500"></i>
                <p>Dashboard</p>
            </div>
            <hr className=" bg-black h-0.5 w-full"/>
            <div className="">
                <p className="font-bold text-xl p-2">pages</p>
                <div className="flex flex-col">
                    <div className="flex gap-2 cursor-pointer"><i className="bi bi-file-person text-emerald-500"></i>
                        <p>About page</p></div>
                    <Link href="/dashboard" ><div className=" cursor-pointer hover:bg-neutral-200 px-2 py-1 font-bold">Update</div></Link>
                    <Link href='/dashboard/aboutdelete' >
                    <div className=" cursor-pointer hover:bg-neutral-200 px-2 py-1 font-bold">Delete</div>
                    </Link>
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-2 cursor-pointer">
                         <i className="bi bi-person-arms-up text-emerald-500"></i>
                    <p>Work page</p>
                    </div>
                   <Link href="/dashboard/work">
                   <div  className=" cursor-pointer hover:bg-neutral-200 px-2 py-1 font-bold">Update</div>
                   </Link>
                   <Link href="/dashboard/workdelete">
                   <div  className=" cursor-pointer hover:bg-neutral-200 px-2 py-1 font-bold">Delete</div>
                   </Link>
                </div>
                    <div className="flex flex-col">
                    <div className="flex gap-2 cursor-pointer">
                         <i className="bi bi-gear-wide-connected text-emerald-500"></i>
                    <p>service page</p>
                    </div>
                    <Link href="/dashboard/serviceadd">
                    <div  className=" cursor-pointer hover:bg-neutral-200 px-2 py-1 font-bold">Update</div>
                    </Link>
                    <Link href="/dashboard/servicedelete">
                    <div  className=" cursor-pointer hover:bg-neutral-200 px-2 py-1 font-bold">Delete</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}