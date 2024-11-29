
import styles from "@/styles/Datasetspage.module.css";

import Link from "next/link";

export default function OurDatasetsMobile({ title, datasets }) {
  return (
    <section className={`${styles.bg_section_datasets} py-5 lg:hidden block`}>
      <div id="ourDatasetMobile" className="container mx-auto">
        <p className="text-white  font-bold mb-5 xl:mb-10">
          You can also access our datasets by purchasing one of our ready-made
          data products, including trends reports and analytical tools.
        </p>

        {datasets?.map((product, index) => {
          return (
            <div data-card-number={index + 1} key={index}>
              <div
                className={`product-container bg-white rounded-lg mb-5 pb-5 `}
                key={index}
              >
                <div
                  id="product-title"
                  className={`${styles.card_heading}  grid justify-center p-10 rounded-tl-lg rounded-tr-lg`}
                >
                  <p className="text-white">{product?.datasets_product_name}</p>
                </div>
                <div className="grid justify-center p-10">
                  <p>{product?.datasets_datapoints} data points</p>
                </div>
                <div className="grid grid-rows-[1fr_1fr] place-items-center py-1 px-7 ">
                  <img
                    src="/spec.svg"
                    alt="Specification sheet svg"
                    className="h-14"
                  />
                  <p className="font-bold text-[#3328C3] text-center">
                    Specification sheet
                  </p>
                </div>

                <div className="grid items-center px-7 ">
                  {product.btn_download_enabled ? (
                    <button className="rounded-md shadow bg-[var(--purple-light)] px-3 py-2 text-white">
                      <p>Download</p>
                    </button>
                  ) : (
                    <div className="flex justify-center"></div>
                  )}
                </div>

                <div className="p-5 grid gap-y-5 m-5 rounded-lg bg-[#F6F4FF]">
                  <p className="text-center text-[var(--purple-dark)] font-bold">
                    Purchase
                  </p>

                  <div className="grid items-center ">
                    {product.btn_download_enabled ? (
                      <button className="rounded-md  bg-[var(--yellow)] px-3 py-2 shadow text-[var(--purple-medium)]">
                        <p>Buy now</p>
                      </button>
                    ) : (
                      <div className="flex justify-center"></div>
                    )}
                  </div>

                  <div className="grid items-center ">
                    <Link href="/contact-us">
                      <button className="rounded-md shadow bg-[var(--pink)] shadow px-3 py-2 rounded-md text-white w-full">
                        <p>Join waiting list</p>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
