import Image from "next/image";
export default function Hero({data}) {
    return (
        <section id="new-hero-home" className="bg-[url('/Untitled.svg')] bg-cover relative overflow-hidden pt-14 md:pt-20 pb-24">
      <div className="container mx-auto grid lg:grid-cols-2 gap-y-5 lg:gap-x-10" >
        <article>
        <h1 className={`text-lg mb-3  font-bold`} style={{color:data.hero?.headingColor}}>{data?.hero?.SeoKeyword}</h1>
            <h2 className="font-bold mb-5 leading-tight" style={{color:data?.hero?.BigHeadlineTextColor}}>
            {data?.hero?.bigHeadline}
            </h2>
            <p className="text-2xl" style={{color: data?.hero?.subHeadlineTextColor}}>
            {data?.hero?.subHeadline}
            </p>
        
            {/* <div className="flex flex-col md:flex-row gap-5 justify-center md:justify-start items-center mt-10 mb-10">
            
            <a href={data.hero?.primaryCallToActionUrl} 
            
            >
                <p className={``} style={{backgroundColor:data.hero?.primaryCallToActionBgColor,color:data.hero?.primaryCallToActionTextColor}}>{data?.hero?.primaryCallToAction}</p>
            </a>
        
             <a href={data?.hero?.secondaryCallToActionUrl} >
            <button className="rounded-md shadow  px-3 py-2" style={{border:`1px solid ${data.hero?.secondaryCallToActionBorderColor}`}} id="secondaryCallToAction">
                <p className="text-[#5E2AED]" style={{color:data.hero?.secondaryCallToActionTextColor}}> {data?.hero?.secondaryCallToAction}</p>
            </button>
            </a> 
            
            </div> */}
       </article>
        
        {/* <img src={data?.hero?.image?.data?.attributes.url} alt={data?.hero?.image?.data?.attributes.alternativeText} className="align-top"/> */}
        <Image
            src={data?.hero?.image?.data?.attributes.url} alt={data?.hero?.image?.data?.attributes.alternativeText} className="align-top "
            width={600}
            height={450}
            unoptimized
    
    />

        
      </div>
    </section>
    );
}
