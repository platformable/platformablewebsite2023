import styles from "@/styles/Engagepage.module.css";

export default function Hero({data}) {
  return (
    <section >
      <div className={styles.bg_hero_top}>
        <div  className="text-white container mx-auto py-10">
        <h1 className="mb-10">{data?.title}</h1>
        
        <h3 className="font-bold mb-10">{data?.subtitle}</h3>
       
        <div className="flex flex-col lg:flex-row  items-center gap-10 mb-10">
            <div className="flex gap-x-3 ">
                <img src={data?.subtitle1_img?.data?.attributes.url} alt="" />
                <p>{data?.subtitle1_text}</p>
            </div>
            <p className="font-bold">or</p>
            <div className="flex gap-x-3 ">
                <img src={data?.subtitle2_img?.data?.attributes.url} alt="" />
                <p>{data?.subtitle2_text}</p>
            </div>
        </div>
        <h3 className="font-bold">We can support you with our products and services</h3>
        </div>
        
      </div>
      <div className="container mx-auto py-16  grid md:grid-cols-[1fr_3fr] grid-cols-1 gap-x-10 md:gap-y-0 gap-y-5 items-center">
        <div className="">
        <img src={data?.hero_img?.data?.attributes.url} alt="Engage image" className=""/>   
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.hero_description,
          }}
          className=""
        />
       
      </div>
    </section>
  );
}
