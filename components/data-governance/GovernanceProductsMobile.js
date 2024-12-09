
import styles from "@/styles/Datasetspage.module.css";

import Link from "next/link";

export default function OurDatasetsMobile({ title, datasets }) {
    // console.log("datasets",datasets)
  return (
    <section className={`${styles.bg_section_datasets} py-5 md:hidden block `}>
      <div id="ourDatasetMobile" className="container mx-auto">
  

        {datasets?.map((product, index) => {
          return (
            <div data-card-number={index + 1} key={index}>
              <div
                className={`product-container bg-white rounded-lg mb-5 pb-5 `}
                key={index}
              >
                <div
                  id="product-title"
                  className={`${styles.card_heading}  grid justify-center p-10 rounded-tl-lg rounded-tr-lg`}
                >
                  <p className="text-white text-center">{product?.title}</p>
                </div>
                <div className="grid justify-center p-10">
                  <p>{product?.description}</p>
                </div>
    

                <div className="p-1 grid  mx-5 rounded-lg ">
              
                  <div className="grid items-center ">
                    <Link href="/contact-us">
                      <button className="rounded-md shadow bg-[var(--yellow)] shadow px-3 py-2 rounded-md text-white w-full">
                        <p>Join waiting list</p>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
