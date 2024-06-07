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
                index % 2 != 0 ? "flex-col-reverse justify-end " : bentoBoxes.find(i => i.id === box.id)?.colSpan === 'col-span-5' ? 'flex flex-col md:grid md:grid-cols-[1fr_3fr]' : "flex-col"
              }  ${bentoBoxes.find(i => i.id === box.id)?.colSpan} row-span-1 `}
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
              <img src={box?.image?.data?.attributes?.url} alt={box?.image?.data?.attributes?.alternativeText} className="object-contain  rounded-xl w-full" />
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
    bgColor: "bg-[#F7F6FF]",
    title: "Access comprehensive reports",
    subtitle:
      "Stay informed with detailed analysis on the latest trends, regulatory updates, and market developments in open banking.",
    label: "In-depth Market Insights",
    linkText: "Read the research",
    link: "#",
  },
  {
    id: 4,
    colSpan: 'col-span-2',
    bgColor: "bg-[#EFFFF8]",
    icon: <div className="text-7xl p-4"></div>,
    title: "Personalized consultationsExclusive Analyst Calls",
    subtitle:
      "Engage with our experts to get tailored advice and insights specific to your business challenges and goals.g",
    label: "Exclusive Analyst Calls",
  },
  {
    id: 1,
    colSpan: 'col-span-2',
    bgColor: "bg-[#EFFFF8]",
    title:
      "Utilize our vast repository of financial and market data to make informed decisions.",
    subtitle:
      "Utilize our vast repository of financial and market data to make informed decisions.",
    label: "Comprehensive Data Access",
  },
  {
    id: 2,
    colSpan: 'col-span-3',
    bgColor: "bg-[#F7F6FF]",
    title: "International insights",
    subtitle:
      "Gain insights from global markets to ensure your strategies are well-rounded and internationally compliant.",
    label: "Global Market Coverage",
    linkText: "Visit the Github CoPilot Trust Center",
    link: "#",
  },
  {
    id: 5,
    colSpan: 'col-span-3',
    bgColor: "bg-[#F7F6FF]",
    title: "Access comprehensive reports",
    subtitle:
      "Stay informed with detailed analysis on the latest trends, regulatory updates, and market developments in open banking.",
    label: "In-depth Market Insights",
    linkText: "Read the research",
    link: "#",
  },
  {
    id: 6,
    colSpan: 'col-span-2',
    bgColor: "bg-[#EFFFF8]",
    icon: <div className="text-7xl p-4"></div>,
    title: "Personalized consultationsExclusive Analyst Calls",
    subtitle:
      "Engage with our experts to get tailored advice and insights specific to your business challenges and goals.g",
    label: "Exclusive Analyst Calls",
  },
  {
    id: 7,
    colSpan: 'col-span-5',
    bgColor: "bg-[#F7F6FF]",
    title:
      "Utilize our vast repository of financial and market data to make informed decisions.",
    subtitle:
      "Utilize our vast repository of financial and market data to make informed decisions.",
    label: "Comprehensive Data Access",
  },

  // Repeat as needed
];
