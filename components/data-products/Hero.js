import styles from "@/styles/DataProducts.module.css";

export default function Hero() {
  return (
    <section className="">
      <div className="container  mx-auto   py-10">
        <h1 className="mb-10">Data products</h1>
        <p className="lg:w-4/6 xl:w-3/6">
          Data is a valuable resource in open ecosystems, but handling data
          directly via spreadsheets is often a cumbersome and complex process.
          Spreadsheets often hide the stories within the data, or obscure the
          trends that you want to see. They can also get out of date quickly
          when you need real-time access to data.
        </p>
      </div>
      <div className={`${styles.hero_background_gradient} py-10 `}>
        <div className="container mx-auto   flex gap-7">
          <p className="text-white ">
            Platformable’s data products help you access, analyse, use and reuse
            data in more accessible ways. For each of our datasets, we offer a
            range of data products that can help you more easily navigate our
            data.
            <br />
            <br />
            We can also work with you to design and build data products that
            meet your needs, based off our datasets or your own data.
          </p>
          <img
            src="/hero_data_products.svg"
            alt="Data products mapped"
            className="xl:-mt-96 lg:-mt-72 lg:-mr-14 hidden lg:block lg:w-2/6 xl:w-3/6"
          />
        </div>
      </div>
    </section>
  );
}
