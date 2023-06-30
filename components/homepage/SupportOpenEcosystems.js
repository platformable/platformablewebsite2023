import React from 'react'
import ListItemCard from '../ListItemCard'

export default function SupportOpenEcosystems({list_items_cards, title}) {
  return (
    <section className='bg-green-medium py-10 text-[#2A2FC1]'>
      <div className='flex items-center   mb-10'>
        <img src='/icon_section01.png' alt="platformable logo" className='-ml-60 lg:-ml-52'/>
        <h2 className='font-bold font-karla '>{title}</h2>

      </div>
      <div className='px-5 xl:px-32'>
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
