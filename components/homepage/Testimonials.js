import React from "react";
import TestimonialCard from "./TestimonialCard";
import styles from "@/styles/Homepage.module.css";

export default function Testimonials({ data, title, logos }) {
  const brands = [
    {
      logo: "/LN_logo.png",
    },
    {
      logo: "/iseal_logo.png",
    },
    {
      logo: "/axway_logo.png",
    },
    {
      logo: "/APIToS_logo.png",
    },
    {
      logo: "/odi_logo.png",
    },
    {
      logo: "/alias_logo.png",
    },
  ];

  console.log("data",data)
  return (
    <section className={`py-10  ${styles["testimonials-bg"]} `}>
      <div className="container mx-auto md:mb-10 mb-0">
        <div className="flex gap-x-5 items-center ">
          <img
            src="/platformable-icon-purple.svg"
            alt=""
            className="md:flex hidden"
          />
          <h2
            className={`text-[#5B24EC]  font-bold  md:leading-10 leading-8`}
          >
            {title}
          </h2>
        </div>
      </div>

      <div className={`${data?.length === 1 ? 'flex justify-center' : ''} container  mx-auto py-10`}>
        <div className={`grid ${data?.length > 1 ? 'md:grid-cols-'+data?.length : ' '}  mb-10 gap-x-10 md:px-0 px-5 md:gap-y-0 gap-y-5 2xl:px-32`}>
          {data &&
            data.map((testimonial, index) => {
              return (
                <div className="rounded-2xl bg-white shadow-xl grid grid-rows-[3fr_1fr] justify-between" key={index}>
                <div className="p-7 flex flex-col gap-4 md:flex-row items-center rounded-t-2xl">
                <div className="">
                  <img
                      src={testimonial.testimonials_img.data.attributes.url}
                      alt=""
                      className="place-center"
                    />
                    <div
                    dangerouslySetInnerHTML={{
                      __html: testimonial.testimonials_text,
                    }}
                    className="flex items-center italic font-light  py-5 md:py-10 "
                  />
                </div>

                <img src="/axway_logo.png" className=""/>

                </div>
               
                
              
                <div className={`${styles.bg_footer_testimonial_card} flex justify-between  items-center rounded-bl-2xl rounded-br-2xl p-7`}>
                  <div>
                <p
                      className={`font-black`}
                    >
                      {testimonial.testimonials_clientname}
                    </p>
                  <span
                      className={``}
                    >
                      {testimonial.testimonials_client_role}
                    </span>
                    </div>
                    <div>
                      <a href={testimonial.url} className="underline" target="_blank">{testimonial.url.replace("https://","")}</a>
                    </div>
                </div>
              </div>
              );
            })}
        </div>
        {logos && (
          <div className="grid gap-x-5 md:grid-cols-6 grid-cols-2 md:gap-y-0 gap-y-3 items-center mt-20 justify-center md:px-0 px-5">
            {brands &&
              brands.map((logo, index) => {
                return (
                  <div key={index} className="flex justify-center">
                    <img src={logo.logo} alt={"platformable"} />
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </section>
  );
}
