import React from 'react'
import styles from  '@/styles/Homepage.module.css'
export default function ProductsServices({title, product_cards}) {
  return (
    <section className={`${styles.section_products_services} py-10`}>
      <div className='flex gap-10  mb-10'>
        <img src='' alt="plat logo" width={100}/>
        <h2 className='text-[#2A2FC1] font-bold font-karla '>{title}</h2>
      </div>
        <div className='grid grid-cols-2 mx-32 gap-7 xl:gap-10'>
         {
          product_cards && 
          product_cards?.map(card => (
            <div className='flex flex-col shadow-lg'>
              <section className='bg-[#5B24EC] rounded-t-md flex justify-between items-center text-white px-10 py-5'>
                <div className='flex items-center gap-5'>
                    <img width={45} src={`${process.env.NEXT_PUBLIC_SERVER_URL}${card?.list_card_description_img?.data?.attributes?.url}`} alt={`${card?.list_card_description_product_name} icon`}/>
                    <h6>{card?.list_card_description_product_name}</h6>
                </div>
                <button className='shadow-md flex items-center gap-2 border-white border rounded-lg  px-5 py-2'>
                  <span className='text-white'>{card?.list_card_description_button_text}</span>
                  <img src="/icon_arrow_sec_02.svg" alt={`know more about ${card?.list_card_description_product_name}`}/>
                </button>
              </section>
              <section className={`${card?.list_card_description_is_costumizable? 'grid grid-rows-[4fr_1fr_4fr]' : 'flex items-start'}   gap-7 bg-white px-10 py-7 h-full rounded-b-md`}>
                <p className=''>{card?.list_card_description_description}</p>
                {card?.list_card_description_is_costumizable && (
                  <>
                  <div className='flex gap-2 items-center'>
                  <img src="" alt="customization icon"/>
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
