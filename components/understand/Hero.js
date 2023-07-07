import React from "react";
import styles from "@/styles/Understandpage.module.css";

export default function Hero({ heroImg,  hero_title }) {
  return (
    <section id="hero" className="">
      <div className="container mx-auto py-10">
        <h1
          className={` text-[#5B24EC] lg:text-[55px] text-[34px] font-bold md:leading-none leading-10 mb-4 md:px-0 px-3`}
        >
          {hero_title}
        </h1>
       
        <img src={heroImg} alt="" className="py-10 md:px-0 px-5" />
        
      </div>
      
    </section>
  );
}
