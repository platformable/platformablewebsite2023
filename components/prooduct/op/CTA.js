import Link from "next/link";

export default function CTA({data}) {
    return (
        <section className="bg-[#E9E2FF] py-14">
            <div className="container mx-auto flex flex-col gap-y-10 md:grid md: grid-cols-2 md:gap-24">
                <div className="flex flex-col justify-start md:justify-center">
                <h3 className="font-bold">Try it now.</h3>
                <h3 className="font-bold">Cancel anytime.</h3>

                <p className="mt-10">
                Gain access to comprehensive reports, exclusive analyst calls, and actionable insights tailored to your needs.
                </p>
                </div>
                <div className="rounded shadow-xl p-10 bg-white grid gap-5">
                    <p className="flex items-center gap-3">
                    <span className="text-5xl font-bold text-[#6A39EE] ">$900</span><span className=" text-3xl font-bold"> / per year</span>
                    </p>
                    <div className="rounded-full px-3 py-2 bg-[#F2F0FF] text-[#6A39EE]">Save 25%, billed annually</div>
                    <div id="product-items">

                    </div>
                    <div className="flex flex-col md:flex-row gap-5 justify-center ">
                        <Link href={"/"} >
                        <button className={` px-3 py-2 shadow rounded-md text-white w-56`} style={{backgroundColor:data.hero.primaryCallToActionBgColor}}>
                            <p>{data?.hero?.primaryCallToAction}</p>
                        </button>
                        </Link>
                        <Link href={"/"}>
                        <button className="rounded-md shadow  px-3 py-2  w-56" style={{border:`1px solid ${data.hero.secondaryCallToActionBorderColor}`}}>
                            <p>{data?.hero?.secondaryCallToAction}</p>
                        </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
            
        </section>
    );
}
