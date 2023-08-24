import React from "react";
import Link from "next/link";

export default function NavigationOptions({ headerStyles, name, navigation }) {
  return (
    <div className={`${headerStyles["drop-down-container"]} `}>
      <h2 className={`${headerStyles["drop-down-top-title"]} font-bold `}>
        {name}
      </h2>
      

      <div className="grid grid-cols-2">
        <div id="nav-left-column">
       
          {navigation.map((nav, index) => {
            if (nav.attributes.category === name && nav.attributes.side_of_navigation==='left') {
              return (
                <div className={headerStyles["drop-down-info-hovered"]}>
                  <Link href={nav.attributes.path} >
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
            if (nav.attributes.category === name && nav.attributes.side_of_navigation==='right') {
              return (
                <div className={headerStyles["drop-down-info-hovered"]}>
                  <Link href={nav.attributes.path} >
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
              );
            } else {
              null;
            }
          })}
        </div>
      </div>
    </div>
  );
}
