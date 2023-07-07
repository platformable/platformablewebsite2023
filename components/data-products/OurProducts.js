import styles from "@/styles/DataProducts.module.css";

export default function OurProducts({ title, products }) {
  return (
    <section className="container mx-auto py-10">
      <div className="mb-10 flex gap-x-5">
        <img src="/platformable-icon-purple.svg" alt="Platformable logo" className=""/>
        <h3 className="text-[var(--purple-medium)] font-bold">{title}</h3>
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
              <h6 className="text-white font-bold">
                {card?.data_products_product_name}
              </h6>
            </div>
            <div className="grid place-content-center rounded-b-md lg:rounded-b-xl pb-10">
              <div
                dangerouslySetInnerHTML={{
                  __html: card?.data_products_product_description,
                }}
                className="pt-5 pb-10 px-3 xl:px-5 text-[var(--purple-medium)] "
              />

              {card.data_products_product_price_quarter &&
                card.data_products_product_price_year && (
                  <div className="grid gap-3 items-center justify-center px-3 lg:px-5 2xl:px-10">
                    <div className="flex items-center justify-center"><img src="/pdf_copy.svg" alt="pdf copy"/> </div>
                    <p className="text-center px-5 text-[var(--purple-medium)]">Simple copy</p>
                    <button className="rounded-md  bg-[var(--purple-light)] py-2 mb-16 text-white">
                      <p>Download</p>
                    </button>
                    <div className="grid gap-5">
                      <p className="text-center font-bold text-[var(--pink)]">
                        <span className="text-[var(--blue-extra-dark)]">$150</span> per quarter
                        <br />
                        <span className="font-medium text-[var(--blue-extra-dark)]">or</span>
                        <br />
                        <span className="text-[var(--blue-extra-dark)]">$450</span> per year 
                        <br />
                        (save %25)
                      </p>
                      <button className="bg-[var(--blue-extra-dark)] py-2 rounded-md text-white">
                        <p>Purchase</p>
                      </button>
                    </div>
                  </div>
                )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
