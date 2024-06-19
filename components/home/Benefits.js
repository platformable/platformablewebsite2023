import Image from "next/image";
export default function Benefits({data}) {
    return (
        <section className="bg-[#5A23EC]  py-10 md:py-14">
            <div className="container mx-auto">
                <h2 className="text-white font-bold text-center leading-10">{data?.benefitsHeading}</h2>
                <p className="text-white mt-4 text-center">{data?.sectorSubheading}</p>
                <div className="grid md:grid-cols-2 gap-14 mt-14">
                    {
                        data?.benefits?.map((benefit, index) => (
                            <div className="text-center" key={index}>
                                <div className="flex justify-center">
                            <Image src={benefit?.benefits_img?.data?.attributes?.url} 
                            width={400}
                            height={400}
                            alt={benefit?.benefits_img?.data?.attributes?.alternativeText}
                    
                            loading="lazy"
                            className=""/>
                            </div>
                            <p className="font-bold text-base text-[#FAFA62] mt-5">{benefit?.label}</p>
                            <h4 className="font-bold text-white mt-3">{benefit?.title}</h4>
                            <p className="px-10 lg:px-20 text-md text-white mt-5">{benefit?.description}</p>
                        </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
