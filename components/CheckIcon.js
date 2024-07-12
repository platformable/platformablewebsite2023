import React from 'react'

export default function CheckIcon({backgroundColor = '#5B24EC'}) {
  return (
    <div className="rounded-full h-8 w-8 flex items-center justify-center" style={{backgroundColor: backgroundColor}}>
      <img src="/check_icon.svg" alt="platformable-icon" />
    </div>
  )
}
