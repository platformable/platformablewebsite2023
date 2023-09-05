import React from "react";
import Link from "next/link";
import styles from "@/styles/Understandpage.module.css";

export default function Hero({ data }) {
  return (
    <section id="hero" className="">
      <div className={styles.hero_bg_gradient}>
        <div className="container mx-auto py-10">
          <h1 className={`mb-5 font-bold text-white `}>{data?.understand_hero_title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.understand_hero_description
            }}
            className="text-white font-light "
          />
        </div>
      </div>
      <div className="container mx-auto flex flex-col flex-col-reverse md:grid md:grid-cols-2 md:items-center gap-20 py-10">
        <div className="flex flex-col justify-around py-5 gap-5">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.understand_hero_description2
            }}
            className=""
          />

        <div
            dangerouslySetInnerHTML={{
              __html: data?.hero_description_highlighted
            }}
            className="bg-green-medium p-7 rounded-xl 2xl:rounded-2xl"
          />
          <Link href="/blog/measuring-the-value-of-open-ecosystems-1-our-model">
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
