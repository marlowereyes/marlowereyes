import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectFeatIntro.module.css";

export default function ProjectFeatIntro({
  name,
  type,
  paragraph,
  href,
  hrefText,
  src,
  altText,
}) {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <Link href="/projects" className={styles.backLink}>
              ←
            </Link>
            <div className={styles.text}>
              <h2>{name}</h2>
              <h6>{type}</h6>
              <p>{paragraph}</p>
              <Link href={href}>{hrefText}</Link>
            </div>
          </div>
          <Image
            src={src}
            width={500}
            height={700}
            alt={altText}
            className={styles.image}
          />
        </div>
      </section>
    </>
  );
}
