"use client"
import Input from "@/utility/input";
import { error, success } from "@/utility/tost";
import { useState } from "react";
import Fetch from "./featcher";
export default function DashWork({submit}) {
    
          const [obj, setObj] = useState({
        name: "",
        file: "",
        title: "",
        des: "",
        color:""
    })
    const [loading, setLoading] = useState(false);
    async function setFormData() {
        setLoading(true);
        const formData = new FormData();
        formData.set('name', obj['name'])
        formData.set('file', obj['file'])
        formData.set('title', obj['title'])
        formData.set('des',obj['des'])
        formData.set('color', obj['color']) 
       let res = await submit(formData);
       if (res['status'] === "success") {
           success("successfully created")
       } else {
           error("create fail");
       }
        setLoading(false);
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setFormData();
        }} className="flex gap-6  w-full flex-col ">
            <Input wid="3/4" type="text" name="name" set={setObj} val={obj['name']} textName='name'  />
            <input type="file" onChange={(e) => {
                setObj((pre) => {
                    return {
                        ...pre,
                        file: e.target.files?.[0]
                    };
                })
            }}  />
            <Input wid="3/4" type="text" name="title" set={setObj} val={obj['title']} textName="title" />
            <Input wid="3/4" type="text" name="long description" set={setObj} val={obj['des']} textName="des" />
            <Input wid="3/4" type="text" name="color" set={setObj} val={obj['color']} textName="color" />
            {loading?<Fetch />:<button  className="w-20 mx-auto px-3 py-1 border border-green-400 rounded-md hover:bg-green-400 font-bold" >Submit</button>}
        </form>
    )
} 