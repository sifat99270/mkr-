import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export default async function GET(){
    const cookie=cookies().delete('token')

    return NextResponse.json({status:'success',data:cookie})
}