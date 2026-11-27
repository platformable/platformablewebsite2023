import Header from "./Header"
import Footer from "./Footer"
import Script from "next/script"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Script
        src="https://analytics.platformable.com/track.js"
        data-site-id="platformable-website-9ba03ce8"
        strategy="afterInteractive"
      />
      <Footer />
    </>
  )
}
