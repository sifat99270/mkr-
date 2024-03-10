import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers"
import { NextResponse } from "next/server";


export  async function POST(){
    try{
        const prisma= new PrismaClient()
        const header=headers();
        const adminId=parseInt(header.get('adminId'))
        if(adminId){
            const allUsers = await prisma.user.findMany() ;
            return NextResponse.json({status:"success",data:allUsers}) 
        }else{
            return NextResponse.json({status:"fail",data:{}})
        }

    }catch(e){
        return NextResponse.json({status:"fail",data:e})
    }
}

export  async function GET(req, res){
    try{
        const{searchParams}=new URL(req.url)
        const prisma= new PrismaClient()
        const header=headers();
        const adminId = parseInt(header.get('adminId'));
        const mounthId=searchParams.get('mounthId');
        if(adminId){
            const allmonth = await prisma.month.findMany({
                where:{
                    id:mounthId
                },
                include:{
                    person:true
                }
            }) ;
            return NextResponse.json({status:"success",data:allmounth}) 
        }else{
            return NextResponse.json({status:"fail",data:{}})
        }

    }catch(e){
        return NextResponse.json({status:"fail",data:e})
    }
}