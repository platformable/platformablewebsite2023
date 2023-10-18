import React from "react";
import styles from "@/styles/Homepage.module.css";
import Link from "next/link";
export default function ProductsServices({ title, product_cards }) {
  return (
    <section className={`bg-[#06DE8B] py-10`}>
      <div className="container mx-auto md:mb-10 mb-10">
        <div className="flex gap-x-5 items-center ">
          <img
            src="/icon_section01.svg"
            alt="platformable logo"
            className="md:flex hidden"
          />
          <h2
            className={`text-[#2A2FC1] font-bold md:leading-10 leading-9`}
          >
            {title}
          </h2>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 container mx-auto  gap-10 xl:gap-10">
        {product_cards &&
          product_cards?.map((card, i) => (
            <div className="grid shadow-lg grid-rows-[max(100px)_auto]" key={i}>
              <section className="bg-[#5B24EC] rounded-t-md flex justify-between items-center text-white px-5 md:px10 py-5">
                <div className="flex items-center gap-2 md:gap-5">
                  <img
                    width={45}
                    height={50}
                    src={card?.list_card_description_img?.data?.attributes?.url}
                    alt={`${card?.list_card_description_product_name} icon`}
                  />
                  <h6 className="font-bold">
                    {card?.list_card_description_product_name}
                  </h6>
                </div>
                <Link href={`/products${card?.list_card_description_button_text}`}>
                  <button className="border-none shadow-md flex bg-[var(--yellow)] items-center gap-2  rounded-lg  px-3 md:p-x5 py-2">
                    <span className="text-sm md:text-base text-[var(--purple-medium)]">
                      find out more
                    </span>
                    <img
                      src="/icon_arrow_purple.svg"
                      alt={`know more about ${card?.list_card_description_product_name}`}
                      className="w-3.5 md:w-7 lg:w-6"
                    />
                  </button>
                </Link>
              </section>
              <section
                className={`${
                  card?.list_card_description_is_costumizable
                    ? "grid grid-rows-[3.5fr_1fr_4fr]"
                    : "flex items-start "
                }   gap-7 bg-white px-7 md:px-10 py-7 h-full rounded-b-md`}
              >
                <p className="">{card?.list_card_description_description}</p>
                {card?.list_card_description_is_costumizable && (
                  <>
                    <div className="flex gap-2 items-center ">
                      <img
                        src="/icon_customization.svg"
                        alt="customization icon"
                      />
                      <span className="font-bold text-[#2B30C1]">
                        {card?.list_card_description_options}
                      </span>
                    </div>
                    <p>{card?.list_card_description_options_text}</p>
                  </>
                )}
              </section>
            </div>
          ))}
      </div>
    </section>
  );
}
