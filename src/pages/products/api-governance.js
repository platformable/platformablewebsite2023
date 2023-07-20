import Layout from "../../../components/Layout";
import styles from '@/styles/APIGovernance.module.css'
import Footer from "../../../components/Footer";
import FindMore from "../../../components/data-products/FindMore";
import Testimonials from "../../../components/homepage/Testimonials";
import GovernanceServices from "../../../components/GovernanceServices";
import GovernanceProducts from "../../../components/data-governance/GovernanceProducts";
import Hero from "../../../components/api-governance/Hero";
import OurProcess from "../../../components/api-governance/OurProcess";
export default function APIGovernance({ data }) {
  console.log("data",data);

  return (
    <Layout>
      <Hero data={data}/>
      <GovernanceProducts title={data?.products_title} products={data?.products} />
      <OurProcess data={data}/>
      <GovernanceServices description={data?.services_description} services={data?.services}/>
      {/* <Testimonials data={data?.testimonials} title={data?.testimonials_title} logos={false}/> */}
      <FindMore data={data}/>
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/api-governance?populate[hero_img]=*&populate[services][populate][service_img]=*&populate[products][populate][bookbuybtn_img]=*&populate[testimonials][populate][testimonials_img]=*`
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
