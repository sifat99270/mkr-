"use client";

import { useState } from "react";
import Fetch from "./featcher";
import { useRouter } from 'next/navigation'
import { error, success } from "@/utility/tost";


export default function Sign({ submit }) {
  let router=useRouter();
  const [obj, setObj] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  function onchange(name, value) {
    setObj((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  }
  return (
    <form className=" w-80 flex p-4 shadow-md border border-slate-300 rounded-md shadow-gray-200 bg-white flex-col gap-4 justify-center items-center mx-auto">
      <p className=" font-serif text-xl text-green-600">Sign in</p>
      <div className="input">
        <input
          onChange={(e) => {
            onchange("firstname", e.target.value);
          }}
          required
          value={obj["firstname"]}
          type="text"
          className=" w-72 p-2 border  border-gray-300 outline-none rounded-md  focus:border-green-400"
        />
        <p className="p">firstname</p>
      </div>
      <div className="input">
        <input
          onChange={(e) => {
            onchange("lastname", e.target.value);
          }}
          required
          value={obj["lastname"]}
          type="text"
          className=" w-72 p-2 border border-gray-300 outline-none rounded-md  focus:border-green-400"
        />
        <p className="p">lastname</p>
      </div>
      <div className="input">
        <input
          onChange={(e) => {
            onchange("email", e.target.value);
          }}
          required
          value={obj["email"]}
          type="email"
          className=" w-72 p-2 border border-gray-300 outline-none rounded-md  focus:border-green-400"
        />
        <p className="p">email</p>
      </div>
      <div className="input">
        <input
          onChange={(e) => {
            onchange("password", e.target.value);
          }}
          required
          value={obj["password"]}
          type="password"
          className=" w-72 p-2 border border-gray-300 outline-none rounded-md  focus:border-green-400"
        />
        <p className="p">passowrd</p>
      </div>
      {loading ? (
        <Fetch />
      ) : (
        <button
          className="p-1 hover:bg-gray-300 border border-slate-300 rounded-md font-bold text-sm "
          type="submit"
          onClick={async (e) => {
            setLoading(true);
            const res = await submit(obj);
            if (res["status"] === "success") {
              success("registration successfully");
             router.push('/dashboard/checkotp')
            } else {
              error('registration failed')
            }
            setLoading(false);
          }}
        >
          Submit
        </button>
      )}

    </form>
  );
}
