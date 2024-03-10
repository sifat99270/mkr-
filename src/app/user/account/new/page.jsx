
import New from "@/components/new";
import { headers } from "next/headers";
async function submited(data) {
  "use server"
   
    const header = headers();
    const id = header.get('id');
    const res = await fetch(`${process.env.HOST}/api/accounting/mkrcreatemonth`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            id: id
        },
        body: JSON.stringify(data)
    })
    const result = await res.json();
    return result;
}


export default function Page() {
    return (
        <div className="mb-4 p-4">
            <New submit={submited} />
        </div>
    )
}