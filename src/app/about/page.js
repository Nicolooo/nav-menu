'use client';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import Header from '../../components/header';
import Switcher from '../../components/lang/lang';
import Footer from '../../components/footer/Footer';

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
        <>
        <Header menuLang="en" />
        <Switcher title="Ge" link="/ge/about" />
        <main className={styles.about}>
            <section className={styles.hero}>
                <motion.h1 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                >
                    About Us
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
                        <img src="/Photos/LEL_4462.jpg" alt="Vake Plaza Exterior" />
                    </motion.div>
                    <motion.div 
                        className={styles.imageWrapper}
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                    >
                        <img src="/Photos/DJI_1759.jpg" alt="Vake Plaza Interior" />
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
                            title: "ACCESSIBILITY",
                            description: "Totally adjusted to people with mobility impairment"
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
                        We are dedicated to providing businesses with more than just office area. 
                        Vake Plaza offers a comprehensive ecosystem where companies can grow, 
                        collaborate, and achieve their full potential in an environment designed 
                        for success.
                    </p>
                </motion.div>
            </section>
        </main>
        <Footer />
        </>
    );
}
