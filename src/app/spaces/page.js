"use client"
import styles from './styles.module.scss'
import Hero from '@/components/spaces/hero'
import Double from '@/components/double';
import { projects as data } from '@/app/data'
import Image from 'next/image';
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
        {/* <div className={styles.interierImages}>
            <h3 className={styles.Intertitle}>Interier</h3>
            <Image src="/images/int1.png" alt="interier1" width={1000} height={450} />
            <Image src="/images/int2.png" alt="interier2" width={1000} height={450} />
            <Image src="/images/int3.png" alt="interier3" width={1000} height={450} />
            <Image src="/images/int4.png" alt="interier4" width={1000} height={450} />
        </div> */}
       </div>
    )
}
