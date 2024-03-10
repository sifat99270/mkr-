import { PrismaClient } from "@prisma/client"
import { headers } from "next/headers";
import { NextResponse } from "next/server";


export async function POST (req, res) {
    try{
        const body=await req.json();
       
        const prisma=new PrismaClient();
        const header=headers();
        const userId=header.get("id");
       const id=body['id'];
       
        const del=await prisma.person.delete({
            where:{
                id:id,
                userId:parseInt(userId)
            },
        })
        if(del['id']){
            return NextResponse.json({status:"success",data:del})
        }
    }catch(err){
        return NextResponse.json({status:"fail",data:err},{
            status:500
        })
    }
}