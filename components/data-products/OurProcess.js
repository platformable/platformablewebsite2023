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
          <h2
            className={`text-[var(--blue-extra-dark)]  font-bold  md:leading-10 leading-8 `}
          >
            {data?.data_products_process_title}
          </h2>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.data_products_process_description,
          }}
          className="mt-5 lg:mt-10 lg:mb-16 text-[var(--blue-extra-dark)] "
        />
        <section className="Discovery rounded-t-2xl shadow-lg ">
          <div className={`${styles.bg_section_discovery} rounded-t-xl px-10 pt-7 pb-10`}>
            <div className="flex gap-x-5 mb-5">
              <img src="" alt="platformable logo" />
              <h5 className="font-bold ">Discovery</h5>
            </div>
            <div className="grid md:grid-cols-3 gap-y-7 gap-x-7">
                <img src="" alt="" className="h-48 bg-white"/>
                <img src="" alt="" className="h-48 bg-white"/>
                <img src="" alt="" className="h-48 bg-white"/>
            </div>
          </div>
          <div className={`${styles.bg_section_scope} rounded-b-xl bg px-10 pt-7 pb-10`}>
            <div className="flex gap-x-5 mb-5">
            <img src="" alt="platformable logo" />

            <h5 className="font-bold">Scope and MVP</h5>

            </div>
            <div className="grid grid-cols-1 gap-y-3">
              <img src="" alt=""></img>
              <div className="grid grid-cols-2 gap-3"></div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
