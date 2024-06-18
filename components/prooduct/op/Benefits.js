export default function Benefits({data}) {
  // console.log("Benefits",data)
  return (
    <section className="mx-auto container py-10 md:py-14">
      <h3 className="text-3xl text-center px-2 md:px-16 mb-10 font-bold" style={{color:data.benefitshHeadingColor}}>
       {data?.benefitshHeading}
      </h3>
       <div className="flex flex-col md:grid rounded-lg gap-5 md:grid-cols-5 ">
          {data?.bentoBox?.map((box, index) => (
            <div
              key={index}
              className={`rounded-lg p-10  gap-10 flex items-start ${
                index % 2 != 0 ? "flex-col-reverse justify-end " : box?.column === 'col-span-5' ? 'flex flex-col md:grid md:grid-cols-[1fr_3fr]' : "flex-col"
              }  ${box?.column} row-span-1 `}
              style={{backgroundColor: box.backgroundColor}}
            >
              <div>
                {box.label && (
                  <div className="text-lg mb-2 font-medium" style={{color:data.benefitshHeadingColor}}>{box.label}</div>
                )}
                {box.title && (
                  <h2 className="text-2xl mb-4 font-semibold" style={{color:box.textColor}}>{box.title}</h2>
                )}
                {box.text && <p className="text-base" style={{color:box.textColor}}>{box.text}</p>}
              </div>
              {/* {box.linkText && (
            <span className="flex cursor-pointer font-lg flex-row mt-32 items-center justify-start">
              {box.linkText} {box.link && <a href={box.link}>dsa</a>}
            </span>
          )} */}
              <img src={box?.image?.data?.attributes?.url} alt={box?.image?.data?.attributes?.alternativeText} className="object-contain  rounded-xl w-full max-h-[400px]" />
            </div>
          ))}
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
  {
    id: 5,
    colSpan: 'col-span-3',
   
  },
  {
    id: 6,
    colSpan: 'col-span-2',
   
  },
  {
    id: 7,
    colSpan: 'col-span-5',
   
  },

  // Repeat as needed
];
