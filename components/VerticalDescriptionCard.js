import React from "react";
import styles from "@/styles/Homepage.module.css";
export default function VerticalDescriptionCard({ card, position }) {
  const {
    vertical_description_card_title,
    sector_values,
    vertical_description_card_button_text,
  } = card;

  const gradientClasses = [
    "gradient-card-1",
    "gradient-card-2",
    "gradient-card-3",
  ];

  const cardUrl = [
    { iconUrl: "/home-Open-Ecosystems-icon.svg",alt:"Open-Ecosystems-icon" },
    { iconUrl: "/home-open-banking-icon.svg",alt:'open-banking-icon' },
    { iconUrl: "/open_health_white.svg",alt:'open_health_icon' },
  ];

  return (
    <div
      className={`rounded-2xl  shadow-md px-5 pt-5 grid md:grid-rows-[1.5fr_3.3fr] gap-5 ${
        styles[gradientClasses[position - 1]]
      }`}
    >
      <div className="flex justify-start items-center mb-7 gap-x-2">
        <img src={cardUrl[position - 1].iconUrl} alt={cardUrl[position - 1].alt}/>
        <h6 className="font-bold text-white">
          {vertical_description_card_title}
        </h6>
      </div>
      <ul id="sectors_value_list" className={`${styles.sectors_value_list}`}>
        {sector_values?.map((item, i) => (
          <p id="sectors-value" key={i} className="text-white mb-3.5">
            {item.sector_value_text}
          </p>
        ))}
      </ul>
      {/* <button
        data-card-number={position}
        className="text-white font-medium flex justify-around items-center gap-3 rounded-md px-4 py-2"
      >
        <div>
          <p>
            {vertical_description_card_button_text.split(" ")[0]}{" "}
            {vertical_description_card_button_text.split(" ")[1]}
          </p>
        </div>
        <img src="/icon_arrow_sec_02.svg" alt="go to solutions arros icon" />
      </button> */}
    </div>
  );
}
