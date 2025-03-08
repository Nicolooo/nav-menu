'use client';
import styles from './styles.module.scss';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.column}>
                   {/* get current year copyright */}
                   <p>© {new Date().getFullYear()} Vake Plaza</p>
                </div>
                <div className={styles.column}>
            <p>Built by bluemonk.</p>
            </div>
            </div>
        </footer>
    );
} 