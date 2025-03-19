'use client'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const anim = {
    initial: {width: 0},
    open: {width: "auto", transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
    closed: {width: 0}
}

export default function Project({project}) {
    const [isActive, setIsActive] = useState(false);

    if (!project) return null;

    const { title1 = '', title2 = '', src = '', link = '' } = project;

    return (
        <div onMouseEnter={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className={styles.project} onClick={() => {window.open(link, '_blank')}}>
            <p>{title1}</p>
            <motion.div variants={anim} animate={isActive ? "open" : "closed"} className={styles.imgContainer}>
                <img 
                    src={src} 
                    alt={`${title1} ${title2}`}
                />
            </motion.div>
            <p>{title2}</p>
        </div>
    )
}