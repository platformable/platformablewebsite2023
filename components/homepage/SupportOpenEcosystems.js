import React from 'react'
import ListItemCard from '../ListItemCard'

export default function SupportOpenEcosystems({list_items_cards, title}) {
  return (
    <section className=' bg-green-medium py-10 text-[#2A2FC1]'>
      <div className='flex gap-x-5 items-center container mx-auto  mb-10'>
        <img src='/icon_section01.svg' alt="platformable logo" className='md:flex hidden'/>
        <h2 className='font-bold font-karla leading-8 md:leading-10 lg:leading-tight'>{title}</h2>

      </div>
      <div className='container mx-auto'>
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
