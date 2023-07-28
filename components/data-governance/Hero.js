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
      <div className={`bg-[var(--purple-medium)] pt-10  `}>
        <div className="container mx-auto grid gap-7">
        <img
            src={data?.hero_img?.data.attributes.url}
            alt="Data products mapped"
            className="lg:-mt-[24rem]  lg:-mr-10 hidden justify-self-end lg:block lg:w-3/6 xl:w-[40%] 2xl:w-2/5 h-96"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: data?.hero_description2,
            }}
            className="text-white"
          />

         
        </div>
      </div>
    </section>
  );
}
