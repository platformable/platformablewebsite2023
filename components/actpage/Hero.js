import styles from "@/styles/Actpage.module.css";

export default function Hero({data}) {
  return (
    <section >
      <div className={styles.bg_hero}>
        <div  className="text-white container mx-auto py-10">
        <h1 className="mb-10">Act</h1>
       
        <div
          dangerouslySetInnerHTML={{
            __html: data?.hero_description,
          }}
          className="text-[25px]"
        />
        </div>
        
      </div>
      <div className="container mx-auto py-16  grid md:grid-cols-[1fr_3fr] grid-cols-1 gap-x-5 md:gap-y-0 gap-y-5 items-center">
        <div className="">
        <img src={data?.hero_img?.data?.attributes.url} alt="Act platformable tools image" className=""/>   
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.hero_description2,
          }}
          className="text-[25px] "
        />
       
      </div>
    </section>
  );
}
