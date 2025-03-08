'use client'
import styles from './style.module.scss'
import Project from './projects';

export default function Index() {

  const projects = [
    {
      title1: "Conference",
      title2: "spaces.",
      src: "/images/zz.png"
    },
    {
      title1: "Meeting",
      title2: "rooms.",
      src: "/images/z.png"
    },
    {
      title1: "Movie",
      title2: "Theatre.",
      src: "/images/zzz.png"
    }
  ]

  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
        <p className={styles.title}>Spaces.</p>
        {
          projects.map((project, index) => (
            <Project key={index} project={project} />
          ))
        }
      </div>
    </main>
  )
}
