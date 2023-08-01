import styles from "@/styles/DataProducts.module.css";

export default function Hero({ data }) {
  return (
    <section className="">
      <div className="container  mx-auto   py-10">
        <h1 className="mb-10 text-[var(--purple-medium)] font-bold">
          {data?.title}
        </h1>
        <div className="flex gap-10">
          <div
            dangerouslySetInnerHTML={{
              __html:
                data?.hero_description,
            }}
            className="lg:w-3/6 xl:w-[60%] 2xl:w-3/5"
          />
          <img
            src={data?.hero_img?.data.attributes.url}
            alt="Data products mapped"
            className="lg:-mt-24 xl:-mt-28  lg:-mt-[24pc] lg:-mr-10 hidden justify-self-end lg:block lg:w-3/6 xl:w-[40%] 2xl:w-2/5 h-96"
          />
        </div>
      </div>
    </section>
  );
}
