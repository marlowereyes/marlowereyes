"use client";
import styles from "../styles/Page.module.css";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className={styles.container}>
        <div className={styles.introText}>
          <p>
            <span className={styles.redBold}>UX/UI & Graphic Designer</span>{" "}
            bringing stories to life through UX/UI and graphic design, crafting
            impactful digital solutions with a unique perspective rooted in
            creativity and purpose.
          </p>
          <Link href="/about" className={styles.link1}>
            Learn more about me ↗
          </Link>
        </div>
          <p>This portfolio is under construction 👷‍♀️🚧🧱</p>
          <p>
            Check the Projects page to view the featured projects, Budding
            Writers & Tranquillity Cranes!
          </p>
        </div>
    </>
  );
}
