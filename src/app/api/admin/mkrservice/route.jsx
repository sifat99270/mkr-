
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers"
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
     
        const formdata = await req.formData();
        const prisma = new PrismaClient()
        const header = headers();
        const adminId = parseInt(header.get('adminId'));
         if (adminId) {
                    const allUsers = await prisma.service.create(
                        {
                            data: {
                                name: formdata.get('name'),
                                color: formdata.get('color'),
                                title: formdata.get('title'),
                                longDes: formdata.get('des'),
                                img: formdata.get('fileName')

                            }
                        }
                    );
                    return NextResponse.json({ status: "success", data: allUsers })
                } else {
                    return NextResponse.json({ status: "fail", data: {} })
                }
    } catch (e) {   
        return NextResponse.json({ status: "fail", data: e })
    }
}