import Link from "next/link";
import { useState, useRef } from "react";

export default function BlogCarousel({carouselData}) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(2);
  const [next, setNext] = useState(1);

  const slidesRef = useRef(null);

  const gotoPrev = () =>
    current > 0
      ? gotoNum(current - 1)
      : gotoNum(slidesRef.current.childNodes.length - 2);

  const gotoNext = () => (current < 2 ? gotoNum(current + 1) : gotoNum(0));

  const gotoNum = (number) => {
    setCurrent(number);
    setPrev(number - 1);
    setNext(number + 1);

    // Create this variables because hooks states does not give the expected behaviour when update variables
    let curr = number;
    let pre = number === 0 ? 2 : number - 1;
    let nxt = number === 2 ? 0 : number + 1;

    for (let i = 0; i < slidesRef.current.childNodes.length - 1; i++) {
      slidesRef.current.childNodes[i].classList.remove("active");
      slidesRef.current.childNodes[i].classList.remove("prev");
      slidesRef.current.childNodes[i].classList.remove("next");
    }
    if (prev == -1) {
      setPrev(2);
    }
    if (next == 3) {
      setNext(0);
    }

    slidesRef.current.childNodes[curr]?.classList.add("active");
    slidesRef.current.childNodes[pre]?.classList.add("prev");
    slidesRef.current.childNodes[nxt]?.classList.add("next");
  };
  return (
    <section className="overflow-hidden bg-[#F1EFFF]  text-center py-16">
      <div className="container mx-auto">
        <h2 className="font-bold text-[var(--purple-medium)] mb-5">
        {carouselData?.title}
        </h2>
        <h5 className="font-bold ">
        {carouselData?.[`step${current+1}`]}
        </h5>
        <div className={`items hidden md:block`} ref={slidesRef}>
          <div className={`item active p-10`}>
            {/* <div className="absolute bg-white rounded-[150px] w-[130px] h-[130px]  -ml-7 -mt-10  text-[#3822CC] font-bold flex flex-col justify-center">
              NEW <br /> version <br />{" "}
              <span className="font-medium">PDF+CSV</span>🚀
            </div> */}
            <img src={carouselData?.images?.data[2]?.attributes?.url} alt="" className="w-auto" />
          </div>
          <div className={`item next p-10`}>
            <img src={carouselData?.images?.data[0]?.attributes?.url} alt="" />
          </div>
          {/* <div className={`item`}>
            <img src="http://via.placeholder.com/500x500" alt="" />
          </div>
          <div className={`item`}>
            <img src="http://via.placeholder.com/500x500" alt="" />
          </div> */}
          <div className={`item prev p-10`}>
            <img src={carouselData?.images?.data[1]?.attributes?.url} alt="" />
          </div>
          <div className={`buttonContainer`}>
            <div className={`button`} onClick={gotoPrev}>
              <img
                className="w-[30px] mr-2"
                src="/left-arrow-carousel.svg"
                alt="left arrow"
              />
            </div>
            <div className={`button`} onClick={gotoNext}>
              <img
                className="w-[30px] ml-2"
                src="/right-arrow-carousel.svg"
                alt="right arrow"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-center mt-4">
          <p>{carouselData?.[`step${current+1}_description`]}</p>
          {/* <Link href={carouselData?.product_carousel_button}>
          <button className="bg-[var(--yellow)] px-3 py-2 shadow rounded-md text-[var(--purple-medium)] w-56">
            <p>Know more</p>
          </button>
          </Link> */}
          {/* <Link href={data?.free_sample_button}>
          <button className="rounded-md shadow bg-[var(--purple-light)] px-3 py-2 text-white w-56">
            <p>Free sample</p>
          </button>
          </Link> */}
          
        </div>
      </div>
    </section>
  );
}
