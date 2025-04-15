import { motion } from 'framer-motion';
import { opacity, slideLeft, mountAnim } from '../anim';
import styles from './style.module.scss';
import MenuLink from './link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const menu = [
  {
    title: "Home",
    description: "HOME PAGE",
    images: ['projects1.jpg', 'projects2.jpg'],
    href: "/"
  },
  {
    title: "Spaces",
    description: "WORK SPACES",
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
    title: "Design",
    description: "Design",
    images: ['agence1.jpg', 'agence2.jpg'],
    href: "/design"
  },
  {
    title: "Contact",
    description: "To Send a FAX",
    images: ['contact1.jpg', 'contact2.jpg'],
    href: "/contact"
  }
]
const menuGE = [
  {
    title: "მთავარი",
    description: "მთავარი გვერდი",
    images: ['projects1.jpg', 'projects2.jpg'],
    href: "/ge"
  },
  {
    title: "სივრცე",
    description: "შენობის სივრცეები",
    images: ['agence1.jpg', 'agence2.jpg'],
    href: "/ge/spaces"
  },
  {
    title: "ჩვენს შესახებ",
    description: "ჩვენს შესახებ",
    images: ['agence1.jpg', 'agence2.jpg'],
    href: "/ge/about"
  },
  {
    title: "დიზაინი",
    description: "დიზაინი",
    images: ['agence1.jpg', 'agence2.jpg'],
    href: "/ge/design"
  },
  {
    title: "კონტაქტი",
    description: "კონტაქტი",
    images: ['contact1.jpg', 'contact2.jpg'],
    href: "/ge/contact"
  }
]

export default function Menu({closeMenu, menuLang}) {
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
            menuLang === 'en' ?
            menu.map((el, index) => (
              <MenuLink data={el} index={index} key={index} closeMenu={closeMenu} menuLang={menuLang}/>
            ))
            :
            menuGE.map((el, index) => (
              <MenuLink data={el} index={index} key={index} closeMenu={closeMenu} menuLang={menuLang}/>
            ))
          }
        </div>
    </motion.div>
  )
}