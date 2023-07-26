import Layout from '../../components/Layout';
import styles from '@/styles/DataProducts.module.css'
import Footer from "../../components/Footer";
import { EngageDiagram } from "../../components/EngageDiagram";
import Hero from "../../components/engagepage/Hero";
export default function DataProducts({ data }) {
  // console.log("data",data);

  return (
    <Layout>
      <Hero data={data}/>
      <EngageDiagram title={data?.products_title}/>
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/engage?populate=*`
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
