import React from "react";
import styles from "@/styles/Datasetspage.module.css";

export default function OurDatasetsMobile({ title, datasets }) {
  return (
    <section className={`${styles.bg_section_datasets} py-5`}>
      <div id="ourDatasetMobile" className="container mx-auto">
        <p className="text-white  font-bold mb-5 xl:mb-10">
          You can also access our datasets by purchasing one of our ready-made
          data products, including trends reports and analytical tools.
        </p>

        {datasets?.map((product, index) => {
          return (
            <div className="product-container bg-white rounded-lg mb-5" key={index}>
              <div id="product-title" className="bg-red-500 grid justify-center p-10 rounded-tl-lg rounded-tr-lg">
                <p className="text-white">{product?.datasets_product_name}</p>
              </div>
              <div className="grid justify-center p-10">
              <p>{product?.datasets_datapoints} data points</p>
              </div>
              <div className="grid grid-rows-[1fr_1fr] place-items-center py-5 px-7 bg-[#F6F4FF]">
              <img
                src="/spec.svg"
                alt="Specification sheet svg"
                className="h-14"
              />
              <p className="font-bold text-[#3328C3] text-center">
                Specification sheet
              </p>
            </div>

            <div className="grid items-center px-7 bg-[#F6F4FF]">
                {product.btn_buy_enabled ? (
                  <button className="rounded-md shadow bg-[var(--purple-light)] px-3 py-2 text-white">
                  <p>Download</p>
                </button>
                ):<div className="flex justify-center">-</div>}
              </div>

              <div id="purchase" className="grid justify-center bg-purple-50 rounded-tl-rounded rounded-tr-rounded">

                <p>Purchase</p>
                <div className="flex justify-center">
                <img
                src="/spec.svg"
                alt="Specification sheet svg"
                className="h-14"
              />
              </div>

              </div>


            </div>
          );
        })}
      </div>
    </section>
  );
}
