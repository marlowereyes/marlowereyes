import styles from "./FeatureImage.module.css";
import Image from "next/image";
import Link from "next/link";

export default function FeatureImage({
    src,
    altText,
    projectName,
    type,
    href
}) {
  return (
    <>
    <Link href={href} className={styles.link}>
      <div className={styles.box}>
        <div className={styles.text}>
            <h2>{projectName}</h2>
            <h6>{type}</h6>
        </div>
        <Image className={styles.image} 
            src={src}
            alt={altText}
            width={1920}
            height={1080}
        />
      </div>
      </Link>
    </>
  );
}
