import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "/public/logo.png";
import Image from "next/image";

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
        url: "/",
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
    title: "Company",
    links: [
      {
        label: "About us",
        url: "/about",
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

          <span className="font-bold">
            We are committed to minimising the amount
            <br /> of data we collect about our visitors and subscribers.
            <br /> See our privacy policy for more details
            <br />
            <br />
            <span className="flex items-center gap-2">
              Proudly{" "}
              <span>
                <img src="/pride_heart.png" alt="pride heart" />
              </span>{" "}
              based in Barcelona
            </span>
          </span>
        </div>

        <div className="grid grid-cols-3 mt-10 lg:mt-0 gap-16 lg:gap-20">
          {sitemap.map((section, index) => (
            <div className="grid gap-10 content-start lg:pt-5" key={index}>
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
        <div className="grid gap-10  pt-10 lg:pt-3 ">
          <p className="font-bold ">Newsletter</p>

          {isResponse ? (
            <p className="text-customPurple">Thank you for Subscribing!</p>
          ) : (
            <div className={`flex gap-3 items-center `}>
              <input
                type="email"
                placeholder="Email"
                className={
                  errorMessage === ""
                    ? "relative w-80 lg:w-64 rounded p-4 border-blue-600 border-2 border-opacity-50"
                    : "relative w-80 lg:w-64 rounded p-4 border-red-600 border-2 border-opacity-50"
                }
                x
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <img
                src="/iron_footer.svg"
                alt="Send subcription"
                className={`absolute  ml-64 w-14 lg:ml-48 cursor-pointer`}
                onClick={handleClick}
              />
            </div>
          )}
          {errorMessage && (
            <p className="mt-[-38px] text-base ml-1 text-red-500">
              {errorMessage}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
