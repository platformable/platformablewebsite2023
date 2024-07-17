import React from 'react'
import Meta from '../../../components/Meta';
import Layout from '../../../components/Layout';
import Link from 'next/link';

export default function index({data}) {
    const metaData = {
        excerpt: 'Stay updated with the latest trends and insights on open data, APIs, and ecosystem innovation.'
    }

  console.log("data",data)

    return (
        <Layout>
          <Meta title="Platformable Blog" data={metaData}/>
          <section id="blog" className={`py-10 min-h-screen`}>
          <div
          className={`bg--gradient-oe blog-header`}
        >
          <div className="container mx-auto md:flex block justify-between items-center py-10">
            <h3 className="font-bold text-white">
             Help Guide
            </h3>
            <Link href="/">
              <button className="py-2 px-7 bg-[var(--yellow)] shadow rounded font-medium">
                Back home
              </button>
            </Link>
          </div>
        </div>
            <div className="container mx-auto">
              <h1 className="my-10 font-bold ">How can we help?</h1>
              
              {/* <ResourcesSearch posts={posts} draft={false}/> */}
              <ul className="my-5">
                {data.length > 0 ? (
                    data.map((guide,index)=>{
                        return (
                            <li className="my-5" key={index}>
                            <Link href={`/help-guide/${guide?.attributes?.slug}`}><p className="text-[#5A28E9]">{index+1}.- {guide?.attributes?.title}</p></Link>
                        </li>
                        )
                    })
                ) : 'No Data'}
              
          
              </ul>
            </div>
          </section>
        </Layout>
      );
    }
    
    export async function getServerSideProps(ctx) {
      try {
        const [data] = await Promise.all([
          fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/help-centers`
          ).then((res) => res.json()),
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
