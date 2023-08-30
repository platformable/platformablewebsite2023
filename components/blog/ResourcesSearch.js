import React, { useState, useEffect, useMemo } from "react";
import styles from "@/styles/Blog.module.css";
import Search from "../Search";
import BlogPreviewCard from "../BlogPreviewCard";
import Link from "next/link";

export default function ResourcesSearch({ posts, heading }) {

  // console.log("posts",posts)

  const featuredPost=posts[posts.length-1]?.attributes

  // console.log("featuredPost",featuredPost)

  const [searchWord, setSearchWord] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [seeAllPosts, setSeeAllPosts] = useState(false);
  //UseMemo is used to calculate before render
  const showedPosts = useMemo(
    () => {
      const findPostsBycategory = selectedCategory === 'All' ? posts : posts?.filter((post) =>
                        post?.attributes?.sectors?.data?.some(element => element.attributes.name.includes(selectedCategory))
                        
                      )
      return seeAllPosts ? findPostsBycategory : findPostsBycategory.slice(0,3)
    },
    [seeAllPosts, selectedCategory]
  );
    // console.log("showed",showedPosts)
  const searchFunction = (word) => {
    setSearchWord(word);
  };
  const chooseCategory = (category) =>
    category === selectedCategory
      ? setSelectedCategory("All")
      : setSelectedCategory(category);

      

      const calculateTimeToRead = article => {
        return Math.ceil(article?.trim().split(/\s+/).length / 225)
      }
  return (
    <section className={`${styles["understand-posts-bg"]}`}>
      <div className="">
        <div
          dangerouslySetInnerHTML={{
            __html: heading ? heading : null,
          }}
          className="text-white font-bold"
        />

        <div className="grid md:grid-cols-[1fr_3fr_3fr_3fr] grid-cols-1 gap-5 my-10">
          <button
            className={`${
              selectedCategory === "All"
                ? "bg-[var(--yellow)] text-[var(--purple-extra-dark)] border-none"
                : "text-white"
            } px-10 py-3 rounded-md border-4 `}
            onClick={() => chooseCategory("All")}
          >
            <span>All</span>
          </button>

          <button
            className={`${
              selectedCategory === "Open Ecosystems"
                ? styles.button_selected_category_gradient_OE
                : ""
            } px-10 py-3 md:py-1 rounded-md border-4 text-white`}
            onClick={() => chooseCategory("Open Ecosystems")}
          >
            <span>Open Ecosystems</span>
          </button>

          <button className={`${selectedCategory === 'Open Banking / Open Finance' ? styles.button_selected_category_gradient_OBOF : ''} px-1 py-2 xl:py-3  rounded-md border-2 xl:border-4 text-white`}  onClick={()=>chooseCategory('Open Banking / Open Finance')}>
            <span>Open Banking/Open Finance</span>
          </button>

          <button
            className={`${
              selectedCategory === "Open Health"
                ? styles.button_selected_category_gradient_OH
                : ""
            } px-10 py-3 md:py-1 rounded-md border-4 text-white`}
            onClick={() => chooseCategory("Open Health")}
          >
            <span>Open Health</span>
          </button>
        </div>

        <div className="flex my-5">
          <Search searchFunction={searchFunction} />
        </div>

        <section id="featured-post" className="my-10">
          <Link href={`/blog/${posts[posts.length-1].attributes.slug}`}>
            <div className="bg-white rounded-md">
              <div className={`featured-post-top ${styles['featured-post-top-bg']} rounded-tl-md rounded-tr-md`}>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 py-3 px-7">
                  <div><p className="text-white font-bold">{new Date(featuredPost?.publishedAt).getDate()} {new Date(featuredPost?.publishedAt).toLocaleDateString('en-US',{month:'long'})}</p></div>
                  <p className="text-white">{featuredPost?.sectors.data[0].attributes.name}</p>
                </div>
              </div>
              <div className="featured-post-content">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 p-7 items-center">
                  <div>
                    <h6 className="leading-8 font-bold text-[#1B014B] my-5">{featuredPost?.title}</h6>
                 
                    <span>Written by {' '}   </span>
                   {featuredPost?.teams.data.map((team,index)=>{
                    return (
                      <span key={index}>
                          {team.attributes.name+ ' ' + team.attributes.lastname}{" "}
                          {index < featuredPost?.teams.data.length - 1
                            ? " & "
                            : ""}
                            </span>
                    )
                   })}
                 
                    <div
                        dangerouslySetInnerHTML={{
                          __html: featuredPost?.excerpt
                        }}
                        className="mt-5 leading-7 text-[#1B014B]"
                      />

                    <div className="flex justify-between my-5">
                      <div className="flex gap-x-5 items-center">
                        <img src="/platformable-icon-purple-dark.png" alt="" />
                        <p className="text-[#3524C6] font-bold">{featuredPost?.category.data.attributes.name}</p>
                      </div>
                    <div className="flex items-center gap-x-3">
                      <img src="/clockl.svg" alt="" />
                        <p className="text-[#3524C6] font-bold">{calculateTimeToRead(featuredPost?.content)+' min read'}</p>
                      
                    </div>
                    </div>
                  </div>
                  <div>
                    <img src={featuredPost?.featured_img.data.attributes.url} alt="" />
                  </div>
                </div>
              </div>

            </div>
            </Link>

        </section>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-x-5 px-5 gap-y-5 md:px-0 my-10">
          { showedPosts ? showedPosts
                .sort((a, b) => new Date(a?.attributes?.update_date) - new Date(b?.attributes?.update_date)) 
                .filter((post, index) => {
                  if (searchWord === "") {
                    return post;
                  }
                  return (
                    post.attributes.content
                      .toLowerCase()
                      .includes(searchWord) ||
                    post.attributes.title.toLowerCase().includes(searchWord)
                  );
                })
                .map((post, index) => {
                  return <BlogPreviewCard post={post} key={index} />;
                })
           : null }
        </div>
        <div className="flex gap-3 flex-col justify-center items-center">
          <p className="text-white ">{!seeAllPosts ? 'Check all posts' : 'Show less'}</p>
          {!seeAllPosts ? (
          <img src="/arrow_collapse_bottom.svg" alt="arrow icon" className="cursor-pointer" onClick={() => setSeeAllPosts(true)} />

          ) : (
          <img src="/arrow_collapse_top.svg" alt="arrow icon" className="cursor-pointer"  onClick={() => setSeeAllPosts(false)} />

          )}
        </div>
      </div>
    </section>
  );
}
