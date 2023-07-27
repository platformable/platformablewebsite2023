// import React from 'react'
import { useState, useEffect } from "react";
import ListItemCard from "../ListItemCard";

export default function SupportOpenEcosystems({ list_items_cards, title }) {
  const [supportCards, setSupportCards] = useState(list_items_cards);
  const [supportCardsEven, setSupportCardsEven] = useState([]);
  const [supportCardsOdd, setSupportCardsOdd] = useState([]);

  //take the array and slice
  //take the array and sort
  useEffect(() => {
    cardIndexEven();
    cardIndexOdd();
  }, []);

  function cardIndexEven() {
    let supportCardsCopy = [...supportCards];

    let evenCardsArray = supportCardsCopy.filter(
      (card) => supportCardsCopy.indexOf(card) % 2 === 0
    );
    setSupportCardsEven(evenCardsArray);
  }

  function cardIndexOdd() {
    let supportCardsCopy = [...supportCards];
    let oddCardsArray = supportCardsCopy.filter(
      (card) => supportCardsCopy.indexOf(card) % 2 === 1
    );
    setSupportCardsOdd(oddCardsArray);
  }

  return (
    <section className=" bg-green-medium py-10 text-[#2A2FC1]">
      <div className="flex gap-x-5 items-center container mx-auto  mb-10">
        <img
          src="/icon_section01.svg"
          alt="platformable logo"
          className="md:flex hidden"
        />
        <h2 className="font-bold leading-8 md:leading-10 lg:leading-tight">
          {title}
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-rows-8 lg:grid-rows-4 lg:grid-cols-2 gap-10 lg:gap-10 lg:gap-y-8">
          {list_items_cards &&
            list_items_cards?.map((item, i) => (
              <ListItemCard item_description={item} key={i} />
            ))}
        </div>
      </div>
    </section>
  );
}
