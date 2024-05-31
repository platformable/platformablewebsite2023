export default function WhatsIncluded({data}) {
  return (
    <section className="bg-[#F7F6FF] py-14">
      <div className="mx-auto container">
        <span className="text-[var(--purple-dark)] font-bold text-sm">
          {data?.whatsIncluded?.companyName}
        </span>
        <h2 className="text-3xl mt-2 font-bold">
          {data?.whatsIncluded?.heading}
        </h2>
        <section className="grid md:grid-cols-[1fr_3fr] gap-5 mt-7">
          <div className="rounded-xl bg-[var(--business-color-dark)] opacity-10 h-32 min-h-32 md:h-full"></div>

          <section className="px-5 pb-5">
            <span className="text-2xl font-bold ">What's included</span>
            <div className="grid mt-10 md:grid-cols-2 gap-10">
              {data?.whatsIncluded?.whatsIncludedContent.map(item => (
                  <div className="grid gap-4">
                  <span className="text-[#3425C9] font-bold">{item?.title}</span>
                  <p className="">
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
