import '@/styles/globals.css'
import PlausibleProvider from "next-plausible";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function App({ Component, pageProps }) {
  return <PlausibleProvider domain="platformable.com" enabled taggedEvents trackFileDownloads>
    <div className={poppins.className} >
       <Component {...pageProps} />

    </div>
  </PlausibleProvider>
}
