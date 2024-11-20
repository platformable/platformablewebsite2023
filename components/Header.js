import Image from "next/image";
import { useState,useEffect } from "react";
import Logo from "/public/Platformable-logo.png";
import Link from "next/link";
import headerStyles from "../src/styles/Header.module.css";
import NavigationOptions from "./NavigationOptions";
import MegaMenu from "./MegaMenu/MegaMenu";

export default function Header() {

const [navigation,setNavigation]=useState([])


useEffect( ()=>{

  const getData = fetch(`https://platformable-webserverpro-2023-lllix.ondigitalocean.app/api/navigations`)
  .then(response=>response.json())
  .then(response=>setNavigation(response.data))
  .catch(e=>console.log(e))





},[])


console.log("navigtion", navigation)


  let info = [{
title:'Test',
href:'/test'
  },
    {
      title: "Engage",
      href: "/engage",
      titleB: "About",
      titleC: "Partners",
      titleD: "Services",
      titleE: "Products",
      descriptionB:
        "Real-Time usage alerts and anomaly detection on multiple channels",
      descriptionC:
        "Accelerate your API services throug out partners and services",
      descriptionD: "Read about our customer stories",
      descriptionE: "Join a team of international players",
      // linkB: "https://www.gravitee.io/",
      // linkC: "https://www.fdmgroup.com/",
      // linkD: "https://www.gravitee.io/",
      // linkE: "https://www.fdmgroup.com/",
      list: ["cava", "beer", "lemonade"],
    },

    {
      title: "Act",
      href: "/act",
      titleB: "About",
      titleC: "Our Partners",
      titleD: "Our Processes",
      titleE: "Our Donations",
      descriptionB:
        "Real-Time usage alerts and anomaly detection on multiple channels",
      descriptionC:
        "Accelerate your API services throug out partners and services",
      descriptionD: "Read about our customer stories",
      descriptionE: "Join a team of international players",
      // linkB: "https://www.gravitee.io/",
      // linkC: "https://www.fdmgroup.com/",
      // linkD: "https://www.gravitee.io/",
      // linkE: "https://www.fdmgroup.com/",
      list: ["shrimp", "olives", "meat"],
    },
    {
      title: "Understand",
      href: "/understand",
      titleB: "About",
      titleC: "How we work",
      titleD: "Our Success Stories",
      titleE: "Our Mind",
      descriptionB:
        "Real-Time usage alerts and anomaly detection on multiple channels",
      descriptionC:
        "Accelerate your API services throug out partners and services",
      descriptionD: "Read about our customer stories",
      descriptionE: "Join a team of international players",
      // linkB: "https://www.gravitee.io/",
      // linkC: "https://www.fdmgroup.com/",
      // linkD: "https://www.gravitee.io/",
      // linkE: "https://www.fdmgroup.com/",
      list: ["apples", "oranges", "pairs"],
    },
  ];

  const [visit, setVisit] = useState("");

  const [burgerClick, setBurgerClick] = useState(false);
  const [responsiveListOne, setResponsiveListOne] = useState(false);
  const [responsiveListTwo, setResponsiveListTwo] = useState(false);
  const [responsiveListThree, setResponsiveListThree] = useState(false);
  const [responsiveListFour, setResponsiveListFour] = useState(false);

  const [plusClickOne, setPlusClickOne] = useState(false);
  const [plusClickTwo, setPlusClickTwo] = useState(false);
  const [plusClickThree, setPlusClickThree] = useState(false);
  const [plusClickFour, setPlusClickFour] = useState(false);

  //this function is for when i leave the block
  const handleMouseLeave = () => {
    setVisit("");
  };



  return (
    <div className="container mx-auto" id="header">
     <MegaMenu />
    </div>
  );
}
