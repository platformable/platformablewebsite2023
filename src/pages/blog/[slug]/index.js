import {useEffect} from 'react'
import Link from "next/link";
import Layout from "../../../../components/Layout";
import styles from "@/styles/Blogpage.module.css";
import BlogPreviewCard from "../../../../components/BlogPreviewCard";
import Head from "next/head";

import { LinkedinShareButton, LinkedinIcon } from "react-share";

export default function BlogPage({ data, relatedPosts }) {
  console.log("data", data);

  useEffect(() => {
    window?.twttr?.widgets?.load();
  }, []);

  return (
    <Layout>
      <Head>
        <title>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <section className="blog-container">
        <div className={`${styles.bg_blog_header} blog-header`}>
          <div className="container mx-auto flex justify-between items-center py-10">
            <h1 className="font-bold text-white">
              {data?.sectors?.data?.[0].attributes.name}
            </h1>
            <Link href="/blog">
              <button className="py-2 px-7 border-white border-2 shadow rounded text-white font-medium">
                Back to blog section
              </button>
            </Link>
          </div>
        </div>
        <article className="py-10  container mx-auto">
          <div className="content-header text-[var(--purple-extra-dark)] flex justify-between mb-10">
            <div className="flex items-center gap-x-3">
              <img
                src="/platformable-icon-purple-little.svg"
                alt="Platformable logo"
              />
              <h5 className="font-bold text-[#2B30C1]">
                {data?.category?.data?.attributes?.name}
              </h5>
            </div>
            <div className="items-center flex gap-x-7">
              <div className="flex items-center gap-x-2">
                <img src="/clockl.svg" alt="watch" />
                <span className="font-bold text-[#2B30C1]">3 min read</span>
              </div>
              <div className="flex items-center gap-x-3">
                <a
                  href={`mailto:test@example.com?subject=${
                    data.slug
                  }!&body=${data.excerpt.replace(/(<([^>]+)>)/gi, "")}`}
                >
                  <img width={30} src="/email_blue.svg" alt="email" />
                </a>
                <LinkedinShareButton
                  title="tlelelelel"
                  summary="cbcbxvcbxvbxv"
                  source="http://www.platformable.com"
                  url={`https://www.platformable.com/blog/${data.slug}`}
                >
                  <LinkedinIcon
                    size={30}
                    round={true}
                    iconFillColor={"white"}
                    bgStyle={{ fill: "#3423C5" }}
                  />
                </LinkedinShareButton>
                <img width={30} src="/tidal_blue.svg" alt="tidal" />
              </div>
            </div>
          </div>
          <h3 className="content-title font-bold text-[var(--purple-extra-dark)] mb-5">
            {data?.title}
          </h3>
          <span>Written by </span>
          {data?.teams?.data.map((team, index) => (
            <span key={index}>
              {team.attributes.name + " " + team.attributes.lastname}{" "}
              {index < data?.teams?.data.length - 1 ? " & " : ""}
            </span>
          ))}

          <div
            dangerouslySetInnerHTML={{
              __html: data?.content,
            }}
            className={`mt-7  blog-page`}
            id="blogPage"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: data?.excerpt,
            }}
            className="mt-7"
          />
          <div className="my-20 flex flex-col gap-10 lg:flex-row items-center justify-center">
            {data?.teams?.data?.map((member, index) => (
              <div className="flex flex-col items-center" key={index}>
                <img
                  src={member?.attributes?.image?.data?.attributes.url}
                  alt="member image"
                  className="mb-7"
                  width={150}
                />
                <p className="font-bold text-[var(--purple-medium)]">
                  {member?.attributes?.name +
                    " " +
                    member?.attributes?.lastname}
                </p>
                <span className="font-medium">
                  {member?.attributes?.position.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </article>
        <div className={`${styles.bg_related_articles}`}>
          <div className="container mx-auto gap-x-3 pt-10 pb-16">
            <div className="flex items-center gap-x-5 mb-10 ">
              <img src="/platformable-icon-white.svg" alt="Platformable logo" />

              <h5 className="text-white font-bold">Related articles</h5>
            </div>
            <div className="grid lg:grid-cols-3 gap-x-10">
              {relatedPosts?.map((post, index) => {
                  if(index <= 2){
                    return <BlogPreviewCard post={post} key={index} />
                  } else {null}
      
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
//
export async function getServerSideProps(ctx) {
  const slug = ctx.params.slug;
  console.log("slugslug", slug);

  try {
    const [data, relatedPosts] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts?filters[slug]=${slug}&populate[teams][populate][image]=*&populate[featured_img]=*&populate[sectors]=*&populate[category]=*`
      ).then((res) => res.json()),
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts?populate=*&filters[sectors][name]=Open%20Health`
      ).then((res) => res.json()),
    ]);

    return {
      props: {
        data: await data.data[0].attributes,
        relatedPosts: relatedPosts?.data,
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
