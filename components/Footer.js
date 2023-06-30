import Link from "next/link";
import React from "react";
import Logo from "/public/logo.png";
import Image from "next/image";

const sitemap = [
  {
    title: "About us",
    links: [
      {
        label: "Content",
        url: "/",
      },
      {
        label: "Content",
        url: "/",
      },
      {
        label: "Content",
        url: "/",
      },
      {
        label: "Content",
        url: "/",
      },
    ],
  },
  {
    title: "Products",
    links: [
      {
        label: "Content",
        url: "/",
      },
      {
        label: "Content",
        url: "/",
      },
      {
        label: "Content",
        url: "/",
      },
      {
        label: "Content",
        url: "/",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "Carrers",
        url: "/",
      },
      {
        label: "Blog",
        url: "/",
      },
      {
        label: "Press",
        url: "/",
      },
    ],
  },
];
export default function Footer() {
  return (
    <section className="px-5 xl:px-32 pt-10 pb-24 lg:flex  gap-16 lg:gap-32 items-start ">
      <div className="grid gap-5">
        <a href="/">
          <Image
            className="text-center"
            src={Logo}
            alt={"platformable logo"}
            width={250}
            height={70}
            unoptimized
          />
        </a>

        <span className="font-karla">
          We are committed to minimising the amount
          <br /> of data we collect about our visitors and subscribers.
          <br /> See our privacy policy for more details
          <br />
          <br />
          Proudly based in Barcelona
        </span>
      </div>

     <div className="grid grid-cols-3 mt-10 lg:mt-0 gap-16 lg:gap-24">
     {sitemap.map((section) => (
        <div className="grid gap-10 lg:pt-5">
          <span className="font-bold opacity-90">{section.title}</span>
          <div className="grid gap-2">
            {section.links.map((link) => (
              <small>
                <Link href={link.url}>{link.label}</Link>
              </small>
            ))}
          </div>
        </div>
      ))}
      
     </div>
     <div className="grid gap-10 pt-10 lg:pt-3 ">
          <p className="font-bold ">Newsletter</p>
          <div className="grid gap-2">
           <input type="text" placeholder="Email" className="lg:w-64 rounded p-4 border-blue-600 border-2 border-opacity-50"/>

          </div>
        </div>
    </section>
  );
}
