import CheckIcon from "../../CheckIcon"
import Link from "next/link"

export default function CTA({ data, colorScheme }) {
  console.log("cta data", data.pricing.price)
  return (
    <section
      className="py-10 md:py-14"
      style={{ background: colorScheme.pricing?.backgroundColor }}
    >
      <div className="container mx-auto flex flex-col gap-y-10 md:grid md: grid-cols-2 md:gap-24">
        <div className="flex flex-col justify-start md:py-14">
          <h3
            className="font-bold"
            style={{ color: colorScheme?.pricing?.headingTextColor }}
          >
            {data?.pricing?.heading}
          </h3>
          <h3
            className="font-bold"
            style={{ color: colorScheme?.pricing?.subheadingTextColor }}
          >
            {data?.pricing?.subheading}
          </h3>

          <h6
            className="mt-10"
            style={{ color: colorScheme?.pricing?.descriptionTextColor }}
          >
            {data?.pricing?.description}
          </h6>
        </div>
        <div className="rounded shadow-xl p-10 bg-white flex flex-col items-start gap-5">
          {/* <p className="flex items-center gap-3">
            <span
              className="text-5xl font-bold"
              style={{ color: colorScheme?.pricing?.mainColor }}
            >
              {data?.pricing?.price?.[0]?.price}
            </span>
            <span className=" text-3xl font-bold">
              {" "}
              / {data?.pricing?.price[0]?.billingFrequency}
            </span>
          </p> */}
          {/*    <div
            className="rounded-full px-3 md:px-6 py-2 text-[#6A39EE] font-bold"
            style={{
              backgroundColor: colorScheme?.pricing?.mainColor + "30",
              color: colorScheme?.pricing?.mainColor,
            }}
          >
            {data?.pricing?.price?.[0]?.discountText}
          </div> */}
          <ul id="product-items" className="list-style-none grid gap-4 ">
            {data?.pricing?.price?.[0]?.description?.map((item, index) => (
              <li
                className="text-base py-3 flex gap-x-5 items-center"
                key={index}
              >
                <CheckIcon />
                {item?.list_card_description_options}
              </li>
            ))}
          </ul>
          <div className="flex flex-col md:flex-row gap-5 md:grid md:grid-cols-2 w-full">
            {/*  <a
              href={data?.pricing?.price[0]?.callToActionMainUrl}
              className=""
              target="_blank"
            >
              <button
                className={` px-3 py-2 shadow w-full rounded-md text-white`}
                style={{
                  backgroundColor:
                    data?.pricing.price[0]?.callToActionMainBgColor,
                  border: `1px solid ${data?.pricing?.price[0]?.callToActionMainBorderColor}`,
                }}
              >
                <p
                  className="text-[18px] font-bold"
                  style={{
                    color: data?.pricing?.price[0]?.callToActionMainTextColor,
                  }}
                >
                  {data?.hero?.primaryCallToAction}
                </p>
              </button>
            </a> */}
            <Link
              href="/contact-us"
              className={` px-3 py-2 shadow w-full rounded-md text-white`}
              style={{
                backgroundColor:
                  data?.pricing.price[0]?.callToActionMainBgColor,
                border: `1px solid ${data?.pricing?.price[0]?.callToActionMainBorderColor}`,
              }}
            >
              <p
                className="text-[18px] font-bold text-center"
                style={{
                  color: data?.pricing?.price[0]?.callToActionMainTextColor,
                }}
              >
                Contact us
              </p>
            </Link>
            <a
              href={data?.pricing?.price[0]?.callToActionSecondaryUrl}
              className=""
            >
              <button
                className="rounded-md shadow w-full px-3 py-2 "
                style={{
                  border: `1px solid ${data?.pricing?.price[0]?.callToActionSecondaryBorderColor}`,
                  backgroundColor:
                    data?.pricing.price[0]?.callToActionSecondaryBgColor,
                }}
              >
                <p
                  className="text-[18px]"
                  style={{
                    color:
                      data?.pricing?.price[0]?.callToActionSecondaryTextColor,
                  }}
                >
                  {data?.hero?.secondaryCallToAction}
                </p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
