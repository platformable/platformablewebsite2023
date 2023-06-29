import React from "react";

export default function StakeholdersOpenEcosystems({ videos, title }) {
  return (
    <section className="py-10">
      <div className="flex gap-10  mb-10">
        <img src="" alt="plat logo" width={100} />
        <h2 className="text-[#5B24EC] font-bold font-karla ">{title}</h2>
      </div>
      <div className="px-32 flex flex-col items-center gap-10">
        <div className="flex items-center justify-center gap-10">
          <label className="flex items-center gap-5">
            <input type="radio" name="stakeholder_flow" defaultChecked={true}/>
            <p className="font-bold">For governments and regulators</p>

          </label>
          <label className="flex items-center gap-5">
            <input type="radio" name="stakeholder_flow" />
            <p className="font-bold">For bussineses and organizations</p>

          </label>
          <label className="flex items-center gap-5">
            <input type="radio" name="stakeholder_flow" />
            <p className="font-bold">For citizens</p>

          </label>
        </div>
        <video autoPlay muted loop >
          <source
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${videos?.data?.attributes?.url}`}
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}
