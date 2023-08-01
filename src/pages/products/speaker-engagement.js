import Layout from "../../../components/Layout";
import Hero from "../../../components/speaker-engagement/Hero";
import styles from '@/styles/DataProducts.module.css'
import Footer from "../../../components/Footer";
import FindMore from "../../../components/data-products/FindMore";
import EngagementTopics from "../../../components/speaker-engagement/EngagementTopics";
export default function DataProducts({ data }) {
  console.log("data",data);

  return (
    <Layout>
      <Hero data={data}/>
      <EngagementTopics />
      <FindMore sectors={data?.sectors}/>
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/data-product?populate[data_products_hero_img]=*&populate[products][populate][product_icon]=*&populate[testimonials][populate][testimonials_img]=*&populate[discovery_images]=*&populate[scope_img1]=*&populate[scope_img2]=*&populate[scope_img3]=*&populate[sectors][populate][icon]=*&&populate[sectors][populate][image]=*`
    );
    const data = await res.json();

    return {
      props: {
        data: data?.data?.attributes,
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
