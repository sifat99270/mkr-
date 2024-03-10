
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST (req, res) {
    try{
        const body=await req.json();
        const prisma=new PrismaClient();
       
        const add=await prisma.service.create();
            return NextResponse.json({status:"success",data:add})
    }catch(err){
        return NextResponse.json({status:"fail",data:[]},{
            status:500
        })
    }
}