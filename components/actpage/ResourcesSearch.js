import React, { useState,useEffect, useRef } from "react";
import styles from "@/styles/Understandpage.module.css";
import Search from '../../components/Search'
import BlogPreviewCard from "../BlogPreviewCard";

export default function ResourcesSearch({ posts, heading }) {



  const [searchWord, setSearchWord] = useState("");
  const [selectedCategory,setSelectedCategory]=useState('All')


  const selectedCategoryPosts = posts.filter(post=>post.attributes.category.data.attributes.name==="Act")
  console.log("selectedCategoryPosts",selectedCategoryPosts)

  const searchFunction = (word) => {
    setSearchWord(word);

  };
  const chooseCategory = (category) => category === selectedCategory ? setSelectedCategory('All') : setSelectedCategory(category) 
  


 



  return (
    <section className={`${styles['understand-posts-bg']}`}>
      <div className="container mx-auto py-10">
      <div
          dangerouslySetInnerHTML={{
            __html: heading ? heading : null,
          }}
          className="text-white "
        />

        <div className="grid md:grid-cols-[1fr_3fr_3fr_3fr] grid-cols-1 gap-5 my-10">
          <button className={`${selectedCategory === 'All' ? 'bg-[var(--yellow)] text-[var(--purple-extra-dark)] border-none' : 'text-white'} px-4 py-2 xl:py-3  rounded-md border-2 xl:border-4 `}
          onClick={()=>chooseCategory('All')}>
            <span>All</span>
          </button>

          <button className={`${selectedCategory === 'Open Ecosystems' ? styles.button_selected_category_gradient_OE : ''} px-4 xl:py-3  rounded-md border-2 xl:border-4 text-white`}  onClick={()=>chooseCategory('Open Ecosystems')}>
            <span>Open Ecosystems</span>
          </button>

          <button className={`${selectedCategory === 'Open Banking / Open Finance' ? styles.button_selected_category_gradient_OBOF : ''} px-2 py-2 xl:py-3  rounded-md border-2 xl:border-4 text-white`}  onClick={()=>chooseCategory('Open Banking / Open Finance')}>
            <span>Open Banking/Open Finance</span>
          </button>

          <button className={`${selectedCategory === 'Open Health' ? styles.button_selected_category_gradient_OH : ''} px-4 py-2 xl:py-3  rounded-md border-2 xl:border-4 text-white`}  onClick={()=>chooseCategory('Open Health')}>
            <span>Open Health</span>
          </button>

        </div>

<div className="flex">

        <Search searchFunction={searchFunction} />

        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-x-5 px-5 gap-y-5 md:px-0 my-10">

          {posts ? selectedCategoryPosts
          .filter(post => !selectedCategory || 
            selectedCategory !== 'All'
            //?  post?.attributes?.sectors?.data[0]?.attributes?.name?.includes(selectedCategory) 
            ?  post?.attributes?.sectors?.data?.some(element=>element.attributes.name.includes(selectedCategory))
            : post)
          .filter((post, index) => {
            if (
              searchWord === ""
            ) {
              return post;
            }
            return post.attributes.content.toLowerCase().includes(searchWord) 
            || post.attributes.title.toLowerCase().includes(searchWord)
          }).map((post,index)=>{
            return (
              
                <BlogPreviewCard post={post} key={index}/>
              
            )
          }):null}
          
          
        </div>
      </div>
      
    </section>
  );
}
