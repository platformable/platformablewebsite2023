import Image from "next/image";
export default function Hero({data}) {
    return (
        <section id="new-hero-home" className="bg-[url('/Untitled.svg')] bg-cover relative overflow-hidden pt-14 md:pt-20 pb-10">
      <div className="container mx-auto grid lg:grid-cols-2 gap-y-5 lg:gap-x-10" >
        <article>
        <h1 className={`text-lg mb-3  font-bold`} style={{color:data.hero[0]?.headingColor}}>{data?.hero[0]?.SeoKeyword}</h1>
            <h2 className="font-bold mb-5 leading-tight" style={{color:data?.hero[0]?.BigHeadlineTextColor}}>
            {data?.hero[0]?.bigHeadline}
            </h2>
            <p className="text-2xl" style={{color: data?.hero[0]?.subHeadlineTextColor}}>
            {data?.hero[0]?.subHeadline}
            </p>
        
            <div className="flex flex-col md:flex-row gap-5 justify-center md:justify-start items-center mt-10 mb-10">
            
            <a href={data.hero[0]?.primaryCallToActionUrl} 
            
            >
                <p className={` px-3 py-2 shadow rounded-md text-white font-bold`} style={{backgroundColor:data.hero[0]?.primaryCallToActionBgColor,color:data.hero[0]?.primaryCallToActionTextColor}}>{data?.hero[0]?.primaryCallToAction}</p>
            </a>
        
            <a href={data?.hero[0]?.secondaryCallToActionUrl} >
            <button className="rounded-md shadow  px-3 py-2" style={{border:`1px solid ${data.hero[0]?.secondaryCallToActionBorderColor}`}} id="secondaryCallToAction">
                <p className="text-[#5E2AED]" style={{color:data.hero[0]?.secondaryCallToActionTextColor}}> {data?.hero[0]?.secondaryCallToAction}</p>
            </button>
            </a>
            
            </div>
       </article>
        
        {/* <img src={data?.hero[0]?.image?.data?.attributes.url} alt={data?.hero[0]?.image?.data?.attributes.alternativeText} className="align-top"/> */}
        <Image
            src={data?.hero[0]?.image?.data?.attributes.url} 
            // src="/hero_home_page_converted.webp"
            alt={data?.hero[0]?.image?.data?.attributes.alternativeText} 
            className="align-top aspect-auto"
            width={600}
            height={450}
            unoptimized
        />

        
      </div>
    </section>
    );
}
