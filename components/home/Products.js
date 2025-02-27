import Image from "next/image";
import { useEffect, useState } from "react";


const initialSector = "Open Banking";

export default function Products({ data, isMobile }) {

  const [sector, setSector] = useState(initialSector);
  const [products, setProducts] = useState(data?.products.find((item) => item?.sector === initialSector).product);


  const handleSelectSector = (e) => {
    const sector = e.target.textContent;
    setSector(sector);  
    setProducts(data?.products.find((item) => item?.sector === sector).product);
  };

 
  return (
    <section
      className={`py-10 md:py-14 ${
        sector === "Open Banking" ? "bg--gradient-obof-home" : ""
      }
    ${sector === "Open Ecosystems" ? "bg--gradient-oe-home" : ""}
    ${sector === "Open Health" ? "bg--gradient-oh-home" : ""}
    ${sector === "Traceability" ? "bg--gradient-traceability-home" : ""}
    `}
    >
      <div className="container mx-auto">
        <h2 className="text-white font-bold text-center leading-10">
          {data?.sectorHeading}
        </h2>
        <p className="mt-7 text-white text-center">{data?.sectorSubheading}</p>

        <div className="grid md:grid-cols-4 gap-x-10 gap-y-5 mt-10 mb-14 lg:mt-14 lg:mb-20">
          {data?.products?.map((prod, index) => (
            <button
              key={index}
              className={`px-1 pt-1 grid pb-5 bg-white rounded-md shadow text-[22px] font-bold text-[#5A24EC] ${
                sector !== prod.sector ? "opacity-60" : ""
              }`}
              onClick={handleSelectSector}
            >
              <div
                className={`h-2 mb-auto rounded-tl-md rounded-tr-md xl:mb-5
              ${prod.sector === "Open Banking" ? "bg--gradient-obof-btn" : ""}
              ${prod.sector === "Open Ecosystems" ? "bg--gradient-oe-btn" : ""}
              ${prod.sector === "Open Health" ? "bg--gradient-oh-btn" : ""}
               ${
                 prod.sector === "Traceability"
                   ? "bg--gradient-traceability-btn"
                   : ""
               }
              
              `}
              ></div>
              <h3 className="text-[22px]">{prod?.sector}</h3>
            </button>
          ))}
        </div>

        <div className="flex flex-col md:grid rounded-lg gap-5 md:grid-cols-5 ">
          {products.map((box, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg p-10  gap-10 flex items-start ${
                index % 2 != 0
                  ? "flex-col-reverse justify-end "
                  : box.column === "col-span-5"
                  ? "flex flex-col md:grid md:grid-cols-[1fr_3fr]"
                  : "flex-col"
              }  ${box.column} row-span-1 `}
              style={{ backgroundColor: box.backgroundColor }}
            >
              <div>
                {box.label && (
                  <div
                    className="text-lg mb-2 font-medium"
                    style={{ color: "#5E2AED" }}
                  >
                    {box.label}
                  </div>
                )}
                {box.title && (
                  <h4
                    className="text-2xl mb-4 font-semibold"
                    style={{ color: box.textColor }}
                  >
                    {box.title}
                  </h4>
                )}
                {box.text && (
                  <p
                    className="text-base mb-5"
                    style={{ color: box.textColor }}
                  >
                    {box.text}
                  </p>
                )}

                {box?.getStarted && (
                  <a
                    target="_blank"
                    href={box.getStarted}
                    className="rounded-full text-white text-md bg-[#5E2AED] mt-5  px-4 py-1"
                  >
                    Get started
                  </a>
                )}
              </div>
              {/* {box.linkText && (
            <span className="flex cursor-pointer font-lg flex-row mt-32 items-center justify-start">
              {box.linkText} {box.link && <a href={box.link}>dsa</a>}
            </span>
          )} */}
              <Image
                id={box.id}
                src={box?.image?.data?.attributes?.url}
                alt={box?.image?.data?.attributes?.alternativeText}
                className="object-contain max-h-[400px] rounded-xl w-full "
                loading="lazy"
                quality={isMobile ? 75 : 100}
                width={box?.image?.data?.attributes?.width}
                height={box?.image?.data?.attributes?.height}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const bentoBoxes = [
  {
    id: 3,
    colSpan: "col-span-3",
  },
  {
    id: 4,
    colSpan: "col-span-2",
  },
  {
    id: 1,
    colSpan: "col-span-2",
  },
  {
    id: 2,
    colSpan: "col-span-3",
  },
  // {
  //   id: 5,
  //   colSpan: 'col-span-3',
  // },
  // {
  //   id: 6,
  //   colSpan: 'col-span-2',
  // },
  // {
  //   id: 7,
  //   colSpan: 'col-span-5',
  // },

  // Repeat as needed
];
