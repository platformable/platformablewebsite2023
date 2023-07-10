import styles from "@/styles/Datasetspage.module.css";

export default function Hero({ data }) {
  return (
    <section className="">
      <div className="container  mx-auto   py-10">
        <h1 className="mb-10 text-[var(--purple-medium)] font-bold">
          {data?.datasets_title}
        </h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.datasets_description,
          }}
          className="lg:w-4/6 xl:w-3/6"
        />
      </div>
      <div className={`${styles.hero_background_gradient} py-10 `}>
        <div className="container mx-auto grid gap-7">
        <img
            src={data?.datasets_img?.data.attributes.url}
            alt="Data products mapped"
            className="xl:-mt-96 lg:-mt-72 lg:-mr-14 hidden justify-self-end lg:block lg:w-2/6 xl:w-3/6"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: data?.datasets_description2,
            }}
            className="text-white "
          />

         
        </div>
      </div>
    </section>
  );
}