"use client"
import styles from './styles.module.scss'
import Hero from '../../../components/spaces/hero'
import DB from '../../../components/db';
import { projects as data } from '../../avejiGe'
import Image from 'next/image';
import Header from '../../../components/header';
import Switcher from '../../../components/lang/lang';
import Footer from '../../../components/footer/Footer';
export default function Design() {
    return (
        <>
        <Header menuLang="en" />
        <Switcher title="Ge" link="/design" />
        <div className={styles.main}>
        <Hero title="დიზაინი"/>
        <div className={styles.gallery}>
            <DB projects={[data[0], data[1]]}/>
            <DB projects={[data[2], data[3]]} reversed={true}/>
            <DB projects={[data[4], data[5]]}/>
            <DB projects={[data[6], data[7]]} reversed={true}/>
            <DB projects={[data[8], data[9]]}/>
            <DB projects={[data[10], data[11]]}/>
            <DB projects={[data[12], data[13]]}/>
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
