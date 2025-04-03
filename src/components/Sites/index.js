'use client'
import styles from './style.module.scss'
import Project from './projects';

export default function Index({lang}) {

  const projectsEN = [
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



  const projectsGE = [
    {
      title1: "საკონფერენციო",
      title2: "სივრცეები",
      src: "/images/zz.png",
      link: "/spaces"
    },
    {
      title1: "შეხვედრის",
      title2: "ოთახები",
      src: "/images/z.png",
      link: "/spaces"
    },
    {
      title1: "12 რაუნდი",
      title2: "",
      src: "/images/box.JPG",
      link: "https://12rounds.ge/en"
    },
    {
      title1: "დითეილინგ",
      title2: "სერვისები",
      src: "/images/cv.jpg",
      link: "/"
    },
  ]

  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
        <p className={styles.title}>{lang === 'en' ? 'Spaces' : 'სივრცეები'}</p>
        {
          lang === 'en' ? projectsEN.map((project, index) => (
            <Project key={index} project={project} />
          )) : projectsGE.map((project, index) => (
            <Project key={index} project={project} />
          ))
        }
      </div>
    </main>
  )
}
