import React from "react";
import TestimonialCard from "./TestimonialCard";
import styles from "@/styles/Homepage.module.css";

export default function Testimonials({ data, title }) {


  const logos =[
    {
      logo:'/LN_logo.png'
    },
    {
      logo:'/iseal_logo.png'
    },
    {
      logo:'/axway_logo.png'
    },
    {
      logo:'/APIToS_logo.png'
    },
    {
      logo:'/odi_logo.png'
    },
    {
      logo:'/alias_logo.png'
    },
  ]
  return (
    <section className={`pt-40 pb-10 ${styles["testimonials-bg"]}`}>
      <div className="flex gap-10  mb-10">
        <img src="/icon_section05.svg"  alt="platformable logo" className='h-20 -ml-48 lg:-ml-36' />
        <h2 className="text-[#5B24EC] font-bold font-karla">{title}</h2>
      </div>
      <div className="px-5 lg:px-32 ">
        <div className="grid md:grid-cols-2 grid-cols-1  md:gap-y-0 gap-y-5 gap-x-10 md:my-0 md:px-32 px-5">
          {data && data?.map((testimonial,index)=>{
            return (
              <div key={index}>
            <TestimonialCard testimonial={testimonial}  index={index}/>
            </div>
            )
          })}
 
        </div>
        <div className="grid gap-x-5 md:grid-cols-6 grid-cols-2 md:gap-y-0 gap-y-3 items-center mt-20 justify-center">
        {logos && logos.map((logo,index)=>{
          return (
            <div key={index}><img src={logo.logo} alt={'platformable'}/></div>
          )
        })}
        </div>
      </div>
    </section>
  );
}
