
import styles from './styles.module.scss'
import Project from './project';
import Header from '../../../components/header';
import Switcher from '../../../components/lang/lang';
export default function EV() {

  const projectsEN = [
    {
      title1: "Greencharge",
      title2: "",
      src: "/images/z.png",
      link: "https://greencharge.ge/en/"
    },
    {
      title1: "E-space",
      title2: "",
      src: "/images/orfe.jpg",
      link: "https://e-space.ge/en/application/"
    },
    {
      title1: "Cplus",
      title2: "",
      src: "/images/box.JPG",
      link: "https://cplus.ge/"
    },
  ]

  return (
    <>
    <Header menuLang="ge" />
    <Switcher title="En" link="/ev" />
    <main className={styles.main}>
      <div className={styles.gallery}>
        <p className={styles.title}>EV დამტენი</p>
        {
          projectsEN.map((project, index) => (
            <Project key={index} project={project} />
          ))
        }
      </div>
    </main>
    </>
  )
}
