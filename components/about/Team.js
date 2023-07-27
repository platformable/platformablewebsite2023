import React from "react";

export default function Team({ data,styles }) {
  
  return (
    <section className={`${styles.team_bg} pt-7 pb-24`}>
    <div className="container mx-auto ">
      <div id="header" className="flex gap-3 mb-10">
          <img src="/logo_icon_white.png" alt="Platofrmable logo" />
          <h4 className="font-bold text-white">Our Team</h4>
        </div>
      <div className="flex flex-wrap justify-evenly">
        {data.map((member, index) => (
          <div key={index} className="w-full md:w-1/4 px-4 ">
            <div className="card">
              <img src={member.attributes.url} alt="" key={index} />
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
