'use client'
import styles from './style.module.scss'
import Project from './projects';

export default function Index({lang}) {

  const projectsEN = [
    {
      title1: "Meeting",
      title2: "rooms",
      src: "/images/z.png",
      link: "/spaces"
    },
    {
      title1: "Detailing",
      title2: "Services",
      src: "/images/cv.jpg",
      link: "/"
    },
    {
      title1: "Gym",
      title2: "",
      src: "/images/box.JPG",
      link: "https://12rounds.ge/en"
    },
    {
      title1: "Parking",
      title2: "",
      src: "/images/front.png",
      link: "/spaces"
    },
    {
      title1: "Chargers",
      title2: "",
      src: "/images/front.png",
      link: "/spaces"
    },
  ]



  const projectsGE = [
    {
      title1: "შეხვედრის",
      title2: "ოთახები",
      src: "/images/z.png",
      link: "/spaces"
    },
    {
      title1: "დითეილინგ",
      title2: "სერვისები",
      src: "/images/cv.jpg",
      link: "/"
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
      src: "/images/front.png",
      link: "/ge/parking"
    },
    {
      title1: "EV",
      title2: "დამტენი",
      src: "/Photos/DJI_1759.jpg",
      link: "/ge/parking"
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
