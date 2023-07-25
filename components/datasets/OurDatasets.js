import styles from "@/styles/Datasetspage.module.css";

export default function OurDatasets({ title, datasets }) {
  return (
    <section className={`${styles.bg_section_datasets} py-10`}>
      <div className="container mx-auto">
        <div className="mb-10 flex gap-x-5">
          <img
            src="/platformable-icon-purple.svg"
            alt="Platformable logo"
            className=""
          />
          <h3 className="text-[var(--purple-medium)] font-bold">{title}</h3>
        </div>
        <div className="grid  gap-2">
          <div className="grid grid-cols-[1.25fr_1fr_1fr_1fr_1fr] ">
            <div className="flex items-center px-7">
              <img src="" alt="" />
              <h4 className="text-white">Datasets</h4>
            </div>
            <div className="grid place-items-center py-5 bg-white px-7">
              <img src="" alt="" />
              <p className="font-bold text-[var(--purple-medium)]">Data points</p>
            </div>
            <div className="grid place-items-center py-5 px-7 bg-[#F6F4FF]">
            <img src="/spec.svg" alt="Specification sheet icon" />
              <p className="font-bold text-[var(--purple-medium)]">Specification sheet</p>
            </div>
            <div className="grid place-items-center py-5 px-7 bg-[#E9E8F8]">
              <img src="/bulk.svg" alt="bulk download " />
              <p className="font-bold text-[var(--purple-medium)]">Bulk purchase</p>
            </div>
            <div className="grid place-items-center py-5 px-7 bg-[#DEDCF5]">
              <img src="/API.svg" alt="API" />
              <p className="font-bold text-[var(--purple-medium)]">Purchase via API</p>
            </div>
          </div>
          {datasets?.map((card, i) => (
            <div
              className="grid grid-cols-[1.25fr_1fr_1fr_1fr_1fr] "
              data-card-number={i + 1}
              key={i}
            >
              <div
                className={`${styles.card_heading} flex items-center justify-center text-center  p-7`}
              >
                <h6 className="text-white font-bold">
                  {card?.datasets_product_name}
                </h6>
              </div>
            
              <div className="flex items-center justify-center bg-white">
                <p className="text-center  font-bold text-[var(--purple-medium)]">
                  {card?.datasets_datapoints}
                </p>
              </div>

            
              <div className="grid items-center px-7 bg-[#F6F4FF]">
                <button className="rounded-md  bg-[var(--purple-light)] px-3 py-2 text-white">
                  <p>Download</p>
                </button>
              </div>
              
              <div className="grid items-center px-7 bg-[#E9E8F8]">
                <button className="bg-[var(--yellow)] px-3 py-2 rounded-md text-[var(--purple)]">
                  <p>Buy now</p>
                </button>
              </div>
              
              <div className="grid items-center px-7 bg-[#DEDCF5]">
                <button className="bg-[var(--pink)] px-3 py-2 rounded-md text-white">
                  <p>Join waiting list</p>
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="text-white font-medium mt-10">
          You can also access our datasets by purchasing one of our ready-made
          data products, including trends reports and analytical tools.
        </p>
      </div>
    </section>
  );
}
