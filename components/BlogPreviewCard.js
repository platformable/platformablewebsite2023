import React from "react";
import Link from "next/link";

export default function BlogPreviewCard({ post,draft }) {

  const calculateTimeToRead = (article) => {
    return Math.ceil(article.trim().split(/\s+/).length / 225);
  };
  const setHeaderSectorColor = (sectorName) => {
    const sectorColors = {
      'Open Ecosystems': 'bg--gradient-oe',
      'Open Banking / Open Finance': 'bg--gradient-obof',
      'Open Health': 'bg--gradient-oh',

    }
    return sectorColors[sectorName]
  }
  return (
    // <Link href={`/blog/${}`}>
    <div className="bg-white rounded-md relative grid md:grid-rows-[0.5fr_100px_1fr]  grid-rows-[0.8fr_0.2fr_1fr]">
      <div className="p-7 relative overflow-hidden h-60">
       <Link href={!draft ? `/blog/${post?.attributes?.slug}`:`/blog/draft/${post?.attributes?.slug}`}>
       <img src={post?.attributes?.featured_img?.data?.attributes?.url} alt={post?.attributes?.featured_img?.data?.attributes?.alternativeText} className="w-full h-full object-contain"/></Link>
      </div>
      <div className={`${setHeaderSectorColor(post?.attributes?.sectors?.data[0]?.attributes?.name)} grid grid-cols-[1fr_3fr]`}>
        <div className="flex flex-col items-center justify-center rounded-tr-md rounded-br-md text-white p-2">
          <p className="text-white font-bold">

          {post?.attributes?.update_date ? (new Date(post?.attributes?.update_date).getDate()) : (new Date(post?.attributes?.publishedAt).getDate())}

          </p>
          <p>
            {" "}

            {post?.attributes?.update_date ? (new Date(post?.attributes?.update_date).toLocaleDateString(
              "en-US",
              { month: "long" }
            )): (new Date(post?.attributes?.publishedAt).toLocaleDateString(
              "en-US",
              { month: "long" }
            ))}

          </p>
        </div>
        <div className="items-center flex">
          <p className="text-white font-bold">
            {post?.attributes?.sectors?.data[0]?.attributes?.name}
          </p>
        </div>
      </div>

      <div className="grid justify-center text-center p-7 ">
      <Link href={!draft ? `/blog/${post?.attributes?.slug}`:`/blog/draft/${post?.attributes?.slug}`}> <p className="leading-6 font-bold text-[var(--purple-extra-dark)] ">
          {post?.attributes?.title}
        </p>
        </Link>
        <div className="relative mt-auto ">
          <div className="  text-center px-7 pb-7 mt-5">
            <span>Written by </span>
            {post?.attributes?.teams?.data.map((team, index) => {
              return (
                <span key={index}>
                  {team.attributes.name + " " + team.attributes.lastname}{" "}
                  {index < post?.attributes.teams.data.length - 1 ? " & " : ""}
                </span>
              );
            })}
          </div>
          <div className="flex justify-between items-center gap-x-3">
            <div className="flex items-center gap-x-3 text-[#3524C6] font-bold">
              <img src="/platformable-icon-purple-dark.png" alt="Platformable logo" width={32} />
              {post?.attributes?.category?.data?.attributes?.name}
            </div>
            <div className="flex items-center gap-x-3">
              <img src="/clockl.svg" alt="clock icon" />
              <span className="text-[#3524C6]  font-bold">
                {post?.attributes?.content ? (
                  <span>
                    {calculateTimeToRead(post?.attributes?.content) +
                      " min read"}
                  </span>
                ) : (
                  "0"
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Link>
  );
}
