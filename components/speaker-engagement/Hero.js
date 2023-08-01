import styles from "@/styles/DataProducts.module.css";

export default function Hero({ data }) {
  return (
    <section className="">
      <div className="container  mx-auto   py-10">
        <h1 className="mb-10 text-[var(--purple-medium)] font-bold">
          {data?.data_products_hero_title}
        </h1>
        <div className="flex">
          <div
            dangerouslySetInnerHTML={{
              __html:
                "Platformable team members are available for speaking engagements, conference moderation, roundtable and workshop facilitation and online presentations. We can speak on a range of topics, drawing on our extensive library of previous talks, or can tailor-make a presentation or keynote to your needs.",
            }}
            className="lg:w-3/6 xl:w-[60%] 2xl:w-3/5"
          />
          <img
            src={data?.data_products_hero_img?.data.attributes.url}
            alt="Data products mapped"
            className="lg:-mb-[2rem] xl:-mt-24 lg:-mr-10 hidden justify-self-end lg:block lg:w-3/6 xl:w-[40%] 2xl:w-2/5 h-96"
          />
        </div>
      </div>
    </section>
  );
}
