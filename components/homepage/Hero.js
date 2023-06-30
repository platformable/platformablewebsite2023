import Link from "next/link";
import React from "react";
import styles from '@/styles/Homepage.module.css'

export default function Hero({ heroImg, heroSubtitle, hero_title }) {
  console.log("hero_title",hero_title)
  const subtitle=heroSubtitle.split(' ')[0]
  const simpleSubtitle = heroSubtitle.substr(heroSubtitle.indexOf(" ") + 1);
  return (
    <section id="hero" className="">
      <div className="container mx-auto py-10">
        <h1 className={`text-center text-[#5B24EC] font-bold md:leading-none leading-8 mb-4 `}>{hero_title}</h1>
         <h3 className="text-center leading-10"> <strong>{subtitle}</strong> {simpleSubtitle} </h3>
        <img src={heroImg} alt="" className="py-10"/>
      </div>
      <button className={`${styles['contact-btn']} contact-btn px-10 py-3 text-white my-5 rounded-tr-md rounded-br-md`}>
        <Link href="/">
        <div className="flex gap-x-5 self-start items-center">
          <img src="/logo_icon_white.png" alt="" />
          <p>Contact us</p>
          <img src="/icon_arrow.png" alt="" />
        </div>
        </Link>
      </button>
    </section>
  );
}
