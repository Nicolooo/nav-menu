'use client';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const stats = [
    {
        number: "24,500",
        suffix: " m2",
        label: "Total Area"
    },
    {
        number: "200",
        suffix: "+",
        label: "Parking Spaces"
    },
    {
        number: "1,000",
        suffix: " m2",
        label: "GLA Per Floor"
    },
    {
        number: "10,000",
        suffix: " m2",
        label: "GLA"
    }
];

const fadeIn = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: (index) => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.1 * index,
            duration: 0.5
        }
    })
};

function CountingNumber({ value, suffix }) {
    const [count, setCount] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);
    
    // Convert string number with commas to number
    const targetNumber = parseInt(value.replace(/,/g, ''));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        const duration = 2000; // 2 seconds duration

        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * targetNumber);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }, [isInView, targetNumber]);

    return (
        <span ref={ref}>
            {count.toLocaleString()}{suffix}
        </span>
    );
}

export default function Statistics() {
    return (
        <div className={styles.statistics}>
            <div className={styles.wrapper}>
                {stats.map((stat, index) => (
                    <motion.div 
                        key={index}
                        className={styles.statItem}
                        variants={fadeIn}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                    >
                        <h2>
                            <CountingNumber value={stat.number} suffix={stat.suffix} />
                        </h2>
                        <p>{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
} 