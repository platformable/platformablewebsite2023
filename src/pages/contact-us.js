import Layout from "../../components/Layout";
import styles from "@/styles/ContactUspage.module.css";
import Meta from "../../components/Meta";
import { InlineWidget } from "react-calendly";
import React, { useState } from "react";
import WaintingListForm from "../../components/contact-us.js/WaintingListForm";
import SendMessageForm from "../../components/contact-us.js/SendMessageForm";

export default function ContactUs({ data, posts }) {
  //   console.log("data", data);

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;


  
  return (
    <Layout>
      {/* <Meta title={data?.title} data={data} /> */}
      <section className={`bg-[#7D43FF]`}>
        <div className="text-white container mx-auto pt-10 pb-16">
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
        </div>
      </section>
    </Layout>
  );
}

// export async function getServerSideProps(ctx) {
//   try {
//   /*   const res = await fetch(
//       `${process.env.NEXT_PUBLIC_SERVER_URL}/api/engage?populate=*`
//     );
//     const data = await res.json(); */

//     const [data, posts] = await Promise.all([
//       fetch(
//         `${process.env.NEXT_PUBLIC_SERVER_URL}/api/engage?populate=*`
//       ).then((res) => res.json()),
//       fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts?populate=*`).then(
//         (res) => res.json()),
//     ]);

//     return {
//       props: {
//         data: data?.data?.attributes,
//         posts: posts?.data,
//       },
//     };

//   } catch (error) {
//     return {
//       props: {
//         data: "No Data",
//       },
//     };
//   }
// }
