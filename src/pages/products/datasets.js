import Layout from "../../../components/Layout";
import styles from "@/styles/DataProducts.module.css";
import Footer from "../../../components/Footer";
import FindMore from "../../../components/data-products/FindMore";
import Testimonials from "../../../components/homepage/Testimonials";
import OurProcess from "../../../components/datasets/OurProcess";
import Hero from "../../../components/datasets/Hero";
import OurDatasets from "../../../components/datasets/OurDatasets";

export default function DataSets({ data }) {
  console.log("data", data);

  return (
    <Layout>
      <Hero data={data}/>
      <OurDatasets title={data?.datasets_products_title} datasets={data?.products}/>
      <OurProcess title={data?.datasets_process_title}/>
      <Testimonials title={data?.datasets_testimonial_title} data={data?.testimonials}/>
      <FindMore />
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/dataset?populate[datasets_img]=*&populate[products]=*&populate[testimonials][populate][testimonials_img]=*`
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
