import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../../components/Layout";
import "@/styles/Homepage.module.css";
import SupportOpenEcosystems from "../../components/homepage/SupportOpenEcosystems";
import Explore from "../../components/homepage/Explore";
import StakeholdersOpenEcosystems from "../../components/homepage/StakeholdersOpenEcosystems";
import ProductsServices from "../../components/homepage/ProductsServices";
import Hero from "../../components/homepage/Hero";
import Testimonials from "../../components/homepage/Testimonials";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {

  const newData = data.attributes;
  return (
    <Layout>
      <div className="">
        <Hero
          heroImg={data.attributes.hero_img.data.attributes.url}
          heroSubtitle={newData.hero_subtitle}
          hero_title={newData.hero_title}
        />
        <SupportOpenEcosystems
          list_items_cards={data?.attributes?.list_item_cards}
          title={data?.attributes?.support_open_ecosystems_title}
        />
        <StakeholdersOpenEcosystems videos={[data?.attributes.stakeholder_img_1, data?.attributes.stakeholder_img_2, data?.attributes.stakeholder_img_3]} title={data?.attributes?.stakeholder_title}/>
        <ProductsServices title={data?.attributes?.product_services_title} product_cards={data?.attributes?.product_cards}/>
        <Explore vertical_description_card={data?.attributes?.vertical_description_card} title={data?.attributes?.explore_sectors_title}/>
        <Testimonials data={data.attributes.testimonials} title={newData.testimonials_title}/>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/homepage?populate[hero_img]=*&populate[stakeholder_img_1]=*&populate[stakeholder_img_2]=*&populate[stakeholder_img_3]=*&populate[stakeholder_video]=*&populate[list_item_cards][populate][list_item_card_img]=*&populate[product_cards][populate][list_card_description_img]=*&populate[vertical_description_card][populate][sector_values]=*&populate[testimonials][populate][testimonials_img]=*&populate[vertical_description_card]=*&populate[vertical_description_card][populate][sector_value]=*`
    );
    const data = await res.json();

    return {
      props: {
        data: data.data,
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
