import Image from "next/image";
import { useState } from "react";
import Logo from "/public/logo.png";
import Link from "next/link";
import headerStyles from "../src/styles/Header.module.css";

export default function Header() {
  // const [navbar, setNavbar] = useState(false);

  let infoOne = [
    {
      title: "Understand",
      titleB: "About",
      titleC: "Partners",
      titleD: "Customer Success Stories",
      titleE: "Diversity and Inclusion",
      descriptionB:
        "Real-Time usage alerts and anomaly detection on multiple channels",
      descriptionC:
        "Accelerate your API services throug out partners and services",
      descriptionD: "Read about our customer stories",
      descriptionE: "Join a team of international players",
      linkB: "https://www.gravitee.io/",
      linkC: "https://www.fdmgroup.com/",
      linkD: "https://www.gravitee.io/",
      linkE: "https://www.fdmgroup.com/",
      list: ["apples", "oranges", "pairs"],
    },
  ];
  let infoTwo = [
    {
      title: "Act",
      titleB: "About",
      titleC: "Partners",
      titleD: "Customer Success Stories",
      titleE: "Diversity and Inclusion",
      descriptionB:
        "Real-Time usage alerts and anomaly detection on multiple channels",
      descriptionC:
        "Accelerate your API services throug out partners and services",
      descriptionD: "Read about our customer stories",
      descriptionE: "Join a team of international players",
      linkB: "https://www.gravitee.io/",
      linkC: "https://www.fdmgroup.com/",
      linkD: "https://www.gravitee.io/",
      linkE: "https://www.fdmgroup.com/",
      list: ["shrimp", "olives", "meat"],
    },
  ];
  let infoThree = [
    {
      title: "Engage",
      titleB: "About",
      titleC: "Partners",
      titleD: "Customer Success Stories",
      titleE: "Diversity and Inclusion",
      descriptionB:
        "Real-Time usage alerts and anomaly detection on multiple channels",
      descriptionC:
        "Accelerate your API services throug out partners and services",
      descriptionD: "Read about our customer stories",
      descriptionE: "Join a team of international players",
      linkB: "https://www.gravitee.io/",
      linkC: "https://www.fdmgroup.com/",
      linkD: "https://www.gravitee.io/",
      linkE: "https://www.fdmgroup.com/",
      list: ["cava", "beer", "lemonade"],
    },
  ];

  let infoFour = [
    {
      title: "Contact",
      titleB: "About",
      titleC: "Partners",
      titleD: "Customer Success Stories",
      titleE: "Diversity and Inclusion",
      descriptionB:
        "Real-Time usage alerts and anomaly detection on multiple channels",
      descriptionC:
        "Accelerate your API services throug out partners and services",
      descriptionD: "Read about our customer stories",
      descriptionE: "Join a team of international players",
      linkB: "https://www.gravitee.io/",
      linkC: "https://www.fdmgroup.com/",
      linkD: "https://www.gravitee.io/",
      linkE: "https://www.fdmgroup.com/",
      list: ["cava", "beer", "lemonade"],
    },
  ];

  let [visibleUnderstand, setVisibleUnderstand] = useState(false);
  let [visibleAct, setVisibleAct] = useState(false);
  let [visibleEngage, setVisibleEngage] = useState(false);
  let [visibleContact, setVisibleContact] = useState(false);

  const [visit, setVisit] = useState(false);

  const [burgerClick, setBurgerClick] = useState(false);
  const [responsiveListOne, setResponsiveListOne] = useState(false);
  const [responsiveListTwo, setResponsiveListTwo] = useState(false);
  const [responsiveListThree, setResponsiveListThree] = useState(false);
  const [responsiveListFour, setResponsiveListFour] = useState(false);

  const [plusClickOne, setPlusClickOne] = useState(false);
  const [plusClickTwo, setPlusClickTwo] = useState(false);
  const [plusClickThree, setPlusClickThree] = useState(false);
  const [plusClickFour, setPlusClickFour] = useState(false);

  const divContent = visibleUnderstand
    ? infoOne
    : visibleAct
    ? infoTwo
    : visibleEngage
    ? infoThree
    : visibleContact
    ? infoFour
    : "";

  //this function is for when i leave the block
  const handleMouseLeave = () => {
    setVisibleUnderstand(false);
    setVisibleEngage(false);
    setVisibleAct(false);
    setVisibleContact(false);
  };

  return (
    <div className="">
      <nav
        className={`${headerStyles["nav-one"]} flex items-center bg-white border-gray-200 dark:bg-gray-900`}
        onMouseLeave={handleMouseLeave}
      >
        <div className={headerStyles["logo-one-container"]}>
          <Link href="https://platformable.com/">
            <Image
              src={Logo}
              className={headerStyles["logo-platformable"]}
              alt="Platformable Logo"
            />
          </Link>
        </div>

        <div
          id="mega-menu"
          className={`${headerStyles["nav-one-ul-container"]} items-center flex hidden w-full md:flex md:w-auto md:order-1`}
        >
          <ul
            className={`${headerStyles["nav-ul"]} flex mt-4 font-medium md:flex-row md:space-x-8 md:mt-2`}
          >
            <li
              onMouseEnter={() => {
                setVisibleUnderstand(true);
                setVisibleEngage(false);
                setVisibleAct(false);
                setVisibleContact(false);
              }}
            >
              <a
                href="#"
                data-dropdown-toggle="mega-menu-dropdown"
                className={`${headerStyles["nav-one-links"]} block py-2 pl-3 pr-4 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`}
                aria-current="page"
              >
                Understand
              </a>
            </li>
            <li
              onMouseEnter={() => {
                setVisibleAct(true);
                setVisibleUnderstand(false);
                setVisibleEngage(false);
                setVisibleContact(false);
              }}
            >
              {/* the li has a button and then two divs inside eachother, the second div has 3 divs with each div having a ul */}
              <a href="#" className={headerStyles["nav-one-links"]}>
                Act
              </a>
            </li>
            <li
              onMouseEnter={() => {
                setVisibleEngage(true);
                setVisibleUnderstand(false);
                setVisibleAct(false);
                setVisibleContact(false);
              }}
            >
              <a href="#" className={headerStyles["nav-one-links"]}>
                Engage
              </a>
            </li>
            <li
              onMouseEnter={() => {
                setVisibleContact(true);
                setVisibleEngage(false);
                setVisibleUnderstand(false);
                setVisibleAct(false);
              }}
            >
              <a href="#" className={headerStyles["nav-one-links"]}>
                Contact
              </a>
            </li>
            <div
              // id="mega-menu-dropdown"
              onMouseEnter={() => setVisit(true)}
              onMouseLeave={handleMouseLeave}
            >
              {divContent && (
                <div className={headerStyles["drop-down-container"]}>
                  <h2 className={headerStyles["drop-down-top-title"]}>
                    {divContent[0].title}
                  </h2>
                  <div className={headerStyles["drop-down-first-row-info"]}>
                    <div className={headerStyles["drop-down-info-hovered"]}>
                      <a href={divContent[0].linkB} target="_blank">
                        <h3 className={headerStyles["drop-down-info-title"]}>
                          {divContent[0].titleB}
                        </h3>
                        <p className={headerStyles["drop-down-descriptions"]}>
                          {divContent[0].descriptionB}
                        </p>
                      </a>
                    </div>
                    <div className={headerStyles["drop-down-info-hovered"]}>
                      <a href={divContent[0].linkC} target="_blank">
                        <h3 className={headerStyles["drop-down-info-title"]}>
                          {divContent[0].titleC}
                        </h3>
                        <p className={headerStyles["drop-down-descriptions"]}>
                          {divContent[0].descriptionC}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className={headerStyles["drop-down-second-row-info"]}>
                    <div className={headerStyles["drop-down-info-hovered"]}>
                      <a href={divContent[0].linkD} target="_blank">
                        <h3 className={headerStyles["drop-down-info-title"]}>
                          {divContent[0].titleD}
                        </h3>
                        <p className={headerStyles["drop-down-descriptions"]}>
                          {divContent[0].descriptionD}
                        </p>
                      </a>
                    </div>
                    <div className={headerStyles["drop-down-info-hovered"]}>
                      <a href={divContent[0].linkE} target="_blank">
                        <h3 className={headerStyles["drop-down-info-title"]}>
                          {divContent[0].titleE}
                        </h3>
                        <p className={headerStyles["drop-down-descriptions"]}>
                          {divContent[0].descriptionE}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ul>
        </div>
      </nav>

      {/* <Layout /> */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////// */}

      <nav className={headerStyles["nav-two"]}>
        <div className={headerStyles["nav-bar-two"]}>
          <div className={headerStyles["logo-two-container"]}>
            <Link href="#" class="flex items-center">
              <Image
                src={Logo}
                className="h-8 mr-3"
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
                  setResponsiveListOne(false);
                  setResponsiveListTwo(false);
                  setResponsiveListThree(false);
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
              <li className={headerStyles["embed-list-item"]}>
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
              </li>
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
            <ul
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
            </ul>
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
            <ul
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
            </ul>
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
              <li className={headerStyles["embed-list-item"]}>
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
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

//  <nav className="">
//       <div className="container mx-auto justify-between  md:items-center md:flex ">
//         <div>
//           <div className="flex items-center justify-between py-3 md:py-5 md:block">
//             <Link href="/">
//               <Image
//                 className="text-center"
//                 src={Logo}
//                 alt={"platformable logo"}
//                 width={160}
//                 height={32}
//                 unoptimized
//               />
//             </Link>
//             <div className="md:hidden">
//               <button
//                 className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                 onClick={() => setNavbar(!navbar)}
//               >
//                 {navbar ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6 text-black"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6 text-black"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div
//             className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//               navbar ? "block" : "hidden"
//             }`}
//           >
//             <ul className="items-center justify-center space-y-8 md:flex md:space-x-40 md:space-y-0">
//               <li className="text-[#3024C6] font-bold hover:text-indigo-200">
//                 <Link href="/understand">Understand</Link>
//               </li>
//               <li className="text-[#3024C6] font-bold hover:text-indigo-200">
//                 <Link href="/act">Act</Link>
//               </li>
//               <li className="text-[#3024C6] font-bold hover:text-indigo-200">
//                 <Link href="/engage">Engage</Link>
//               </li>
//               <li className="text-[#3024C6] font-bold hover:text-indigo-200">
//                 <Link href="#">Contact </Link>
//               </li>
//             </ul>

//             {/*   <div className="mt-3 space-y-2 lg:hidden md:inline-block">
//               <a
//                 href="#"
//                 className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
//               >
//                 Sign in
//               </a>
//               <a
//                 href="#"
//                 className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
//               >
//                 Sign up
//               </a>
//             </div> */}
//           </div>
//         </div>
//         <div className="hidden space-x-2 md:inline-block">
//           {/* <a
//             href="#"
//             className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
//           >
//             Sign in
//           </a>
//           <a
//             href="#"
//             className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
//           >
//             Sign up
//           </a> */}
//         </div>
//       </div>
//     </nav>
