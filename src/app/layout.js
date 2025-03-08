import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/header';
import Footer from '../components/footer/Footer';
import StickyCursor from '../components/StickyCursor';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vake Plaza',
  description: 'Vake Plaza is a fully managed multifunctional Business Center, with modern facilities, conference venues and one of the largest parking space in the city.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <StickyCursor />
        {children}
        <Footer />
      </body>
    </html>
  )
}
