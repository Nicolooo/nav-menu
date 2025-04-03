"use client"
import styles from './styles.module.scss'
import { useState} from 'react';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import StickyCursor from '../components/StickyCursor'
import Hero from '../components/Hero';
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/preloader';
import SmallAbout from '../components/smallabt/paragraph';
import Sites from '../components/Sites';
import ImageSl from '../components/imageSl';
import Statistics from '../components/Statistics';
import Features from '../components/Features';
import Header from '../components/header';
import BlogGrid from '../components/BlogGrid';
import Switcher from '../components/lang/lang';
import Footer from '../components/footer/Footer';
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])
   
  return (
    <>
    <Header menuLang="en" />
    <Switcher title="GE" link="/ge" />
    <main className={styles.main}>
       <StickyCursor/>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero title="MORE THAN JUST ANOTHER OFFICE SPACE"/>
      <ImageSl/>
      <Statistics lang="en"/>
      <SmallAbout paragraph="Vake Plaza stands as a testament to modern architectural excellence and business innovation. Our vision is to create an environment where businesses can thrive in a space that combines functionality with aesthetic appeal."
      lang="en"
      />
      <Features lang="en"/>
      <Sites lang="en"/>
      <Footer />
    </main>
    </>
  )
}
