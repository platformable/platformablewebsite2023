import React from 'react'
import ListItemCard from '../ListItemCard'

export default function SupportOpenEcosystems({list_items_cards, title}) {
  return (
    <section className='grid grid-cols-[1fr_6fr_1fr] bg-green-medium py-10 text-[#2A2FC1]'>
      <div className='flex items-start  mb-10'>
        <img src='/icon_section01.png' alt="platformable logo" className=''/>


      </div>
      <div className=''>
      <h2 className='font-bold font-karla mb-10'>{title}</h2>
        <div className='grid grid-cols lg:grid-rows-4 lg:grid-cols-2 gap-10 lg:gap-10  lg:gap-y-8'>
          {
            list_items_cards && 
            list_items_cards?.map((item, i) => (
              <ListItemCard item_description={item} key={i}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}
