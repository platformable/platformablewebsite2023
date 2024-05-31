'use client'
import styles from "@/styles/OBOFTrendsReportspage.module.css";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import {useRouter} from 'next/router'

export default function Hero({data}) {
const [renderx,setRenderx]=useState(false)
const [headingColor,setHeadingColor]=useState('')
const [primaryCallToAcctionBgColor,setPrimaryCallToAcctionBgColor]=useState('')

  useEffect(()=>{
    setPrimaryCallToAcctionBgColor(data?.hero?.primaryCallToAcctionBgColor)

  },[data])
  
  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#A17EFF20] to-[#F0EBFD10] to-30%  text-center pt-20 pb-10">
      <div className="container mx-auto">
        <h1 className={`text-lg mb-3  font-bold`} style={{color:data.hero.headingColor}}>{data?.hero?.SeoKeyword}</h1>
        <h2 className="font-bold mb-5" style={{color:data?.hero?.BigHeadlineTextColor}}>
        {data?.hero?.bigHeadline}
        </h2>
        <h6>
        {data?.hero_description}
        </h6>
        <div className="flex flex-col md:flex-row gap-5 justify-center mt-4 mb-10">
          <Link href={"/"} >
          <button className={` px-3 py-2 shadow rounded-md text-white w-56`} style={{backgroundColor:data.hero.primaryCallToActionBgColor}}>
            <p>{data?.hero?.primaryCallToAction}</p>
          </button>
          </Link>
          <Link href={"/"}>
          <button className="rounded-md shadow  px-3 py-2  w-56" style={{border:`1px solid ${data.hero.secondaryCallToActionBorderColor}`}}>
            <p>{data?.hero?.secondaryCallToAction}</p>
          </button>
          </Link>
          
        </div>
        <img src={data?.hero?.image?.data?.attributes.url} alt="hero image" />
        
        
      </div>
    </section>
  );
}
