import Image from "next/image";
import { useState,useEffect } from "react";
import Logo from "/public/Platformable-logo.png";
import Link from "next/link";
import headerStyles from "../src/styles/Header.module.css";
import NavigationOptions from "./NavigationOptions";
import MegaMenu from "./MegaMenu/MegaMenu";

export default function Header() {


  return (
    <div className="container mx-auto" id="header">
     <MegaMenu />
    </div>
  );
}
