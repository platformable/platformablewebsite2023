import styles from "@/styles/DataProducts.module.css";
import Link from "next/link";
import carouselStyles from "@/styles/Carousel.module.scss";

export default function FindMore({ sectors }) {
  return (
    <section
      className={`pt-10 pb-20 container mx-auto overflow-y-hidden  bg-white overflow-x-hidden hidden lg:block`}
    >
      <div className={`relative h-96 flex mt-10 flex-col justify-center`}>
        {sectors?.map((sector, index) => (
          <div
            className={`${carouselStyles.carousel__item} grid grid-cols-[3fr_1.5fr] xl:px-24`}
            id={index + 1}
            key={index}
          >
            <div className="grid grid-rows-[1fr_1.5fr_1fr] gap-y-10 mb-10">
              <div className="flex gap-5 items-center">
                <img src={sector?.icon?.data?.attributes?.url} alt="" />
                <h2 className="font-bold text-[var(--purple-medium)]">
                  {sector?.title}
                </h2>
              </div>
              {/* <p className="text-[var(--purple-medium)]  font-bold">{sector?.subtitle}</p> */}

              <div
                dangerouslySetInnerHTML={{
                  __html: sector?.description,
                }}
                className="pr-16 text-[var(--purple-medium)] font-bold"
              />

              <Link href={`/${sector.link}`}>
                <button className="rounded bg-[var(--yellow)] px-10 py-4 text-lg text-center font-bold lg:rounded-xl text-[var(--purple-medium)]">
                  Find out more
                </button>
              </Link>
            </div>
            <img
              className={``}
              src={sector?.image?.data?.attributes?.url}
              alt=""
            />
          </div>
        ))}
      </div>
      {/* <div className="container mx-auto">
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
      </div> */}
    </section>
  );
}
