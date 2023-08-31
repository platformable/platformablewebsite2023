import styles from "@/styles/Engagepage.module.css";

export default function Hero({ data }) {
  return (
    <section>
      <div className={styles.bg_hero_top}>
        <div className="text-white container mx-auto py-10">
          <h1 className="mb-5 font-bold">{data?.title}</h1>

          <div
            dangerouslySetInnerHTML={{
              __html: data?.subtitle,
            }}
            className="mb-14 text-[var(--green)] "
          />

          <div className="flex flex-col lg:grid lg:grid-cols-[4fr_1fr_4fr] xl:gap-x-20 items-center gap-10 mb-10">
            <div className="flex gap-x-7 items-center">
              <img src={data?.subtitle1_img?.data?.attributes.url} alt="" />
              <p>{data?.subtitle1_text}</p>
            </div>
            <p className="text-center">OR</p>
            <div className="flex gap-x-7 items-center">
              <img src={data?.subtitle2_img?.data?.attributes.url} alt="" />
              <p>{data?.subtitle2_text}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-16  grid md:grid-cols-[1fr_1fr]  grid-cols-1 gap-x-20 md:gap-y-0 gap-y-5 items-center">
        
        <div className="flex flex-col justify-start gap-10 ">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.hero_description_highlighted,
            }}
            className="px-10 2xl:px-20 2xl:py-7 py-5 flex items-center text-center rounded-xl bg-[#DEDBFF] font-bold text-[var(--purple-extra-dark)]"
          />

          <div
            dangerouslySetInnerHTML={{
              __html: data?.hero_description,
            }}
            className="leading-relaxed"
          />
        </div>

        <div className="">
          <img
            src={data?.hero_img?.data?.attributes.url}
            alt="Engage image"
            className=""
          />
        </div>
      </div>

    </section>
  );
}
