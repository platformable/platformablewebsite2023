import React from "react";
import Link from "next/link";

export default function DiscoverBenefits({ data, sectorsStyle }) {
  return (
    <div className="container mx-auto my-10">
      <div className="flex gap-x-5 items-center   py-10">
        <img
          src="/platformable-icon-white.svg"
          alt=""
          className="md:flex hidden"
        />
        <h3 className={`${sectorsStyle[data?.sector].textColor} text-white  font-bold md:leading-10 leading-8 `}>
          {data?.discover_title}
        </h3>
      </div>

      {data?.discover?.map(({ persona, benefits }, index) => (
        <div
          key={index}
          id="discover-benefits-container"
          className="bg-white rounded-lg discover-benefits-container grid lg:grid-cols-[1fr_3fr] md:grid-cols-2  grid-cols-1 gap-y-5 "
        >
          <div className="discover-benefits-card-product  p-7 shadow-xl">
            <h5 className="font-bold text-[#3425C9] text-center">
              {persona.persona_title}
            </h5>

            <div className="flex justify-center mt-10">
              <img src={persona.persona_image?.data?.attributes.url} alt="" />
            </div>

            <h6 className="text-[#3425C9] font-bold my-10">Tailored for:</h6>

            <div
              dangerouslySetInnerHTML={{
                __html: persona?.description,
              }}
              className="lista-custom text-[#3425C9]"
            />

            <Link href={persona?.buy_button}>
              <div className="grid mt-10">
                <button className="rounded-md  bg-[var(--yellow)] px-7 py-2 shadow text-[var(--purple-medium)]">
                  <p>Buy now</p>
                </button>
              </div>
            </Link>
          </div>
          <div className="discover-benefits-card-description-main-container p-7 rounded-lg bg-[#F4F4FF]">
            <h5 className="font-bold text-[#3425C9]">Benefits</h5>
            <div className="discover-benefits-card-description-container grid lg:grid-cols-3 grid-cols-1 gap-x-5  gap-y-10 mt-10">
              {benefits?.map((benefit, index) => (
                <div className="discover-benefits-card-description" key={index}>
                  <div className="flex gap-x-1 items-center ">
                    <div>
                      <img
                        src={sectorsStyle[data?.sector].checklistImage}
                        alt=""
                        className="self-start"
                        width={24}
                      />
                    </div>
                    <p className="text-[#3425C9] font-bold text-[17px]">
                      {benefit?.benefit_title}
                    </p>
                  </div>
                  <p className="text-[#3425C9] mt-4">
                  {benefit?.benefit_description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center font-bold mt-10 mb-5">
              <p className="mt-5 text-[#3425C9]">
                🚀 Explore by downloading the last version or the sample copy
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
