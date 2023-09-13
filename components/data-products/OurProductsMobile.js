import React from "react";
import styles from "@/styles/DataProducts.module.css";

import Link from "next/link";

export default function OurProductssMobile({ title, products }) {
  return (
    <section className={` py-5 md:hidden block`}>
      <div id="ourDatasetMobile" className="container mx-auto">
        {products?.map((product, index) => {
          return (
            <div data-card-number={index + 1} key={index}>
              <div
                className={`product-container bg-white rounded-lg mb-5 pb-5 `}
                key={index}
              >
                <div
                  id="product-title"
                  className={`${styles.card_heading}  grid justify-center px-5 py-7 rounded-tl-lg rounded-tr-lg`}
                >
                  <p className="text-white">{product?.data_products_product_name}</p>
                </div>
                <div className="grid justify-center text-[#3328C3] px-5 py-5 mb-5">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: product ?.data_products_product_description,
                      }}
                      className="mb-4"
                    />
                     <small className="font-bold">{product?.disclaimer}</small>

                </div>
                <div className="grid place-items-center gap-y-3 py-5 px-7 bg-[#F6F4FF] rounded-md">
                  <img src="/sample_icon.svg" alt="Specification sheet svg" />
                  <p className="font-bold text-center text-[#3328C3]">
                    Sample copy
                  </p>
                  <div className="grid items-center px-7">
                    {product.btn_download_enabled && (
                      <button className="rounded-md shadow bg-[var(--purple-light)] px-3 py-2 text-white">
                        <p>Download</p>
                      </button>
                    )}
                  </div>
                </div>

                <div className="p-5 grid gap-y-5 mt-5 rounded-lg bg-[#F6F4FF]">
                  <p className="text-center text-[var(--purple-dark)] font-bold">
                    Purchase
                  </p>

                  <div className="grid items-center px-7 ">
                    {product?.data_products_product_price_quarter &&
                    product?.data_products_product_price_year ? (
                      <div className="grid grid-rows-2 gap-y-10">
                        <button className="bg-[var(--yellow)] px-3 py-2 shadow rounded-md text-[var(--purple)]">
                          <p>
                            <strong>
                              ${product?.data_products_product_price_quarter}
                            </strong>{" "}
                            per quarter
                          </p>
                        </button>
                        <button className="bg-[var(--orange-medium)] leading-snug px-3 py-2 shadow rounded-md text-[var(--purple)]">
                          <p>
                            <strong>
                              ${product?.data_products_product_price_year}
                            </strong>{" "}
                            per year
                          </p>
                          <small>save 25%</small>
                        </button>
                      </div>
                    ) : (
                      <Link href="/contact-us" className="flex justify-center">
                        <button className="bg-[var(--pink)] shadow px-3 py-2 rounded-md text-white">
                          <p className="font-bold">Join waiting list</p>
                        </button>
                      </Link>
                    )}
                  </div>

                  {/* <div className="grid items-center ">
                    <Link href="/contact-us">
                      <button className="rounded-md shadow bg-[var(--pink)] shadow px-3 py-2 rounded-md text-white w-full">
                        <p>Join waiting list</p>
                      </button>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
