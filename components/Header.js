import Image from "next/image";
import { useState,useEffect } from "react";
import Logo from "/public/Platformable-logo.png";
import Link from "next/link";
import headerStyles from "../src/styles/Header.module.css";
import NavigationOptions from "./NavigationOptions";
import MegaMenu from "./MegaMenu/MegaMenu";

export default function Header() {

// const [navigation,setNavigation]=useState([])


// useEffect( ()=>{

//   const getData = fetch(`https://platformable-webserverpro-2023-lllix.ondigitalocean.app/api/navigations`)
//   .then(response=>response.json())
//   .then(response=>setNavigation(response.data))
//   .catch(e=>console.log(e))
// },[])


// console.log("navigtion", navigation)




  return (
    <div className="container mx-auto" id="header">
     <MegaMenu />
    </div>
  );
}
