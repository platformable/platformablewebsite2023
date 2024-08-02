import { useState, useEffect } from "react";
import Meta from "../../../components/Meta";
import Layout from "../../../components/Layout";
import Link from "next/link";
import Search from "../../../components/Search";

export default function HelpGuide({ data }) {
  const metaData = {
    excerpt:
      "Explore the comprehensive Help Guide at Platformable. Find detailed instructions, FAQs, and support resources to make the most out of our platform.",
  };



  const [searchWord, setSearchWord] = useState("");
  const searchFunction = (word) => {
    setSearchWord(word);
  };

  return (
    <Layout>
      <Meta title="Help Guide | Platformable" data={metaData} />
      <section id="blog" className={`py-10 `}>
        <div className={`bg-[#3425C9] blog-header`}>
          <div className="container mx-auto md:flex block justify-between items-center py-10">
            <h3 className="font-bold text-white">Help Guide</h3>
            <Link href="/">
              <button className="py-2 px-7 bg-[var(--yellow)] shadow rounded font-medium">
                Back home
              </button>
            </Link>
          </div>
        </div>
        <div className="container mx-auto">
          <h1 className="my-10 font-bold ">How can we help?</h1>

          <div className="flex my-5" id="search">
            <div className="block md:flex items-center md:px-0 w-full">
              <p className="mr-5 inline-block  font-medium ">Search</p>

              <div className="w-full">
                <div className="block md:flex   rounded-lg  rounded-lg ">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-bold  sr-only"
                  >
                    Search
                  </label>
                  <div className="relative w-full">
                    <input
                      type="search"
                      onChange={(e) =>
                        searchFunction(e.target.value.toLowerCase())
                      }
                      id="default-search"
                      className="block px-4 py-2 pr-9 w-1/2 text-lg border text-black rounded-lg border-black border-2  text-black "
                      defaultValue=""
                      required
                    />

                    <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="white"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <ResourcesSearch posts={posts} draft={false}/> */}
          <ul className="mt-14 mb-5">
            {data.length > 0 ?
            (data?.filter((post, index) => {
                if (searchWord === "") {
                  return post;
                } else {
                  return (
                    post?.attributes?.title
                      .toLowerCase()
                      .includes(searchWord.toLowerCase()) ||
                    post?.attributes?.content
                      ?.toLowerCase()
                      .includes(searchWord.toLowerCase())
                  );
                }
              })
              ?.map((guide, index) => {
                  return (
                    <li className="my-5" key={index}>
                      <Link href={`/help-guide/${guide?.attributes?.slug}`}>
                        <p className="text-[#3425C9] font-bold">
                          {index + 1}.- {guide?.attributes?.title}
                        </p>
                        <div
          dangerouslySetInnerHTML={{
            __html: guide.attributes.content.substr(0,100)+' ...'
          }}
          className="truncate text-[10px]"
        />
         
                      </Link>
                    </li>
                  );
                }))
              : "No Data"}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const [data] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/help-centers`).then(
        (res) => res.json()
      ),
    ]);

    return {
      props: {
        data: data?.data,
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
