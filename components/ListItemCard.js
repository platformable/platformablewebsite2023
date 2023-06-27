import React from 'react'

export default function ListItemCard({img_src, img_alt, item_description}) {
  return (
    <div className='bg-white rounded-xl shadow-md p-4 flex gap-5'>
        <img src={img_src} alt={img_alt} />
        <p className='font-medium'>lorem</p>
    </div>
  )
}
