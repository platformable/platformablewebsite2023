import { useEffect, useState } from "react";


export default function Products({data}) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (data) {
      setProducts(data?.products.find(item => item?.sector === 'Open Ecosystems').product)
    }
  }, [])
  return (
    <section className="bg-[#2E16A7] py-10 md:py-14">
      <div className="container mx-auto">
      <h2 className="text-white font-bold text-center leading-10">
        {data?.sectorHeading}
      </h2>
      <p className="mt-7 text-white text-center">
       {data?.sectorSubheading}
      </p>

      <div className="grid md:grid-cols-3 gap-x-10 gap-y-5 mt-10 mb-14 lg:mt-14 lg:mb-20">
        {data?.products?.map((prod, index) => (
          <button key={index} className="px-6 py-2 bg-white" onClick={() => setProducts(data?.products.find(item => item?.sector === prod.sector).product)}>
              {prod?.sector}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:grid rounded-lg gap-5 md:grid-cols-5 ">
          {products.map((box, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-10  gap-10 flex items-start ${
                index % 2 != 0 ? "flex-col-reverse justify-end " : box.column === 'col-span-5' ? 'flex flex-col md:grid md:grid-cols-[1fr_3fr]' : "flex-col"
              }  ${box.column} row-span-1 `}
              style={{backgroundColor: box.backgroundColor}}
            >
              <div>
                {box.label && (
                  <div className="text-lg mb-2 font-medium" style={{color:'#5E2AED'}}>{box.label}</div>
                )}
                {box.title && (
                  <h2 className="text-2xl mb-4 font-semibold" style={{color:box.textColor}}>{box.title}</h2>
                )}
                {box.text && <p className="text-base" style={{color:box.textColor}}>{box.text}</p>}

                {box?.getStarted && (
                  <button className="rounded-full text-white text-xs bg-[#5E2AED] mt-5  px-4 py-1">Get started</button>
                 )}
              </div>
              {/* {box.linkText && (
            <span className="flex cursor-pointer font-lg flex-row mt-32 items-center justify-start">
              {box.linkText} {box.link && <a href={box.link}>dsa</a>}
            </span>
          )} */}
              <img src={box?.image?.data?.attributes?.url} alt={box?.image?.data?.attributes?.alternativeText} className="object-contain max-h-[400px] rounded-xl w-full" />
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
    colSpan: 'col-span-3',
  },
  {
    id: 4,
    colSpan: 'col-span-2',
  },
  {
    id: 1,
    colSpan: 'col-span-2',
   
  },
  {
    id: 2,
    colSpan: 'col-span-3',
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
