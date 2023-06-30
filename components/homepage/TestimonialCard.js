import React from "react";

export default function TestimonialCard({ testimonial, index }) {
  return (
    <div className="rounded-lg bg-white shadow-md relative pb-36">
      <div className="items-center p-7">
        <div>
          <img
            className="mb-20"
            src={testimonial.testimonials_img.data.attributes.url}
            alt="Logo"
            width={200}
            height={40}
          />
          {/* <img src="/logo.png" alt="" /> */}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: testimonial.testimonials_text }}
          className="py-7 italic font-light"
        />
      </div>

      <div
        className={`${
          index % 2 == 0 ? "bg-blue-medium" : "bg-green-dark"
        } absolute bottom-0 left-0 right-0  p-10 rounded-bl-lg rounded-br-lg`}
      >
        <p className={`${index % 2 == 0 ? "text-white" : "text-black"}`}>
          {testimonial.testimonials_clientname}
        </p>
        <span className={`${index % 2 == 0 ? "text-white" : "text-black"}`}>
          {testimonial.testimonials_client_role}
        </span>
      </div>
    </div>
  );
}
