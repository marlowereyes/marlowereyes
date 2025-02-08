"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./ProjectFeatOverview.module.css";
import Link from "next/link";

export default function ProjectFeatIntro({ src, altText, overview, href, linkText }) {
  const [isVisible, setIsVisible] = useState(false);
  const overviewRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (overviewRef.current) {
      observer.observe(overviewRef.current);
    }

    return () => {
      if (overviewRef.current) {
        observer.unobserve(overviewRef.current);
      }
    };
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
        <div 
          ref={overviewRef} 
          className={`${styles.overview} ${isVisible ? styles.visible : ""}`}
        >
          <div className={styles.overviewText}>
            <h5>{overview}</h5>
            <Link href={href}>{linkText}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
