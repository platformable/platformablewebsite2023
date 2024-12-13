import Layout from "../../../components/Layout";
import styles from "../../styles/Blog.module.css";
import ResourcesSearch from "../../../components/blog/ResourcesSearch";
import Meta from "../../../components/Meta";

export default function BlogsIndex({ posts }) {
  // console.log("posts", posts)
  const metaData = {
      excerpt: 'Stay updated with the latest insights and industry news on the Platformable Blog. Discover articles on platform strategies, case studies, and expert tips'
  }
  return (
    <Layout>
      <Meta title="Insights & Updates | Platformable Blog" data={metaData}>
      <link rel="canonical" href="https://www.platformable.com/blog/" />
      </Meta>
      <section id="blog" className={`${styles["background_blog"]} py-10`}>
        <div className="container mx-auto">
          <h1 className="mb-5 font-bold text-white ">Blog</h1>
          <ResourcesSearch posts={posts} draft={false}/>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const [posts] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts?populate[teams][populate][image]=*&populate[featured_img]=*&populate[sectors]=*&populate[category]=*`
      ).then((res) => res.json()),
    ]);

    return {
      props: {
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
