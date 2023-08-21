import Layout from '../../components/Layout';
import styles from '@/styles/DataProducts.module.css'
import Footer from "../../components/Footer";
import { EngageDiagram } from "../../components/EngageDiagram";
import Hero from "../../components/engagepage/Hero";
import ResourcesSearch from "../../components/engagepage/ResourcesSearch";



export default function DataProducts({ data,posts }) {
  // console.log("data",data);
  console.log("posts",posts)

  return (
    <Layout>
      <Hero data={data}/>
      <EngageDiagram title={data?.products_title}/>
      <ResourcesSearch  posts={posts} heading={data?.understand_blog_description}/>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
  /*   const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/engage?populate=*`
    );
    const data = await res.json(); */


    const [data, posts] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/engage?populate=*`
      ).then((res) => res.json()),
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts?populate=*`).then(
        (res) => res.json()),
    ]);

    return {
      props: {
        data: data?.data?.attributes,
        posts: posts?.data,
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
