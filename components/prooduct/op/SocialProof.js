import { useState, useRef } from "react";


export default function SocialProof({data}) {
  
    const slidesRef = useRef(null);
    const [current, setCurrent] = useState(0);
    const [sliderCounter, setSliderCounter] = useState(0)
    const [prev, setPrev] = useState(2);
    const [next, setNext] = useState(1);
  
    const gotoPrev = () =>
      current > 0
        ? gotoNum(current - 1)
        : gotoNum(slidesRef.current.childNodes.length - 1);
  
    // const gotoNext = () => (current < 2 ? gotoNum(current + 1) : gotoNum(0));
    const gotoNext = () => current === 0 ? gotoNum(1) : gotoNum(0);


    const gotoNum = (number) => {
      setCurrent(number);
      setPrev(number - 1);
      setNext(number + 1);
  
      // Create this variables because hooks states does not give the expected behaviour when update variables
      let curr = number;
      let pre = number === 0 ? 2 : number - 1;
      let nxt = number === 2 ? 0 : number + 1;
      
      
      for (let i = 0; i < slidesRef.current.childNodes.length ; i++) {
        slidesRef.current.childNodes[i].classList.remove("active");
        slidesRef.current.childNodes[i].classList.remove("prev");
        slidesRef.current.childNodes[i].classList.remove("next");
      }
      // if (prev == -1) {
      //   setPrev(2);
      // }
      // if (next == 3) {
      //   setNext(0);
      // }
  
      slidesRef.current.childNodes[curr]?.classList.add("active");
      slidesRef.current.childNodes[pre]?.classList.add("prev");
      slidesRef.current.childNodes[nxt]?.classList.add("next");
    };

  return (
   <>

    <section className=" py-10 md:py-14" style={{background:data.testimonials[0].testimonialSectionBgColor}}>
      {/* <div className="container mx-auto hidden md:block">
      <div className={`testimonials-items `} ref={slidesRef}>
          <div className={`testimonial-card active  md:w-[320px] lg:w-[500px]  p-10 bg-white rounded-xl`} style={{border:` 1px solid ${data?.testimonials[0]?.testimonialsCardBorderColor}`}}>
            <p>
                {data?.testimonials?.[current].text}

            </p>
            <div className="flex items-center gap-3">
                <img src={data?.testimonials?.[current]?.image?.data?.attributes?.url} alt="" className="rounded-full w-10 h-10 aspect-square" />
                <div>

                    <h5 className="font-bold text-sm" style={{color:`${data?.testimonials[0].nameColor}`}}>{data?.testimonials?.[current].name}</h5>
                    <small className="font-medium" style={{color:`${data?.testimonials[0].positionColor}`}}>{data?.testimonials?.[current].position}</small>

                </div>
            </div>
          </div>
          <div className={`testimonial-card next md:w-[320px] lg:w-[400px] p-10 bg-white rounded-xl`} style={{border:`1px solid  ${data?.testimonials[0]?.testimonialsCardBorderColor}`}}>
            <p className="text-[14px]"> 
                {data?.testimonials?.[0].text}
            </p>
            <div className="flex items-center gap-3">
                <img src={data?.testimonials?.[0]?.image?.data?.attributes?.url} alt="" className="rounded-full w-10 h-10 aspect-square" />
                <div>
                    <h5 className="font-bold text-sm" style={{color:`${data?.testimonials[0]?.nameColor}`}}>{data?.testimonials?.[0]?.name}</h5>
                    <small className="font-medium" style={{color:`${data?.testimonials[0]?.positionColor}`}}>{data?.testimonials?.[0]?.position}</small>
                </div>
            </div>
          </div> 
          
          <div className={`testimonial-card prev md:w-[320px] lg:w-[400px] p-10 bg-white rounded-xl`} style={{border:`1px solid ${data?.testimonials[0]?.testimonialsCardBorderColor}`}}>
            <p className="text-[14px]"> 
                {data?.testimonials?.[1].text}
            </p>
            <div className="flex items-center gap-3">
                <img src={data?.testimonials?.[1]?.image?.data?.attributes?.url} alt="" className="rounded-full w-10 h-10 aspect-square" />
                <div>
                    <h5 className="font-bold text-sm" style={{color:`${data?.testimonials[0]?.nameColor}`}}>{data?.testimonials?.[1]?.name}</h5>
                    <small className="font-medium" style={{color:`${data?.testimonials[0]?.positionColor}`}}>{data?.testimonials?.[1]?.position}</small>
                </div>
            </div>
          </div> 
          
        </div>
        <div className={`flex items-center justify-center gap-3 mt-5`}>
            <div className={`rounded-full bg-[#5E2AED] p-2`} onClick={gotoPrev}>
              <img
                className="w-[12px]"
                src="/left-arrow-carousel.svg"
                alt="left arrow"
              />
            </div>
            <div className={`rounded-full bg-[#5E2AED] p-2`} onClick={gotoNext}>
              <img
                className="w-[12px]"
                src="/right-arrow-carousel.svg"
                alt="right arrow"
              />
            </div>
          </div>
      </div> */}
      <div className="container mx-auto ">
      <div className={`grid grid-cols-2  gap-5 `} ref={slidesRef}>
          {/* <div className={`   p-10 bg-white rounded-xl`} style={{border:` 1px solid ${data?.testimonials[0]?.testimonialsCardBorderColor}`}}>
            <p>
                {data?.testimonials?.[2].text}
            </p>
            <div className="flex items-center gap-3">
                <img src={data?.testimonials?.[2]?.image?.data?.attributes?.url} alt="" className="rounded-full w-10 h-10 aspect-square" />
                <div>
                    <h5 className="font-bold text-sm" style={{color:`${data?.testimonials[0].nameColor}`}}>{data?.testimonials?.[2].name}</h5>
                    <small className="font-medium" style={{color:`${data?.testimonials[0].positionColor}`}}>{data?.testimonials?.[2].position}</small>
                </div>
            </div>
          </div> */}
          <div className={`flex flex-col justify-between p-10 bg-white rounded-xl`} style={{border:`1px solid  ${data?.testimonials[0]?.testimonialsCardBorderColor}`}}>
            <p className="text-[15px]">
                {data?.testimonials?.[0].text}
            </p>
            <div className="flex items-center gap-3 mt-5">
                <img src={data?.testimonials?.[0]?.image?.data?.attributes?.url} alt="" className="rounded-full w-10 h-10 aspect-square" />
                <div className="">
                    <h5 className="font-bold text-sm" style={{color:`${data?.testimonials[0].nameColor}`}}>{data?.testimonials?.[0].name}</h5>
                    <small className="font-medium" style={{color:`${data?.testimonials[0].positionColor}`}}>{data?.testimonials?.[0].position}</small>
                </div>
            </div>
          </div>
          
          <div className={`flex flex-col justify-between p-10 bg-white rounded-xl`} style={{border:`1px solid ${data?.testimonials[0]?.testimonialsCardBorderColor}`}}>
          <p className="text-[15px]">
                {data?.testimonials?.[1].text}
            </p>
            <div className="flex items-center gap-3 mt-5">
                <img src={data?.testimonials?.[1]?.image?.data?.attributes?.url} alt="" className="rounded-full w-10 h-10 aspect-square" />
                <div>
                    <h5 className="font-bold text-sm" style={{color:`${data?.testimonials[0].nameColor}`}}>{data?.testimonials?.[1].name}</h5>
                    <small className="font-medium" style={{color:`${data?.testimonials[0].positionColor}`}}>{data?.testimonials?.[1].position}</small>
                </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="container mx-auto md:hidden">
      <div className={`grid gap-5 mt-7 `} ref={slidesRef}>
          {/* <div className={`   p-10 bg-white rounded-xl`} style={{border:` 1px solid ${data?.testimonials[0]?.testimonialsCardBorderColor}`}}>
            <p>
                {data?.testimonials?.[2].text}
            </p>
            <div className="flex items-center gap-3">
                <img src={data?.testimonials?.[2]?.image?.data?.attributes?.url} alt="" className="rounded-full w-10 h-10 aspect-square" />
                <div>
                    <h5 className="font-bold text-sm" style={{color:`${data?.testimonials[0].nameColor}`}}>{data?.testimonials?.[2].name}</h5>
                    <small className="font-medium" style={{color:`${data?.testimonials[0].positionColor}`}}>{data?.testimonials?.[2].position}</small>
                </div>
            </div>
          </div> */}
          <div className={`  p-10 bg-white rounded-xl`} style={{border:`1px solid  ${data?.testimonials[0]?.testimonialsCardBorderColor}`}}>
            <p>
                {data?.testimonials?.[0].text}
            </p>
            <div className="flex items-center gap-3">
                <img src={data?.testimonials?.[0]?.image?.data?.attributes?.url} alt="" className="rounded-full w-10 h-10 aspect-square" />
                <div>
                    <h5 className="font-bold text-sm" style={{color:`${data?.testimonials[0].nameColor}`}}>{data?.testimonials?.[0].name}</h5>
                    <small className="font-medium" style={{color:`${data?.testimonials[0].positionColor}`}}>{data?.testimonials?.[0].position}</small>
                </div>
            </div>
          </div>
          
          <div className={` p-10 bg-white rounded-xl`} style={{border:`1px solid ${data?.testimonials[0]?.testimonialsCardBorderColor}`}}>
            <p>
                {data?.testimonials?.[1].text}
            </p>
            <div className="flex items-center gap-3">
                <img src={data?.testimonials?.[1]?.image?.data?.attributes?.url} alt="" className="rounded-full w-10 h-10 aspect-square" />
                <div>
                    <h5 className="font-bold text-sm" style={{color:`${data?.testimonials[0].nameColor}`}}>{data?.testimonials?.[1].name}</h5>
                    <small className="font-medium" style={{color:`${data?.testimonials[0].positionColor}`}}>{data?.testimonials?.[1].position}</small>
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
   </>
  );
}
