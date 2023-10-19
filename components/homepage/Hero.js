import Link from "next/link";
import React from "react";
import styles from "@/styles/Homepage.module.css";
import Image from 'next/image'

export default function Hero({ heroImg, heroSubtitle, hero_title }) {
  const subtitle = heroSubtitle?.split(" ")[0];
  const simpleSubtitle = heroSubtitle?.substr(heroSubtitle.indexOf(" ") + 1);

  return (
    <section id="hero" className="">
      <div className="container mx-auto pb-10 pt-3">
        <h3
          className={`text-center text-[#5B24EC]  font-bold md:leading-none leading-10 mb-4 md:px-0 px-3`}
        >
          {hero_title}
        </h3>
        <h3 className="text-center md:leading-10 leading-8 md:px-0 px-5 text-3xl font-light ">
          {" "}
          <strong>{subtitle}</strong> {simpleSubtitle}{" "}
        </h3>
        <div className="flex justify-center items-center">
        <img src={heroImg} alt="" className="pt-10 md:px-0 px-5" width={'950px'}/>
        </div>
        
{/* 

        <div className="flex justify-center">
          <button
            className={`${styles["contact-btn"]} contact-btn px-10 py-3  mb-5 rounded-md md:hidden block md:px-5`}
          >
            <Link href="/contact-us">
              <div className="flex gap-x-5 self-start items-center ">
                <img src="/icon_section01.svg" alt="" className="" />
                <p>Contact us</p>
                <img src="/icon_arrow_purple.svg" alt="arrow icon" />
              </div>
            </Link>
          </button>
        </div> */}
      </div>
      {/* <button
        className={`${styles["contact-btn"]} contact-btn px-10 py-3 text-white my-5 rounded-tr-md rounded-br-md md:block hidden `}
      >
        <Link href="/">
          <div className="flex gap-x-5 self-start items-center ">
            <img src="/logo_icon_white.png" alt="" className="" />
            <p>Contact us</p>
            <img src="/icon_arrow.png" alt="" />
          </div>
        </Link>
      </button> */}
    </section>
  );
}
