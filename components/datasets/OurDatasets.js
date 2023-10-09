import styles from "@/styles/Datasetspage.module.css";
import Link from "next/link";
import { usePlausible } from "next-plausible";

export default function OurDatasets({ title, datasets }) {
  const plausible = usePlausible();
  const sendPlausibleCustomGoal = (goalName) => {
    plausible(goalName);
  };
  return (
    <section className={`${styles.bg_section_datasets} md:pb-20 pb-0 pt-2`}>
      <div className="container mx-auto">
        <div className="hidden md:block md:grid  gap-1">
          <p className="text-white  font-bold mb-5 xl:mb-10">
            You can also access our datasets by purchasing one of our ready-made
            data products, including trends reports and analytical tools.
          </p>
          <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] ">
            <div className="flex items-center bg-[#3328C3] px-7 gap-5 rounded-tl-xl">
              <div className="w-2/6 flex justify-center">
                <img src="/logo_icon_white.png" alt="Platformable logo" />
              </div>
              <h4 className="text-white">Datasets</h4>
            </div>
            <div className="grid grid grid-rows-[1fr_1fr] place-items-center py-5 bg-white px-7 text-center">
              <img
                src="/datapoints.svg"
                alt="datapoints svg"
                className="h-14"
              />
              <p className="font-bold text-[#3328C3] text-center">
                Data points
              </p>
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
            <div className="grid grid-rows-[1fr_1fr] place-items-center py-5 px-7 bg-[#E9E8F8]">
              <img src="/bulk.svg" alt="bulk download svg" />
              <p className="font-bold text-[#3328C3] text-center">
                Bulk purchase
              </p>
            </div>
            <div className="grid grid-rows-[1fr_1fr] place-items-center py-5 px-7 bg-[#DEDCF5] rounded-tr-xl">
              <img src="/API.svg" alt="API svg" />
              <p className="font-bold text-[#3328C3] text-center">
                Purchase via API
              </p>
            </div>
          </div>
          {datasets?.map((card, i) => (
            <div
              className="grid grid-cols-[1.50fr_1fr_1fr_1fr_1fr] "
              data-card-number={i + 1}
              key={i}
            >
              <div
                className={`${styles.card_heading} grid grid-cols-[1fr_2fr] p-7 gap-5 items-center`}
              >
                <img
                  src={card?.product_icon?.data?.attributes.url}
                  alt=""
                  className="w-2/7"
                />
                <p className="text-white font-bold w-5/7">
                  {card?.datasets_product_name}
                </p>
              </div>

              <div className="flex items-center justify-center bg-white">
                <p className="text-center  font-bold text-[var(--purple-medium)]">
                  {card?.datasets_datapoints}
                </p>
              </div>

              <div className="grid items-center px-7 bg-[#F6F4FF]">
                {card.btn_download_enabled ? (
                  <Link
                    href={card?.datasets_specification || ""}
                    className={`${!card?.datasets_specification && 'pointer-events-none '} flex justify-center`}
                    onClick={() => sendPlausibleCustomGoal(card?.plausible_download_tracker)}
                    target="_blank"
                  >
                    <button
                      className='rounded-md shadow bg-[var(--purple-light)] px-3 py-2 text-white'
                    >
                      <p>Download</p>
                    </button>
                  </Link>
                ) : (
                  <div className="flex justify-center"></div>
                )}
              </div>

              <div className="grid items-center px-7 bg-[#E9E8F8]">
                {card.btn_buy_enabled ? (
                  <Link
                    href={card?.datasets_bulk_download || ""}
                    className={`${!card?.datasets_bulk_download && 'pointer-events-none '} flex justify-center`}
                    onClick={() => sendPlausibleCustomGoal(card?.plausible_buy_tracker)}
                    target="_blank"
                  >
                    {/* Change button if is OBOF until sales strategy is defined */}
                    {card?.datasets_product_name  === 'Open Banking/ Open Finance' ? (
                      <button
                      className='bg-[var(--pink)] px-3 py-2 shadow rounded-md text-white text-base'
                    >
                      <p>Contact us for enterprise sales</p>
                    </button>
                    ) : (
                      <button
                      className='bg-[var(--yellow)] px-3 py-2 shadow rounded-md text-[var(--purple-medium)]'
                    >
                      <p>Buy now</p>
                    </button>
                    )}
                    
                  </Link>
                ) : (
                  <div className="flex justify-center"></div>
                )}
              </div>

              <div className="grid place-content-center px-7 bg-[#DEDCF5]">
                <Link href={"/contact-us"}>
                  <button className="bg-[var(--pink)] shadow px-3 py-2 rounded-md text-white">
                    <p>Join waiting list</p>
                  </button>
                </Link>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] bg-white py-7">
            <div className="px-7 col-start-1 col-end-5 text-[#3328C3]  flex items-center gap-x-5">
              <img src="/didnt_find.png" alt="dataset blank icon" />
              <div className="">
                <h5 className="mb-1 font-bold">
                  {"Didn't find the product you were looking for ?"}
                </h5>
                <p>
                  If you have a specific product in mind or if you need
                  assistance in building your own dataset
                </p>
              </div>
            </div>
            <div className="grid items-center px-7 ">
              <Link href="/contact-us" className="flex justify-center" onClick={() => plausible('Contact us', {props: {ContactUs: 'datasets'}})}>
                <button className="bg-[var(--yellow)] px-3 py-2 shadow-md rounded-md text-[var(--purple)]">
                  <p className="font-bold">Contact us</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
