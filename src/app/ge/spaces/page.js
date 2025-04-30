"use client"
import styles from './styles.module.scss'
import Hero from '../../../components/spaces/hero'
import Double from '../../../components/double';
import { projects as data } from '../../dataGE'
import Image from 'next/image';
import Header from '../../../components/header';
import Switcher from '../../../components/lang/lang';
import Footer from '../../../components/footer/Footer';
export default function Index() {
    return (
        <>
        <Header menuLang="en" />
        <Switcher title="En" link="/spaces" />
        <div className={styles.main}>
        <Hero title="სივრცე"/>
        {/* GALLERY */}
        {/* 1 */}
        <div className={styles.gallery}>
                <div className={styles.double}>
                <div className={styles.imageContainer}>
                <div className={styles.stretchyWrapper}>
                    <Image 
                    src={`/spaces/${data[0].src}`}
                    fill={true}
                    alt={"image"}
                    />
                </div>
                <div className={styles.body}>
                    <h3>{data[0].name}</h3>
                    <p>{data[0].description}</p>
                    <p>{data[0].year}</p>
                </div>
                </div>
        
                <div className={styles.imageContainer}>
                <div className={styles.stretchyWrapper}>
                    <Image 
                    src={`/spaces/${data[1].src}`}
                    fill={true}
                    alt={"image"}
                    />
                </div>
                <div className={styles.body}>
                    <h3>{data[1].name}</h3>
                    <p>{data[1].description}</p>
                    <p>{data[1].year}</p>
                </div>
                </div>
        
            </div>
        </div>
       </div>
       {/* 2 */}
       <div className={styles.gallery}>

                <div className={styles.double}>
                <div className={styles.imageContainer}>
                <div className={styles.stretchyWrapper}>
                    <Image 
                    src={`/spaces/${data[2].src}`}
                    fill={true}
                    alt={"image"}
                    />
                </div>
                <div className={styles.body}>
                    <h3>{data[2].name}</h3>
                    <p>{data[2].description}</p>
                    <p>{data[2].year}</p>
                </div>
                </div>
        
                <div className={styles.imageContainer}>
                <div className={styles.stretchyWrapper}>
                    <Image 
                    src={`/spaces/${data[3].src}`}
                    fill={true}
                    alt={"image"}
                    />
                </div>
                <div className={styles.body}>
                    <h3>{data[3].name}</h3>
                    <p>{data[3].description}</p>
                    <p>{data[3].year}</p>
                </div>
                </div>
        
            </div>
        </div>
        {/* 3 */}
        <div className={styles.gallery}>
                <div className={styles.double}>
                <div className={styles.imageContainer}>
                <div className={styles.stretchyWrapper}>
                    <Image 
                    src={`/spaces/${data[4].src}`}
                    fill={true}
                    alt={"image"}
                    />
                </div>
                <div className={styles.body}>
                    <h3>{data[4].name}</h3>
                    <p>{data[4].description}</p>
                    <p>{data[4].year}</p>
                </div>
                </div>
        
                <div className={styles.imageContainer}>
                <div className={styles.stretchyWrapper}>
                    <Image 
                    src={`/spaces/${data[5].src}`}
                    fill={true}
                    alt={"image"}
                    />
                </div>
                <div className={styles.body}>
                    <h3>{data[5].name}</h3>
                    <p>{data[5].description}</p>
                    <p>{data[5].year}</p>
                </div>
                </div>
        
            </div>
        </div>
        {/* 4 */}
        <div className={styles.gallery}>
                <div className={styles.double}>
                <div className={styles.imageContainer}>
                <div className={styles.stretchyWrapper}>
                    <Image 
                    src={`/spaces/${data[6].src}`}
                    fill={true}
                    alt={"image"}
                    />
                </div>
                <div className={styles.body}>
                    <h3>{data[6].name}</h3>
                    <p>{data[6].description}</p>
                    <p>{data[6].year}</p>
                </div>
                </div>
        
                <div className={styles.imageContainer}>
                <div className={styles.stretchyWrapper}>
                    <Image 
                    src={`/spaces/${data[7].src}`}
                    fill={true}
                    alt={"image"}
                    />
                </div>
                <div className={styles.body}>
                    <h3>{data[7].name}</h3>
                    <p>{data[7].description}</p>
                    <p>{data[7].year}</p>
                </div>
                </div>
        
            </div>
        </div>
        {/* 5 */}
        <div className={styles.gallery}>
                <div className={styles.double}>
                <div className={styles.imageContainer}>
                <div className={styles.stretchyWrapper}>
                    <Image 
                    src={`/spaces/${data[8].src}`}
                    fill={true}
                    alt={"image"}
                    />
                </div>
                <div className={styles.body}>
                    <h3>{data[8].name}</h3>
                    <p>{data[8].description}</p>
                    <p>{data[8].year}</p>
                </div>
                </div>        
            </div>
        </div>
       
       <Footer />
       </>
    )
}