import styles from "@/styles/Datasetspage.module.css";

export default function OurDatasets({ title, datasets }) {
  return (
    <section className={`${styles.bg_section_datasets} py-10`}>
      <div className="container mx-auto">
        
        <div className="hidden md:grid xl:mt-10 gap-1">
        <p className="text-white font-medium mb-10">
        You can also access our datasets by purchasing one of our ready-made data products, including trends reports and analytical tools.
        </p>
          <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] ">
            <div className="flex items-center bg-[#3328C3] px-7 gap-5 rounded-tl-xl">
              <div className="w-2/6 flex justify-center">
                <img  src="/logo_icon_white.png" alt="Platformable logo" />
              </div>
              <h4 className="text-white">Datasets</h4>
            </div>
            <div className="grid place-items-center py-5 bg-white px-7">
              <img src="/datapoints.svg" alt="datapoints svg" />
              <p className="font-bold text-[var(--purple-medium)]">Data points</p>
            </div>
            <div className="grid place-items-center py-5 px-7 bg-[#F6F4FF]">
            <img src="/spec.svg" alt="Specification sheet svg" />
              <p className="font-bold text-[var(--purple-medium)]">Specification sheet</p>
            </div>
            <div className="grid place-items-center py-5 px-7 bg-[#E9E8F8]">
              <img src="/bulk.svg" alt="bulk download svg" />
              <p className="font-bold text-[var(--purple-medium)]">Bulk purchase</p>
            </div>
            <div className="grid place-items-center py-5 px-7 bg-[#DEDCF5] rounded-tr-xl">
              <img src="/API.svg" alt="API svg" />
              <p className="font-bold text-[var(--purple-medium)]">Purchase via API</p>
            </div>
          </div>
          {datasets?.map((card, i) => (
            <div
              className="grid grid-cols-[1.50fr_1fr_1fr_1fr_1fr] "
              data-card-number={i + 1}
              key={i}
            >
              <div
                className={`${styles.card_heading} flex items-center justify-start gap-7  p-7`}
              >
                <img src={card?.product_icon?.data?.attributes.url} alt="" className="w-2/6" />
                <h6 className="text-white font-bold w-4/6">
                  {card?.datasets_product_name}
                </h6>
              </div>
            
              <div className="flex items-center justify-center bg-white">
                <p className="text-center  font-bold text-[var(--purple-medium)]">
                  {card?.datasets_datapoints}
                </p>
              </div>

            
              <div className="grid items-center px-7 bg-[#F6F4FF]">
                <button className="rounded-md shadow bg-[var(--purple-light)] px-3 py-2 text-white">
                  <p>Download</p>
                </button>
              </div>
              
              <div className="grid items-center px-7 bg-[#E9E8F8]">
                <button className="bg-[var(--yellow)] px-3 py-2 shadow rounded-md text-[var(--purple)]">
                  <p>Buy now</p>
                </button>
              </div>
              
              <div className="grid items-center px-7 bg-[#DEDCF5]">
                <button className="bg-[var(--pink)] shadow px-3 py-2 rounded-md text-white">
                  <p>Join waiting list</p>
                </button>
              </div>
            </div>
          ))}
           <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] bg-white py-7">
            <div className="px-7 col-start-1 col-end-5 text-[#3328C3]  flex items-center gap-x-5">
              <img src="/dataset_blank.png" alt="dataset blank icon" />
             <div className="">
             <h5 className="mb-1 font-bold">{"Didn't find the product you were looking for ?"}</h5>
             <p>If you have a specific product in mind or if you need assistance in building your own dataset</p>
             </div>
            </div>
            <div className="grid items-center px-7 ">
                <button className="bg-[var(--yellow)] px-3 py-2 shadow-md rounded-md text-[var(--purple)]">
                  <p className="font-bold">Contact us</p>
                </button>
              </div>
          </div>
        </div>
       
      </div>
    </section>
  );
}
