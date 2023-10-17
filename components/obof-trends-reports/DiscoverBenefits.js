import React from 'react'

export default function DiscoverBenefits() {
  return (
    <div className="container mx-auto my-10">
      <div className="flex gap-x-5 items-center   py-10">
        <img
          src="/platformable-icon-white.svg"
          alt=""
          className="md:flex hidden"
        />
        <h3 className={`text-white  font-bold md:leading-10 leading-8 `}>
        Discover the benefits tailored just for you
        </h3>
      </div>

      <div
        id="discover-benefits-container"
        className="bg-white rounded-lg discover-benefits-container grid lg:grid-cols-[1fr_3fr] md:grid-cols-2  grid-cols-1 gap-y-5 "
      >
        <div className="discover-benefits-card-product  p-7 shadow-xl">
            <h5 className='font-bold text-white text-[#3425C9] text-center'>Banks</h5>

            <div className='flex justify-center mt-10'>
            <img src="/Banks.svg" alt="" />
            </div>

            <h6 className='text-[#3425C9] font-bold my-10'>Tailored for:</h6>
            <div className='flex gap-x-3 mb-5'>
                <img src="/tailored_check.svg" alt="" />
                <p className='text-[#3425C9]'>Traditional banks</p>
            </div>

            <div className='flex gap-x-3 mb-5'>
                <img src="/tailored_check.svg" alt="" />
                <p className='text-[#3425C9]'>Financial services corporation</p>
            </div>

<div className='flex justify-center mt-10'>
            <button className="rounded-md  bg-[var(--yellow)] px-7 py-2 shadow text-[var(--purple-medium)]">
                        <p>Buy now</p>
                      </button>
                      </div>

        </div>
        <div className="discover-benefits-card-description-main-container p-5 rounded-lg bg-[#F4F4FF]">
        <h5 className='font-bold text-white text-[#3425C9]'>Benefits</h5>
            <div className="discover-benefits-card-description-container grid lg:grid-cols-3 grid-cols-1 gap-x-5  gap-y-10 mt-10">
                <div className="discover-benefits-card-description">
                    <div className="flex gap-x-1 items-center ">
                    <div>
                    <img src="/benefits_check.svg" alt=""  className="self-start" width={24}/>
                    </div>    
                    <p className="text-[#3425C9] font-bold text-[17px]">Innovation Opportunities</p>
                    </div>
                    <p className="text-[#3425C9] mt-4">Identify new technologies and services for product development</p>
                </div>

                <div className="discover-benefits-card-description">
                    <div className="flex gap-x-1 items-center">
                        <div>
                    <img src="/benefits_check.svg" alt=""  className="self-start" width={24}/>
                    </div>
                    <p className="text-[#3425C9] font-bold text-[17px] ">Competitive Advantages</p>
                    </div>
                    <p className="text-[#3425C9] mt-4">Identify new technologies and services for product development</p>
                </div>

                <div className="discover-benefits-card-description">
                    <div className="flex gap-x-1 items-center">
                        <div>
                    <img src="/benefits_check.svg" alt=""  className="self-start" width={24}/>
                    </div>
                    <p className="text-[#3425C9] font-bold text-[17px]">Global Expansion</p>
                    </div>
                    <p className="text-[#3425C9] mt-4">Identify new technologies and services for product development</p>
                </div>


                <div className="discover-benefits-card-description">
                    <div className="flex gap-x-1 items-center">
                    <div>
                    <img src="/benefits_check.svg" alt=""  className="self-start" width={24}/>
                    </div>    
                    <p className="text-[#3425C9] font-bold text-[17px]">Innovation Opportunities</p>
                    </div>
                    <p className="text-[#3425C9] mt-4">Identify new technologies and services for product development</p>
                </div>

                <div className="discover-benefits-card-description">
                    <div className="flex gap-x-1 items-center">
                        <div>
                    <img src="/benefits_check.svg" alt=""  className="self-start" width={24}/>
                    </div>
                    <p className="text-[#3425C9] font-bold text-[17px] ">Competitive Advantages</p>
                    </div>
                    <p className="text-[#3425C9] mt-4">Identify new technologies and services for product development</p>
                </div>

                <div className="discover-benefits-card-description">
                    <div className="flex gap-x-1 items-center">
                        <div>
                    <img src="/benefits_check.svg" alt=""  className="self-start" width={24}/>
                    </div>
                    <p className="text-[#3425C9] font-bold text-[17px]">Global Expansion</p>
                    </div>
                    <p className="text-[#3425C9] mt-4">Identify new technologies and services for product development</p>
                </div>

                

            </div>

            <div className='flex justify-center font-bold mt-10 mb-5'><p className="mt-5 text-[#3425C9]">🚀 Explore by downloading the last version or the sample copy</p></div>
        </div>
      </div>
    </div>
  )
}
