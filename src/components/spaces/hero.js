// react functional component
import styles from './styles.module.scss'

export default function Hero({title}) {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                    <h1 className={styles.title}>{title}</h1>
            </div>
        </main>
    )
}