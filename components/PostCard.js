import React from "react";

export default function PostCard({ post }) {

  return (
    <div className="bg-white rounded-md relative grid md:grid-rows-[3fr_1fr_3fr] grid-rows-[0.8fr_0.2fr_1fr]">
      <div className="p-7">
        <img src={post?.attributes.featured_img.data.attributes.url} alt="" />
      </div>
      <div className="grid grid-cols-[1fr_3fr]">
        <div className="text-center blog-card-date-bg rounded-tr-md rounded-br-md text-white p-2">
          <p>00</p>
          <p>Mon</p>
        </div>
        <div className="items-center flex justify-center text-center ">
          <span className="text-center mr-7">{post?.attributes.categories.data[0].attributes.name}</span>
        </div>
      </div>

      <div className="grid justify-center text-center p-7 ">
        <p className="font-bol leading-8 font-bold text-[#1B014B]">{post.attributes.title}</p>
       
        <div className="relative mt-auto ">
        <div className="flex justify-center text-center p-7">
          <span>Written by Spencer Perkins & Phuong Pham & Mark Boyd</span>
        </div>
        <div className="flex justify-end items-center gap-x-3">
            <img src="/clockl.svg" alt="" />
            <span className='text-[var(--purple-medium)] font-bold'>3 min</span>
        </div>
      </div>
       
      </div>

     
    </div>
  );
}
