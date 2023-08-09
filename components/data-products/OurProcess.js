import styles from "@/styles/DataProducts.module.css";

export default function OurProcess({ data }) {
  
  return (
    <section className={`py-10  bg-[var(--purple-double-extra-light)]`}>
      <div className="container mx-auto">
        <div className="flex gap-x-5 items-center  mb-10">
          <img
            src="/icon_section01.svg"
            alt=""
            className="md:flex hidden"
          />
          <h3
            className={`text-[var(--blue-extra-dark)]  font-bold  md:leading-10 leading-8 `}
          >
            {data?.data_products_process_title}
          </h3>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.data_products_process_description,
          }}
          className="mt-5 lg:mt-10 lg:mb-16 text-[var(--blue-extra-dark)] "
        />
        <section className="Discovery rounded-t-2xl shadow-lg ">
          <div className={`${styles.bg_section_discovery} text-white rounded-t-xl px-10 pt-7 pb-10`}>
            <div className="flex gap-x-7 mb-10">
              <img src="/platformable-icon-white.svg" alt="platformable logo" />
              <div>
              <h5 className="font-bold mb-3 lg:mb-5 ">Discovery</h5>
              <p>{data?.discovery_description}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-y-7 gap-x-7">

                 {data?.discovery_images?.data?.map((img,index) => (
                  <img src={img.attributes.url} alt="" className="" key={index}/>
                 )
                )} 
                
            </div>
          </div>
          <div className={`${styles.bg_section_scope} text-white rounded-b-xl bg px-10 pt-7 pb-10`}>
            <div className="flex gap-x-7 mb-10">
            <img src="/platformable-icon-white.svg"  alt="platformable logo" />

            <div>
            <h5 className="font-bold mb-3 lg:mb-5 ">Scope and MVP</h5>
            <p>{data?.scope_description}</p>
            </div>
            </div>
            <div className="grid grid-cols-1 gap-y-3">
              <img src={data?.scope_img1?.data.attributes.url} alt=""></img>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-between">
              <img src={data?.scope_img2?.data.attributes.url} alt=""></img>
              <img src={data?.scope_img3?.data[0].attributes.url} alt="" width="98.5%"></img>

              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
