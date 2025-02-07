"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./ProjectFeatOverview.module.css";
import Link from "next/link";

export default function ProjectFeatIntro({ src, altText, overview, href, linkText }) {
  useEffect(() => {
    const imageContainer = document.querySelector(`.${styles.imageContainer}`);
    const overviewContainer = document.querySelector(`.${styles.overviewContainer}`);

    const handleScroll = () => {
      const imageRect = imageContainer.getBoundingClientRect();
      const imageStuck = imageRect.top <= 0;

      if (imageStuck) {
        overviewContainer.classList.add(styles.showOverview, styles.stickyBottom);
      } else {
        overviewContainer.classList.remove(styles.showOverview, styles.stickyBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={styles.imageContainer}>
        <Image
          src={src}
          alt={altText}
          width={1920}
          height={1080}
          className={styles.image1}
        />
      </div>
      <section className={styles.overviewContainer}>
        <div className={styles.overview}>
          <p>{overview}</p>
          <Link href={href}>{linkText}</Link>
        </div>
      </section>
    </>
  );
}