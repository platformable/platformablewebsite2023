import styles from "@/styles/DataProducts.module.css";

export default function OurProducts({ title, products }) {
  return (
    <section className="pb-20 pt-2 bg-[var(--purple-medium)]">
      {/* <div className="mb-10 flex gap-x-5">
        <img src="/platformable-icon-purple.svg" alt="Platformable logo" className=""/>
        <h3 className="text-[var(--purple-medium)] font-bold">{title}</h3>
      </div> */}
      
      <div className="hidden md:grid mt-5 xl:mt-10 gap-1 container mx-auto">
          <div className="grid grid-cols-[1.5fr_2fr_1fr_1fr] ">
            <div className="flex items-center bg-[#3328C3] px-7 gap-5 rounded-tl-xl">
              <div className="w-2/6 flex justify-center hidden lg:block">
                <img  src="/logo_icon_white.png" alt="Platformable logo" />
              </div>
              <h6 className="text-white font-bold">Data Products</h6>
            </div>
            <div className="grid place-items-center py-5 bg-white">
              <img src="/overview.svg" alt="datapoints svg" className=""/>
              <p className="font-bold text-[var(--purple-medium)]">Overview</p>
            </div>
            <div className="grid place-items-center py-5 px-7 bg-[#F6F4FF]">
            <img src="/sample_icon.svg" alt="Specification sheet svg" />
              <p className="font-bold text-center text-[var(--purple-medium)]">Sample copy</p>
            </div>
            <div className="grid place-items-center py-5 px-7 bg-[#E9E8F8] rounded-tr-xl">
              <img src="/purchase_icon.svg" alt="bulk download svg" />
              <p className="font-bold text-[var(--purple-medium)]">Purchase</p>
            </div>
          </div>
          {products?.map((card, i) => (
            <div
              className="grid grid-cols-[1.5fr_2fr_1fr_1fr] "
              data-card-number={i + 1}
              key={i}
            >
              <div
                className={`${styles.card_heading} flex flex-col lg:flex-row items-center justify-start gap-5 py-12  px-2`}
              >
                <img src={card?.product_icon?.data?.attributes?.url} alt="" className="w-2/7" />
                <p className="text-white text-center lg:text-left font-bold w-5/7">
                  {card?.data_products_product_name}
                </p>
              </div>
            
              <div className="flex items-center p-7 justify-center bg-white p">
                
                <div
                    dangerouslySetInnerHTML={{
                      __html: card?.data_products_product_description,
                    }}
                    className="text-[var(--purple-medium)]"
                  />
              </div>

            
              <div className="grid items-center px-7 bg-[#F6F4FF]">
                <button className="rounded-md shadow bg-[var(--purple-light)] px-3 py-2 text-white">
                  <p>Download</p>
                </button>
              </div>
              
              <div className="grid items-center px-7 bg-[#E9E8F8]">
                {card.data_products_product_price_quarter &&
                card.data_products_product_price_year ? (
                  <div className="grid grid-rows-2 gap-y-10">
                  <button className="bg-[var(--yellow)] px-3 py-2 shadow rounded-md text-[var(--purple)]">
                    <p><strong>${card.data_products_product_price_quarter}</strong> per quarter</p>
                  </button>
                  <button className="bg-[var(--orange-medium)] leading-snug px-3 py-2 shadow rounded-md text-[var(--purple)]">
                    <p><strong>${card.data_products_product_price_year}</strong> per year</p>
                    <small>save 25%</small>
                  </button>
                  </div>
                ) : (
                  <button className="bg-[var(--pink)] shadow px-3 py-2 rounded-md text-white">
                  <p className="font-bold">Join waiting list</p>
                </button>
                )}
                
              </div>
              
              {/* <div className="grid items-center px-7 bg-[#DEDCF5]">
                <button className="bg-[var(--pink)] shadow px-3 py-2 rounded-md text-white">
                  <p>Join waiting list</p>
                </button>
              </div> */}
            </div>
          ))}
           <div className="grid grid-cols-[1.5fr_2fr_1fr_1fr] bg-white py-7">
            <div className="px-7 col-start-1 col-end-4 text-[#3328C3]  flex items-center gap-x-5">
              <img src="/didnt_find.png" alt="dataset blank icon" />
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
    </section>
  );
}
