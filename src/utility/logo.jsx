
export default function Logo() {
    return (
        <div className="flex font-bold text-3xl text-green-600">
            <div className="relative flex">
                <p>M</p>
                <i className="  absolute w-0.5 h-full bg-white top-0 left-1/2" ></i>
            </div>
            <div className="relative">
                <p>K</p>
                <i className=" absolute w-0.5 h-full bg-white  top-0 left-1/2 " ></i>
            </div>
            <div className="relative">
                <p>R</p>
                <i className=" absolute w-0.5 h-full bg-white top-0 left-1/2" ></i>
            </div>
        </div>
    )
}