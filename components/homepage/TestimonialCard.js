

export default function TestimonialCard({ testimonial, index }) {
  return (
    <>

<div className="item bg-white rounded-tl-lg rounded-tr-lg relative">
              <img src={testimonial.testimonials_img.data.attributes.url}
            alt="Logo" />
             <div
            dangerouslySetInnerHTML={{ __html: testimonial.testimonials_text }}
            className="py-7 italic font-light"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-green-dark rounded-tl-lg rounded-tr-lg p-7">
             <p>Melissa</p>
             <span>CEO</span>
            </div>
            </div>

            
    {/*   <div className="item bg-white rounded-tl-lg rounded-tr-lg relative">
        <div className="p-7">
          <img
            className="mb-10"
            src={testimonial.testimonials_img.data.attributes.url}
            alt="Logo"
            width={200}
            height={40}
          />
          <div
            dangerouslySetInnerHTML={{ __html: testimonial.testimonials_text }}
            className="py-7 italic font-light"
          />
        </div>
        <div className="bg-green-dark rounded-tl-lg rounded-tr-lg p-7">
          <p className={`${index % 2 == 0 ? "text-white" : "text-black"}`}>
            {testimonial.testimonials_clientname}
          </p>
          <span className={`${index % 2 == 0 ? "text-white" : "text-black"}`}>
            {testimonial.testimonials_client_role}
          </span>
        </div>
      </div> */}

      {/* ////// */}
     
    </>
  );
}
