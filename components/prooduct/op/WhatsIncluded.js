export default function WhatsIncluded({data}) {

  return (
    <section className="bg-[#fffff] py-14">
      <div className="mx-auto container">
        <span className={`font-bold text-sm`} style={{color:data.whatsIncluded.companyNameColor}}>
          {data?.whatsIncluded?.companyName}
        </span>
        <h2 className="text-3xl mt-2 font-bold" style={{color:data.whatsIncluded.whatsIncludedMainColor}}>
          {data?.whatsIncluded?.heading}
        </h2>
        <section className="grid md:grid-cols-[1fr_3fr] gap-5 mt-7">
          <div className="rounded-xl bg-[var(--business-color-dark)] opacity-10 h-32 min-h-32 md:h-full"></div>

          <section className="px-5 pb-5">
            <span className="text-2xl font-bold " style={{color:data.whatsIncluded.whatsIncludedTextColor}}>What&apos;s included</span>
            <div className="grid mt-10 md:grid-cols-2 gap-10">
              {data?.whatsIncluded?.whatsIncludedContent.map((item,index) => (
                  <div className="grid gap-4" key={index}>
                  <span className="font-bold" style={{color:data.whatsIncluded.whatsIncludedMainColor}}>{item?.title}</span>
                  <p className="" style={{color:data.whatsIncluded.whatsIncludedTextColor}}>
                    {item?.text}
                  </p>
                  </div>
              ))}
             
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}
