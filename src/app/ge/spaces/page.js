"use client"
import styles from './styles.module.scss'
import Hero from '../../../components/spaces/hero'
import Double from '../../../components/double';
import { projects as data } from '../../../app/dataGE'
import Image from 'next/image';
import Header from '../../../components/header';
import Switcher from '../../../components/lang/lang';
import Footer from '../../../components/footer/Footer';
export default function Index() {
    return (
        <>
        <Header menuLang="ge" />
        <Switcher title="En" link="/spaces" />
        <div className={styles.main}>
        <Hero title="სივრცეები"/>
        <div className={styles.gallery}>
            <Double projects={[data[0], data[1]]}/>
            <Double projects={[data[2], data[3]]} reversed={true}/>
            <Double projects={[data[4], data[5]]}/>
            <Double projects={[data[6], data[7]]} reversed={true}/>
            <Double projects={[data[8], data[9]]}/>
        </div>
        {/* <div className={styles.interierImages}>
            <h3 className={styles.Intertitle}>Interier</h3>
            <Image src="/images/int1.png" alt="interier1" width={1000} height={450} />
            <Image src="/images/int2.png" alt="interier2" width={1000} height={450} />
            <Image src="/images/int3.png" alt="interier3" width={1000} height={450} />
            <Image src="/images/int4.png" alt="interier4" width={1000} height={450} />
        </div> */}
       </div>
       <Footer />
       </>
    )
}
