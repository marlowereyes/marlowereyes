"use client";
import styles from "../styles/Page.module.css";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className={styles.intro}>
          <div className={styles.container}>
            <div className={styles.introText}>
              <h3>
                <span className={styles.redBold}>UX/UI & Graphic Designer</span>
                —unconventionally bringing stories to life through digital
                design, crafting impactful digital solutions with a unique
                perspective rooted in creativity and purpose.
              </h3>
              <Link href="/about" className={styles.link1}>
                Learn more about me ↗
              </Link>
            </div>
          </div>
        </section>
        <section className={styles.mockupVids}>
          <video className={styles.video} autoPlay loop muted playsInline>
            <source src="/images/landing-page/mock-vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
        <section className={styles.placeholderDisclaimer}>
          <div className={styles.container}>
            <p>This portfolio is currently under construction👷‍♀️🚧🧱 Check the projects page to see my current work!</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
