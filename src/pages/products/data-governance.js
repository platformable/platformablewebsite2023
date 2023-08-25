import Layout from "../../../components/Layout";
import styles from '@/styles/DataProducts.module.css'
import Hero from "../../../components/data-governance/Hero";
import FindMore from "../../../components/data-products/FindMore";
import Testimonials from "../../../components/homepage/Testimonials";
import OurProcess from "../../../components/data-governance/OurProcess";
import GovernanceServices from "../../../components/GovernanceServices";
import GovernanceProducts from "../../../components/data-governance/GovernanceProducts";
import Meta from "../../../components/Meta";
export default function DataGovernance({ data }) {
  console.log("data",data);

  return (
    <Layout>
      <Meta title={data?.dg_title} data={data} />
      <Hero data={data}/>
      <GovernanceProducts title={data?.products_title} products={data?.products} />
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
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/data-governance?populate[hero_img]=*?&populate[services][populate][service_img]=*&populate[products][populate][bookbuybtn_img]=*&populate[testimonials][populate][testimonials_img]=*&populate[products][populate][product_icon]=*&populate[process_media]=*&populate[sectors][populate][icon]=*&populate[sectors][populate][image]=*`
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
