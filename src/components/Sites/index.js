'use client'
import styles from './style.module.scss'
import Project from './projects';

export default function Index({lang}) {

  const projectsEN = [
    {
      title1: "Meeting",
      title2: "rooms",
      src: "/images/z.png",
      link: "/contact"
    },
    {
      title1: "Detailing",
      title2: "Services",
      src: "/images/orfe.jpg",
      link: "https://www.facebook.com/Theparki"
    },
    {
      title1: "Boxing Club",
      title2: "",
      src: "/images/box.JPG",
      link: "https://12rounds.ge/en"
    },
    {
      title1: "Parking",
      title2: "",
      src: "/images/park.png",
      link: "/parking"
    },
    {
      title1: "Chargers",
      title2: "",
      src: "/images/ev.png",
      link: "/ev"
    },
  ]



  const projectsGE = [
    {
      title1: "შეხვედრის",
      title2: "ოთახები",
      src: "/images/z.png",
      link: "/ge/contact"
    },
    {
      title1: "დითეილინგ",
      title2: "სერვისები",
      src: "/images/orfe.jpg",
      link: "https://www.facebook.com/Theparki"
    },
    {
      title1: "12 რაუნდი",
      title2: "",
      src: "/images/box.JPG",
      link: "https://12rounds.ge/en"
    },
    {
      title1: "პარკინგი",
      title2: "",
      src: "/images/park.png",
      link: "/ge/parking"
    },
    {
      title1: "ელ",
      title2: "დამტენი",
      src: "/images/ev.png",
      link: "/ge/ev"
    },
    
  ]

  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
        <p className={styles.title}>{lang === 'en' ? 'Services' : 'სერვისები'}</p>
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
