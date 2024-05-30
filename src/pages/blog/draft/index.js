import Layout from "../../../../components/Layout";
import styles from "../../../styles/Blog.module.css";
import ResourcesSearch from "../../../../components/blog/ResourcesSearch";
import Meta from "../../../../components/Meta";

export default function BlogsDraftIndex({ posts }) {
  console.log("draf posts", posts)
  return (
    <Layout>
      <Meta title="Platformable Blog" />
      <section id="blog" className={`${styles["background_blog"]} py-10`}>
        <div className="container mx-auto">
          <h1 className="mb-5 font-bold text-white ">Blog Drafts</h1>
          <ResourcesSearch posts={posts} draft={true}/>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const [posts] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts/?publicationState=preview&filters[publishedAt][$null]=true&?populate[teams][populate][image]=*&populate[featured_img]=*&populate[sectors]=*&populate[category]=*`
      ).then((res) => res.json()),
    ]);

    return {
      props: {
        posts: posts?.data
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
