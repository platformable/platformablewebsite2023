import React from 'react'

export default function ListItemCard({item_description}) {
  const {list_item_card_text, list_item_card_img} = item_description
  return (
    <div className='bg-white rounded-xl shadow-md p-4 flex gap-5'>
        <img src={list_item_card_img} alt={list_item_card_text} />
        <p className='font-medium'>{list_item_card_text}</p>
    </div>
  )
}
