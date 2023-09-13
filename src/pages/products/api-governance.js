import Layout from "../../../components/Layout";
import styles from '@/styles/APIGovernance.module.css'
import Footer from "../../../components/Footer";
import FindMore from "../../../components/data-products/FindMore";
import Testimonials from "../../../components/homepage/Testimonials";
import GovernanceServices from "../../../components/GovernanceServices";
import APIGovernanceProducts from "../../../components/api-governance/APIGovernanceProducts";
import Hero from "../../../components/api-governance/Hero";
import OurProcess from "../../../components/api-governance/OurProcess";
import Meta from "../../../components/Meta";
export default function APIGovernance({ data }) {
  // console.log("data",data);

  return (
    <Layout>
      <Meta title={data?.hero_title} data={data} />
      <Hero data={data}/>
      <APIGovernanceProducts products={data?.products} />
      <OurProcess data={data}/>
      <GovernanceServices description={data?.services_description} services={data?.services}/>
      {/* <Testimonials data={data?.testimonials} title={data?.testimonials_title} logos={false}/> */}
      <FindMore sectors={data?.sectors}/>

    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/api-governance?populate[hero_img]=*&populate[featured_img]=*&populate[diagram]=*&populate[services][populate][service_img]=*&populate[products][populate][bookbuybtn_img]=*&populate[products][populate][product_icon]=*&populate[testimonials][populate][testimonials_img]=*&populate[sectors][populate][image]=*&populate[sectors][populate][icon]=*`
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
