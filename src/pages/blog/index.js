import Layout from "../../../components/Layout";
import styles from "../../styles/Blog.module.css";
import ResourcesSearch from "../../../components/blog/ResourcesSearch";

export default function BlogsIndex({ posts }) {
  return (
    <Layout>
      <section id="blog" className={`${styles["background_blog"]} py-10`}>
        <div className="container mx-auto">
          <h1 className="mb-5 font-bold text-white ">Blog</h1>
          <h6 className={`text-[#FFE200]`}>
            EXPLORE OUR BLOG SECTION BY SECTOR AND ALLOW OUR INSIGHTFUL AND
            ENGAGING ARTICLES TO INSPIRE YOU
          </h6>
          <ResourcesSearch posts={posts} />
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
