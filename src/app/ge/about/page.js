'use client';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import Header from '../../../components/header';
import Switcher from '../../../components/lang/lang';
import Footer from '../../../components/footer/Footer';

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
        <Header menuLang="ge" />
        <Switcher title="En" link="/about" />
        <main className={styles.about}>
            <section className={styles.hero}>
                <motion.h1 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                >
                    ჩვენ შესახებ
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
                    <h2>ჩვენი ხედვა</h2>
                    <p>
                    ვაკე პლაზა თანამედროვე არქიტექტურის თვალსაჩინო ნიმუშია. ჩვენი ხედვაა, შევქმნათ გარემო, სადაც ბიზნესი განვითარდება ისეთ სივრცეში, რომელიც აერთიანებს ფუნქციურობას და ესთეტიკურ მიმზიდველობას.
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
                            title: "მდებარეობა",
                            description: "მდებარეობს თბილისის ერთ-ერთ პრესტიჟულ უბანში - ვაკეში"
                        },
                        {
                            title: "დიზაინი",
                            description: "თანამედროვე არქიტექტურული და ინჟინრული გადაწყვეტები"
                        },
                        {
                            title: "მისადგომობა",
                            description: "მთლიანად მორგებულია ადამიანებზე, რომელთაც დაქვეითებული აქვთ გადაადგილების უნარი"
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
                    <h2>ჩვენი ვალდებულება</h2>
                    <p>
                    სამუშაო პროცესში თქვენთვის კომფორტის შექმნა ჩვენი პრიორიტეტია. ჩვენ მიზანია კომპანიებს შევთავაზოთ უფრო მეტი, ვიდრე უბრალოდ საოფისე ფართი. ვაკე პლაზა მომხმარებლებს სთავაზობს კომპლექსურ ეკოსისტემას. 
                    </p>
                </motion.div>
            </section>
        </main>
        <Footer />
        </>
    );
}
