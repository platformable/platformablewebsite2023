import styles from "@/styles/DataProducts.module.css";

export default function OurProcess({ data }) {
  return (
    <section className={`py-10  ${styles["data-products-our-process-bg"]}`}>
      <div className="container mx-auto">
        <div className="flex gap-x-5 items-center  mb-10">
          <img
            src="/platformable-icon-white.svg"
            alt=""
            className="md:flex hidden"
          />
          <h2
            className={`text-white  font-bold font-karla  md:leading-10 leading-8 `}
          >
            {data?.data_products_process_title}
          </h2>

        </div>
        <div
            dangerouslySetInnerHTML={{ __html: data?.data_products_process_description }}
            className="py-5 text-white "
          />
      </div>
    </section>
  );
}
