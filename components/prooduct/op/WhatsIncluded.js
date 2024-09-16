export default function WhatsIncluded({data, colorScheme}) {

  return (
    <section className=" py-10 md:py-14" style={{background: colorScheme.whatsIncluded?.backgroundColor}}>
      <div className="mx-auto container">
        {/* <span className={`font-bold text-sm`} style={{color:data.whatsIncluded.companyNameColor}}>
          {data?.whatsIncluded?.companyName}
        </span> */}
        <h2 className="text-3xl mt-2 font-bold" style={{color:colorScheme.whatsIncluded.whatsIncludedMainColor}}>
          {data?.whatsIncluded?.heading}
        </h2>
        <section className="grid md:grid-cols-[1fr_3fr] gap-5 mt-8 md:mt-14">
        <div className="rounded-xl   md:h-full flex items-center">
            <img src={data?.whatsIncluded?.image?.data?.attributes?.url} alt={data?.whatsIncluded?.image?.data?.attributes?.alternativeText} />
          </div>

          <section className="px-5 pb-5">
            <span className="text-2xl font-bold " style={{color:colorScheme.whatsIncluded.whatsIncludedMainColor}}>What&apos;s included</span>
            <div className="grid mt-10 md:grid-cols-2 gap-10">
              {data?.whatsIncluded?.whatsIncludedContent.map((item,index) => (
                  <div className="grid gap-4" key={index}>
                  <span className="font-bold" style={{color:colorScheme.whatsIncluded.whatsIncludedItemTitleColor}}>{item?.title}</span>
                  <p className="" style={{color:colorScheme.whatsIncluded.whatsIncludedTextColor}}>
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
