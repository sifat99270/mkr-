"use client"

import { useState } from "react"
import Fetch from "./featcher"

import { error, success } from "@/utility/tost"

export default function New({ submit }) {
    const [loading, setLoading] = useState(false)
    const [obj, setObj] = useState({
        name: "",
        year: ""
    })
    function change(name, value) {
        setObj((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }
    async function test(){
        setLoading(true);
        const data = await submit(obj);
        if (data['status'] === 'success') {
            success("month sucessfuly created")
        } else {
            error("month create fail")
        }
        setLoading(false)
    }
    return (
        <form onSubmit={  async(e) => {
            e.preventDefault();
            test();
       
    }}  className="w-11/12 md:w-1/2 rounded-sm flex flex-col md:flex-row mx-auto gap-2">
            <input onChange={(e) => {
                change('name', e.target.value)
            }} value={obj['name']} className=" outline-none border rounded-md  border-violet-600 p-2" type="text" placeholder="name" />
            <input onChange={(e) => {
                change('year', e.target.value)
            }} value={obj['year']} className=" outline-none border rounded-md  border-violet-600 p-2" type="number" placeholder="year" />
            {loading ? <Fetch /> : <button className=" w-16 py-1 flex justify-center items-center mx-auto text-center font-bold px-2  border border-emerald-400 rounded-lg" type="submit">Add</button>}
        </form>
    )
}