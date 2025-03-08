"use client"
import styles from './styles.module.scss'
import Image from 'next/image'

export default function Index() {
    return (
        <main className={styles.main}>
            <img src="/images/front.png" alt="image" width={1000} height={1000} className='imgas'/>      
        </main>
    )
}