import Link from "next/link";

export default function EngagementTopics({ topics }) {
  console.log(topics);
  return (
    <div
      className={`lg:pb-20  min-h-screen bg-[var(--purple-medium)] pt-16 min-h-full md:min-h-full md:pb-20 `}
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
      <div className="container mx-auto flex flex-col justify-center gap-y-16 px-16 lg:flex lg:flex-row">
        {topics.services.slice(0, 3).map((topic, index) => (
          <div
            className="xl:px-20 text-white flex flex-1 flex-col items-center"
            key={index}
          >
            <img
              src={topic?.service_img.data?.attributes?.url}
              width={100}
              height={38}
              className="mb-2"
            />
            <p
              className={`px-10 md:px-44 lg:px-8 xl:px-0 text-center text-base`}
            >
              {topic?.service}
            </p>
          </div>
        ))}
      </div>
      <div className="container mx-auto flex flex-col justify-center gap-y-1 px-16 lg:flex lg:flex-row mt-14">
        {topics.services.slice(3, 7).map((topic, index) => (
          <div
            className={`xl:px-14 text-white flex flex-1 flex-col items-center mb-16 md:gap-3`}
            key={index}
          >
            <img
              src={topic?.service_img.data?.attributes?.url}
              width={100}
              height={38}
              className="mb-2"
            />
            <p
              className={`px-10 md:px-44 lg:px-8 xl:px-0 text-center text-base`}
            >
              {topic?.service}
            </p>
          </div>
        ))}
      </div>
      <div
        className={`md:mt-4 md:p-5 hidden sm:block sm:mt-[-10px] sm:flex sm:p-3 sm:w-10/12 h-24 lg:w-10/12 mx-auto bg-white text-white md:w-11/12 lg:mt-10 lg:flex xl:w-8/12 items-center gap-x-3`}
      >
        <img
          src="/didnt_find.png"
          width={74}
          height={20}
          className="p-3 ml-2"
        />
        <p className="text-customBlue font-bold md:w-8/12 lg:w-9/12 sm:text-sm lg:text-base xl:text-lg">
          {topics?.topics_contact_description}
        </p>
        <Link
          href="/contact-us"
          className=" shadow-md rounded-md text-customBlue bg-[var(--yellow)] w-44 p-3 font-bold text-center"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
