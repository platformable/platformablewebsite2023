import React from 'react'

export default function ListItemCard({item_description}) {
  const {list_item_card_text, list_item_card_img} = item_description
  return (
    <div className='bg-white rounded-xl shadow-md py-5 px-7 min-h-full flex flex-col lg:flex-row items-center gap-5'>
        <img src={list_item_card_img?.data?.attributes.url} alt={list_item_card_text} className='lg:w-24 lg:h-20'/>
        <p className='font-medium'>{list_item_card_text}</p>
    </div>
  )
}
