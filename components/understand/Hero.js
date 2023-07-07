import React from "react";
import Link from "next/link";
import styles from "@/styles/Understandpage.module.css";

export default function Hero({ data }) {
  return (
    <section id="hero" className="">
      <div className={styles.hero_bg_gradient}>
        <div className="container mx-auto py-10">
          <h1 className={`mb-10 text-white `}>{data?.understand_hero_title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.understand_hero_description
            }}
            className="text-white"
          />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-2 py-10">
        <div className="flex flex-col justify-between py-5 gap-5">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.understand_hero_description2
            }}
            className=""
          />
          <Link href="/">
            <div className={`${styles.hero_explore_btn_bg_gradient} text-white rounded shadow-md font-medium flex items-center justify-center gap-10 py-3 px-5 bg-blue-400`}>
              <p className="text-center">Explore the Open Ecosystem Value model</p>
              <img src="/icon_arrow.png" alt="Explore link" />
            </div>
          </Link>
        </div>

        <img src={data?.understand_hero_img?.data?.attributes.url} alt="understand Open digital ecosystems map" className="" />
      </div>
    </section>
  );
}
