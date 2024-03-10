import { PrismaClient } from "@prisma/client"
import { headers } from "next/headers";
import { NextResponse } from "next/server";


export async function POST (req, res) {
    try{
        const body=await req.json();
       
        const prisma=new PrismaClient();
        const header=headers();
        const userId=header.get("id");
        const name=body['name'];
        const hazira=body['hazira'];
        const rate=body['rate'];
        const mot=body['mot'];
        const khoraki=body['khoraki'];
        const barti=body['barti'];
         const gotoMas=body['gotoMas'];
         const paona=body['paona'];
         const mounthId=body['monthId'];
        const create=await prisma.person.create({
            data:{
                name:name,
                hazira:hazira,
                rate:rate,
                mot:mot,
                khoraki:khoraki,
                barti:barti,
                gotoMas:gotoMas,
                paona:paona,
                monthId:mounthId,
                userId:parseInt(userId)
            }
        })
        if(create['id']){
            return NextResponse.json({status:"success",data:create})
        }
    }catch(err){
        return NextResponse.json({status:"fail",data:err},{
            status:500
        })
    }
}

export async function GET (req, res) {
    try{
        const prisma=new PrismaClient();
        const header=headers();
        const userId=header.get("id");
       
        const find=await prisma.person.findMany({
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