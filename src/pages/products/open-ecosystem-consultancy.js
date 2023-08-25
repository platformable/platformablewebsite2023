import Layout from "../../../components/Layout";
import Hero from "../../../components/speaker-engagement/Hero";
import styles from '@/styles/OpenEcosystempage.module.css'
import Footer from "../../../components/Footer";
import FindMore from "../../../components/data-products/FindMore";
import OurProcess from "../../../components/open-ecosystem-consultancy/OurProcess";
import OurSolutions from "../../../components/open-ecosystem-consultancy/OurSolutions";
import Meta from "../../../components/Meta";

export default function DataProducts({ data }) {
  console.log("data",data);

  return (
    <Layout>
      <Meta title={data?.title} data={data} />
      <Hero data={data}/>
      <OurSolutions data={data} />
      <OurProcess data={data} />
      <FindMore sectors={data?.sectors}/>

    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/open-ecosystem?populate[hero_img]=*&populate[solutions][populate][icon]=*&&populate[sectors][populate][image]=*&populate[diagram]=*&populate[sectors][populate][icon]=*`
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
