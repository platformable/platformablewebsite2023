import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import LogoWhite from "/public/Platformable-logo-white.png";
import style from "../src/styles/Footer.module.css";

const sitemap = [
  /*  {
    title: "Open Ecosystem Products",
    links: [
      {
        label: "API Industry Trends Report",
        url: "/contact-us",
      },
      {
        label: "Consultancy and Speaker Engagement",
        url: "/contact-us",
      },
    ],
  },
  {
    title: "Open Banking Products",
    links: [
      {
        label: "OBOF Trends Report",
        url: "/products/open-banking",
      },
      {
        label: "Open Banking Accelerator",
        url: "/contact-us",
      },
      {
        label: "Consultancy and Speaker Engagement",
        url: "/contact-us",
      },
    ],
  },
  {
    title: "Open Health Products",
    links: [
      {
        label: "Health Data Governance Mentoring and Support",
        url: "/contact-us",
      },
      {
        label: "Open Health Accelerator",
        url: "/contact-us",
      },
      {
        label: "Consultancy and Speaker Engagement",
        url: "/contact-us",
      },
    ],
  },
  {
    title: "Traceability Products",
    links: [
      {
        label: "Data Governance",
        url: "/contact-us",
      },
      {
        label: "Traceability Ecosystem Mapping",
        url: "/contact-us",
      },
      {
        label: "Consultancy and Speaker Engagement",
        url: "/contact-us",
      },
    ],
  }, */
  {
    title: "Resources",
    links: [
      {
        label: "Blog",
        url: "/blog",
      },
  
      {
        label: "Linkedin",
        url: "https://www.linkedin.com/company/platformable",
      },
      {
        label: "Youtube",
        url: "https://www.youtube.com/@platformable",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About us",
        url: "/about",
      },
      {
        label: "Meet an expert",
        url: "/meet-an-expert",
      },
      {
        label: "Become a partner",
        url: "/become-partner",
      },
      {
        label: "Contact us",
        url: "/contact-us",
      },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isResponse, setIsResponse] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  async function handleSubmit() {
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

  async function verifyUserSubscription() {
    // console.log("verify subscription")
    try {
      let response = await fetch(`/api/verifysubscription`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 404) {
        handleSubmit();
      }
      if (response.status === 200) {
        setErrorMessage("You are already registered");
      }
    } catch (error) {
      return `Error: ${error}`;
    }
  }
  const handleError = async () => {
    setErrorMessage("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.length === 0) {
      // console.log("pasa insert email")
      setErrorMessage(`Please insert your email`);
    } else if (!emailRegex.test(email)) {
      // console.log("pasa invalid")

      setErrorMessage("Invalid email format");

      // } else if (subscribers.some((person) => person.email === email)) {
      //   setErrorMessage("You are already a subscriber");
      // }
    } else {
      // console.log("verify ", errorMessage)
      verifyUserSubscription();
    }
  };

  
  return (
    <section className={`${style["bg-footer"]} `}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 py-10 gap-x-7 justify-between ">
          <div
            id="footer-logo"
            className="grid gap-y-5 xl:gap-0 pt-6 md:pt-0"
          >
            <Link href="/">
              <Image
                className=""
                src={LogoWhite}
                alt={"platformable logo"}
                width={257}
                height={55}
                unoptimized
                loading="lazy"
              />
            </Link>

            <div
              id="company-description"
              className={` text-white  pb-10   font-bold pl-3`}
            >
          We are committed to minimising the amount of data we collect about our
          visitors and subscribers. See our
          <Link href="/privacy-policy">
            <span style={{ color: "var(--yellow)" }}> privacy policy </span>
          </Link>
          for more details
          <br />
          Proudly{" "}
          <Image
            src="/heart-fixed-icon.png"
            alt="pride heart"
            width={66}
            height={56}
            loading="lazy"
            className="inline"
          />{" "}
          based in Barcelona
      </div>
          </div>
          <div
            id="sitemap-links"
            className="grid grid-cols-2 md:grid-cols-2  mt-4  gap-y-7  text-white justify-between  "
          >
            {sitemap.map((section, index) => (
              <div className="grid gap-4 content-start px-3" key={index}>
                <span className="font-bold opacity-90">{section.title}</span>
                <div className="grid gap-5 pt-5">
                  {section.links.map((link, index) => (
                    <small key={index}>
                      <Link target="_blank" href={link.url}>
                        {link.label}
                      </Link>
                    </small>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
          id="subscription-form"
          className=" grid gap-4 mt-14 md:mt-0 md:flex md:flex-col  md:gap-4 lg:grid lg:gap-2 "
        >
          <div className="flex flex-col justify-center gap-y-2">
            {/* md:justify-center put the icons and text in the center vertically */}
            <div className="flex gap-x-2 justify-center h-[55px] items-center">
              <Link href="mailto:mark@platformable.com">
                <img
                  src="/email.svg"
                  className="text-white"
                  alt="email"
                  width={55}
                  height={55}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/platformable/"
                className="text-white"
                target="_blank"
              >
                <img
                  src="/Linkedin.svg"
                  alt="linkedin"
                  width={55}
                  height={55}
                />
              </Link>
              <Link
                href="https://www.youtube.com/@platformable"
                target="_blank"
              >
                <img
                  src="/youtube_footer.svg"
                  className="text-white"
                  alt="youtube"
                  width={55}
                  height={55}
                />
              </Link>
              <Link
                href="https://tidal.com/browse/mix/0105d4b80651774ef38931747c080a"
                target="_blank"
              >
                <img
                  src="/tidal_footer.svg"
                  className="text-white"
                  alt="tidal"
                  width={55}
                  height={55}
                />
              </Link>
            </div>
            <div className=" my-3 md:mt-2 lg:mt-3">
              <div className="text-center">
                <p className="font-bold text-base text-white">
                  Join our newsletter community
                </p>
              </div>
            </div>
          </div>
          <div className="">
            {isResponse ? (
              <p className="text-white text-center ">
                Thank you for Subscribing!
              </p>
            ) : (
              <div className={`flex flex-col`}>
                <label
                  htmlFor="email"
                  className="text-white mb-1  md:ml-1 lg:ml-0 text-[12px]"
                >
                  Enter your email
                </label>

                <input
                  id="email"
                  type="email"
                  className={
                    errorMessage === ""
                      ? "relative mx-auto w-full p-4 md:p-3 md:w-full lg:p-4 rounded-md  border-none border-2 border-opacity-50 text-black "
                      : "relative mx-auto w-full p-4 md:p-3 md:w-full lg:p-4 rounded-md  border-red-600 border-2 border-opacity-50 text-black "
                  }
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errorMessage && (
                  <p className="text-base ml-1 text-red-500 text-center">{errorMessage}</p>
                )}
                {/* <img
                src="/iron_footer.svg"
                alt="Send subcription"
                className={`absolute ml-64 w-14 lg:ml-48 cursor-pointer md:block hidden`}
                onClick={handleClick}
              /> */}
                <button
                  type="button"
                  onClick={handleError}
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
        </div> {/* end grid cols 4 */}
      </div>
    
   


  
      <div
        // style={{ backgroundColor: "var(--purple-medium)" }}
        className={` ${style["bg-footer"]} text-white  flex flex-col justify-center items-center  pt-5 pb-8 border-t border-white/40 border-solid`}
      >
        <Link href="#header">
          <div className="flex flex-col items-center gap-2">
            <img
              src="/arrow_collapse_top.svg"
              alt="arrow icon"
              className="cursor-pointer"
            />
            GO TO TOP
          </div>
        </Link>
      </div>
    </section>
  );
}
