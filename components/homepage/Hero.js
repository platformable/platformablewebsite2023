import Link from "next/link";
import React from "react";
import styles from "@/styles/Homepage.module.css";

export default function Hero({ heroImg, heroSubtitle, hero_title }) {

  const subtitle = heroSubtitle.split(" ")[0];
  const simpleSubtitle = heroSubtitle.substr(heroSubtitle.indexOf(" ") + 1);

  return (
    <section id="hero" className="">
      <div className="container mx-auto py-10">
        <h1
          className={`text-center text-[#5B24EC] font-bold md:leading-none leading-10 mb-4 md:px-0 px-3`}
        >
          {hero_title}
        </h1>
        <h3 className="text-center md:leading-10 leading-8 md:px-0 px-5  font-light">
          {" "}
          <strong>{subtitle}</strong> {simpleSubtitle}{" "}
        </h3>
        <img src={heroImg} alt="" className="py-10 md:px-0 px-5" />
        <div className="flex justify-center">
          <button
            className={`${styles["contact-btn"]} contact-btn px-10 py-3  my-5 rounded-md md:hidden block md:px-5`}
          >
            <Link href="/">
              <div className="flex gap-x-5 self-start items-center ">
                <img
                  src="/icon_section01.svg"
                  alt=""
                  className=""
                />
                <p>Contact us</p>
                <img src="/icon_arrow_purple.svg" alt="arrow icon" />
                
              </div>
            </Link>
          </button>
        </div>
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
