import styles from "@/styles/Aboutpage.module.css";

export default function Hero({ data }) {
  return (
    <section className={`hero container mx-auto text-white`}>
        <div className=" text-white flex md:flex-nowrap flex-wrap items-center gap-7  py-10">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.hero_description,
            }}
            // className="lg:w-3/6 2xl:w-4/7"
          />
          <img src={data?.hero_img?.data?.attributes.url} alt="Platformable Environmnet logo" />
        </div>

       
        
    </section>
  );
}
