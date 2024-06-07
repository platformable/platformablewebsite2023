'use client'
import styles from "@/styles/OBOFTrendsReportspage.module.css";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import {useRouter} from 'next/router'

export default function Hero({data}) {
const [renderx,setRenderx]=useState(false)
const [headingColor,setHeadingColor]=useState('')
const [primaryCallToAcctionBgColor,setPrimaryCallToAcctionBgColor]=useState('')


  
  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#A17EFF20] from-30%  via-[#E7DFFD20] via-50% to-[#F0EBFD20] to-50% text-center pt-14 md:pt-20 pb-10 ">
      <div className="container mx-auto">
        <h1 className={`text-lg mb-3  font-bold`} style={{color:data.hero.headingColor}}>{data?.hero?.SeoKeyword}</h1>
        <h2 className="font-bold mb-5" style={{color:data?.hero?.BigHeadlineTextColor}}>
        {data?.hero?.bigHeadline}
        </h2>
        <h6>
        {data?.hero?.subHeadline}
        </h6>
      
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center mt-4 mb-10">
          
          <a href={data.hero.primaryCallToActionUrl} 
          
          target="_blank">
            <p className={` px-3 py-2 shadow rounded-md text-white w-56 font-bold`} style={{backgroundColor:data.hero.primaryCallToActionBgColor,color:data.hero.primaryCallToActionTextColor}}>{data?.hero?.primaryCallToAction}</p>
          </a>
    
          <a href={data?.hero?.secondaryCallToActionUrl} target="_blank">
          <button className="rounded-md shadow  px-3 py-2  w-56" style={{border:`1px solid ${data.hero.secondaryCallToActionBorderColor}`}}>
            <p className="text-[#5E2AED]" style={{color:data.hero.secondaryCallToActionTextColor}}> {data?.hero?.secondaryCallToAction}</p>
          </button>
          </a>
          
        </div>
        <div id="guarantee-hero-container" className="py-7 md:mx-60 bg-gradient-to-r from-transparent via-zinc-600 to-transparent">
          <h6 className="text-[#F157FF] font-bold">{data.hero.socialHeading}</h6>
          <p>{data?.hero.socialSubheading}</p>
        </div>
        <img src={data?.hero?.image?.data?.attributes.url} alt={data?.hero?.image?.data?.attributes.alternativeText} className="align-top"/>
        
        
      </div>
    </section>
  );
}
