import Image from "next/image";
import CheckIcon from "../CheckIcon";

export default function HowItWorks({data}) {
    return (
        <section className="bg-[#2E16A7] py-10 md:py-14 text-white">
           <div className="container mx-auto ">
           <h2 className="font-bold text-center mb-3 leading-10">{data?.howItWorksHeading}</h2>
           <p className="text-center">{data?.howItWorksSubheading}</p>
           
           <div className="grid lg:grid-cols-3 gap-y-10 lg:divide-x divide-[#FFE200] mt-14">
                {data?.steps?.map((step, index) => (
                     <div className="px-5 md:px-10 py-3 text-center" key={index}>
                     <span className="font-medium text-[#FFE200]">{step?.step}</span>
                     <h3 className="text-2xl font-bold mt-2 my-4">{step?.heading}</h3>
                     <p className="">{step?.description}</p>
                 </div>
                ))}   

           </div>
           
           <div className="p-5 md:p-20 bg-[#FDEC6E] mt-10 md:mt-20 rounded-lg grid md:grid-cols-[1fr_1fr] shadow">
                <div className="mb-10 md:mb-0">
                    <h4 className="font-bold text-3xl md:text-5xl text-[#5B24EC]">Ready to Innovate?</h4>
                    <ul className="flex flex-col gap-6 my-10">
                        {data?.callToAction?.cta_option?.map((option, index) => (
                            // <li className="flex items-center gap-x-2 my-1 text-2xl font-medium text-white"> <p className="rounded-full px-2 text-white" style={{backgroundColor:selectedSector.mainColor}}>✓</p></li>
                             <li className="flex items-center gap-x-4 text-[#5B24EC] text-xl font-medium" key={index}>  <CheckIcon />{option?.option}</li>
                        ))}
                    </ul>

                    <a href={data.hero[0]?.primaryCallToActionUrl} 
            
                        target="_blank" className="">
                     <button className={`text-xl px-4 py-2 md:mt-5 shadow rounded-md text-white font-bold`} style={{backgroundColor:'#5B24EC',color:'#FFEB55'}}>{data?.hero[0]?.primaryCallToAction}</button>
                    </a>
                </div>            
                <Image src={data?.callToAction?.cta_img?.data?.attributes?.url} alt={data?.callToAction?.cta_img?.data?.attributes?.alternativeText} width={data?.callToAction?.cta_img?.data?.attributes?.width} height={data?.callToAction?.cta_img?.data?.attributes?.height} loading="lazy"/>
           </div>
           </div>
        </section>
    );
}
