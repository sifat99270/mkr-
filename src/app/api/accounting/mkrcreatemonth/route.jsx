import { headers } from "next/headers";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        const header = headers();
        const prisma = new PrismaClient();
        const userId = header.get("id");
        const body = await req.json();
        const name = body['name'];
        const year = body['year'];
        const create = await prisma.month.create({
            data: {
                name: name,
                year: year,
                userId: parseInt(userId)
            }
        })
        if (create['id']) {
            return NextResponse.json({ status: "success", data: create })
        }
    } catch (e) {
        return NextResponse.json({ status: "fail", data: e }, {
            status: 500
        })
    }
}

export async function GET (req, res) {
    try{
        const prisma=new PrismaClient();
        const header=headers();
        const userId=header.get("id");
       
        const find=await prisma.month.findMany({
           where:{
            userId:parseInt(userId)
           }
        })
        if(find){
            return NextResponse.json({status:"success",data:find})
        }
    }catch(err){
        return NextResponse.json({status:"fail",data:[]},{
            status:500
        })
    }
}