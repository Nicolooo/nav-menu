'use client';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';

const featuresEN = [
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
        description: "Each Floor is equipped with 4 fire hydrants with uninterrupted water supply. Fire Alarm Systems; Smokefree staircase with fire resistant furnishing (walls, special glass partitions); Security Staircase with panic doors; Parking Space fully covered with sprinkler systems; Fire Resistant elevator.",
       

    },
    {
        title: "Parking",
        description: "Parking space for 1000 cars with 24/7 security and CCTV surveillance.",
    },
    {
        title: "Uninterrupted power supply",
        description: "Source of uninterrupted power supply - a 2,000 kW generator - and own high-voltage transformer",
    },
];
    const featuresGE = [
    {
        title: "გათბობა/კონდიცირება/ვენტილაცია",
        description: "სპეციალური აგრეგატები შენობაში სუფთა ჰაერის მოსაწოდებლად გათბობა-გაგრილების სისტემა Mitsubishi Electric-ის აგრეგატების მეშვეობით, რომელთა კონტროლი შესაძლებელია ინდივიდუალურად",
    },
    {
        title: "ელექტროენერგიით უწყვეტი მომარაგება",
        description: "უწყვეტი დენის წყარო - 2000 კვტ გენერატორი - და საკუთარი მაღალი ძაბვის ტრანსფორმატორი.",
    },
    {
        title: "სასმელი წყლით მომარაგება",
        description: "ქსელში წყლის შეწყვეტის ან წნევის ვარდნის შემთხვევაში გათვალისწინებულია 20 ტონიანი სუფთა წყლის რეზერვუარი, რომელიც უზრუნველყოფს სასმელი წლის უწყვეტ მიწოდებას.",
    },
    {
        title: "ხანძარსაწინააღმდეგო სისტემები",
        description: "4 სახანძრო ონკანი თითოეულ სართულზე, სპეციალური ავზით და სატუმბო სადგურით  • ავტომატური ხანძარქრობის ქსელი (სპრინკლერები) ავტოფარეხში  • სახანძრო აღმოჩენის სისტემა  • ჰაერის დაწნევის საშუალებით შეუბოლავი კიბის უჯრედი, რომელიც მოპირკეთებულია სპეციალური ცეცხმედეგი მასალებით და ტიხრებით  • დამატებით სახანძრო კიბე  • ცეცხლმედეგი ლიფტი",
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

export default function Features({lang}) {
    return (
        <div className={styles.features}>
            <h2 className={styles.title}>{lang === 'en' ? 'Technical Features' : 'ტექნიკური მონაცემები'}</h2>
            <div className={styles.wrapper}>
                {lang === 'en' ? featuresEN.map((feature, index) => (
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
                )) : featuresGE.map((feature, index) => (
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