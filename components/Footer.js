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
    <section className="container mx-auto pt-20 pb-24 lg:flex  gap-16 lg:gap-32 items-start ">
      <div className="grid gap-5">
        <Link href="/">
          <Image
            className="text-center"
            src={Logo}
            alt={"platformable logo"}
            width={250}
            height={70}
            unoptimized
          />
        </Link>

        <span className="font-karla font-bold">
          We are committed to minimising the amount
          <br /> of data we collect about our visitors and subscribers.
          <br /> See our privacy policy for more details
          <br />
          <br />
          <span className="flex items-center gap-2">
            Proudly <span><img src="/pride_heart.png" alt="pride heart"/></span> based in Barcelona
            </span>
        </span>
      </div>

     <div className="grid grid-cols-3 mt-10 lg:mt-0 gap-16 lg:gap-24">
     {sitemap.map((section,index) => (
        <div className="grid gap-10 content-start lg:pt-5" key={index}>
          <span className="font-bold opacity-90">{section.title}</span>
          <div className="grid gap-2">
            {section.links.map((link,index) => (
              <small key={index}>
                <Link href={link.url}>{link.label}</Link>
              </small>
            ))}
          </div>
        </div>
      ))}
      
     </div>
     <div className="grid gap-10  pt-10 lg:pt-3 ">
          <p className="font-bold ">Newsletter</p>
          <div className="flex gap-3 items-center">
           <input type="text" placeholder="Email" className="lg:w-64 rounded p-4 border-blue-600 border-2 border-opacity-50"/>
           <img src="/iron_footer.svg" alt="Send subcription"/>
          </div>
        </div>
    </section>
  );
}
