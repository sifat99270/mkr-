
import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from "@/components/footer";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { cookies } from "next/headers";
import Navbar from "@/components/navar";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  title: "mkr group limited",
  description: "this is constraction company",
};
function checklogin() {
  const cookie = cookies().get('token');
  if (cookie) {
    return true;
  } else {
    return false;
  }
}
async function mybrain() {
  "use server"
 let cookie= cookies().delete('token');
  return {
    status: 'success',
  }
}
export default function RootLayout({ children }) {
  let check;
  function test() {
    const data = checklogin();
    check = data;
  }
  test();
  return (
    <html lang="en" className={roboto.className}>
      <body >
        <Toaster />
        <NextTopLoader color="#E60000" height={2} speed={200} showSpinner={false} />
        <Navbar  />
        <div className="mt-20 ">{children}</div>
        <Footer submit={mybrain} check={check} />
      </body>
    </html>
  );
}
