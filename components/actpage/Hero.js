import styles from "@/styles/Actpage.module.css";

export default function Hero({ data }) {
  return (
    <section>
      <div className={styles.bg_hero}>
        <div className="text-white container mx-auto py-10">
          <h1 className="mb-5 font-bold">Act</h1>

          <div
            dangerouslySetInnerHTML={{
              __html: data?.hero_description,
            }}
            className=""
          />
        </div>
      </div>
      <div className="container mx-auto py-16  grid md:grid-cols-[1fr_1fr]  grid-cols-1 gap-x-10 md:gap-y-0 gap-y-5  items-center">
        <div className="flex justify-center">
          <img
            src={data?.hero_img?.data?.attributes.url}
            alt="Act platformable tools image"
            className=""
          />
        </div>
        <div className="grid gap-10 h-full">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.hero_description2,
            }}
            className="leading-relaxed"
          />

          <div
            dangerouslySetInnerHTML={{
              __html: data?.hero_description_highlighted,
            }}
            className="px-10 2xl:px-20 2xl:py-2 py-5 flex items-center text-center rounded-xl bg-[#DEDBFF] font-bold text-[var(--purple-extra-dark)]"
          />
          
        </div>
      </div>
    </section>
  );
}
