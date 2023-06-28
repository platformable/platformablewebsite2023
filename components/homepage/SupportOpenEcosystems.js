import React from 'react'
import ListItemCard from '../ListItemCard'
const items = [
  {
    list_item_card_text: 'Create datasets using data models and open standards',
    list_item_card_img: ''
  },
  {
    list_item_card_text: 'Create datasets using data models and open standards',
    list_item_card_img: ''
  },
  {
    list_item_card_text: 'Create datasets using data models and open standards',
    list_item_card_img: ''
  },
  {
    list_item_card_text: 'Create datasets using data models and open standards',
    list_item_card_img: ''
  },
  {
    list_item_card_text: 'Create datasets using data models and open standards',
    list_item_card_img: ''
  },
  {
    list_item_card_text: 'Create datasets using data models and open standards',
    list_item_card_img: ''
  },
  {
    list_item_card_text: 'Create datasets using data models and open standards',
    list_item_card_img: ''
  },
  {
    list_item_card_text: 'Create datasets using data models and open standards',
    list_item_card_img: ''
  },

]
export default function SupportOpenEcosystems({list_items_cards, support_open_ecosystems_title}) {
  return (
    <section className='bg-green-medium py-10 text-[#2A2FC1]'>
      <div className='flex gap-10  mb-10'>
        <img src='' alt="plat logo" width={100}/>
        <h2 className='font-bold font-karla '>{support_open_ecosystems_title}</h2>

      </div>
      <div className='px-32'>
        <div className='grid grid-rows-4 grid-cols-2 xl:gap-y-5 xl:gap-8'>
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
