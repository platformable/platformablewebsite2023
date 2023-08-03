import Layout from "../../../components/Layout";
import Hero from "../../../components/speaker-engagement/Hero";
import styles from "@/styles/DataProducts.module.css";
import Footer from "../../../components/Footer";
import FindMore from "../../../components/data-products/FindMore";
import EngagementTopics from "../../../components/speaker-engagement/EngagementTopics";
export default function DataProducts({ data }) {
  console.log("data", data);

  return (
    <Layout>
      <Hero data={data} />
      <EngagementTopics topics={data} />
      <FindMore sectors={data?.sectors} />
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/speaker-engagement?populate[services][populate][service_img]=*&populate[hero_img]=*&populate[sectors][populate][image]=*&populate[sectors][populate][icon]=*`
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
