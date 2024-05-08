"use client";
import { useEffect, useRef, useState } from "react";
import See from "./see";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Pdf from "./pdf";

export default function My({ fun, fun2, data, person }) {
  const alldata = person;
  const scrollRef = useRef();
  const heightRef = useRef();
  const heightRightRef = useRef();
  const [unicPerson, setUnicPerson] = useState([]);
  const [scrollDec, setScrollDec] = useState(true);
  const [date, setDate] = useState({});
  function test() {
    if (scrollDec) {
      scrollRef.current.scrollLeft = -scrollRef.current.clientWidth;
    } else {
      scrollRef.current.scrollLeft = scrollRef.current.clientWidth;
    }
  }
  useEffect(() => {
    window.addEventListener("resize", test);
    return () => {
      window.removeEventListener("resize", test);
    };
  });

  function scrollLeft(id, item) {
    setScrollDec(false);
    heightRightRef.current.style.position = "absolute";
    heightRef.current.style.position = "relative";
    let unic = alldata.reduce((all, item, ind) => {
      if (item["monthId"] === id && ind === 0) {
        all.push(item);
        return all;
      }
      if (item["monthId"] === id) {
        all.push(item);
        return all;
      }
      return all;
    }, []);
    setUnicPerson(unic);
    setDate(item);
    scrollRef.current.scrollLeft = scrollRef.current.clientWidth;
  }
  function scrollRight() {
    setScrollDec(true);
    heightRightRef.current.style.position = "relative";
    heightRef.current.style.position = "absolute";
    scrollRef.current.scrollLeft = -scrollRef.current.clientWidth;
  }
  async function submit(obj, ind) {
    let data = await fun(obj);
    unicPerson[ind] = data["data"];
    return data;
  }
  async function submit2(obj, ind) {
    let data = await fun2(obj);
    if (data["status"] === "success") {
      unicPerson.splice(ind, 1);
      return data;
    } else {
      return data;
    }
  }

  return (
    <div ref={scrollRef} className='   w-screen overflow-hidden relative flex '>
      <div
        ref={heightRightRef}
        className=' flex  w-screen   relative   mb-4   justify-center items-center flex-col gap-2'>
        <p className=' font-extrabold text-violet-700 p-2 text-2xl mb-3 text-center'>
          name
        </p>
        {data.map(item => {
          return (
            <div
              onClick={() => {
                scrollLeft(item["id"], item);
              }}
              key={item["id"]}
              className=' relative w-11/12 md:w-3/4 flex gap-2 rounded-md shadow-md shadow-gray-400 p-2 cursor-pointer'
              href='/user/account/see'>
              <div className=' w-1/2 rounded-lg shadow-md shadow-slate-500 p-2 text-center font-extrabold text-emerald-400'>
                {item["name"]}
              </div>
              <div className='w-1/2  rounded-lg shadow-md shadow-slate-500 p-2 text-center font-extrabold text-emerald-400'>
                {item["year"]}
              </div>
              <div>
                <i className=' text-2xl bi bi-box-arrow-in-right'></i>
              </div>
            </div>
          );
        })}
      </div>
      <div
        ref={heightRef}
        className=' absolute -right-full  w-screen flex flex-col gap-2'>
        <div className='p-2 ' onClick={scrollRight}>
          <i className='bi bi-arrow-left-square-fill text-2xl cursor-pointer ml-2 '></i>
        </div>
        <div className='w-full flex gap-px tex font-bold p-0 md:p-1 md:text-lg'>
          <div className='seeper border h-5 md:h-8 border-slate-400 p-1 rounded-sm  text-center '>
            name
          </div>
          <div className='seeper border h-5  md:h-8 border-slate-400 p-1 rounded-sm  text-center '>
            hazira
          </div>
          <div className='seeper border h-5  md:h-8 border-slate-400 p-1 rounded-sm text-center '>
            rate
          </div>
          <div className='seeper border h-5  md:h-8 border-slate-400 p-1 rounded-sm  text-center '>
            mot
          </div>
          <div className='seeper border h-5  md:h-8 border-slate-400 p-1 rounded-sm text-center '>
            khoraki
          </div>
          <div className='seeper border h-5  md:h-8  border-slate-400 p-1 rounded-sm text-center '>
            barti
          </div>
          <div className='seeper border h-5  md:h-8 border-slate-400 p-1 rounded-sm text-center '>
            gotomas
          </div>
          <div className='seeper border h-5  md:h-8 border-slate-400 p-1 rounded-sm text-center '>
            paona
          </div>
        </div>
        {unicPerson.map((item, ind) => {
          return (
            <div key={item["id"]} className=''>
              <See submit2={submit2} submit={submit} data={item} ind={ind} />
            </div>
          );
        })}

        {unicPerson && (
          <PDFDownloadLink
            className=' text-center font-bold w-[300px] mx-auto child bg-slate-400  p-2 -top-6 left-1/2 rounded-md shadow-md shadow-gray-300'
            document={<Pdf date={date} data={unicPerson} />}>
            DOWNLOAD PDF
          </PDFDownloadLink>
        )}
      </div>
    </div>
  );
}
