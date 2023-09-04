import styles from "@/styles/DataGovernancepage.module.css";
import Link from "next/link";

export default function GovernanceProducts({ products }) {
  return (
    <section className="pb-20 pt-2 bg-[var(--purple-medium)] ">
      <div className="container mx-auto">
        <div className="flex gap-x-5">
          {/* <img
          src="/platformable-icon-purple.svg"
          alt="Platformable logo"
          className=""
        />
        <h3 className="text-[var(--purple-medium)] font-bold">
          {title}
        </h3> */}
        </div>
        <div className="hidden md:grid mt-5 xl:mt-10 gap-1 ">
          <div className="grid grid-cols-[1.5fr_2fr_1fr] ">
            <div className="flex items-center bg-[#3328C3] px-7 gap-5 rounded-tl-xl">
              <div className="w-2/6 flex justify-center">
                <img src="/logo_icon_white.png" alt="Platformable logo" />
              </div>
              <h6 className="text-white font-bold">API Governance Products</h6>
            </div>
            <div className="grid place-items-center py-5 bg-white">
              <img src="/overview.svg" alt="datapoints svg" />
              <p className="font-bold text-[#3328C3]">Overview</p>
            </div>
            {/* <div className="grid place-items-center py-5 px-7 bg-[#F6F4FF]">
              <img src="/sample_icon.svg" alt="Specification sheet svg" />
              <p className="font-bold text-center text-[#3328C3]">
                Sample copy
              </p>
            </div> */}
            <div className="grid place-items-center py-5 px-7 bg-[#E9E8F8] rounded-tr-xl">
              <img src="/purchase_icon.svg" alt="bulk download svg" />
              <p className="font-bold text-[#3328C3]">Purchase</p>
            </div>
          </div>
          {products?.map((card, i) => (
            <div
              className="grid grid-cols-[1.5fr_2fr_1fr] "
              data-card-number={i + 1}
              key={i}
            >
              <div
                className={`${styles.card_heading} flex flex-col lg:flex-row items-center justify-start gap-5 py-7 px-2`}
              >
                <img
                  src={card?.product_icon?.data?.attributes?.url}
                  alt=""
                  className="w-2/7"
                />
                <p className="text-white font-bold w-5/7 text-center lg:text-left">{card?.title}</p>
              </div>

              <div className="flex  p-7 justify-center bg-white ">
                <div
                  dangerouslySetInnerHTML={{
                    __html: card?.description,
                  }}
                  className="text-[#3328C3] text-left"
                />
              </div>

              {/* <div className="grid items-center px-7 bg-[#F6F4FF]">
                <button className="rounded-md shadow bg-[var(--purple-light)] px-3 py-2 text-white">
                  <p>Download</p>
                </button>
              </div> */}

              <div className="grid items-center px-7 bg-[#E9E8F8]">
                <button className="bg-[var(--yellow)]  shadow px-3 py-2 rounded-md text-white">
                  <p className="text-[var(--purple)]">Join waiting list</p>
                </button>
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
                  If you have a specific product in mind or if you need
                  assistance in building your own dataset
                </p>
              </div>
            </div>
            <div className="grid items-center px-7 ">
              <Link href="/contact-us" className="flex justify-center">
                <button className="bg-[var(--yellow)] px-3 py-2 shadow-md rounded-md text-[var(--purple)]">
                  <p className="font-bold">Contact us</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 md:hidden gap-10">
          {products?.map((card, i) => (
            <div
              className="grid grid-rows-[1fr_3fr] shadow-[0px_3px_6px_#86858B] rounded-md lg:rounded-xl"
              data-card-number={i + 1}
              key={i}
            >
              <div
                className={`${styles.card_heading} flex items-center justify-center text-center rounded-t-md lg:rounded-t-xl p-7`}
              >
                <h6 className="text-white font-bold">{card?.title}</h6>
              </div>
              <div className="flex flex-col justify-between rounded-b-md lg:rounded-b-xl pb-10">
                <p className="pt-5 pb-10 px-3 xl:px-5 text-[var(--purple-medium)] ">
                  {card.description}
                </p>

                <div className="grid gap-3 items-center justify-center px-3 lg:px-5 2xl:px-10">
                  <div className="flex items-center justify-center">
                    <img src="/spec.svg" alt="Specification sheet icon" />{" "}
                  </div>
                  <p className="text-center px-5 text-[var(--purple-medium)]">
                    Simple copy
                  </p>
                  <button className="rounded-md  bg-[var(--purple-light)] py-2 mb-16 text-white">
                    <p>Download</p>
                  </button>
                  <div className="flex items-center justify-center">
                    <img
                      src={card?.bookbuybtn_img?.data?.attributes?.url}
                      alt="Product icon"
                    />
                  </div>
                  <button className="bg-[var(--blue-extra-dark)] py-2 rounded-md text-white">
                    <p>Buy now</p>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
