import Link from "next/link";

export default function BannerHealthDataGov() {
    return (
        <div
      id="bannerTopTest"
      className="hidden md:flex w-full text-white"
    >
      <div className="w-full py-5 flex flex-col-reverse lg:flex-row gap-5 justify-center pl-32 max-lg:pr-10 items-center">
          <img src="/Health_Data_Governance_icon.svg" alt="banner-icon" className="max-2xl:w-[300px]"/>
          <div>
            <span className="opacity-80">Join our</span>
             <br/>
            <span className="font-bold text-[23px]">In-Person Training</span>
          </div>
      </div>
      <div className="w-full py-5 flex gap-5 justify-center pr-32 items-center">
        
          <div className="ml-10">
            <span className="opacity-80">New Thinking in</span>
             <br/>
            <span className="font-bold text-[23px]">Health Data Governance</span>
          </div>
          <Link href='/https://www.eventbrite.es/e/new-thinking-in-health-data-governance-tickets-750909639947?aff=oddtdtcreator'>
              <button className="bg-[var(--yellow)] px-3 py-2 shadow rounded-md text-[var(--purple-medium)] w-56">
                <p>Find out more</p>
              </button>
            </Link>
      </div>
          
    </div>



    );
}
