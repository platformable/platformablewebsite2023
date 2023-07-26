import React from 'react'

export default function PrivacyPolicy({data}) {
  return (
    <>
    <div className='container mx-auto py-16 grid gap-10'>
      <div className='flex gap-5'>
        <img src="/icon_section_black.svg" alt="" />
        <h4 className='font-bold'>Our Privacy Policy</h4>
      </div>
      <p className=''>Platformable is committed to managing people´s data responsibly. Check out our Privacy Policy</p>
      <p className='underline font-black'>Check out our Privacy Policy</p>
    </div>
    <section id="Partner" className='bg-[#F4F1FF] py-20'>
      <div className='container mx-auto flex flex-col md:flex-row gap-y-10 md:gap-x-7 lg:gap-x-16 2xl:gap-x-20'>
          <img src="/migracode.png" alt="Migracode image"/>
          <div
                dangerouslySetInnerHTML={{
                  __html: data?.partner_description,
                }}
              />
      </div>
    </section>
    </>
  )
}
