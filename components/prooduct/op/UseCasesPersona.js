import { useEffect, useState } from "react";
import CheckIcon from "../../CheckIcon";
import Image from "next/image";
import styles from '../../../src/styles/NewHomepage.module.css'

export default function UseCasesPersona({ data, colorScheme }) {
  const [selectedSector, setSelectedSector] = useState(data?.personaCases[0]);
 

  return (
    <section id="persona-section" className="container mx-auto py-10 md:py-14 "style={{background: colorScheme?.personas?.backgroundColor}} >
     <div>
     <h2 className="font-bold mb-5 leading-10" style={{color: colorScheme?.personas?.mainColor}}>{data?.personaHeading}</h2>
      <p className="text-2xl">{data?.personaSubheading}</p>

      <div className={`${styles.customScrollbar} grid grid-flow-col auto-cols-auto overflow-x-auto gap-5 pb-6 mt-10`}>
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

      <div className="flex flex-col items-center  md:flex-row md:justify-between lg:h-80 my-10  gap-10 md:gap-20 2xl:gap-32">
        <div className="md:w-3/6">
          <h3 className="font-bold leading-10 text-4xl" style={{color: colorScheme?.personas?.mainColor}}>{selectedSector?.title}</h3>
          <p className="text-lg leading-6 mt-8" style={{color: colorScheme?.personas?.textColor}}>{selectedSector?.text}</p>
          <div className="personas-homepage-list">
            <ul className="mt-5 list-style-none flex flex-col gap-6">
           {selectedSector && selectedSector?.item?.length > 0 ? (
            selectedSector?.item?.[0]?.children?.map((item,index)=>{
              // console.log("selected sector", selectedSector)
              if (item?.children?.length > 0) {
                return <li className="flex items-center gap-x-3 " key={index}> <CheckIcon/>{item?.children[0]?.text}</li>
              }
            })
           ):''}
           </ul>
          </div>
        </div>
        {
          selectedSector && (
            <Image loading="lazy" width={360} height={400} className="md:mr-10" src={selectedSector?.image?.data?.attributes?.url} alt={`${selectedSector?.image?.data?.attributes?.alternativeText}`} />
          )
        }
      </div>
     </div>
    </section>
  );
}
