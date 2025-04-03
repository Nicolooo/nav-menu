"use client"
import styles from './styles.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Index() {


    const fadeInUp = {
        initial: {
            y: 50,
            opacity: 0
        },
        animate: (index) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.1 * index,
                duration: 0.5,
                ease: [0.33, 1, 0.68, 1]
            }
        })
    };

    return (
        <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={0}
        >
            <main className={styles.main}>
                <div className={styles.imgContainer}>
                    <img src="/Photos/DJI_1759.jpg" alt="image" objectFit="cover"
          fill 
          className='imgas'/>      
                </div>
            </main>
        </motion.div>
    )
}