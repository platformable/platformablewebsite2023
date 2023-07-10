import Layout from "../../../components/Layout";
import styles from '@/styles/DataProducts.module.css'
import Hero from "../../../components/data-governance/Hero";
import Footer from "../../../components/Footer";
import FindMore from "../../../components/data-products/FindMore";
import Testimonials from "../../../components/homepage/Testimonials";
export default function DataGovernance({ data }) {
  console.log("data",data);

  return (
    <Layout>
      <Hero data={data}/>
      <Testimonials data={data?.testimonials} title={data?.data_product_testimonial_title} logos={false}/>
      <FindMore data={data}/>
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/data-governance?populate[hero_img]=*?&populate[services][populate][service_img]=*&populate[products][populate][bookbuybtn_img]=*&&populate[testimonials][populate][testimonials_img]=*`
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
