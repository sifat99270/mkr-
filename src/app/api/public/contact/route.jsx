

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST (req, res) {
    try{
        const body=await req.json();
        const prisma=new PrismaClient();
        const find=await prisma.about.create({
            data:body
        });
            return NextResponse.json({status:"success",data:find})
    }catch(err){
        return NextResponse.json({status:"fail",data:[]},{
            status:500
        })
    }
}