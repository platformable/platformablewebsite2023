import styles from "@/styles/OBOFTrendsReportspage.module.css";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Hero({data}) {
  
  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#A17EFF10] to-[#F0EBFD10] to-30%  text-center pt-20 pb-10">
      <div className="container mx-auto">
        <h1 className={`text-lg mb-3 text-[${data?.hero?.headingColor}] font-bold`}>{data?.hero?.SeoKeyword}</h1>
        <h2 className="font-bold mb-5">
        {data?.hero?.bigHeadline}
        </h2>
        <h6>
        {data?.hero_description}
        </h6>
        <div className="flex flex-col md:flex-row gap-5 justify-center mt-4 mb-10">
          <Link href={"/"} >
          <button className={`${data?.hero?.primaryCallToActionBgColor} px-3 py-2 shadow rounded-md text-[var(--purple-medium)] w-56`}>
            <p>{data?.hero?.primaryCallToAction}</p>
          </button>
          </Link>
          <Link href={"/"}>
          <button className="rounded-md shadow bg-[var(--purple-light)] px-3 py-2 text-white w-56">
            <p>{data?.hero?.secondaryCallToAction}</p>
          </button>
          </Link>
          
        </div>
        <img src={data?.hero?.image?.data?.attributes.url} alt="hero image" />
        
        
      </div>
    </section>
  );
}
