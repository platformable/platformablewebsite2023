import CheckIcon from "../CheckIcon";
import { InlineWidget } from "react-calendly";
export default function Hero({data}) {
    return (
        <section id="new-hero-home" className="bg-gradient-to-b from-[#5E2AED] to-[#2F1BBB] bg-cover relative overflow-hidden pt-14 md:pt-20 pb-10">
      <div className="container mx-auto grid lg:grid-cols-2 gap-y-5 lg:gap-x-10" >
        <article className="text-white">
        <h1 className={`text-lg mb-3  font-bold`} >{data?.hero?.smallHeadline}</h1>
            <h2 className="font-bold mb-5 leading-tight" >
             {data?.hero?.headline}
            </h2>
            <p className="text-2xl" >
              {data?.hero?.subHeadline}
            </p>
        
            <ul className="flex flex-col gap-6 my-10">
                {data?.hero?.options?.map((option, index) => (
                        <li className="flex items-center gap-x-4 text-xl font-medium" key={index}>  <CheckIcon backgroundColor="#FD27FF"/>{option?.option}</li>
                ))}
            </ul>
       </article>
        
       {/* calendly */}
       <div className="bg-white rounded-xl p-3">
       <InlineWidget url="https://calendly.com/platformable" 
       styles={{
        height: '100%',
      }}
       />
       </div>

        
      </div>
    </section>
    );
}
