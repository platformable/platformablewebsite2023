import Image from "next/image";
import { useState } from "react";
import Logo from "/public/logo.png";
import Link from "next/link";
import headerStyles from "../src/styles/Header.module.css";

export default function Header() {
  let info = [
    
    
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
    <div className="container mx-auto">
      <nav
        className={`${headerStyles["nav-one"]} py-5  flex items-center justify-between border-gray-200`}
        onMouseLeave={handleMouseLeave}
      >
        <Link href="/">
          <Image
            src={Logo}
            className=""
            alt="Platformable"
            width={250}
            height={70}
            unoptimized
          />
        </Link>
        <div
          id="mega-menu"
          className={`${headerStyles["nav-one-ul-container"]}  items-center flex hidden  md:flex md:w-auto md:order-1`}
        >
          <ul //Use flex row reverse to avoid white space at right padding of screen
            className={`${headerStyles["nav-ul"]} flex  font-medium md:flex-row-reverse md:gap-x-8 `}
          >
            {info?.map((item, index) => (
              <li
                onMouseEnter={() => {
                  setVisit(item.title);
                }}
                key={index}
              >
                <Link
                  href={item.href}
                  data-dropdown-toggle="mega-menu-dropdown"
                  className={`${headerStyles["nav-one-links"]} block py-2 pl-3 pr-4 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`}
                  aria-current="page"
                >
                  {item.title}
                </Link>
              </li>
            ))}

            <div
              // id="mega-menu-dropdown"
              // onMouseEnter={() => setVisit()}
              onMouseLeave={handleMouseLeave}
            >
              {info
                ?.filter((e) => e.title === visit)
                .map((item, index) => (
                  <div
                    className={headerStyles["drop-down-container"]}
                    key={index}
                  >
                    <h2
                      className={`${headerStyles["drop-down-top-title"]} font-bold pl-5`}
                    >
                      {item.title}
                    </h2>
                    <div className={headerStyles["drop-down-first-row-info"]}>
                      <div className={headerStyles["drop-down-info-hovered"]}>
                        <a href={item.linkB} target="_blank">
                          <h3 className={headerStyles["drop-down-info-title"]}>
                            {item.titleB}
                          </h3>
                          <p className={headerStyles["drop-down-descriptions"]}>
                            {item.descriptionB}
                          </p>
                        </a>
                      </div>
                      <div className={headerStyles["drop-down-info-hovered"]}>
                        <a href={item.linkC} target="_blank">
                          <h3 className={headerStyles["drop-down-info-title"]}>
                            {item.titleC}
                          </h3>
                          <p className={headerStyles["drop-down-descriptions"]}>
                            {item.descriptionC}
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className={headerStyles["drop-down-second-row-info"]}>
                      <div className={headerStyles["drop-down-info-hovered"]}>
                        <a href={item.linkD} target="_blank">
                          <h3 className={headerStyles["drop-down-info-title"]}>
                            {item.titleD}
                          </h3>
                          <p className={headerStyles["drop-down-descriptions"]}>
                            {item.descriptionD}
                          </p>
                        </a>
                      </div>
                      <div className={headerStyles["drop-down-info-hovered"]}>
                        <a href={item.linkE} target="_blank">
                          <h3 className={headerStyles["drop-down-info-title"]}>
                            {item.titleE}
                          </h3>
                          <p className={headerStyles["drop-down-descriptions"]}>
                            {item.descriptionE}
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </ul>
        </div>
      </nav>

      {/* <Layout /> */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////// */}

      <nav className={headerStyles["nav-two"]}>
        <div className={headerStyles["nav-bar-two"]}>
          <div className={headerStyles["logo-two-container"]}>
            <Link href="#" className="flex items-center">
              <Image
                src={Logo}
                className=""
                alt="Platformable Logo"
                id={headerStyles["responsive-logo-two"]}
              />
            </Link>
          </div>
          <button
            className={headerStyles["responsive-burger-icon"]}
            type="button"
            onClick={() => setBurgerClick((burgerClick) => !burgerClick)}
          >
            {burgerClick ? (
              <div
                id={headerStyles["responsive-close-button"]}
                onClick={() => {
                  setPlusClickOne(false);
                  setPlusClickTwo(false);
                  setPlusClickThree(false);
                  setPlusClickFour(false);
                  setResponsiveListOne(false);
                  setResponsiveListTwo(false);
                  setResponsiveListThree(false);
                  setResponsiveListFour(false);
                }}
              >
                X
              </div>
            ) : (
              <svg
                className={`w-5 h-5 ${headerStyles["responsive- burger-icon"]}`}
                // id="burger-icon"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`${
            burgerClick ? "block" : "hidden"
          } res-unordered-list-tag`}
        >
          <li>
            <div
              className={
                responsiveListOne
                  ? headerStyles["title-plus-container-responsive"]
                  : headerStyles["title-plus-container"]
              }
            >
              <span className={headerStyles["list-title-res"]}>Understand</span>
              <button
                type="button"
                className={headerStyles["responsive-plus-button"]}
                onClick={() => {
                  setPlusClickOne((plusClickOne) => !plusClickOne);
                  setResponsiveListOne(
                    (responsiveListOne) => !responsiveListOne
                  );
                }}
              >
                {plusClickOne ? (
                  <div className={headerStyles["responsive-minus-button"]}>
                    -
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      setPlusClickTwo(false);
                      setPlusClickThree(false);
                      setPlusClickFour(false);
                      setResponsiveListTwo(false);
                      setResponsiveListThree(false);
                      setResponsiveListFour(false);
                    }}
                  >
                    +
                  </div>
                )}
              </button>
            </div>

            <ul
              className={`${headerStyles["embed-ul"]} ${
                plusClickOne ? "block" : "hidden"
              }  `}
            >
              {/* <li className={headerStyles["embed-list-item"]}>
                <a href={infoOne[0].linkB}>{infoOne[0].titleB}</a>
              </li>
              <li className={headerStyles["embed-list-item"]}>
                <a href={infoOne[0].linkC}>{infoOne[0].titleC}</a>
              </li>
              <li className={headerStyles["embed-list-item"]}>
                <a href={infoOne[0].linkD}>{infoOne[0].titleD}</a>
              </li>
              <li className={headerStyles["embed-list-item"]}>
                <a href={infoOne[0].linkE}>{infoOne[0].titleE}</a>
              </li> */}
            </ul>
          </li>
          <li>
            <div
              className={
                responsiveListTwo
                  ? headerStyles["title-plus-container-responsive"]
                  : headerStyles["title-plus-container"]
              }
            >
              <span className={headerStyles["list-title-res"]}>Act</span>
              <button
                type="button"
                className={headerStyles["responsive-plus-button"]}
                onClick={() => {
                  setPlusClickTwo((plusClickTwo) => !plusClickTwo);
                  setResponsiveListTwo(
                    (responsiveListTwo) => !responsiveListTwo
                  );
                }}
              >
                {plusClickTwo ? (
                  <div className={headerStyles["responsive-minus-button"]}>
                    -
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      setPlusClickOne(false);
                      setPlusClickThree(false);
                      setPlusClickFour(false);
                      setResponsiveListOne(false);
                      setResponsiveListThree(false);
                      setResponsiveListFour(false);
                    }}
                  >
                    +
                  </div>
                )}
              </button>
            </div>
            {/* <ul
              className={`${headerStyles["embed-ul"]} ${
                plusClickTwo ? "block" : "hidden"
              }`}
            >
              <li className={headerStyles["embed-list-item"]}>
                <a href={infoTwo[0].linkB}>{infoTwo[0].titleB}</a>
              </li>
              <li className={headerStyles["embed-list-item"]}>
                <a href={infoTwo[0].linkC}>{infoTwo[0].titleC}</a>
              </li>
              <li className={headerStyles["embed-list-item"]}>
                <a href={infoTwo[0].linkD}>{infoTwo[0].titleD}</a>
              </li>
              <li className={headerStyles["embed-list-item"]}>
                <a href={infoTwo[0].linkE}>{infoTwo[0].titleE}</a>
              </li>
            </ul> */}
          </li>
          <li>
            <div
              className={
                responsiveListThree
                  ? headerStyles["title-plus-container-responsive"]
                  : headerStyles["title-plus-container"]
              }
            >
              <span className={headerStyles["list-title-res"]}>Engage</span>
              <button
                type="button"
                className={headerStyles["responsive-plus-button"]}
                onClick={() => {
                  setPlusClickThree((plusClickThree) => !plusClickThree);
                  setResponsiveListThree(
                    (responsiveListThree) => !responsiveListThree
                  );
                }}
              >
                {plusClickThree ? (
                  <div className={headerStyles["responsive-minus-button"]}>
                    -
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      setPlusClickOne(false);
                      setPlusClickTwo(false);
                      setPlusClickFour(false);
                      setResponsiveListOne(false);
                      setResponsiveListTwo(false);
                      setResponsiveListFour(false);
                    }}
                  >
                    +
                  </div>
                )}
              </button>
            </div>
            {/* <ul
              className={`${headerStyles["embed-ul"]} ${
                plusClickThree ? "block" : "hidden"
              }`}
            >
              <li className={headerStyles["embed-list-item"]}>
                <a href={infoThree[0].linkB}>{infoThree[0].titleB}</a>
              </li>
              <li className={headerStyles["embed-list-item"]}>
                <a href={infoThree[0].linkC}>{infoThree[0].titleC}</a>
              </li>
              <li className={headerStyles["embed-list-item"]}>
                <a href={infoThree[0].linkD}>{infoThree[0].titleD}</a>
              </li>
              <li className={headerStyles["embed-list-item"]}>
                <a href={infoThree[0].linkE}>{infoThree[0].titleE}</a>
              </li>
            </ul> */}
          </li>
          <li>
            <div
              className={
                responsiveListFour
                  ? headerStyles["title-plus-container-responsive"]
                  : headerStyles["title-plus-container"]
              }
            >
              <span className={headerStyles["list-title-res"]}>Contact</span>
              <button
                type="button"
                className={headerStyles["responsive-plus-button"]}
                onClick={() => {
                  setPlusClickFour((plusClickFour) => !plusClickFour);
                  setResponsiveListFour(
                    (responsiveListFour) => !responsiveListFour
                  );
                }}
              >
                {plusClickFour ? (
                  <div className={headerStyles["responsive-minus-button"]}>
                    -
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      setPlusClickOne(false);
                      setPlusClickTwo(false);
                      setPlusClickThree(false);
                      setResponsiveListOne(false);
                      setResponsiveListTwo(false);
                      setResponsiveListThree(false);
                    }}
                  >
                    +
                  </div>
                )}
              </button>
            </div>

            <ul
              className={`${headerStyles["embed-ul"]} ${
                plusClickFour ? "block" : "hidden"
              }  `}
            >
              {/* <li className={headerStyles["embed-list-item"]}>
                <a href={infoFour[0].linkB}>{infoFour[0].titleB}</a>
              </li>
              <li className={headerStyles["embed-list-item"]}>
                <a href={infoFour[0].linkC}>{infoFour[0].titleC}</a>
              </li>
              <li className={headerStyles["embed-list-item"]}>
                <a href={infoFour[0].linkD}>{infoFour[0].titleD}</a>
              </li>
              <li className={headerStyles["embed-list-item"]}>
                <a href={infoFour[0].linkE}>{infoFour[0].titleE}</a>
              </li> */}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
