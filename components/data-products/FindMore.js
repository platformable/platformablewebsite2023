import styles from "@/styles/DataProducts.module.css";

export default function FindMore({ data }) {
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
            className={`text-white  font-bold md:leading-10 leading-8 `}
          >
            Find out more
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-x-5 md:px-0 px-5 gap-y-5">
          <div className="find-more-cards bg-white rounded-xl shadow-md p-7">
            <h6 className="text-center text-[var(--blue)] font-medium">Understand</h6>
            
            <div className="flex justify-center my-10">
                <img src="https://dummyimage.com/200x200/000/fff" alt="" />
            </div>

            <p className="text-[var(--purple-medium)] leading-8">
              Read more about how Platformable builds data products and learn
              about our sustainability/scalability assessment model
            </p>
          </div>

          <div className="find-more-cards bg-white rounded-xl shadow-md p-7">
            <h6 className="text-center text-[var(--blue)] font-medium">Act</h6>
           <div className="flex justify-center my-10">
                <img src="https://dummyimage.com/200x200/000/fff" alt="" />
            </div>

            <p className="text-[var(--purple-medium)] leading-8">
            Choose from some of the tools we use and recommend when building data products
            </p>
          </div>

          <div className="find-more-cards bg-white rounded-xl shadow-md p-7">
            <h6 className="text-center text-[var(--blue)] font-medium">Engage</h6>
           <div className="flex justify-center my-10">
                <img src="https://dummyimage.com/200x200/000/fff" alt="" />
            </div>

            <p className="text-[var(--purple-medium)] leading-8">
            Contact us form/calendly booking widget
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
