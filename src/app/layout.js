import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/header';
import Footer from '../components/footer/Footer';
import StickyCursor from '../components/StickyCursor';
import Switcher from '../components/lang/lang';

export const metadata = {
  title: 'Vake Plaza',
  description: 'Vake Plaza is a fully managed multifunctional Business Center, with modern facilities, conference venues and one of the largest parking space in the city.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Switcher title="GE" link="/" />
        <StickyCursor />
        {children}
        <Footer />
      </body>
    </html>
  )
}
