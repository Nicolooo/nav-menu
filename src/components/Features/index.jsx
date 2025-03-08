'use client';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';

const features = [
    {
        title: "HVAC systems",
        description: "VRF systems for heating and cooling for each floor locally Mitsubishi Electric fancoil systems individually controllable office by office.",
    },
    {
        title: "Clean Water Supply",
        description: "Uninterrupted clean water supply with pumps and 20 Tone reservoir. Uninterruped power Supply (2000 kv.t power generator) and local in house power substation.",
    },
    {
        title: "Fire Security Systems",
        description: "Each Floor is equiped with 4 fire hydrants with uninterrupted water supply. Fire Alarm Systems Smokefree staircase with fire resistant furnishing.",
    }
];

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

export default function Features() {
    return (
        <div className={styles.features}>
            <h2 className={styles.title}>Technical Features</h2>
            <div className={styles.wrapper}>
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className={styles.card}
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                    >
                        <div className={styles.icon}>{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
} 