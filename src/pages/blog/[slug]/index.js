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
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { usePlausible } from "next-plausible";

// const file = await unified()
//   .use(remarkRehype, {allowDangerousHtml: true})
//   .use(rehypeSanitize)
//   .process(await read('index.html'))

export default function BlogPage({ data }) {
  const router = useRouter();
  const plausible = usePlausible()
  // console.log("data",data)

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
    return Array.from(document.getElementsByTagName("img")).map(i => i.src);
}




useEffect(()=>{
  const imagesWithSrcset = document.querySelectorAll('.blog-page img')
  imagesWithSrcset.forEach(image=>image.srcset=image.src)
},[])


  const setHeaderSectorColor = (sectorName) => {
    const sectorColors = {
      "Open Ecosystems": "bg--gradient-oe",
      "Open Banking / Open Finance": "bg--gradient-obof",
      "Open Health": "bg--gradient-oh",
    };
    return sectorColors[sectorName];
  };

  const calculateTimeToRead = (article) => {
    return Math.ceil(article?.trim().split(/\s+/).length / 225);
  };

  return (
    <Layout>
      <Meta title={data?.title} data={data} />

      <section className="blog-container">
        <div
          className={`${setHeaderSectorColor(
            data?.sectors?.data?.[0].attributes.name
          )} blog-header`}
        >
          <div className="container mx-auto md:flex block justify-between items-center py-10">
            <h3 className="font-bold text-white">
              {data?.sectors?.data?.[0].attributes.name}
            </h3>
            <Link href="/blog">
              <button className="py-2 px-7 bg-[var(--yellow)] border-2 shadow rounded font-medium">
                Back to blog section
              </button>
            </Link>
          </div>
        </div>
        <article className="py-10  container mx-auto">
          <div className="content-header text-[var(--purple-extra-dark)] md:flex block justify-between mb-10">
            <div className="flex items-center gap-x-3">
              <img
                src="/platformable-icon-purple-little.svg"
                alt="Platformable logo"
              />
              <h5 className="font-bold text-[#2B30C1]">
                {data?.category?.data?.attributes?.name}
              </h5>
            </div>
            <div className="items-center flex gap-x-7 gap-y-7 md:mt-0 mt-5">
              <div className="flex items-center gap-x-2">
                <img src="/clockl.svg" alt="watch" />
                <span className="font-bold text-[#2B30C1]">
                  {calculateTimeToRead(data.content)} min read
                </span>
              </div>
              <div className="flex items-center gap-x-3">
                <a
                target="_blank"
                  href={`mailto:?subject=${
                    data.slug
                  }!&body=${`${data?.excerpt?.replace(/(<([^>]+)>)/gi, "") +` - https://www.platformable.com/blog/${data?.slug}`}`}`}
                >
                  <img width={30} src="/email_blue.svg" alt="email" />
                </a>
                <LinkedinShareButton
                  title={data?.slug}
                  summary="platformable"
                  source={`https://www.platformable.com/blog/${data?.slug}`}
                  url={`https://www.platformable.com/blog/${data?.slug}`}
                  onClick={() => plausible('ShareBlogLinkedin', {props: {ShareBlogLinkedin:`blog/${data?.slug}` }})}
                >
                  <LinkedinIcon
                    size={30}
                    round={true}
                    iconFillColor={"white"}
                    bgStyle={{ fill: "#3423C5" }}
                  />
                </LinkedinShareButton>
                {/* <Link
                  href="https://tidal.com/browse/mix/0105d4b80651774ef38931747c080a"
                  target="_blank"
                >
                  <img
                    src="/tidal_blue.svg"
                    className="text-white"
                    alt="tidal"
                    width={32}
                  />
                </Link> */}
              </div>
            </div>
          </div>
          <h1 className="content-title font-bold text-[var(--purple-extra-dark)] mb-5">
            {data?.title}
          </h1>
          <span className="text-[var(--purple-extra-dark)]">Written by </span>
          {data?.teams?.data.map((team, index) => (
            <span key={index} className="font-bold text-[var(--purple-extra-dark)]">
              {team.attributes.name + " " + team.attributes.lastname}{" "}
              {index < data?.teams?.data.length - 1 ? " & " : ""}
            </span>
          ))}
          <br />

          {data?.update_date ? (
            <span>Updated at {new Date(data?.update_date).toDateString()}</span>
          ) : (
            <span>
              Published at {new Date(data?.publishedAt).toDateString()}
            </span>
          )}
          {data?.markdown_content ? (
            
            <ReactMarkdown
              className="blog-page"
              // children={data?.markdown_content}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeSanitize]}
            >{data?.markdown_content}
            </ReactMarkdown>
          ) : (
            <div
              dangerouslySetInnerHTML={{
                __html: data?.content,
              }}
              className={`mt-7 blog-page`}
              id="blogPage"
            />
          )}

          {data.Calendly ? (
            <InlineWidget url="https://calendly.com/platformable" />
          ) : null}
          {/* <div className="my-20 flex flex-col gap-10 lg:flex-row items-center justify-center "> */}
          <div className="flex gap-x-10 gap-y-10 justify-center mt-20 mb-10 md:flex-row flex-col items-center">
          {data?.teams?.data?.map((member, index) => (
            
              <div key={index} className="grid justify-center items-center text-center">
              <img
                src={member?.attributes?.image?.data?.attributes.url}
                alt="member image"
                className="mb-7"
                width={150}
              />
              <p className="font-bold text-[var(--purple-medium)]">
                {member?.attributes?.name + " " + member?.attributes?.lastname}
              </p>
              <span className="font-medium">
                {member?.attributes?.position.toUpperCase()}
              </span>
            </div>
           
          ))}
           </div>
          {/* </div> */}

          {data?.footnote > 0 ? (
            <div className="p-7 rounded-md bg-[#FBC6FD] my-10">
              <p className="font-bold">Article references</p>
              {data?.footnote?.map((note, index) => {
                return (
                  <div className="flex gap-x-1 my-5" key={index}>
                    <span className="text-xs">{index + 1}</span>
                    <p>
                      Platformable value model:{" "}
                      <strong>{note?.footnote}</strong>
                    </p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </article>

        <div className="container mx-auto  justify-center flex gap-x-5 mb-20 items-center">
          <button
            className={`rounded px-10 py-5 bg-blue-100 ${styles.bg_blog_next_btn} border-white shadow-md`}
            onClick={previousPostButton}
            disabled={previousPost ? false : true}
          >
            <img src="/left_arrow.svg" alt="" />
          </button>
          <p>Related article</p>
          <button
            className={`rounded px-10 py-5 bg-blue-100 ${styles.bg_blog_next_btn} border-white shadow-md`}
            onClick={nextPostButton}
            disabled={nextPost ? false : true}
          >
            <img src="/icon_aroow.svg" alt="" />
          </button>
        </div>

        <div className={`${styles.bg_related_articles}`}>
          <div className="container mx-auto gap-x-3 pt-10 pb-16">
            <div className="flex items-center gap-x-5 mb-10 ">
              <img src="/platformable-icon-white.svg" alt="Platformable logo" />

              <h5 className="text-white font-bold">Related articles</h5>
            </div>
            <div className="grid lg:grid-cols-3 gap-x-10 gap-y-7">
              {relatedSectorPosts?.map((post, index) => {
                if (index <= 2) {
                  return <BlogPreviewCard post={post} key={index} draft={false}/>;
                } else {
                  null;
                }
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
  // console.log("slugslug", slug);

  try {
    const [data] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts?filters[slug]=${slug}&populate[teams][populate][image]=*&populate[featured_img]=*&populate[sectors]=*&populate[category]=*&populate[footnote]=*`
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
