'use client';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';

const slideInFromLeft = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
};

const slideInFromRight = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
};

const slideInFromBottom = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
};

export default function About() {
    return (
        <main className={styles.about}>
            <section className={styles.hero}>
                <motion.h1 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                >
                    ABOUT US.
                </motion.h1>
            </section>

            <section className={styles.content}>
                <motion.div 
                    className={styles.textBlock}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                >
                    <h2>OUR VISION</h2>
                    <p>
                        Vake Plaza stands as a testament to modern architectural excellence and business innovation. 
                        Our vision is to create an environment where businesses can thrive in a space that combines 
                        functionality with aesthetic appeal.
                    </p>
                </motion.div>

                <motion.div 
                    className={styles.imageGrid}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                >
                    <motion.div 
                        className={styles.imageWrapper}
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                    >
                        <img src="/galleru/1.png" alt="Vake Plaza Exterior" />
                    </motion.div>
                    <motion.div 
                        className={styles.imageWrapper}
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                    >
                        <img src="/galleru/6.png" alt="Vake Plaza Interior" />
                    </motion.div>
                </motion.div>

                <motion.div 
                    className={styles.features}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                >
                    {[
                        {
                            title: "LOCATION",
                            description: "Strategically located in Vake, one of Tbilisi's most prestigious districts"
                        },
                        {
                            title: "DESIGN",
                            description: "Contemporary architecture with state-of-the-art facilities and amenities"
                        },
                        {
                            title: "SUSTAINABILITY",
                            description: "Committed to environmental responsibility and sustainable practices"
                        }
                    ].map((feature, index) => (
                        <motion.div 
                            key={index}
                            className={styles.feature}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.8, 
                                delay: 0.2 * index,
                                ease: [0.33, 1, 0.68, 1]
                            }}
                        >
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className={styles.textBlock}
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                >
                    <h2>OUR COMMITMENT</h2>
                    <p>
                        We are dedicated to providing businesses with more than just office space. 
                        Vake Plaza offers a comprehensive ecosystem where companies can grow, 
                        collaborate, and achieve their full potential in an environment designed 
                        for success.
                    </p>
                </motion.div>
            </section>
        </main>
    );
}
