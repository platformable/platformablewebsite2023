import styles from "@/styles/DataProducts.module.css";

export default function Hero({ data }) {
  return (
    <section className="">
      <div className="container  mx-auto   py-10">
        <h1 className="mb-10 text-[var(--purple-medium)] font-bold">
          {data?.data_products_hero_title}
        </h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.data_products_hero_description_top,
          }}
          className="lg:w-4/6 xl:w-3/6"
        />
      </div>
      <div className={`${styles.hero_background_gradient} py-10 `}>
        <div className="container mx-auto   flex gap-7">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.data_products_hero_description_bottom,
            }}
            className="text-white "
          />

          <img
            src={data?.data_products_hero_img?.data.attributes.url}
            alt="Data products mapped"
            className="xl:-mt-96 lg:-mt-72 lg:-mr-14 hidden lg:block lg:w-2/6 xl:w-3/6"
          />
        </div>
      </div>
    </section>
  );
}
