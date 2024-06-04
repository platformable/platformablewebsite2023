import Link from "next/link";

export default function CTA({data}) {
    return (
        <section className="py-10 md:py-14" style={{backgroundColor: data?.pricing?.backgroundColor}}>
            <div className="container mx-auto flex flex-col gap-y-10 md:grid md: grid-cols-2 md:gap-24">
                <div className="flex flex-col justify-start md:py-14">
                <h3 className="font-bold" style={{color: data?.pricing?.mainColor}}>{data?.pricing?.heading}</h3>
                <h3 className="font-bold">{data?.pricing?.subheading}</h3>

                <p className="mt-10">
                    {data?.pricing?.description}
                </p>
                </div>
                <div className="rounded shadow-xl p-10 bg-white flex flex-col items-start gap-5">
                    <p className="flex items-center gap-3">
                    <span className="text-5xl font-bold" style={{color: data?.pricing?.mainColor}}>{data?.pricing?.price?.[0]?.price}</span><span className=" text-3xl font-bold"> / per year</span>
                    </p>
                    <div className="rounded-full px-3 md:px-6 py-2 text-[#6A39EE]" style={{backgroundColor: data?.pricing?.backgroundColor, color: data?.pricing?.mainColor}}>{data?.pricing?.price?.[0]?.discountText}</div>
                    <ul id="product-itemss" className="list-style-none grid gap-4 ">
                        {data?.pricing?.price?.[0]?.description?.map((item, index) => (
                            <li className="text-base py-3 flex gap-x-5 items-center" key={index}>
                                <img src="/icon_CTA.svg" alt="" />
                                {item?.list_card_description_options}
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col md:flex-row gap-5 md:grid md:grid-cols-2 w-full">
                        <Link href={"/"} className="">
                        <button className={` px-3 py-2 shadow w-full rounded-md text-white `} style={{backgroundColor:data?.hero?.primaryCallToActionBgColor, border: `1px solid ${data?.hero?.primaryCallToActionBorderColor}`}}>
                            <p className="text-[18px]">{data?.hero?.primaryCallToAction}</p>
                        </button>
                        </Link>
                        <Link href={"/"}  className="">
                        <button className="rounded-md shadow w-full px-3 py-2 " style={{border:`1px solid ${data.hero.secondaryCallToActionBorderColor}`, backgroundColor:data?.hero?.secondaryCallToActionBgColor}}>
                            <p className="text-[18px]">{data?.hero?.secondaryCallToAction}</p>
                        </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
            
        </section>
    );
}
