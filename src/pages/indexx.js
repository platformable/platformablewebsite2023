import { Inter } from "next/font/google";
import Layout from "../../components/Layout";
import SupportOpenEcosystems from "../../components/homepage/SupportOpenEcosystems";
import Explore from "../../components/homepage/Explore";
import ProductsServices from "../../components/homepage/ProductsServices";
import Hero from "../../components/homepage/Hero";
import Meta from "../../components/Meta";
import ProductCarousel from "../../components/ProductCarousel";
import BannerHealthDataGov from "../../components/banners/BannerHealthDataGov";
import BannerTop from "../../components/homepage/BannerTop";
import BannerLMS from "../../components/banners/BannerLMS";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  const newData = data.attributes;
  // console.log(newData)
  return (
    <>
        <Layout>
      <Meta title={newData?.hero_title} data={newData}/>
      <div className="relative">
      {/* <BannerTop data={newData}/> */}
      {/* <BannerHealthDataGov /> */}
      <BannerLMS />
        
        <Hero
         
          heroSubtitle={newData?.hero_subtitle}
          hero_title={newData?.hero_title}
        />

  {/*       <button
          className={`${styles["contact-btn"]} bg-[var(--yellow)] shadow fixed top-0 left-0  pl-20 pr-7  py-3 text-white my-5 rounded-tr-md rounded-br-md md:block hidden `}
        >
          <Link href="/contact-us">
            <div className="flex gap-x-5  self-start items-center ">
              <img src="/icon_section01.svg" alt="" className="" />
              <p className="text-[#2A2FC1]">Contact us</p>
              <img src="/icon_arrow_purple_dark.png" alt="" />
            </div>
          </Link>
        </button> */}
        <ProductCarousel carouselData={newData?.carousel} />
        <SupportOpenEcosystems
          list_items_cards={newData?.list_item_cards}
          title={newData?.support_open_ecosystems_title}
        />
        {/* <StakeholdersOpenEcosystems
          videos={[
            newData?.stakeholder_img_1,
            newData?.stakeholder_img_2,
            newData?.stakeholder_img_3,
          ]}
          title={newData?.stakeholder_title}
        /> */}

        <ProductsServices
          title={newData?.product_services_title}
          product_cards={newData?.product_cards}
        />
        <Explore
          vertical_description_card={
            newData?.vertical_description_card
          }
          title={newData?.explore_sectors_title}
        />
        {/* <Testimonials data={newData.testimonials} title={newData?.testimonials_title} logos={true}/> */}
    
      </div>
    </Layout>
    </>
   
  );
}
//it is like the useEffect
export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/homepage?populate[hero_img]=*&populate[stakeholder_img_1]=*&populate[stakeholder_img_2]=*&populate[stakeholder_img_3]=*&populate[stakeholder_video]=*&populate[list_item_cards][populate][list_item_card_img]=*&populate[product_cards][populate][list_card_description_img]=*&populate[vertical_description_card][populate][sector_values]=*&populate[testimonials][populate][testimonials_img]=*&populate[vertical_description_card]=*&populate[vertical_description_card][populate][sector_value]=*&populate[carousel][populate][product_carousel_images]=*`
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
