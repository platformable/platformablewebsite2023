import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "/public/logo.png";
import Image from "next/image";
import LogoWhite from "/public/logo_temp_white.png";
import style from "../src/styles/Footer.module.css";

const sitemap = [
  {
    title: "How we work",
    links: [
      {
        label: "Understand",
        url: "/understand",
      },
      {
        label: "Act",
        url: "/act",
      },
      {
        label: "Engage",
        url: "/engage",
      },
    ],
  },
  {
    title: "Products",
    links: [
      {
        label: "Datasets",
        url: "/products/datasets",
      },
      {
        label: "Data Products",
        url: "/products/data-products",
      },
      {
        label: "Data Governance",
        url: "/products/data-governance",
      },
      {
        label: "API Governance",
        url: "/products/api-governance",
      },
      {
        label: "Speaker Engagement",
        url: "/products/speaker-engagement",
      },
      {
        label: "Open Ecosystem Consultancy",
        url: "/products/open-ecosystem-consultancy",
      },
    ],
  },
  {
    title: "Platformable",
    links: [
      {
        label: "About us",
        url: "/about",
      },
      {
        label: "Contact us",
        url: "/contact-us",
      },
      {
        label: "Blog",
        url: "/blog",
      },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isResponse, setIsResponse] = useState(false);
  const [subscribers, setSubscribers] = useState([]);

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  async function handleSubmit(event) {
    try {
      let response = await fetch(`/api/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmail("");
        setIsResponse(true);
      } else {
        let errorData = await response.json();
        return errorData;
      }
    } catch (error) {
      return `Error: ${error}`;
    }
  }

  const handleError = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.length === 0) {
      setErrorMessage(`Please insert your email`);
    } else if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format");
      // } else if (subscribers.some((person) => person.email === email)) {
      //   setErrorMessage("You are already a subscriber");
      // }
    } else {
      setErrorMessage("");
    }
  };

  const handleClick = () => {
    handleError();
    handleSubmit();
  };

  // useEffect(() => {
  //   handleGet();
  // }, []);
  // async function handleGet() {
  //   try {
  //     let response = await fetch(`/api/subscribe`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${apiKey}`,
  //       },
  //     });

  //     if (response.ok) {
  //       let data = await response.json();
  //       console.log(data);
  //       setSubscribers(data);
  //     } else {
  //       console.log(`not successful to see subscribers`);
  //     }
  //   } catch (error) {
  //     return `Error: ${error}`;
  //   }
  // }
  return (
    <>
      <section
        // style={{ backgroundColor: "var(--purple-medium)" }}
        className={`${style["bg-footer"]}  mx-auto text-white pt-20 pb-24 px-4 lg:flex lg:gap-2 justify-center items-start`}
      >
        <div className="grid xl:gap-16 pt-6 lg:pt-3">
          <Link href="/">
            <Image
              className="text-center"
              src={LogoWhite}
              alt={"platformable logo"}
              width={300}
              height={70}
              unoptimized
            />
          </Link>
          <span className="font-bold pl-2">
            We are committed to minimising the
            <br />
            amount of data we collect about our
            <br /> visitors and subscribers.
            <br />
            <br /> See our
            <Link href="/privacy-policy">
              <span style={{ color: "var(--yellow)" }}> privacy policy </span>
            </Link>
            for more details
            <br />
            <br />
            <span className="flex items-center gap-2">
              Proudly{" "}
              <span>
                <img src="/proudly.png" alt="pride heart" />
              </span>{" "}
              based in Barcelona
            </span>
          </span>
        </div>

        <div className="grid grid-cols-3 mt-10 lg:mt-0 gap-4 lg:gap-10 lg:mx-auto xl:mx-16">
          {sitemap.map((section, index) => (
            <div className="grid gap-4 content-start lg:pt-5" key={index}>
              <span className="font-bold opacity-90">{section.title}</span>
              <div className="grid gap-2">
                {section.links.map((link, index) => (
                  <small key={index}>
                    <Link href={link.url}>{link.label}</Link>
                  </small>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-10 mt-14 md:flex md:flex-row md:justify-center md:gap-20 md:mt-20 lg:grid lg:gap-10 lg:mt-6 lg:w-2/12">
          <div className="flex flex-col gap-y-5 md:justify-center">
            {/* md:justify-center put the icons and text in the center vertically */}
            <div className="flex gap-x-5 justify-center">
              <Link href="mailto:mark@platformable.com">
                <img
                  src="/email white.png"
                  className="text-white"
                  alt="email"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/platformable/"
                className="text-white"
                target="_blank"
              >
                <img src="/linkedin white.png" alt="linkedin" />
              </Link>
              <Link
                href="https://tidal.com/browse/mix/0105d4b80651774ef38931747c080a"
                target="_blank"
              >
                <img
                  src="/tidal white.png"
                  className="text-white"
                  alt="tidal"
                />
              </Link>
            </div>
            <div className="text-center flex justify-center">
              <p className="font-bold text-base md:w-3/4 lg:w-full">
                Enter your email address to join our newsletter community
              </p>
              {/* <p className="font-bold text-base">
                Subscribe to stay updated and{" "}
              </p>
              <p style={{ color: "var(--yellow)" }} className="font-bold">
                Get 10% DISCOUNT
              </p> */}
            </div>
          </div>
          <div className="">
            {isResponse ? (
              <p className="text-white text-center ">
                Thank you for Subscribing!
              </p>
            ) : (
              <div
                className={`flex flex-col mx-auto w-11/12 md:w-full xl:contents`}
              >
                <small className="text-white mb-1  md:ml-1 lg:ml-0">
                  Enter your Email
                </small>
                <input
                  type="email"
                  placeholder="Email"
                  className={
                    errorMessage === ""
                      ? "relative mx-auto w-full p-4 md:p-3 md:w-full lg:p-4 rounded-md  border-none border-2 border-opacity-50 text-black "
                      : "relative mx-auto w-full p-4 md:p-3 md:w-full lg:p-4 rounded-md  border-red-600 border-2 border-opacity-50 text-black "
                  }
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errorMessage && (
                  <p className="text-base ml-1 text-red-500">{errorMessage}</p>
                )}
                {/* <img
                src="/iron_footer.svg"
                alt="Send subcription"
                className={`absolute ml-64 w-14 lg:ml-48 cursor-pointer md:block hidden`}
                onClick={handleClick}
              /> */}
                <button
                  type="button"
                  onClick={handleClick}
                  style={{
                    color: "var(--purple-medium-dark)",
                    backgroundColor: "var(--yellow)",
                    boxShadow: "0px 5px 9px #00000040",
                  }}
                  className=" mt-8 font-bold w-full mx-auto p-4 rounded-xl md:mx-auto md:p-3 md:w-full "
                >
                  Subscribe
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <div
        // style={{ backgroundColor: "var(--purple-medium)" }}
        className={` ${style["bg-footer"]} text-white  flex flex-col gap-4 justify-center items-center  py-5 border-t border-white border-solid`}
      >
        <Link href="#header">
          <img
            src="/arrow_collapse_top.svg"
            alt="arrow icon"
            className="cursor-pointer"
          />
        </Link>
        GO ON TOP
      </div>
    </>
  );
}
