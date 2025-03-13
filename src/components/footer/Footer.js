'use client';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <motion.div 
                    className={styles.copyright}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    © {currentYear} Vake Plaza | All rights reserved.
                </motion.div>
                <motion.div 
                    className={styles.trademark}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Built by BLUEMONK.
                </motion.div>
            </div>
        </footer>
    );
} 