import React from 'react'
import styles from  '@/styles/Homepage.module.css'
export default function ProductsServices({title, product_cards}) {
 
 
  return (
    <section className={`${styles.section_products_services} py-10`}>
      <div className='flex items-center  mb-10'>
        <img src='/icon_section01.png' alt="platformable logo" className='-ml-60 lg:-ml-52'/>

        <h2 className='text-[#2A2FC1] font-bold font-karla '>{title}</h2>
      </div>
        <div className='grid lg:grid-cols-2 container mx-auto  gap-10 xl:gap-10'>
         {
          product_cards && 
          product_cards?.map((card, i) => (
            <div className='grid shadow-lg grid-rows-[max(100px)_auto]' key={i}>
              <section className='bg-[#5B24EC] rounded-t-md flex justify-between items-center text-white px-5 md:px10 py-5'>
                <div className='flex items-center gap-2 md:gap-5'>
                    <img width={45} height={50} src={card?.list_card_description_img?.data?.attributes?.url} alt={`${card?.list_card_description_product_name} icon`}/>
                    <h6 className=''>{card?.list_card_description_product_name}</h6>
                </div>
                <button className='shadow-md flex items-center gap-2 border-white border rounded-lg  px-3 md:p-x5 py-2'>
                  <span className='text-white text-sm md:text-base'>{card?.list_card_description_button_text}</span>
                  <img src="/icon_arrow_sec_02.svg" alt={`know more about ${card?.list_card_description_product_name}`} className='w-3.5 md:w-7 lg:w-8'/>
                </button>
              </section>
              <section className={`${card?.list_card_description_is_costumizable? 'grid grid-rows-[4fr_1fr_4fr]' : 'flex items-start '}   gap-7 bg-white px-7 md:px-10 py-7 h-full rounded-b-md`}>
                <p className=''>{card?.list_card_description_description}</p>
                {card?.list_card_description_is_costumizable && (
                  <>
                  <div className='flex gap-2 items-center '>
                  <img src="/icon_customization.svg" alt="customization icon"/>
                  <span className='font-bold text-[#2B30C1]'>{card?.list_card_description_options}</span>
                  </div>  
                  <p>{card?.list_card_description_options_text}</p>
                  </>
                )}
              </section>
            </div>
          ))
         }
        </div>
    </section>
  )
}
