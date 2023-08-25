import Layout from "../../../components/Layout";
import Hero from "../../../components/speaker-engagement/Hero";
import styles from "@/styles/DataProducts.module.css";
import Footer from "../../../components/Footer";
import FindMore from "../../../components/data-products/FindMore";
import EngagementTopics from "../../../components/speaker-engagement/EngagementTopics";
import Meta from "../../../components/Meta";

export default function DataProducts({ data }) {
  console.log("data", data);

  return (
    <Layout>
      <Meta title={data?.title} data={data} />
      <Hero data={data} />
      <EngagementTopics topics={data} />
      <FindMore sectors={data?.sectors} />

    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/speaker-engagement?populate[services][populate][service_img]=*&populate[hero_img]=*&populate[sectors][populate][image]=*&populate[sectors][populate][icon]=*&populate[featured_img]=*`
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
