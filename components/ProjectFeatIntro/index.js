import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectFeatIntro.module.css";

export default function ProjectFeatIntro({ 
  name, 
  duration, 
  role, 
  tools }) {
  return (
    <>
      <section className={styles.container}>
        <Link href="/projects" className={styles.backLink}>
          ←
        </Link>
        <div className={styles.content}>
          <h1>{name}</h1>
          <div className={styles.details}>
            <div className={styles.colLeft}>
              <h6>DURATION</h6>
              <p>{duration}</p>
              <h6>ROLE</h6>
              <p>{role}</p>
            </div>
            <div className={styles.colRight}>
              <h6>TOOLS</h6>
              <p>{tools}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
