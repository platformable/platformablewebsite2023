import { useEffect, useState } from "react";

export default function UseCasesPersona({ data }) {
  const [selectedSector, setSelectedSector] = useState("");
  console.log("data",data)

  const chooseSector = (category) =>
    data?.personaCases
      ? data?.bentoBox?.find((i) => i.label === selectedSector)
      : setSelectedSector(category);

      useEffect(() => setSelectedSector(data?.personaCases[0]), [])

      console.log("selectedSector",selectedSector)
  return (
    <section className="container mx-auto py-10 md:py-14 ">
     <div>
     <h3 className="text-[#3425C9] font-bold mb-5" style={{color: selectedSector.mainColor}}>{data?.personaHeading}</h3>
      <h6 className="">{data?.personaSubheading}</h6>

      <div className="grid  grid-flow-col auto-cols-auto overflow-x-auto gap-5 pb-6 mt-10">
        {data?.personaCases?.map((persona,index) => (
          <button
            className={` px-4 py-2 xl:py-3  rounded-md border-2 xl:border-4 shadow-md font-bold`}
            style={{backgroundColor: selectedSector?.label === persona?.label ? selectedSector.mainColor : '#F7F4FE' , color: selectedSector?.label === persona?.label ? 'white' : selectedSector.mainColor , border: `1px solid ${selectedSector.mainColor}`}}
            onClick={() => setSelectedSector(persona)}
          key={index}>
            <span>{persona?.label}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:h-80 mt-10 md:mt-24 gap-10 md:gap-20 2xl:gap-32">
        <div className="md:w-3/6">
          <h4 className=" font-bold leading-10" style={{color: selectedSector.mainColor}}>{selectedSector?.title}</h4>
          <p className="text-lg leading-6 mt-8" style={{color: selectedSector.textColor}}>{selectedSector?.text}</p>
          <div className="personas-homepage-list">
            <ul className="mt-5 ">
           {selectedSector ? (
            selectedSector?.item?.[0]?.children?.map((item,index)=>{
             return <li className="flex items-center gap-x-2 my-5" key={index}> <p className="rounded-full px-2 text-white" style={{backgroundColor:selectedSector.mainColor}}>✓</p>{item?.children[0]?.text}</li>
            })
           ):''}
           </ul>
          </div>
        </div>
        <img className="md:mr-10" src={selectedSector?.image?.data?.attributes?.url} alt={`${selectedSector?.image?.data?.attributes?.alternativeText}`} />
      </div>
     </div>
    </section>
  );
}
