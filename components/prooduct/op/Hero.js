'use client'
import styles from "@/styles/OBOFTrendsReportspage.module.css";
import Image from "next/image";

export default function Hero({data, colorScheme}) {

  
  return (
    <section className="overflow-hidden  text-center pt-14 md:pt-20 pb-10 " style={{background: colorScheme.hero.backgroundColor}}>
      <div className="container mx-auto">
        <h1 className={`text-lg mb-3  font-bold`} style={{color:colorScheme.hero.headingColor}}>{data?.hero?.SeoKeyword}</h1>
        <h2 className="font-bold mb-5" style={{color:colorScheme?.hero?.bigHeadlineTextColor}}>
        {data?.hero?.bigHeadline}
        </h2>
        <h6  style={{color:colorScheme?.hero?.subHeadlineTextColor}}>
        {data?.hero?.subHeadline}
        </h6>
      
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center mt-4 mb-10">
          
          <a href={data.hero.primaryCallToActionUrl} 
          
          target="_blank" className="shadow rounded-md px-3 py-2  w-56" style={{border:`1px solid ${colorScheme.hero.primaryCallToActionBorderColor}`, backgroundColor:colorScheme.hero.primaryCallToActionBgColor,color:colorScheme.hero.primaryCallToActionTextColor}}>
            <p className={`font-bold`} >{data?.hero?.primaryCallToAction}</p>
          </a>
    
          <a href={data?.hero?.secondaryCallToActionUrl} target="_blank">
          <button className="rounded-md shadow  px-3 py-2  w-56" style={{border:`1px solid ${colorScheme.hero.secondaryCallToActionBorderColor}`}}>
            <p className="text-[#5E2AED]" style={{color:colorScheme.hero.secondaryCallToActionTextColor}}> {data?.hero?.secondaryCallToAction}</p>
          </button>
          </a>
          
        </div>
        <div id="guarantee-hero-container" className="py-7 mb-6 md:mb-10" style={{background: colorScheme.hero?.socialSectionBackgroundColor }}>
          <h6 className="font-bold" style={{color:colorScheme.hero.socialHeadingTextColor}}>{data.hero.socialHeading}</h6>
          <p className="" style={{color:colorScheme.hero.socialSubheadingTextColor}}>{data?.hero.socialSubheading}</p>
        </div>
        {/* <img src={data?.hero?.image?.data?.attributes.url} alt={data?.hero?.image?.data?.attributes.alternativeText} className="align-top"/> */}
        <Image
      src={data?.hero?.image?.data?.attributes.url} alt={data?.hero?.image?.data?.attributes.alternativeText} className="align-top"
            width={1980}
            height={1080}
            unoptimized
    
    />
        
      </div>
    </section>
  );
}
