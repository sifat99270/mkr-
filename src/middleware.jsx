import { VerifyToken } from "./utility/token";
import { NextResponse } from "next/server";
export async function middleware(req, res) {
    const path = req.nextUrl.pathname;
 const token=req.cookies.get('token');
    if (path === '/dashboard/otp') {
        try {
            const check = req.cookies.get("check")['value'];
            const verify = await VerifyToken(check);
            const header = new Headers();
            header.set('id', verify['id'])
            return NextResponse.next({ request: { headers: header } });
        } catch (e) {
            return NextResponse.redirect(new URL('/user/login',req.url));
        }
    }

    if (path.startsWith('/dashboard') || path.startsWith('/user/account')) {
        try {
            const token = req.cookies.get('token')['value'];
            
            const decode = await VerifyToken(token);
            const header = new Headers(req.headers);
            header.set('id', decode['id']);
            header.set('email', decode['email']);
            return NextResponse.next({
                request: {
                    headers: header
                }
            })
        } catch (e) {
            return NextResponse.redirect(new URL('/user/login', req.url));
        }


    }

    if(token && path==='/user/login' || path==='user/checkotp'){
        return NextResponse.redirect(new URL('/', req.url));
    }

    if(!token && path==='/user/login' || path==='user/otp'){
        return NextResponse.next();
    }
    return NextResponse.next();
}