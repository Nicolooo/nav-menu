import React from 'react'
import { useEffect, useRef } from 'react';
import styles from './style.module.scss';
import gsap from 'gsap';
import Magnetic from './magnetic';
import { useRouter } from 'next/navigation';
export default function Btn({children, backgroundColor="#fff", ...attributes}) {

  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  useEffect( () => {
    timeline.current = gsap.timeline({paused: true})
    timeline.current
      .to(circle.current, {top: "-25%", width: "150%", duration: 0.4, ease: "power3.in"}, "enter")
      .to(circle.current, {top: "-150%", width: "125%", duration: 0.25}, "exit")
  }, [])
  
  const manageMouseEnter = () => {
    if(timeoutId) clearTimeout(timeoutId)
    timeline.current.tweenFromTo('enter', 'exit');
  }

  const manageMouseLeave = () => {
    timeoutId = setTimeout( () => {
      timeline.current.play();
    }, 300)
  }
const router = useRouter();
  return (
    
    <Magnetic>
      <div className={styles.roundedButton} style={{overflow: "hidden"}} onMouseEnter={() => {manageMouseEnter()}} onMouseLeave={() => {manageMouseLeave()}} {...attributes}
        onClick={() => {
          router.push(attributes.href);
        }}
        >
          {
            children
          }
        <div ref={circle} style={{backgroundColor}} className={styles.circle}></div>
      </div>
    </Magnetic>
  )
}