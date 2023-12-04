import styles from "@/styles/OBOFTrendsReportspage.module.css";
import Link from "next/link";

export default function ProductDescription({ data, sectorsStyle }) {
  return (
    <section id="details" className="pb-20 pt-2 bg-[var(--purple-medium)] hidden md:block">
      {/* <div className="mb-10 flex gap-x-5">
          <img src="/platformable-icon-purple.svg" alt="Platformable logo" className=""/>
          <h3 className="text-[var(--purple-medium)] font-bold">{title}</h3>
        </div> */}

      <div className="grid mt-5 xl:mt-10 gap-1 container mx-auto" >
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
        {data?.products?.map((product, index) => (
          <div
            className="grid grid-cols-[1.5fr_2fr_1fr_1fr] "
            data-card-number={0 + 1}
            key={index}
          >
            <div
              className={`${sectorsStyle[data?.sector].bgGradientColor} flex flex-col  items-center justify-center gap-5 py-12  md:px-2 lg:px-10`}
            >
              <img
                src={data?.products?.[0].product_icon?.data?.attributes?.url}
                alt=""
                className="w-2/7"
              />
              <p className="text-white text-center  font-bold ">
                {data?.hero_product_name}
              </p>
            </div>

            <div className="text-[#3328C3] flex flex-col justify-center items-center p-7 md:px-4 lg:px-7 bg-white">
              <div
                dangerouslySetInnerHTML={{
                  __html: product?.data_products_product_description,
                }}
                className="lista-custom mb-4"
              />
              {/* <small className="font-bold">{'card?.disclaimer'}</small> */}
            </div>

            <div className="grid items-center justify-items-center px-3 lg:px-5 bg-[#F6F4FF]">
              {product?.btn_download_enabled && (
                <Link
                  href={product?.data_products_products_sample || "#"}
                  target="_blank"
                  className={`'pointer-events-none '}`}
                  // onClick={() => sendPlausibleCustomGoal(card?.plausible_download_tracker)}
                >
                  <button className="rounded-md shadow bg-[var(--purple-light)] px-3 py-2 text-white">
                    <p>Download</p>
                  </button>
                </Link>
              )}
            </div>

            <div className="grid items-center justify-center px-3 py-4 bg-[#E9E8F8]">
              <div className="grid  gap-y-10">
                <div className="grid gap-y-2 text-[var(--purple)]">
                  <span className="text-center">
                    <strong>
                      ${product?.data_products_product_price_quarter}+IVA
                    </strong>{" "}
                    per quarter
                  </span>
                  <Link
                    href={product?.data_product_purchase_quarter || ""}
                    className={`grid`}
                    //   onClick={() => sendPlausibleCustomGoal(card?.plausible_purchase_quarter_tracker)}
                    target="_blank"
                  >
                    <button className="bg-[var(--yellow)] px-3 py-2 shadow rounded-md">
                      Buy now
                    </button>
                  </Link>
                </div>
                <div className="grid gap-y-2 text-[var(--purple)]">
                  <span className="text-center">
                    <strong>
                      ${product?.data_products_product_price_year}+IVA
                    </strong>{" "}
                    per year
                  </span>
                  <Link
                    href={product?.data_product_purchase_year || ""}
                    className={`grid`}
                    //   onClick={() => sendPlausibleCustomGoal(card?.plausible_purchase_year_tracker)}
                    target="_blank"
                  >
                    <button className="bg-[var(--orange-medium)] leading-snug px-3 py-2 shadow rounded-md text-[var(--purple)]">
                      Buy now
                    </button>
                  </Link>
                  <small className="text-center">save 25%</small>
                </div>
              </div>
            </div>
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
            <Link
              href="/contact-us"
              className="flex justify-center"
              onClick={() =>
                plausible("Contact us", {
                  props: { ContactUs: "OBOF trends reports product" },
                })
              }
            >
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
