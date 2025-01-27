import Image from "next/image";
import styles from "./ProjectFeatDetails.module.css";

export default function ProjectFeatIntro({ duration, role, tools, src, altText }) {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.innerContainer}>
          <Image
            src={src}
            alt={altText}
            width={500}
            height={500}
            className={styles.gif1}
          />
          <div className={styles.text}>
            <h6>DETAILS.</h6>
            <div className={styles.details}>
              <h4>Duration</h4>
              <p>{duration}</p>
              <h4>My Role</h4>
              <p>{role}</p>
              <h4>Tools</h4>
              <p>{tools}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
