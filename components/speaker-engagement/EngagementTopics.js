import Link from "next/link";

export default function EngagementTopics({ topics }) {
  console.log(topics);
  return (
    <div
      className={` lg:pb-20 lg:mt-[-60px] min-h-screen bg-[var(--purple-medium)] pt-16 min-h-full md:min-h-full md:pb-20 `}
    >
      <div className="container mx-auto text-white">
        <div className="flex gap-x-4">
          <img src="/logo_icon_white.png" className="h-10 w-30" />
          <h3 className="sm:text-4xl lg:text-xl xl:text-3xl text-xl">
            {topics?.topics_title}
          </h3>
        </div>
        <p className="sm:text-2xl text-lg text-center sm:text-start mt-8 sm:mt-5 mb-16">
          {topics?.topics_description}
        </p>
      </div>

      <div
        className={`xl:w-3/5 flex md:flex-col xl:flex-row sm:flex-row mx-auto md:w-11/12 w-9/12 md:gap-1 lg:w-10/12`}
      >
        {topics.services.slice(0, 3).map((topic, index) => (
          <div className=" flex-1 flex flex-col text-white  items-center  lg:mb-0  md:gap-3 ">
            <img
              src={topic?.service_img.data?.attributes?.url}
              width={100}
              height={38}
              className="sm:shrink-0 md:shrink-0 mb-2"
            />
            <p
              className={`md:px-4   md:w-48 xl:w-9/12  text-center text-base lg:text-lg `}
            >
              {topic?.service}
            </p>
          </div>
        ))}
      </div>
      <div className="flex md:flex-col xl:flex-row sm:flex-row mx-auto place-content-between  items-center sm:mt-28 lg:w-9/12 w-10/12">
        {topics.services.slice(3, 7).map((topic, index) => (
          <div
            className={`${
              index === 0 ? "lg:mt-[-36px]" : null
            }  text-white flex flex-1 flex-col items-center justify-center mb-16 md:gap-3`}
          >
            <img
              src={topic?.service_img.data?.attributes?.url}
              width={100}
              height={38}
              className="mb-2"
            />
            <p
              className={`md:px-4  md:w-48 lg:w-full text-center text-base lg:text-lg w-7/12 xl:w-10/12  ${
                index === 0 ? "lg:w-1/6" : ""
              } `}
            >
              {topic?.service}
            </p>
          </div>
        ))}
      </div>
      <div
        className={`md:mt-4 md:p-5 hidden sm:block sm:mt-[-10px] sm:flex sm:p-3 sm:w-10/12 h-24 lg:w-10/12 mx-auto bg-white text-white md:w-11/12 lg:mt-10 lg:flex xl:w-8/12 items-center gap-x-3 `}
      >
        <img
          src="/didnt_find.png"
          width={74}
          height={20}
          className="p-3 ml-2 md:pl-0"
        />
        <p className="text-customBlue font-bold md:w-8/12 lg:w-9/12 sm:text-sm lg:text-lg">
          {topics?.topics_contact_description}
        </p>
        <Link
          href="/contact-us"
          className="sm:w-40 shadow-md rounded-md text-customBlue bg-[var(--yellow)] w-44 p-3 font-bold text-center"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
