import { PrismaClient } from "@prisma/client";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";
import { CreateToken } from "@/utility/token";
import { SendEmail } from "@/utility/mail";

let timeout;
export async function POST(req, res) {
    try {
        const body=await req.json();
        const firstname=body['firstname'];
        const lastname=body['lastname'];
        const email=body['email'];
        const password=body['password'];
        const cookie=cookies();
        const prisma=new PrismaClient();
        const otp=Math.floor(Math.random()*1256);
        const create=await prisma.check.create({
            data:{
                firstname:firstname,
                lastname:lastname,
                email:email,
                password:password,
                otp:otp.toString(),
            }
        })
        console.log(create)
        if(create['id']){
        let EmailText = `Your OTP Code is=${otp}`;
      let EmailSubject = "Next News Verification Code";
      const mail=await SendEmail(body['email'],EmailText,EmailSubject)
      if(mail["accepted"].length > 0){
            const token=await CreateToken(email,create['id']);
            let expireDuration = new Date(Date.now() + 24 * 60 * 60 * 1000);
            timeout=setTimeout(async()=>{
                await prisma.check.delete({
                    where:{
                        id:create['id']
                    }
                })
            },60000)
            return NextResponse.json({status:"success",data:{
                token:token,
            }})
        }
      }       
    }catch(err) {
        console.log(err)
        return NextResponse.json({status:"fail",data:err})
    }

}
export async function GET(req, res) {
    try {
        const header=headers();
        const prisma=new PrismaClient();
        const id=parseInt(header.get('id'));
        console.log(id);
        const {searchParams}=new URL(req.url)
        const otp= searchParams.get('otp'); 
        const del=await prisma.check.delete({
            where:{
                id:id,
                otp:otp
            }
        })
        console.log(del);
        if(del['id']){
            const create=await prisma.user.create({
                data:{
                    firstname:del['firstname'],
                    lastname:del['lastname'],
                    email:del['email'],
                    password:del['password'],
                    otp:"",
                    role:"admin"
                }
            })
            clearTimeout(timeout);
            return NextResponse.json({status:"success",data:create})
        }
        
    }catch(err) {
        console.log(err);
        return NextResponse.json({status:"fail",data:err})
    }

}