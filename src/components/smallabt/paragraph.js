import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './style.module.scss';
import Btn from '../btn/btn';
import { useState } from 'react';
export default function Paragraph({paragraph, lang}) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const [modal, setModal] = useState({active: false, index: 0})
  return (
    <div className={styles.paragraphContainer}>
      <motion.p 
          ref={container}         
          className={styles.paragraph}
          style={{opacity}}
        >
          {paragraph}
        </motion.p>

      <Btn>
      {lang === 'en' ? 'READ MORE' : 'მეტის ნახვა'}
      </Btn>
      </div>
  )
}