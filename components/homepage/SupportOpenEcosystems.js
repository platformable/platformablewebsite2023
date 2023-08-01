import { useState, useEffect } from "react";
import ListItemCard from "../ListItemCard";

export default function SupportOpenEcosystems({ list_items_cards, title }) {
  const [supportCards, setSupportCards] = useState(list_items_cards);
  // const [newCards, setNewCards] = useState([]);

  // useEffect(() => {
  //   sortCards();
  // }, []);
  // const sortCards = () => {
  //   let cardsCopy = [...supportCards];

  //   let evenCards = cardsCopy.filter(
  //     (card) => cardsCopy.indexOf(card) % 2 === 0
  //   );
  //   let oddCards = cardsCopy.filter(
  //     (card) => cardsCopy.indexOf(card) % 2 === 1
  //   );
  //   let finalArray = [...evenCards, ...oddCards];
  //   setNewCards(finalArray);
  // };

  // const allCardForLargeScreen =
  //   supportCards &&
  //   supportCards.map((card, i) => (
  //     <ListItemCard item_description={card} key={i} />
  //   ));

  // const evenCards =
  //   supportCards &&
  //   supportCards
  //     .filter((card, i) => i % 2 === 0)
  //     .map((card, i) => <ListItemCard item_description={card} key={i} />);

  // const oddCards =
  //   supportCards &&
  //   supportCards
  //     .filter((card, i) => i % 2 === 1)
  //     .map((card, i) => <ListItemCard item_description={card} key={i} />);

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
        <div className="hidden  md:grid-cols-2 lg:grid-cols-2 gap-4 lg:grid  lg:grid-rows-4 lg:grid-cols-2 lg:gap-10 lg:gap-10 lg:gap-y-8">
          {list_items_cards &&
            list_items_cards?.map((item, i) => (
              <ListItemCard item_description={item} key={i} />
            ))}
          {/* {allCardForLargeScreen} */}
        </div>
        <div className="grid grid-cols-1 grid-rows-8  gap-10  lg:hidden">
          {list_items_cards &&
            list_items_cards
              .filter((item, i) => i % 2 === 0)
              .map((item, i) => (
                <ListItemCard item_description={item} key={i} />
              ))}
          {/* {evenCards} */}
        </div>
        <div className=" mt-10 grid grid-cols-1 grid-rows-8 gap-10  lg:hidden ">
          {list_items_cards &&
            list_items_cards
              .filter((item, i) => i % 2 === 1)
              .map((item, i) => (
                <ListItemCard item_description={item} key={i} />
              ))}
          {/* {oddCards} */}
        </div>
      </div>
    </section>
  );
}

//his code
{
  /* <div className="grid grid-cols lg:grid-rows-4 lg:grid-cols-2 gap-10 lg:gap-10  lg:gap-y-8">
          {list_items_cards &&
            list_items_cards?.map((item, i) => (
              <ListItemCard item_description={item} key={i} />
            ))}
        </div> */
}

//my code

//  <div className="sm:hidden md:hidden lg:grid lg:grid-cols lg:grid-rows-4 lg:grid-cols-2 gap-10 lg:gap-10 lg:gap-y-8">
//         {list_items_cards &&
//           list_items_cards?.map((item, i) => (
//             <ListItemCard item_description={item} key={i} />
//           ))}
//       </div>
//       <div className="grid grid-cols-1 grid-rows-8  gap-10 lg:hidden lg:hidden">
//         {list_items_cards &&
//           list_items_cards
//             .filter((item, i) => i % 2 === 0)
//             .map((item, i) => (
//               <ListItemCard item_description={item} key={i} />
//             ))}
//       </div>
//       <div className=" mt-10 grid grid-cols-1 grid-rows-8 gap-10 lg:hidden lg:hidden ">
//         {list_items_cards &&
//           list_items_cards
//             .filter((item, i) => i % 2 === 1)
//             .map((item, i) => (
//               <ListItemCard item_description={item} key={i} />
//             ))}
//       </div>
