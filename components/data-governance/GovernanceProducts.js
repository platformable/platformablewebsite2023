import styles from "@/styles/DataGovernancepage.module.css";

export default function GovernanceProducts({ title, products }) {
  return (
    <section className="container mx-auto py-10">
      <div className="mb-10 flex gap-x-5">
        <img
          src="/platformable-icon-purple.svg"
          alt="Platformable logo"
          className=""
        />
        <h3 className="text-[var(--purple-medium)] font-bold">
          {title}
        </h3>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4  gap-10">
        {products?.map((card, i) => (
          <div
            className="grid grid-rows-[1fr_3fr] shadow-[0px_3px_6px_#86858B] rounded-md lg:rounded-xl"
            data-card-number={i + 1}
            key={i}
          >
            <div
              className={`${styles.card_heading} flex items-center justify-center text-center rounded-t-md lg:rounded-t-xl p-7`}
            >
              <h6 className="text-white font-bold">{card?.title}</h6>
            </div>
            <div className="flex flex-col justify-between rounded-b-md lg:rounded-b-xl pb-10">
              <p className="pt-5 pb-10 px-3 xl:px-5 text-[var(--purple-medium)] ">
                {card.description}
              </p>

              <div className="grid gap-3 items-center justify-center px-3 lg:px-5 2xl:px-10">
                <div className="flex items-center justify-center">
                  <img src="/spec.svg" alt="Specification sheet icon" />{" "}
                </div>
                <p className="text-center px-5 text-[var(--purple-medium)]">
                  Simple copy
                </p>
                <button className="rounded-md  bg-[var(--purple-light)] py-2 mb-16 text-white">
                  <p>Download</p>
                </button>
                <div className="flex items-center justify-center">
                  <img
                    src={card?.bookbuybtn_img?.data.attributes.url}
                    alt="Product icon"
                  />
                </div>
                <button className="bg-[var(--blue-extra-dark)] py-2 rounded-md text-white">
                  <p>Buy now</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
