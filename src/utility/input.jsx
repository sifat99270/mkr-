"use client"
export default function Input({ type, name, set,textName,val,wid,...rest }) {
    function onchange(value) {
        set((pre) => {
            return {
                ...pre,
                [textName]:value
            }
        })
    }
    return(
        
        <div className={`input w-3/4 md:${wid}`}>
            <input  value={val} onChange={(e) => {
                onchange(e.target.value);
            }} type={type} required className=" w-full outline-none border border-slate-600 md:p-2 p-1 rounded-sm shadow-md shadow-slate-500 font-bold  focus:border-green-400"  />
            <p className="p font-bold">{name}</p>
        </div>
    )
}