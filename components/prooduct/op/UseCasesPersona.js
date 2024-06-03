import { useEffect, useState } from "react";

export default function UseCasesPersona({ data }) {
  const [selectedSector, setSelectedSector] = useState("Bank Executives");

  const chooseSector = (category) =>
    data.personaCases
      ? data.bentoBox.find((i) => i.label === selectedSector)
      : setSelectedSector(category);

      useEffect(() => setSelectedSector(data.personaCases[0]), [])
  return (
    <section className="container mx-auto py-14">
     <div>
     <h3 className="text-[#3425C9] font-bold mb-5">{data?.personaHeading}</h3>
      <h6 className="">{data?.personaSubheading}</h6>

      <div className="grid  md:grid-flow-col md:auto-cols-auto  gap-5 mt-16">
        {data?.personaCases?.map((persona,index) => (
          <button
            className={`${
              selectedSector?.label === persona?.label
                ? "opacity-70 text-[var(--purple-extra-dark)]"
                : ""
            } px-4 py-2 xl:py-3  rounded-md border-2 xl:border-4 `}
            onClick={() => setSelectedSector(persona)}
          key={index}>
            <span>{persona?.label}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:h-80 mt-24 gap-10 md:gap-20 2xl:gap-32">
        <div className="md:w-3/6">
          <h4 className="text-[#5E2AED] font-bold ">{selectedSector?.title}</h4>
          <p className="text-base leading-6 mt-8">{selectedSector?.text}</p>
        </div>
        <img className="md:mr-10" src={selectedSector?.image?.data?.attributes?.url} alt={selectedSector} />
      </div>
     </div>
    </section>
  );
}
