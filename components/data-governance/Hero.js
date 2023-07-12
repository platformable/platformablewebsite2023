import styles from "@/styles/DataGovernancepage.module.css";

export default function Hero({ data }) {
  return (
    <section className="">
      <div className="container  mx-auto   py-10">
        <h1 className="mb-10 text-[var(--purple-medium)] font-bold">
          {data?.dg_title}
        </h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.hero_description,
          }}
          className="lg:w-3/6 2xl:w-3/5"
        />
      </div>
      <div className={`${styles.hero_background_gradient} py-20 `}>
        <div className="container mx-auto grid gap-7">
        <img
            src={data?.hero_img?.data.attributes.url}
            alt="Data products mapped"
            className="2xl:-mt-[40rem] xl:-mt-[34rem] lg:-mt-[28rem] 2xl:-mt-[32rem] lg:-mr-14 hidden justify-self-end lg:block lg:w-3/6 2xl:w-2/5"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: data?.hero_description2,
            }}
            className="text-white "
          />

         
        </div>
      </div>
    </section>
  );
}
