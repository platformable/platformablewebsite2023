import React from "react";

export default function BlogPreviewCard({ post }) {

    const calculateTimeToRead = article => {
        return Math.ceil(article.trim().split(/\s+/).length / 225)
      }

  return (
    <div className="bg-white rounded-md relative grid md:grid-rows-[3fr_1fr_3fr] grid-rows-[0.8fr_0.2fr_1fr]">
      <div className="p-7">
        <img src={post?.attributes?.featured_img?.data.attributes.url} alt="" />
      </div>
      <div className="grid grid-cols-[1fr_3fr] blog-card-date-bg">
        <div className="flex flex-col items-center justify-center rounded-tr-md rounded-br-md text-white p-2">
          <p>00</p>
          <p>Mon</p>
        </div>
        <div className="items-center flex ">
          <p className=" mr-7 text-white font-bold">{post?.attributes?.category?.data?.attributes?.name}</p>
        </div>
      </div>

      <div className="grid justify-center text-center p-7 ">
        <p className="font-bol leading-8 font-bold text-[var(--purple-extra-dark)]">{post?.attributes?.title}</p>
       
        <div className="relative mt-auto ">
        <div className="flex justify-center text-center px-7 pb-7">
          <span>Written by Spencer Perkins & Phuong Pham & Mark Boyd</span>
        </div>
        <div className="flex justify-between items-center gap-x-3">
           <div className="flex gap-x-3 text-[var(--purple-medium)] font-bold">
            <img src="" alt="" />
           {post?.attributes?.category?.data?.attributes?.name}
           </div>
           <div className="flex items-center gap-x-3">
           <img src="/clockl.svg" alt="" />
            <span className='text-[var(--purple-medium)]  font-bold'>
                {post?.attributes?.content
                                      ? <span>{calculateTimeToRead(post?.attributes?.content)+' min read'}</span>
                                      : "0"}</span>
           </div>
        </div>
      </div>
       
      </div>

     
    </div>
  );
}
