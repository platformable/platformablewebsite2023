import styles from "@/styles/DataProducts.module.css";
import Link from "next/link";
import { usePlausible } from "next-plausible";

export default function OurProducts({ title, products }) {
  console.log(products)
  const plausible = usePlausible();

  const sendPlausibleCustomGoal = (goalName) => {
    plausible(goalName);
  };

  return (
    <section className="pb-20 pt-2 bg-[var(--purple-medium)] hidden md:block">
      {/* <div className="mb-10 flex gap-x-5">
        <img src="/platformable-icon-purple.svg" alt="Platformable logo" className=""/>
        <h3 className="text-[var(--purple-medium)] font-bold">{title}</h3>
      </div> */}

      <div className="grid mt-5 xl:mt-10 gap-1 container mx-auto">
        <div className="grid grid-cols-[1.5fr_2fr_1fr_1fr] ">
          <div className="flex items-center bg-[#3328C3] px-7 gap-5 rounded-tl-xl">
            <div className="w-1/6 flex hidden lg:block">
              <img src="/logo_icon_white.png" alt="Platformable logo" />
            </div>
            <h6 className="text-white font-bold">Data Products</h6>
          </div>
          <div className="grid place-items-center py-5 bg-white">
            <img src="/overview.svg" alt="datapoints svg" className="" />
            <p className="font-bold text-[#3328C3]">Overview</p>
          </div>
          <div className="grid place-items-center py-5 px-7 bg-[#F6F4FF]">
            <img src="/sample_icon.svg" alt="Specification sheet svg" />
            <p className="font-bold text-center text-[#3328C3]">Sample copy</p>
          </div>
          <div className="grid place-items-center py-5 px-7 bg-[#E9E8F8] rounded-tr-xl">
            <img src="/purchase_icon.svg" alt="bulk download svg" />
            <p className="font-bold text-[#3328C3]">Purchase</p>
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
              <img
                src={card?.product_icon?.data?.attributes?.url}
                alt=""
                className="w-2/7"
              />
                <p className="text-white text-center lg:text-left font-bold w-5/7 ">
                  {card?.data_products_product_name}
                </p>
            </div>

            <div className="text-[#3328C3] flex flex-col justify-center  p-7 bg-white">
              <div
                dangerouslySetInnerHTML={{
                  __html: card?.data_products_product_description,
                }}
                className=" mb-4"
              />
              <small className="font-bold">{card?.disclaimer}</small>
            </div>

            <div className="grid items-center justify-items-center px-7 bg-[#F6F4FF]">
              {card?.btn_download_enabled && (
                <Link
                  href={card?.data_products_products_sample || ""}
                  target="_blank"
                  className={`${!card?.data_products_products_sample && 'pointer-events-none '}`}
                  onClick={() => sendPlausibleCustomGoal(card?.plausible_download_tracker)}
                >
                  <button className='rounded-md shadow bg-[var(--purple-light)] px-3 py-2 text-white'>
                    <p>Download</p>
                  </button>
                </Link>
              )}
            </div>

            <div className="grid items-center justify-center px-7 bg-[#E9E8F8]">
              {card.data_products_product_price_quarter &&
              card.data_products_product_price_year ? (
                <div className="grid grid-rows-2 gap-y-10">
                  <Link
                    href={card?.data_product_purchase_quarter || ""}
                    className={`${!card?.data_product_purchase_quarter && 'pointer-events-none '} flex justify-center`}
                    onClick={() => sendPlausibleCustomGoal(card?.plausible_purchase_quarter_tracker)}
                    target="_blank"
                  >
                    <button className="bg-[var(--yellow)] flex-grow px-3 py-2 shadow rounded-md text-[var(--purple)]">
                      <p>
                        <strong>
                          ${card.data_products_product_price_quarter}
                        </strong>{" "}
                        per quarter
                      </p>
                    </button>
                  </Link>

                  <Link
                    href={card?.data_product_purchase_year || ""}
                    className={`${!card?.data_product_purchase_year && 'pointer-events-none '} flex justify-center`}
                    onClick={() => sendPlausibleCustomGoal(card?.plausible_purchase_year_tracker)}
                    target="_blank"
                  >
                    <button className="bg-[var(--orange-medium)] leading-snug px-3 flex-grow py-2 shadow rounded-md text-[var(--purple)]">
                      <p>
                        <strong>
                          ${card.data_products_product_price_year}
                        </strong>{" "}
                        per year
                      </p>
                      <small>save 25%</small>
                    </button>
                  </Link>
                </div>
              ) : card?.data_products_product_name === 'Open Banking Value Tool' ? (
                <Link href="https://openbankingvalue.platformable.com/"  target="_blank" className="flex justify-center">
                  <button className="bg-[var(--yellow)] px-3 py-2 shadow-md rounded-md text-[var(--purple)]">
                <p className="font-bold">Access for free</p>
              </button>
                </Link>
              ) : (
                <Link href="/contact-us" className="flex justify-center">
                  <button className="bg-[var(--pink)] shadow px-3 py-2 rounded-md text-white">
                    <p className="">Join waiting list</p>
                  </button>
                </Link>
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
              <h5 className="mb-1 font-bold">
                {"Didn't find the product you were looking for ?"}
              </h5>
              <p>
                If you have a specific product in mind or if you need assistance
                in building your own dataset
              </p>
            </div>
          </div>
          <div className="grid items-center px-7 ">
            <Link href="/contact-us" className="flex justify-center" onClick={() => plausible('Contact us', {props: {ContactUs: 'data products'}})}>
              <button className="bg-[var(--yellow)] px-3 py-2 shadow-md rounded-md text-[var(--purple)]">
                <p className="font-bold">Contact us</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
