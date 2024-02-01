import Link from "next/link";

export default function BannerLMS() {
    return (
        <div
      id="bannerLMS"
      className="hidden md:flex w-full text-white"
    >
      <div className="w-[65%] py-5 flex flex-col-reverse lg:flex-row gap-5 justify-center pl-32 max-lg:pr-10 items-center">
          <div>

            <span className="font-bold text-[23px]">Ready to Elevate Your Expertise?</span>
          </div>
      </div>
      <div className="w-full py-5 flex gap-5 justify-center pr-32 items-center">
        
          <div className="text-[var(--purple-medium-dark)] text-[23px]">
            <span className="opacity-90">Join the</span>{' '}
            <span className="font-bold ">Platformable</span>{' '}
            <span className="opacity-90">Learning Academy</span>

          </div>
          <Link href='https://academy.platformable.com/'>
              <button className="bg-[var(--purple-medium-dark)] px-7 py-2 shadow rounded-md">
                <span>NOW!</span>
              </button>
            </Link>
      </div>
          
    </div>



    );
}
