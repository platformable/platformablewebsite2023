import styles from "@/styles/Datasetspage.module.css";

export default function OurDatasets({ title, datasets }) {
  return (
    <section className="container mx-auto py-10">
      <div className="mb-10 flex gap-x-5">
        <img
          src="/platformable-icon-purple.svg"
          alt="Platformable logo"
          className=""
        />
        <h3 className="text-[var(--purple-medium)] font-bold">{title}</h3>
      </div>
      <div className="grid md:grid-cols-3 2xl:grid-cols-5  mb-10 gap-10">
        {datasets?.map((card, i) => (
          <div
            className="grid grid-rows-[1fr_3fr] shadow-[0px_3px_6px_#86858B] rounded-md lg:rounded-xl"
            data-card-number={i + 1}
            key={i}
          >
            <div
              className={`${styles.card_heading} flex items-center justify-center text-center rounded-t-md lg:rounded-t-xl p-7`}
            >
              <h6 className="text-white font-bold">
                {card?.datasets_product_name}
              </h6>
            </div>
            <div className="grid place-content-center rounded-b-md lg:rounded-b-xl py-10">
              <div className="grid gap-3 items-center justify-center px-3 lg:px-5 2xl:px-10">
                <p className="text-center  font-medium text-[var(--purple-medium)]">
                  {card?.datasets_datapoints} data points
                </p>

                <div className="flex items-center justify-center">
                  <img src="/spec.svg" alt="Specification sheet icon" />
                </div>
                <p className="text-center font-bold  text-[var(--purple-medium)]">
                  Specification Sheet
                </p>
                <button className="rounded-md  bg-[var(--purple-light)] px-3 py-2 mb-16 text-white">
                  <p>Download</p>
                </button>
                <div className="grid gap-5 ">
                  <p className="text-center font-bold text-[var(--blue-extra-dark)]">
                    Purchase
                  </p>
                  <div className="flex justify-center items-center">
                    <img src="/bulk.svg" alt="bulk download " />
                  </div>

                  <button className="bg-[var(--blue-extra-dark)] px-3 py-2 rounded-md text-white">
                    <p>Bulk download</p>
                  </button>
                  <div className="flex justify-center items-center">
                    <img src="/API.svg" alt="API" />
                  </div>

                  <button className="bg-[var(--blue-extra-dark)] px-3 py-2 rounded-md text-white">
                    <p>Via API</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[#3423C9] font-medium ">
        You can also access our datasets by purchasing one of our ready-made
        data products, including trends reports and analytical tools.
      </p>
    </section>
  );
}
