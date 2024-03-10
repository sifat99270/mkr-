import { DashLayout } from "@/components/dashboardlayout";




export default  function Layout({children}){
    return(
        <div className="flex gap-3 ">
            <div className= "w-1/5">
                <DashLayout />
            </div>
            <div className="w-4/5  mb-4 mt-6 rounded-md shadow-slate-100 p-2">{children}</div>
        </div>
    )
}
 