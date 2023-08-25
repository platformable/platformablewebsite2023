import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import Hero from "../../components/understand/Hero";
import ResourcesSearch from "../../components/understand/ResourcesSearch";
import Meta from "../../components/Meta";

export default function DataProducts({ data, posts }) {
   //console.log("data", data);

  return (
    <Layout>
      <Meta title={data?.understand_hero_title} data={data} />
      <Hero data={data} />
      <ResourcesSearch  posts={posts} heading={data?.understand_blog_description}/>

    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const [data, posts] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/understand?populate=*`
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
