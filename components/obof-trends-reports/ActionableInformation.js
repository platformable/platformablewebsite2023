import React from "react";
import IconPlatformable from "../IconPlatformable";

export default function ActionableInformation({data, sectorsStyle}) {
  return (
    <div className="container mx-auto">
      <div className="flex gap-x-5 items-center   py-10">
       
        <IconPlatformable color={sectorsStyle[data?.sector]?.textColor} />
        <h3 className={`text-[${sectorsStyle[data?.sector]?.textColor}] font-bold md:leading-10 leading-8 `}>
          {data?.actionable_information_title}
        </h3>
      </div>

      <div
        id="actionable-cards-container"
        className="actionable-cards-container grid xl:grid-cols-4 lg:grid-cols-2 gap-x-5 grid-cols-1 gap-y-5"
      >
        {data?.actionable_information_card?.map((card,index)=> (
          <div
          key={index}
          id="actionable-card"
          className="actionable-card bg-[#5A23EC] p-7 grid grid-rows-[0.5fr_1.5fr_1fr] gap-y-5 rounded-lg"
        >
          <p className="text-white font-bold text-center ">{card?.title}</p>

          <div className="text-center flex justify-center">
            <img src={card?.image?.data?.attributes?.url} alt="" className="text-center" />
          </div>

          <p className="leading-6 text-white text-center">
            {card?.description}
          </p>
        </div>
        ))}
        {/* <div
          id="actionable-card"
          className="actionable-card bg-[#5A23EC] p-7 grid grid-rows-[0.5fr_1.5fr_1fr] gap-y-5 rounded-lg"
        >
          <p className="text-white font-bold text-center ">Strategies</p>

          <div className="text-center flex justify-center">
            <img src="/temporary_icon.svg" alt="" className="text-center" />
          </div>

          <p className="leading-6 text-white text-center">
          Learn how businesses are leveraging Open Banking for success
          </p>
        </div>
        <div
          id="actionable-card"
          className="actionable-card bg-[#5A23EC] p-7 grid grid-rows-[0.5fr_1.5fr_1fr] gap-y-5 rounded-lg"
        >
          <p className="text-white font-bold text-center ">Uncover the Impact</p>

          <div className="text-center flex justify-center">
            <img src="/temporary_icon.svg" alt="" className="text-center" />
          </div>

          <p className="leading-6 text-white text-center">
          Discover how this dynamic ecosystem transforms societies, fuels local economies, etc
          </p>
        </div>
        <div
          id="actionable-card"
          className="actionable-card bg-[#5A23EC] p-7 grid grid-rows-[0.5fr_1.5fr_1fr] gap-y-5 rounded-lg"
        >
          <p className="text-white font-bold text-center ">Exclusive Case Studies</p>

          <div className="text-center flex justify-center">
            <img src="/temporary_icon.svg" alt="" className="text-center" />
          </div>

          <p className="leading-6 text-white text-center">
          Gain inspiration from real-world success stories
          </p>
        </div> */}
      </div>
    </div>
  );
}
