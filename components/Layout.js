import React from 'react'
import Header from './Header2'

export default function Layout({children}) {
  return (
  <>
  <Header/>
    <main>{children}</main>
  </>
  )
}
