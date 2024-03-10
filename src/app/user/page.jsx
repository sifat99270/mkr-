import Company from "@/components/company";
import Count from "@/components/count";
import Slider from "@/components/slider";
import Logo from "@/utility/logo";





export default function page() {
    return (
        <div className=" mt-20 flex text-sm justify-center items-center md:text-3xl p-2 flex-col relative gap-6 ">
             <div className="  w-screen lg:h-[500px] md:h-[400px] h-[250px]    relative">
   
   <Slider />
   </div>
          <Company />
          <Count />
        </div>
    )
}