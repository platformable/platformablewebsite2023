"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function StaticCarousel({ data }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [isFadingIn, setIsFadingIn] = useState(true);
  const logos = data?.collaborators?.collaboratorLogo || data?.collaborators


  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 4) % logos.length;
        if (prevIndex + 4 >= Number(logos.length)) {
          return 0;
        } else {
          return nextIndex;
        }
      });
    }, 6000);

    return () => clearInterval(intervalId);
  }, [logos.length]);

  const displayedLogos = logos.slice(
    currentIndex,
    Math.min(currentIndex + 4, logos.length),
  );

 

 

  return (
    <>
{/*       <p> current index : {currentIndex}</p>
      <p>NI:{(currentIndex + 4) % logos.length}</p> */}
       <section className="bg-white">
                <div className="container mx-auto py-6 lg:py-10">
                    <h2 className="text-xl font-bold text-[#FD27FF] text-center mb-14">{data?.collaborators?.heading ||' WE HAVE WORKED WITH'}</h2>
      <div className="carousel-container grid md:grid-cols-2 gap-y-4  justify-center justify-items-center lg:flex lg:justify-center lg:gap-x-14">
        {displayedLogos.map((logo, index) => (
          <Image width={200} height={61} loading="lazy" quality={65} key={index} src={logo.collaborator_img.data?.attributes?.url} alt={logo.collaborator_img.data?.attributes?.alternativeText} 
          className={`pulsating-element md:mx-2`}/>
        ))}
      </div>
      </div>
               
                
               </section>
    </>
  );
}

export default StaticCarousel;
