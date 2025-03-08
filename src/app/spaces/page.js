"use client"
import styles from './styles.module.scss'
import Hero from '@/components/spaces/hero'
import Double from '@/components/double';
import { projects as data } from '@/app/data'
export default function Index() {
    return (
        <div className={styles.main}>
        <Hero/>
        <div className={styles.gallery}>
            <Double projects={[data[0], data[1]]}/>
            <Double projects={[data[2], data[3]]} reversed={true}/>
            <Double projects={[data[4], data[5]]}/>
            <Double projects={[data[6], data[7]]} reversed={true}/>
        </div>
       </div>
    )
}
