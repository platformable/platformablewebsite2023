import '@/styles/globals.css'
import PlausibleProvider from "next-plausible";

export default function App({ Component, pageProps }) {
  return <PlausibleProvider domain="platformable.com" trackLocalhost enabled taggedEvents trackFileDownloads>
   <Component {...pageProps} />
  </PlausibleProvider>
}
