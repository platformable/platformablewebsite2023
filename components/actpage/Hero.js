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
      <div className="container mx-auto py-16 flex flex-col lg:flex-row gap-y-8 gap-8">
        <img src={data?.hero_img?.data?.attributes.url} alt="Act platformable tools iamge" className=""/>   

        <div
          dangerouslySetInnerHTML={{
            __html: data?.hero_description2,
          }}
          className="text-[25px]"
        />
       
      </div>
    </section>
  );
}
