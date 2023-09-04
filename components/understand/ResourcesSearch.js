import React, { useState, useEffect, useMemo } from "react";
import styles from "@/styles/Understandpage.module.css";
import Search from "../../components/Search";
import BlogPreviewCard from "../BlogPreviewCard";

export default function ResourcesSearch({ posts, heading, filterByCategory }) {
  const [searchWord, setSearchWord] = useState("");
  const [selectedSector, setSelectedSector] = useState("All");
  const [seeAllPosts, setSeeAllPosts] = useState(false);

  const selectedCategoryPosts = posts.filter(
    (post) => post.attributes.category.data.attributes.name === filterByCategory
  );

  const showedPosts = useMemo(() => {
    const findPostsBycategory =
      selectedSector === "All"
        ? selectedCategoryPosts
        : selectedCategoryPosts?.filter((post) =>
            post?.attributes?.sectors?.data?.some((element) =>
              element.attributes.name.includes(selectedSector)
            )
          );
    return seeAllPosts ? findPostsBycategory : findPostsBycategory.slice(0, 6);
  }, [seeAllPosts, selectedSector]);

  const searchFunction = (word) => {
    setSearchWord(word);
  };
  const chooseSector = (category) =>
    category === selectedSector
      ? setSelectedSector("All")
      : setSelectedSector(category);

  return (
    <section className={`${styles["understand-posts-bg"]}`}>
      <div className="container mx-auto py-10">
        <div
          dangerouslySetInnerHTML={{
            __html: heading ? heading : null,
          }}
          className="text-white "
        />

        <div className="grid md:grid-cols-[1fr_3fr_3fr_3fr] grid-cols-1 gap-5 my-10">
          <button
            className={`${
              selectedSector === "All"
                ? "bg-[var(--yellow)] text-[var(--purple-extra-dark)] border-none"
                : "text-white"
            } px-4 py-2 xl:py-3  rounded-md border-2 xl:border-4 `}
            onClick={() => chooseSector("All")}
          >
            <span>All</span>
          </button>

          <button
            className={`${
              selectedSector === "Open Ecosystems"
                ? styles.button_selected_category_gradient_OE
                : ""
            } px-4 xl:py-3  rounded-md border-2 xl:border-4 text-white`}
            onClick={() => chooseSector("Open Ecosystems")}
          >
            <span>Open Ecosystems</span>
          </button>

          <button
            className={`${
              selectedSector === "Open Banking / Open Finance"
                ? styles.button_selected_category_gradient_OBOF
                : ""
            } px-2 py-2 xl:py-3  rounded-md border-2 xl:border-4 text-white`}
            onClick={() => chooseSector("Open Banking / Open Finance")}
          >
            <span>Open Banking/Open Finance</span>
          </button>

          <button
            className={`${
              selectedSector === "Open Health"
                ? styles.button_selected_category_gradient_OH
                : ""
            } px-4 py-2 xl:py-3  rounded-md border-2 xl:border-4 text-white`}
            onClick={() => chooseSector("Open Health")}
          >
            <span>Open Health</span>
          </button>
        </div>

        <div className="flex">
          <Search searchFunction={searchFunction} />
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-x-5 px-5 gap-y-5 md:px-0 my-10">
          {showedPosts
            ? showedPosts
                .sort(
                  (a, b) =>
                    new Date(a?.attributes?.update_date) -
                    new Date(b?.attributes?.update_date)
                )
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
                .sort(
                  (a, b) =>
                    new Date(b?.attributes?.update_date) -
                    new Date(a?.attributes?.update_date)
                )
                .map((post, index) => {
                  return <BlogPreviewCard post={post} key={index} />;
                })
            : null}
        </div>

        <div className="flex gap-3 flex-col justify-center items-center">
          <p className="text-white ">
            {!seeAllPosts ? "See all of our posts" : "Show less"}
          </p>
          {!seeAllPosts ? (
            <img
              src="/arrow_collapse_bottom.svg"
              alt="arrow icon"
              className="cursor-pointer"
              onClick={() => setSeeAllPosts(true)}
            />
          ) : (
            <img
              src="/arrow_collapse_top.svg"
              alt="arrow icon"
              className="cursor-pointer"
              onClick={() => setSeeAllPosts(false)}
            />
          )}
        </div>
      </div>
    </section>
  );
}
