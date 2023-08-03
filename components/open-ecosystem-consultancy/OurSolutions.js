import styles from "@/styles/OpenEcosystempage.module.css";

export default function OurSolutions({ data }) {
  return (
    <section className="pb-20 pt-2 bg-[var(--purple-medium)] ">
      <div className="container mx-auto pt-10">
        <div className="flex gap-x-5 mb-16">
          <img
            src="/platformable-icon-white.svg"
            alt="Platformable logo"
            className=""
          />
          <div>
          <h3 className="text-white font-bold mb-5">
            {data?.solutions_title}
          </h3>
          <p className="text-white">{data?.solutions_description}</p>
          </div>
        </div>
        <div className="grid mt-5 xl:mt-10 gap-y-10 lg:gap-y-7">
          {data?.solutions.map((solution, index) => (
            <div className="grid lg:grid-cols-[1fr_8.5fr] lg:h-48 xl:h-40" key={index}>
              <div
                className={`${styles.bg_solution_tile} flex items-center justify-center bg-[#3328C3] max-lg:py-5 px-3 xl:px-7 gap-5  rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none  `}
              >
                <img src={solution?.icon?.data?.attributes.url} alt="Platformable logo" />
              </div>
              <div className="grid place-items-center px-7 py-5 bg-white rounded-b-xl lg:rounded-l-none lg:rounded-r-xl">
                <div
                  dangerouslySetInnerHTML={{
                    __html: solution?.description,
                  }}
                  className=""
                />
              </div>
            </div>
          ))}

          <div className="grid grid-cols-[2fr_8.5fr_2fr] bg-white py-7">
            <div className="px-7 col-start-1 col-end-3 text-[#3328C3]  flex items-center gap-x-5 xl:gap-x-16">
              <img src="/didnt_find.png" alt="dataset blank icon" />
              <div className="">
                <h5 className="mb-1 font-bold">
                  {"Didn't find the product you were looking for ?"}
                </h5>
                <p>
                  If you have a specific product in mind or if you need
                  assistance in building your own dataset
                </p>
              </div>
            </div>
            <div className="grid items-center px-7 ">
              <button className="bg-[var(--yellow)] px-3 py-2 shadow-md rounded-md text-[var(--purple)]">
                <p className="font-bold">Contact us</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
