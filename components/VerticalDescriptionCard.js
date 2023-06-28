import React from 'react'
import styles from '@/styles/Homepage.module.css'
export default function VerticalDescriptionCard({sector, position}) {
  const  {vertical_description_card_title, vertical_description_card_text, vertical_description_card_button_text} = sector
  return (
    <div className='rounded-xl bg-white shadow-md p-7 grid grid-rows-[1.5fr_4fr_1fr] gap-5 font-karla'>
      <h4 className='font-medium'>{vertical_description_card_title}</h4>
      <ul id='sectors_value_list' className={styles.sectors_value_list}>
        {vertical_description_card_text?.map((item, i) => (
          <div className='flex gap-3 items-center' key={i}>
            <p className=''>+</p>
            <h6 id='sectors-value'>{item}</h6>
          </div>
        ))}
      </ul>
      <button data-card-number={position} className='text-[30px] text-white font-medium flex justify-around items-center gap-3 rounded-sm px-7 py-2'>
        {vertical_description_card_button_text}
        <img src="/icon_arrow_sec_02.svg" alt="go to solutions arros icon" />
      </button>
    </div>
  )
}
