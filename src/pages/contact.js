import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import React, { useState } from "react";
import Hero from "../../components/contact-us.js/Hero";
import Link from "next/link";
import Collaborators from "../../components/contact-us.js/Collaborators";
import StaticCarousel from "../../components/StaticCarousel/StaticCarousel";
export default function ContactPage({ data }) {
    const metaData = {
      excerpt: 'Platformable contact section is public and open',
      keywords: 'platformable, data, api, open ecosystems, open banking, open finance, open health'
    }

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;


  return (
    <Layout>
      <Meta title={'Contact us'} data={metaData} />
      <section className={`bg-[#7D43FF]`}>
        <Hero data={data} />
        <div className="lg:pt-24 grid lg:grid-cols-3 gap-y-10 lg:divide-x divide-[#FD27FF] bg-[#4D21DD] py-14">
                {data?.contactOptions?.map((option, index) => (
                     <div className="px-5 md:px-10 py-3 text-center flex flex-col items-center" key={index}>
                     <h2 className="text-white text-2xl font-bold my-4">{option?.label}</h2>
                     <div className="font-medium text-white mb-8">{option?.description}</div>
                      <Link href={option.clickHereUrl} className="mt-auto" target="_blank">
                      <button className="text-white rounded-lg py-2 px-6  bg-[#FD27FF]" style={{}}>
                        {option?.buttonText}
                      </button>
                      </Link>
                 </div>
                ))}   

           </div>
           <StaticCarousel data={data} />
        {/*    <Collaborators data={data} /> */}
        {/* <div className="text-white container mx-auto pt-10 pb-16">
          <h1 className="mb-5 font-bold">{data?.title || "Contact us"}</h1>
          <div className="wrapper grid lg:grid-cols-[1fr_1fr_1fr] grid-cols-1">
           
            <WaintingListForm apiKey={apiKey} />

            <SendMessageForm apiKey={apiKey} />
            
            <div className="schedule-form bg-white px-3 md:px-5 lg:px-7 py-10 max-lg:rounded-b-xl lg:rounded-r-xl">
              <h6 className="font-bold mb-5 text-[--purple-medium]">
                Schedule an appointment
              </h6>
              <InlineWidget url="https://calendly.com/platformable" />
            </div>
          </div> 
           <section className="flex justify-center py-14">
          <iframe src="https://platformable.substack.com/embed" width="480" height="320" ></iframe>

          </section>
        </div>*/}
      </section>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
  

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/contact?populate[hero][populate][image]=*&populate[contactOptions]=*&populate[collaborators][populate][collaborator_img]=*`
      )
    const data = await res.json()
     

    return {
      props: {
        data: data?.data?.attributes,
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
