import About from "@/components/dashabout";
import { join } from "path";
const fs = require('fs');

async function submit(obj) {
    "use server";
    try {
        const file = obj.get('file');
    let nameSplit = file['name'].split('.')
    nameSplit[0] = nameSplit[0] + Date.now();
    let unicFileName = nameSplit.join('.')
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const path = join('public/', unicFileName);
        let uploaded = await fs.promises.writeFile(path, buffer);
        if (!uploaded) {
             obj.set('fileName', unicFileName);
            const res = await fetch(`${process.env.HOST}/api/admin/mkrabout`, {
                method: "POST",
                body: obj,
                cache:"no-store"
            })
            const result = await res.json();
            if (result['status'] === "success") {
            return result;
            } else {
                await fs.promises.unlink(path);
                return {
                    err:"there was an error"
                }
        }
            
        }
    } catch (e) {
        return {
            err:"there was an error"
        }
   }
    
}
export default async function page() {
    return (
        <div>
            <About submit={submit} />
        </div>
    )
}