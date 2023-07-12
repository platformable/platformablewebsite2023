import styles from "@/styles/APIGovernance.module.css";

export default function Hero({ data }) {
  return (
    <section className="">
      <div className="container  mx-auto   py-10">
        <h1 className="mb-10 text-[var(--purple-medium)] font-bold">
          {data?.hero_title}
        </h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.hero_description,
          }}
          className="lg:w-4/6 xl:w-3/5"
        />
      </div>
      <div className={`bg-[#D258FA] py-10 `}>
        <div className="container mx-auto grid gap-7">
        <img
            src={data?.hero_img?.data.attributes.url}
            alt="Data products mapped"
            className="xl:-mt-[30rem] lg:-mt-72 lg:-mr-14 hidden justify-self-end lg:block lg:w-2/6 xl:w-2/5"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: data?.hero_description2,
            }}
            className="text-white "
          />

         
        </div>
      </div>
      <div className="container mx-auto py-16">
        <div
          dangerouslySetInnerHTML={{
            __html: data?.hero_description3,
          }}
          className="font-medium"
        />
      </div>
      <div className={`${styles.bg_hero_description_4} py-16`}>
      <div
          dangerouslySetInnerHTML={{
            __html: data?.hero_description4,
          }}
          className={` container mx-auto text-white font-bold`}
        />
      </div>

    </section>
  );
}
