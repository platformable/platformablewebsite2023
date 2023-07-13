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
      <div className="container mx-auto py-16  block md:flex items-center lg:flex-row gap-y-8 gap-8">
        <div className="md:w-2/4 block md:mb-0 mb-5">
        <img src={data?.hero_img?.data?.attributes.url} alt="Act platformable tools image" className=""/>   
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.hero_description2,
          }}
          className="text-[25px] md:w-2/4 block"
        />
       
      </div>
    </section>
  );
}
