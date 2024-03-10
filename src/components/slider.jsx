"use client"

import { useEffect, useRef, useState } from "react"
export default function Slider({ sub = [1, 2, 3, 4, 5, 6] }) {
    const slideRef = useRef();
    const imgRef = useRef();
    const checkRef = useRef();
    var index = 0;
    let interval;
    function intervalFun() {
        const length = sub.length;
        index++;

     
            if (length === index) {
                index = 0;
                checkRef.current.childNodes[index]['checked'] = true;
                slideRef.current.scrollLeft = slideRef.current.clientWidth * index;
            }

            checkRef.current.childNodes[index]['checked'] = true;
            slideRef.current.scrollLeft = slideRef.current.clientWidth * index;
        
    }

    useEffect(() => {


        interval = setInterval(intervalFun, 2000);

        return () => {
            clearInterval(interval);
        }
    })


    function test() {
        slideRef.current.childNodes.forEach((item, index) => {
            item.style.left = `${imgRef.current.clientWidth * index}px`
        })
        slideRef.current.scrollLeft = slideRef.current.clientWidth * index;
    }
    useEffect(() => {
        window.addEventListener('resize', test)
        return () => {
            window.removeEventListener('resize', test);
        }
    })

    useEffect(() => {
        slideRef.current.childNodes.forEach((item, index) => {
            item.style.left = `${imgRef.current.clientWidth * index}px`
        })
        checkRef.current.childNodes[0]['checked'] = true;
    }, [sub])


    function right() {
        clearInterval(interval);
        const length = sub.length;
        index++;

        if (length === index) {
            index = 0
            checkRef.current.childNodes[index]['checked'] = true;
            slideRef.current.scrollLeft = slideRef.current.clientWidth * index;
        }

        checkRef.current.childNodes[index]['checked'] = true;
        slideRef.current.scrollLeft = slideRef.current.clientWidth * index;
        interval = setInterval(intervalFun, 2000)
    }

    function left() {
        clearInterval(interval);
        const length = sub.length;
        index--;
        if (index === -1) {
            index = length - 1;
            checkRef.current.childNodes[index]['checked'] = true;
            slideRef.current.scrollLeft = slideRef.current.clientWidth * index;
        }
        checkRef.current.childNodes[index]['checked'] = true;
        slideRef.current.scrollLeft = slideRef.current.clientWidth * index;
        interval = setInterval(intervalFun, 2000)
    }
    function radio(i) {
        clearInterval(interval);
        index = i;
        checkRef.current.childNodes[index]['checked'] = true;
        slideRef.current.scrollLeft = slideRef.current.clientWidth * index;
        interval = setInterval(intervalFun, 2000)

    }
    return (
        <div className="w-full h-full  flex justify-center items-center flex-col relative ">
            <div ref={slideRef} className=" transition-all w-11/12 h-full flex justify-center items-center rounded-lg  relative overflow-hidden">
                {sub.map(() => {
                    return (
                        <div ref={imgRef} key={Math.random()} className="absolute w-full h-full top-0  ">
                            <img className="   object-center rounded-lg w-full h-full object-cover" src="#" />
                        </div>
                    )
                })}

            </div>
            <div className=" absolute w-11/12">
                <div onClick={left} className="  transition-all hover:scale-110 absolute left-3   p-1 rounded-full w-10 h-10 bg-slate-400 hover:cursor-pointer flex justify-center items-center"><i className="bi bi-caret-left-fill text-3xl "></i></div>
                <div onClick={right} className="transition-all hover:scale-110 absolute right-3  p-1 rounded-full w-10 h-10 bg-slate-400 hover:cursor-pointer flex justify-center items-center"><i className="bi bi-caret-right-fill text-3xl "></i></div>
            </div>
            <div ref={checkRef} className=" absolute flex bottom-5 gap-4">
                {sub.map((item, i) => {
                    return (
                        <input onClick={() => {
                            radio(i)
                        }} key={i} className="   h-4 w-4 accent-rose-600 cursor-pointer" name="unic" type="radio" />
                    )
                })}

            </div>
        </div>
    )
}