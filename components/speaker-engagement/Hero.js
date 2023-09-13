import styles from "@/styles/OpenEcosystempage.module.css";

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
          <div className="lg:w-3/6 xl:w-[60%] 2xl:w-3/5 flex justify-center">
          <img
              src={data?.hero_img?.data.attributes.url}
              alt="Data products mapped"
              className="lg:-mt-[2rem] xl:-mt-44  lg:-mt-[24pc]  hidden justify-end lg:block  h-96 relative top-24"
            />
            </div>
        </div>
      </div>
    </section>
  );
}
