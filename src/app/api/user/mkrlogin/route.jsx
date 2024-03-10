import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { CreateToken } from "@/utility/token";
export async function POST(req, res) {
    try {
        const body=await req.json();
        const email=body['email'];
        const password=body['password'];
        const prisma=new PrismaClient();
        const check=await prisma.user.findUnique({
            where:{
                email:email,
                password:password
            }
        })
        if(check['id']){
            const token=await CreateToken(email,check['id']);
           
            return NextResponse.json({status:"success",data:{token:token}})
        }
        
    }catch(err) {
        return NextResponse.json({status:"fail",data:err})
    }

}