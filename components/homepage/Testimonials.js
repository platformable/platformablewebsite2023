import React from "react";
import TestimonialCard from "./TestimonialCard";
import styles from "@/styles/Homepage.module.css";

export default function Testimonials({ data, title }) {
  const logos = [
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
    <section className={`py-10  ${styles["testimonials-bg"]}`}>
      <div className="flex items-center gap-10  mb-10 md:px-0 ">
        <img
          src="/icon_section05.svg"
          alt="platformable logo"
          className="h-20 -ml-48 lg:-ml-36"
        />
        <h2 className="text-[#5B24EC] font-bold font-karla">{title}</h2>
      </div>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-[1fr_1fr] gap-x-10 md:px-0 px-5 md:gap-y-0 gap-y-5">
          {data &&
            data.map((testimonial, index) => {
              return (
                <div
                  className="item bg-white grid grid-rows-[1fr_3fr_1fr] rounded-lg relative p-7 shadow-md"
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
                    className="py-7 italic font-light"
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

          {/* <div className="item bg-white rounded-tl-lg rounded-tr-lg relative">
              <img src="https://dummyimage.com/120x50/000/fff" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, eaque deserunt? Quasi reprehenderit illum itaque consectetur facilis repellendus architecto impedit nostrum, similique vitae sint facere earum dicta nulla debitis nam.
               
              </p>

          <div className="absolute bottom-0 left-0 right-0 bg-green-dark rounded-tl-lg rounded-tr-lg p-7">
             <p>Melissa</p>
             <span>CEO</span>
            </div>
            </div> */}

          {/*    <div className="item bg-white rounded-tl-lg rounded-tr-lg relative">
              <img src="https://dummyimage.com/120x50/000/fff" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, eaque deserunt? Quasi reprehenderit illum itaque consectetur facilis repellendus architecto impedit nostrum, similique vitae sint facere earum dicta nulla debitis nam.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, eaque deserunt? Quasi reprehenderit illum itaque consectetur facilis repellendus architecto impedit nostrum, similique vitae sint facere earum dicta nulla debitis nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, eaque deserunt? Quasi reprehenderit illum itaque consectetur facilis repellendus architecto impedit nostrum, similique vitae sint facere earum dicta nulla debitis nam.
               
              </p>

          <div className="absolute bottom-0 left-0 right-0 bg-green-dark rounded-tl-lg rounded-tr-lg p-7">
             <p>Melissa</p>
             <span>CEO</span>
            </div>
            </div> */}
        </div>

        <div className="grid gap-x-5 md:grid-cols-6 grid-cols-2 md:gap-y-0 gap-y-3 items-center mt-20 justify-center md:px-0 px-5">
          {logos &&
            logos.map((logo, index) => {
              return (
                <div key={index}>
                  <img src={logo.logo} alt={"platformable"} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
