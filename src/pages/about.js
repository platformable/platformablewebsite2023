import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../../components/Layout";
import styles from "@/styles/Aboutpage.module.css";
import SupportOpenEcosystems from "../../components/homepage/SupportOpenEcosystems";
import Explore from "../../components/homepage/Explore";
import StakeholdersOpenEcosystems from "../../components/homepage/StakeholdersOpenEcosystems";
import ProductsServices from "../../components/homepage/ProductsServices";
import Hero from "../../components/about/Hero";
import Footer from "../../components/Footer";
import Testimonials from "../../components/homepage/Testimonials";
import Link from "next/link";
import OurCommitment from "../../components/about/OurCommitment";
import OurMission from "../../components/about/OurMission";
import PrivacyPolicy from "../../components/about/PrivacyPolicy";
import Team from "../../components/about/Team";

export default function About({ data }) {
  console.log(data);
  //const newData = data.attributes;
  return (
    <Layout>
      <div className={`${styles.hero_background_gradient} relative`}>
        <Hero data={data} />
        <button
          className={`${styles["contact-btn"]} bg-[var(--yellow)] shadow fixed top-0 left-0  pl-20 pr-7  py-3 text-white my-5 rounded-tr-md rounded-br-md md:block hidden `}
        >
          <Link href="/">
            <div className="flex gap-x-5  self-start items-center ">
              <img src="/icon_section01.svg" alt="" className="" />
              <p className="text-[#2A2FC1]">Contact us</p>
              <img src="/icon_arrow_purple_dark.png" alt="" />
            </div>
          </Link>
        </button>
        <OurMission id="our-mission" data={data} />
          <OurCommitment id="our-commitment" data={data} />
      </div>

      <PrivacyPolicy id="our-privacy" data={data} />
      <Team id="our-team" data={data.team.data} styles={styles}/>

    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/about?populate[ourMission1_img]=*&populate[ourMission2_img]=*&populate[ourMission3_img]=*&populate[commitments][populate][commitment_img]=*&populate[hero_img]=*&populate[team]=*`
    );
    const data = await res.json();

    return {
      props: {
        data: data.data.attributes,
      },
    };
  } catch (error) {
    return {
      props: {
        data: "No Data",
      },
    };
  }
}
