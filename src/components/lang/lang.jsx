import React from 'react'
import Link from "next/link"
import styles from './style.module.scss'
const Switcher = ({title,link}) => {
    return (
        <div className={styles.switcher}>
            <Link href={link}>
                <span>{title}</span>
                </Link>
        </div>
    )
}

export default Switcher

