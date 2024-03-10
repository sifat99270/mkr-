
"use client"
import Input from "@/utility/input";
import { error, success } from "@/utility/tost";
import { useState } from "react";
import Fetch from "./featcher";

export default function About({submit}) {
    const [obj, setObj] = useState({
        name: "",
        file: "",
        position: "",
        fb: "",
        phone: "",
        whats_app: "",
        des: "",
        color:""
    })
    const [loading, setLoading] = useState(false);
    async function setFormData() {
        setLoading(true);
        const formData = new FormData();
        formData.set('name', obj['name'])
        formData.set('file', obj['file'])
        formData.set('position', obj['position'])
        formData.set('fb', obj['fb'])
        formData.set('phone',obj['phone'])
        formData.set('whats_app', obj['whats_app'])
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
            <Input wid="3/4" type="text" name="position" set={setObj} val={obj['position']} textName="position" />
            <Input wid="3/4" type="text" name="fb link" set={setObj} val={obj['fb']} textName="fb" />
            <Input  wid="3/4" type="number" name="phone number" set={setObj} val={obj['phone']} textName="phone" />
            <Input  wid="3/4" type="text" name="whats app" set={setObj} val={obj['whats_app']} textName="whats_app" />
            <Input wid="3/4" type="text" name="long description" set={setObj} val={obj['des']} textName="des" />
            <Input wid="3/4" type="text" name="color" set={setObj} val={obj['color']} textName="color" />
            {loading?<Fetch />:<button  className="w-20 mx-auto px-3 py-1 border border-green-400 rounded-md hover:bg-green-400 font-bold" >Submit</button>}
        </form>
    )
}