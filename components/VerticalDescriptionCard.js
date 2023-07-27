import React from 'react'
import styles from '@/styles/Homepage.module.css'
export default function VerticalDescriptionCard({card, position}) {
  const  {vertical_description_card_title, sector_values, vertical_description_card_button_text} = card
  return (
    <div className='rounded-2xl bg-white shadow-md p-7 grid md:grid-rows-[1.5fr_4fr_1fr] gap-5 '>
      <h6 className='font-bold '>{vertical_description_card_title}</h6>
      <ul id='sectors_value_list' className={styles.sectors_value_list}>
        {sector_values?.map((item, i) => (
            <p id='sectors-value' key={i}>{item.sector_value_text}</p>
        ))}
      </ul>
      <button data-card-number={position} className='text-white font-medium flex justify-around items-center gap-3 rounded-md px-4 py-2'>
        <div>
        <p>{vertical_description_card_button_text.split(' ')[0]}{' '}{vertical_description_card_button_text.split(' ')[1]}</p>
        </div>
        <img src="/icon_arrow_sec_02.svg" alt="go to solutions arros icon" />
      </button>
    </div>
  )
}
