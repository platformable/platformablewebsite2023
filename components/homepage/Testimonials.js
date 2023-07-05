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
            className={`text-[#5B24EC]  font-bold font-karla  md:leading-10 leading-8`}
          >
            {title}
          </h2>
        </div>
      </div>

      <div className="container mx-auto py-10">
        <div className="grid md:grid-cols-[1fr_1fr] gap-x-10 md:px-0 px-5 md:gap-y-0 gap-y-5 lg:px-32">
          {data &&
            data.map((testimonial, index) => {
              return (
                <div
                  className="item bg-white grid md:grid-rows-[0.5fr_10fr_0.5fr] grid-rows-[0.5fr_10fr_1fr] rounded-lg relative p-7 shadow-md"
                  key={index}
                >
                  <img
                    src={testimonial.testimonials_img.data.attributes.url}
                    alt=""
                    className="place-center"
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: testimonial.testimonials_text,
                    }}
                    className="py-10 italic font-light"
                  />

                  <div
                    className={`${
                      index % 2 == 0 ? "bg-blue-medium" : "bg-green-dark "
                    } absolute bottom-0 left-0 right-0 rounded-bl-lg rounded-br-lg p-7`}
                  >
                    <p
                      className={`${
                        index % 2 == 0 ? "text-white" : "text-black"
                      }`}
                    >
                      {testimonial.testimonials_clientname}
                    </p>
                    <span
                      className={`${
                        index % 2 == 0 ? "text-white" : "text-black"
                      }`}
                    >
                      {testimonial.testimonials_client_role}
                    </span>
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
