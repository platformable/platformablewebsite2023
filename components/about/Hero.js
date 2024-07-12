import styles from "@/styles/Aboutpage.module.css";

export default function Hero({ data }) {
  return (
    <section className={`hero container mx-auto text-white`}>
        <div className=" text-white flex md:flex-nowrap flex-wrap items-center gap-7  py-10">
       {/*    <div
            dangerouslySetInnerHTML={{
              __html: data?.hero_description
            }}
            className="text-[10px] leading-tight"
          /> */}
          <h1 className="md:text-3xl text-xl">{data?.hero_description.replace('<h1>','').replace('</h1>','')}</h1>
          <img src={data?.hero_img?.data?.attributes.url} alt="Platformable Environmnet logo" />
        </div>

       
        
    </section>
  );
}
