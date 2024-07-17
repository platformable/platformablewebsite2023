import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../../../components/Layout";
import styles from "@/styles/Blogpage.module.css";
import BlogPreviewCard from "../../../../components/BlogPreviewCard";
import Head from "next/head";
import { InlineWidget } from "react-calendly";
import { LinkedinShareButton, LinkedinIcon } from "react-share";
import Meta from "../../../../components/Meta";

import { usePlausible } from "next-plausible";
import ActContent from "../../../../components/blog/ActContent";
import RegularContent from "../../../../components/blog/RegularContent";

// const file = await unified()
//   .use(remarkRehype, {allowDangerousHtml: true})
//   .use(rehypeSanitize)
//   .process(await read('index.html'))

export default function BlogPage({ data }) {
  const router = useRouter();
  const plausible = usePlausible();
  // console.log("blog data", data)
  //get post index to create next and prev logic
  const [relatedSectorPosts, setRelatedSectorPosts] = useState([]);
  const [selectedPostCategory, setSelectedPostcategory] = useState(null);
  const [selectedPostIndexPosition, setSelectedPostIndexPosition] =
    useState(null);
  const [previousPost, setPreviousPost] = useState(false);
  const [nextPost, setNextPost] = useState(false);

  const getAllPosts = async (category) => {
    fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts?populate=*&filters[sectors][name]=${category}`
    )
      .then((res) => res.json())
      .then((res) => setRelatedSectorPosts(res.data))
      .catch((e) => console.log("same sector posts error", e));
  };

  const previousPostButton = () => {
    const getSlug =
      relatedSectorPosts[selectedPostIndexPosition - 1].attributes?.slug;
    router.push(`/blog/${getSlug}`);
  };

  const nextPostButton = () => {
    const getSlug =
      relatedSectorPosts[selectedPostIndexPosition + 1].attributes?.slug;
    router.push(`/blog/${getSlug}`);
  };

  const findIndexOfActivePost = (relatedSectorPosts) => {
    const postIndex = relatedSectorPosts.findIndex(
      (post) => post.attributes.slug.toLowerCase() === data.slug.toLowerCase()
    );

    setSelectedPostIndexPosition(postIndex);

    selectedPostIndexPosition <= 0
      ? setPreviousPost(false)
      : setPreviousPost(true);
    selectedPostIndexPosition === relatedSectorPosts.length - 1
      ? setNextPost(false)
      : setNextPost(true);
  };

  useEffect(() => {
    window?.twttr?.widgets?.load();
  }, []);

  useEffect(() => {
    setSelectedPostcategory(data?.sectors?.data[0]?.attributes.name);
  }, [selectedPostCategory]);

  useEffect(() => {
    getAllPosts(selectedPostCategory);
  }, [data, selectedPostCategory]);

  useEffect(() => {
    findIndexOfActivePost(relatedSectorPosts);
  }, [selectedPostIndexPosition, relatedSectorPosts]);

  function img_find() {
    return Array.from(document.getElementsByTagName("img")).map((i) => i.src);
  }

  useEffect(() => {
    const imagesWithSrcset = document.querySelectorAll(".blog-page img");
    imagesWithSrcset.forEach((image) => (image.srcset = image.src));
  }, []);

  const setHeaderSectorColor = (sectorName) => {
    const sectorColors = {
      "Open Ecosystems": "bg--gradient-oe",
      "Open Banking / Open Finance": "bg--gradient-obof",
      "Open Health": "bg--gradient-oh",
    };
    return sectorColors[sectorName];
  };

  const calculateTimeToRead = (arrayOfArticles) => {
    return arrayOfArticles.reduce((prevArticle, currentArticle) => {
      return (
        prevArticle +
        Math.ceil(currentArticle?.trim().split(/\s+/).length / 225)
      );
    }, 0);
  };
  return (
    <Layout>
      <Meta title={data?.title} data={data} />

      <section className="blog-container py-10">
        <div
          className={`bg-[#3425C9] blog-header`}
        >
          <div className="container mx-auto md:flex block justify-between items-center py-10">
            <h3 className="font-bold text-white">
              How can we help?
            </h3>
            <Link href="/help-guide">
              <button className="py-2 px-7 bg-[var(--yellow)] shadow rounded font-medium">
                Back to help guide section
              </button>
            </Link>
          </div>
        </div>
        <article className="py-10 ">
          <div className="content-header text-[var(--purple-extra-dark)] container mx-auto ">
            <section className="block md:flex justify-between mb-10">
              <div className="flex items-center gap-x-3">
                <img
                  src="/platformable-icon-purple-little.svg"
                  alt="Platformable logo"
                />
                <h5 className="font-bold text-[#2B30C1]">
                 Help Guide
                </h5>
              </div>
              <div className="items-center flex gap-x-7 gap-y-7 md:mt-0 mt-5">
         
                <div className="flex items-center gap-x-3">
               {/*    <a
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                    href={`mailto:?subject=${data.slug}!&body=${`${
                      data?.excerpt?.replace(/(<([^>]+)>)/gi, "") +
                      ` - https://www.platformable.com/blog/${data?.slug}`
                    }`}`}
                  >
                    <img width={30} src="/email_blue.svg" alt="email" />
                  </a> */}
         {/*          <LinkedinShareButton
                    title={data?.slug}
                    summary="platformable"
                    source={`https://www.platformable.com/blog/${data?.slug}`}
                    url={`https://www.platformable.com/blog/${data?.slug}`}
                    onClick={() =>
                      plausible("ShareBlogLinkedin", {
                        props: { ShareBlogLinkedin: `blog/${data?.slug}` },
                      })
                    }
                  >
                    <LinkedinIcon
                      size={30}
                      round={true}
                      iconFillColor={"white"}
                      bgStyle={{ fill: "#3423C5" }}
                    />
                  </LinkedinShareButton> */}

                </div>
              </div>
            </section>
            <section className="">
              <h1 className="content-title font-bold text-[var(--purple-extra-dark)] mb-5">
                {data?.title}
              </h1>

              <div>
                {/*          {data?.update_date ? (
            <span>Updated at {new Date(data?.update_date).toDateString()}</span>
          ) : (
            <span>
              Published at {new Date(data?.publishedAt).toDateString()}
            </span>
          )} */}
              </div>
            </section>
          </div>

          <RegularContent data={data} />
        </article>
      </section>
    </Layout>
  );
}
//
export async function getServerSideProps(ctx) {
  const slug = ctx.params.slug;
  // console.log("slugslug", slug);

  try {
    const [data] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/help-centers?filters[slug]=${slug}&populate=*`
      ).then((res) => res.json()),
      // fetch(
      //   `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts?populate=*&filters[sectors][name]=Open Health`
      // ).then((res) => res.json()),
    ]);

    // console.log("data", data);

    return {
      props: {
        data: await data.data[0].attributes,
        // relatedPosts: relatedPosts?.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/blog",
      },
      props: {
        data: "No Data",
      },
    };
  }
}
