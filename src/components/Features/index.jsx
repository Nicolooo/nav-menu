'use client';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';

const featuresEN = [
    {
        title: "HVAC systems",
        description: "HVAC Systems Each floor features VRF heating and cooling, with Mitsubishi Electric units allowing individual climate control for every office. ",
    },
    {
        title: "Clean Water Supply",
        description: "Uninterrupted clean water supply supported by pumps and a 20-ton reservoir.",
    },
    {
        title: "Fire Security Systems",
        description: "Each floor is equipped with four fire hydrants, an advanced fire alarm system, and smoke-free, fire-resistant staircases with panic doors. The parking area features a comprehensive sprinkler system, and the building includes a fire-resistant elevator for enhanced safety.",
    },
    {
        title: "Parking",
        description: "Over 230 parking spaces available, secured 24/7 with CCTV surveillance.",
    },
    {
        title: "Uninterrupted power supply",
        description: "Vake Plaza ensures continuous, reliable power with a 2,000 kW generator and an on-site high-voltage transformer.",
    },
];
    const featuresGE = [
    {
        title: "გათბობა/კონდიცირება/ვენტილაცია",
        description: "თითოეულ სართულზე დამონტაჟებულია VRF გათბობისა და გაგრილების სისტემები, ხოლო Mitsubishi Electric-ის ბლოკები იძლევა კლიმატის კონტროლის საშუალებას ინდივიდუალურად ყველა ოფისში.",
    },
    {
        title: "ხანძარსაწინააღმდეგო სისტემები",
        description: "თითოეულ სართულზე მოწყობილია ოთხი სახანძრო ჰიდრანტი, სახანძრო სიგნალიზაციის თანამედროვე სისტემა და კვამლშეუღწევადი ცეცხლმედეგი კიბეები „ანტიპანიკური“ კარებით. პარკინგის ტერიტორიაზე მოწყობილია კომპლექსური სპრინკლერების სისტემა, ხოლო შენობაში მაქსიმალური უსაფრთხოებისთვის დაყენებულია ცეცხლმედეგი ლიფტი.",
    },
    {
        title: "ელექტროენერგიით უწყვეტი მომარაგება",
        description: "„ვაკე პლაზა“ უზრუნველყოფს ელექტროენერგიით უწყვეტ, საიმედო მომარაგებას 2000 კვტ გენერატორის და მაღალი ძაბვის საკუთარი ტრანსფორმატორის მეშვეობით.",
    },
    {
        title: "სუფთა წყალი",
        description: "სუფთა წყლით უწყვეტი მომარაგება უზრუნველყოფილია ტუმბოებისა და 20 ტონიანი რეზერვუარის მეშვეობით.",
    },
    {
        title: "პარკინგი",
        description: "230-ზე მეტი ავტოსადგომი, დაცული 24/7 ვიდეო-მეთვალყურეობით.",
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