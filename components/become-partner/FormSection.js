import CheckIcon from "../CheckIcon";
import BecomePartnerForm from "./BecomePartnerForm";
export default function FormSection({data}) {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    return (
        <section id="new-hero-home" className="bg-[#F2EDFF] relative overflow-hidden pt-14 md:pt-20 pb-10">
      <div className="container mx-auto grid lg:grid-cols-2 gap-y-5 lg:gap-x-10" >
        <article className="">
            <h2 className="font-bold mb-5 leading-tight" >
             {data?.hero?.headline}
            </h2>
            <p className="text-xl" >
              {data?.hero?.smallHeadline}
            </p>
        
            <ul className="flex flex-col gap-6 my-10">
                {data?.hero?.options?.map((option, index) => (
                        <li className="flex items-center gap-x-4 text-xl font-medium" key={index}>  <CheckIcon backgroundColor="#FD27FF"/>{option?.option}</li>
                ))}
            </ul>
       </article>
        
       <BecomePartnerForm apiKey={apiKey} />
       

        
      </div>
    </section>
    );
}
