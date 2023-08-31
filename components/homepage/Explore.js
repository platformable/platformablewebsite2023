import React from "react";
import styles from "@/styles/Homepage.module.css";
import VerticalDescriptionCard from "../VerticalDescriptionCard";
const sectorsList = [
  {
    vertical_description_card_title: "Open Ecosystem",
    vertical_description_card_text: [
      "Interopearbility",
      "Transparency",
      "Collaboration",
      "Flexibility",
      "Innovation",
      "Community",
    ],
    vertical_description_card_button_text: "Platformable solutions",
  },
  {
    vertical_description_card_title: "Open Banking & Open Finance",
    vertical_description_card_text: [
      "Interopearbility",
      "Transparency",
      "Collaboration",
      "Flexibility",
      "Innovation",
      "Community",
    ],
    vertical_description_card_button_text: "Platformable solutions",
  },
  {
    vertical_description_card_title: "Open Health",
    vertical_description_card_text: [
      "Interopearbility",
      "Transparency",
      "Collaboration",
      "Flexibility",
      "Innovation",
      "Community",
    ],
    vertical_description_card_button_text: "Platformable solutions",
  },
];
export default function Explore({ vertical_description_card, title }) {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="flex gap-x-5 items-center md:mb-10 mb-10">
          <img
            src="/logo_icon_blue.svg"
            alt="platformable logo"
            className="md:flex hidden"
          />
          <h2
            className={`font-bold  md:leading-10 leading-10`}
            style={{ color: "var(--blue-deep)" }}
          >
            {title}
          </h2>
        </div>
        <div
          id={styles.cards_group}
          className=" grid  md:grid-cols-2 lg:grid-cols-3 gap-y-20 md:gap-x-10 "
        >
          {vertical_description_card?.map((card, i) => (
            <VerticalDescriptionCard card={card} key={i} position={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
