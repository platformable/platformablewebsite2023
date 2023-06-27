import React from 'react'
import ListItemCard from '../ListItemCard'

export default function SupportOpenEcosystems() {
  const support_open_ecosystems_title = 'How Platformable supports open ecosystems'
  const items = ['1', '2', '3','4', '5', '6', '7', '8']
  return (
    <section className='bg-green-medium '>
      <div className='flex gap-10  mb-10'>
        <img src='' alt="plat logo" width={100}/>
        <h2 className='text-[#2A2FC1] font-bold font-karla '>{support_open_ecosystems_title}</h2>

      </div>
      <div className='px-32'>
        <div className='grid grid-rows-4 grid-cols-2 xl:gap-y-5 xl:gap-8'>
          {
            items.map((item, i) => (
              <ListItemCard item_description={item} key={i}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}
