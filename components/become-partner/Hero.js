
import CheckIcon from "../CheckIcon";
export default function Hero({data}) {

  
  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#5E2AED] to-[#2F1BBB] text-center py-10 md:py-16 " >
      <div className="container mx-auto">
        <article className="text-white">
          <h1 className={`text-lg mb-3  font-bold`} >{data?.subheadline}</h1>
          <h2 className="font-bold mb-5" >
          {data?.headline}
          </h2>
          <h6>
          {data?.description}
          </h6>

        </article>
      
        <div className="flex flex-col md:flex-row  gap-14 justify-center mt-16">
          
          {data?.partnerType?.map((partner, index) => (
              <div className="grid basis-1/3" key={index}>
                <div className="p-6 text-left bg-[#F2EDFF] rounded-t-2xl">
                  <h7 className="text-[#FD27FF] font-medium">{partner?.label}</h7>
                  <h2 className="font-bold mt-3 text-3xl">{partner?.heading}</h2>
                </div>
                <div className="p-6 text-left bg-white rounded-b-2xl">
                  <p className="text-lg">{partner?.description}</p>

                  <ul className="flex flex-col gap-6 my-10">
                {partner?.options?.map((option, index) => (
                        <li className="flex items-center gap-x-4 text-lg font-medium" key={index}>  <CheckIcon backgroundColor="#FD27FF"/>{option?.option}</li>
                ))}
            </ul>
                </div>

                
              </div>
          ))}
          
        </div>
       
        
        
      </div>
    </section>
  );
}
