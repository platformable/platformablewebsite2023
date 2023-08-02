import styles from "@/styles/OpenEcosystempage.module.css";

export default function OurSolutions({ data }) {
  return (
    <section className="pb-20 pt-2 bg-[var(--purple-medium)] ">
      <div className="container mx-auto">
        <div className="flex gap-x-5">
          <img
            src="/platformable-icon-purple.svg"
            alt="Platformable logo"
            className=""
          />
          <h3 className="text-[var(--purple-medium)] font-bold">
            Platformable solutions for your evolving needs
          </h3>
        </div>
        <div className="grid mt-5 xl:mt-10 gap-y-4 lg:gap-y-7">
          
          <div className="grid lg:grid-cols-[1fr_8.5fr] ">
            <div
              className={`${styles.bg_solution_tile} flex items-center justify-center bg-[#3328C3] max-lg:py-5 px-3 xl:px-7 gap-5 rounded-l-xl`}
            >
              <img src="/logo_icon_white.png" alt="Platformable logo" />
            </div>
            <div className="grid place-items-center px-7 py-5 bg-white rounded-r-xl">
              <div
            dangerouslySetInnerHTML={{
              __html:
                data?.description,
            }}
            className="lg:w-3/6 xl:w-[60%] 2xl:w-3/5"
          />
            </div>
          </div>

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
