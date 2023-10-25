import Link from "next/link";
export default function BannerTop({ data }) {
  return (
    <div
      id="bannerTop"
      className="hidden md:block bg-[var(--purple-medium)] w-full "
    >
      <div className="container mx-auto py-5">
        <div className="flex justify-end">
          <div className=" max-lg:text-center">
            <h2 className="lg:-ml-28 text-white text-xl mb-3 lg:text-start font-bold">
              {data?.top_banner_text}

            </h2>
          <span className="mr-10 text-white 2xl:text-4xl text-[26px] font-bold">
          {data?.top_banner_product}

          </span>
            <Link href={data?.top_banner_button_url}>
              <button className="bg-[var(--yellow)] px-3 py-2 shadow rounded-md text-[var(--purple-medium)] w-56">
                <p>Know more</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
