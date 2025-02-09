import styles from "./HoverImage.module.css";
import Link from "next/link";
import Image from "next/image";

export default function HoverImage({
  href,
  src,
  name
}) {
  return (
    <div className={styles.container}>
      <Link href={href}>
        <Image src={src} width={1080} height={1350} alt="altText" className={styles.image} />
        <div className={styles.overlay}>
          <h3>{name}</h3>
        </div>
      </Link>
    </div>
  );
}
