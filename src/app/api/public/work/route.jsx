import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function GET (req, res) {
    try{
        const prisma=new PrismaClient();
       
        const find=await prisma.work.findMany();
            return NextResponse.json({status:"success",data:find})
    }catch(err){
        return NextResponse.json({status:"fail",data:[]},{
            status:500
        })
    }
}