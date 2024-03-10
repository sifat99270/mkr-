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
         const id=body['id'];
        const update=await prisma.person.update({
            where:{
                id:id,
                userId:parseInt(userId)
            },
            data:{
                name:name,
                hazira:hazira,
                rate:rate,
                mot:mot,
                khoraki:khoraki,
                barti:barti,
                gotoMas:gotoMas,
                paona:paona,
            }
        })
        if(update['id']){
            return NextResponse.json({status:"success",data:update})
        }
    }catch(err){
        return NextResponse.json({status:"fail",data:err},{
            status:500
        })
    }
}