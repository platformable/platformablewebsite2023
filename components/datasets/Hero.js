import styles from "@/styles/Datasetspage.module.css";

export default function Hero({ data }) {
  return (
    <section className="">
      <div className="container  mx-auto   py-10">
        <h1 className="mb-10 text-[var(--purple-medium)] font-bold">
          Datasets
        </h1>
        <p
          dangerouslySetInnerHTML={{
            __html: 'Platformable offers a range of off-the-shelf datasets to help you track and understand key open ecosystems in banking/finance, health, government, privacy tech and the API technology industry. You can purchase these data sets or have them customised to meet your specific needs.',
          }}
          className="lg:w-4/6 xl:w-3/6"
        />
      </div>
      <div className={`${styles.hero_background_gradient} py-10 `}>
        <div className="container mx-auto grid gap-7">
        <img
            src={'/hero_data_products.svg'}
            alt="Data products mapped"
            className="xl:-mt-96 lg:-mt-72 lg:-mr-14 hidden justify-self-end lg:block lg:w-2/6 xl:w-3/6"
          />
          <p
            dangerouslySetInnerHTML={{
              __html: 'We can also work with you to design and build your own datasets. Using our data governance model, we help you map out the data model and our analysts can help you collect the data or reformat your existing data so that you have a dataset that can be used internally or as a marketable data product.',
            }}
            className="text-white "
          />

         
        </div>
      </div>
    </section>
  );
}
