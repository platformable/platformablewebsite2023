import { useEffect, useState } from "react";
import CheckIcon from "../../CheckIcon";

export default function UseCasesPersona({ data, colorScheme }) {
  const [selectedSector, setSelectedSector] = useState("");

  const chooseSector = (category) =>
    data?.personaCases
      ? data?.bentoBox?.find((i) => i.label === selectedSector)
      : setSelectedSector(category);

      useEffect(() => setSelectedSector(data?.personaCases[0]), [])

  return (
    <section className="container mx-auto py-10 md:py-14 "style={{background: colorScheme?.personas?.backgroundColor}} >
     <div>
     <h2 className="font-bold mb-5 leading-10" style={{color: colorScheme?.personas?.mainColor}}>{data?.personaHeading}</h2>
      <p className="text-2xl">{data?.personaSubheading}</p>

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

      <div className="flex flex-col md:flex-row md:justify-between md:h-80 my-10  gap-10 md:gap-20 2xl:gap-32">
        <div className="md:w-3/6">
          <h2 className="font-bold leading-10 text-4xl" style={{color: colorScheme?.personas?.mainColor}}>{selectedSector?.title}</h2>
          <p className="text-lg leading-6 mt-8" style={{color: colorScheme?.personas?.textColor}}>{selectedSector?.text}</p>
          <div className="personas-homepage-list">
            <ul className="mt-5 ">
           {selectedSector && selectedSector.item.length > 0 ? (
            selectedSector?.item?.[0]?.children?.map((item,index)=>{
             return <li className="flex items-center gap-x-2 my-5" key={index}> <div><p className="dot p-3 text-white" style={{backgroundColor:colorScheme?.personas?.mainColor}}><CheckIcon/></p></div>{item?.children[0]?.text}</li>
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
