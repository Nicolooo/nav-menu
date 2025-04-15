"use client"
import styles from './styles.module.scss'
import { useState} from 'react';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import StickyCursor from '../../components/StickyCursor'
import Hero from '../../components/Hero';
import { AnimatePresence } from 'framer-motion';
import Preloader from '../../components/preloader';
import SmallAbout from '../../components/smallabt/paragraph';
import Sites from '../../components/Sites';
import ImageSl from '../../components/imageSl';
import Statistics from '../../components/Statistics';
import Features from '../../components/Features';
import Header from '../../components/header';
import Switcher from '../../components/lang/lang';
import { projects as data } from '../avejiGe'
import DB from '../../components/db';
import Btn from '../../components/btn/btn';
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
    <Header menuLang="ge" />
    <Switcher title="EN" link="/" />
    <main className={styles.main}>
       <StickyCursor/>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero title="უფრო მეტი, ვიდრე უბრალოდ საოფისე ფართი"/>
      <ImageSl/>
      <Statistics lang="ge"/>
      <SmallAbout paragraph="ვაკე პლაზა მრავალფუნქციური ბიზნეს-ცენტრია, თანამედროვე საშუალებებით, საკონფერენციო დარბაზებით და ქალაქის ერთ-ერთი უდიდესი პარკინგით"/>
      <Features lang="ge"/>
      <div className={styles.projects}>
        <h2 className={styles.projectsTitle}>დიზაინი</h2>
      <DB projects={[data[0], data[1]]}/>
        <Btn>
         ვრცლად ნახვა
        </Btn>
      </div>
      <Sites lang="ge"/>

    </main>
    </>
  )
}
