import { motion } from 'framer-motion';
import { opacity, slideLeft, mountAnim } from '../anim';
import styles from './style.module.scss';
import MenuLink from './link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const menu = [
  {
    title: "Home",
    description: "To See Everything",
    images: ['projects1.jpg', 'projects2.jpg'],
    href: "/"
  },
  {
    title: "Spaces",
    description: "Spaces inside the building",
    images: ['agence1.jpg', 'agence2.jpg'],
    href: "/spaces"
  },
  {
    title: "About",
    description: "About us",
    images: ['agence1.jpg', 'agence2.jpg'],
    href: "/about"
  },
  {
    title: "Contact",
    description: "To Send a FAX",
    images: ['contact1.jpg', 'contact2.jpg'],
    href: "/contact"
  }
]

export default function Menu({closeMenu}) {
  const router = useRouter();

  return (
    <motion.div className={styles.menu} variants={opacity} initial="initial" animate="enter" exit="exit">
        <div className={styles.header}>
          <motion.svg 
            variants={slideLeft} 
            {...mountAnim}
            onClick={closeMenu} 
            width="24" 
            height="24" 
            viewBox="0 0 68 68" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: 'pointer' }}
          >
              <path d="M1.5 1.5L67 67" stroke="black" strokeWidth="2"/>
              <path d="M66.5 1L0.999997 66.5" stroke="black" strokeWidth="2"/>
          </motion.svg>
        </div>

        <div className={styles.body}>
          {
            menu.map((el, index) => (
              <MenuLink data={el} index={index} key={index} closeMenu={closeMenu}/>
            ))
          }
        </div>
    </motion.div>
  )
}