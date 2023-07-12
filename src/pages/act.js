import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import Hero from "../../components/actpage/Hero";
import ResourcesSearch from "../../components/understand/ResourcesSearch";

export default function ActPage({ data, posts }) {
   console.log("data", data);

  return (
    <Layout>
      <Hero data={data} />
      <ResourcesSearch posts={posts} heading={data?.blog_description}/>
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const [data, posts] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/act?populate[hero_img]=*`
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
