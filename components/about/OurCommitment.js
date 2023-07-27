import React from "react";

export default function OurCommitment({ data }) {
  return (
    <>
      {/* Our Commitment */}

      <div id="ourCommitment" className="container mx-auto text-white pt-16 pb-20">
        <div id="header" className="flex gap-3 mb-10">
          <img src="/logo_icon_white.png" alt="Platofrmable logo" />
          <h4 className="font-bold">{data?.ourCommitment_title}</h4>
        </div>
        <article className="grid gap-32">
          {data?.commitments?.map((commit,index) => (
            <div className="grid md:grid-cols-[1fr_3fr] grid-cols-1 gap-7" key={index}>
              <div className="flex flex-col gap-y-5 px-10 justify-center border-r-2 md:border-white border-none">
                <img src={commit.commitment_img?.data?.attributes.url} alt="" />
                <p className="font-bold">{commit?.commitment_text}</p>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: commit?.commitment_description,
                }}
                // className="lg:w-3/6 2xl:w-4/7"
              />
            </div>
          ))}
        </article>
      </div>
    </>
  );
}
