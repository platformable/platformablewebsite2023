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
          className="lg:w-3/6 xl:w-[60%] 2xl:w-3/5"
        />
      </div>
      <div className={`${styles.hero_background_gradient} py-10 `}>
        <div className="container mx-auto ">
          <div className="flex gap-7 ">
            <div
              dangerouslySetInnerHTML={{
                __html: data?.datasets_description2,
              }}
              className="text-white lg:w-3/6 xl:w-[60%] 2xl:w-3/5 font-bold"
            />

            <img
              src={data?.datasets_img?.data.attributes.url}
              alt="Data products mapped"
              className=" lg:-mt-[28rem] xl:-mt-72  lg:-mt-72 lg:-mr-10 hidden justify-self-end lg:block lg:w-3/6 xl:w-[40%] 2xl:w-2/5 h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
