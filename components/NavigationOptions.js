import React from "react";
import Link from "next/link";

export default function NavigationOptions({ headerStyles, name, navigation }) {
  const dobleColumn = navigation.some(
    (item) =>
      item.attributes.category === name &&
      item.attributes.side_of_navigation === "right"
  );
  console.log("doble", dobleColumn);

  return (
    <div className={`${headerStyles["drop-down-container"]} `}>
      <h2 className={`${headerStyles["drop-down-top-title"]} font-bold `}>
        {name}
      </h2>

      <div className={`grid ${dobleColumn ? "grid-cols-2" : "grid-cols-1"}`}>
        <div id="nav-left-column">
          {navigation.map((nav, index) => {
            if (
              nav.attributes.category === name &&
              nav.attributes.side_of_navigation === "left"
            ) {
              return (
                <div
                  className={headerStyles["drop-down-info-hovered"]}
                  key={index}
                >
                  <Link href={nav.attributes.path}>
                    <h3 className={headerStyles["drop-down-info-title"]}>
                      {nav?.attributes?.name}
                    </h3>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: nav?.attributes?.metadata,
                      }}
                      className={`${headerStyles["drop-down-descriptions"]} text-[11px] `}
                    />
                  </Link>
                </div>
              );
            } else {
              null;
            }
          })}
        </div>
        <div id="nav-right-column">
          {navigation.map((nav, index) => {
            if (
              nav.attributes.category === name &&
              nav.attributes.side_of_navigation === "right"
            ) {
              return (
                <div
                  className={`${headerStyles["drop-down-info-hovered"]} grid  ${nav?.attributes?.order ? `order-[${nav?.attributes?.order}]` : '' }`}
                  key={index}
                >
                  <Link href={nav.attributes.path}>
                    <h3 className={headerStyles["drop-down-info-title"]}>
                      {nav?.attributes?.name}
                    </h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: nav?.attributes?.metadata,
                      }}
                      className={`${headerStyles["drop-down-descriptions"]} `}
                    />
                  </Link>
                </div>
              )
            } else {
              null;
            }
          }).sort()}
        </div>
      </div>
    </div>
  );
}
