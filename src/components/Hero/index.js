'use client'
import styles from './style.module.scss'
export default function Hero({title}) {

  return (
    <main className={styles.main}>
      <h1>{title}</h1>
    </main>
  )
}