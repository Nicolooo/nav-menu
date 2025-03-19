'use client'
import styles from './style.module.scss'
import Project from './projects';

export default function Index() {

  const projects = [
    {
      title1: "Conference",
      title2: "spaces",
      src: "/images/zz.png",
      link: "/spaces"
    },
    {
      title1: "Meeting",
      title2: "rooms",
      src: "/images/z.png",
      link: "/spaces"
    },
    {
      title1: "Gym",
      title2: "",
      src: "/images/box.JPG",
      link: "https://12rounds.ge/en"
    },
    {
      title1: "Detailing",
      title2: "Services",
      src: "/images/cv.jpg",
      link: "/"
    },
  ]

  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
        <p className={styles.title}>Spaces</p>
        {
          projects.map((project, index) => (
            <Project key={index} project={project} />
          ))
        }
      </div>
    </main>
  )
}
