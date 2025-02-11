"use client";
import styles from "../styles/Page.module.css";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";
import FeatureImage from "../../components/FeatureImage";

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
            <FeatureImage
              projectName="Civica"
              type={
                <>
                  MOBILE APP <br />
                  <br />
                  <br />
                  <span className={styles.chip}>Case Study</span>
                </>
              }
              src="/images/landing-page/c.png"
              altText="Civica mockup"
              href="/projects/civica"
            />
            <FeatureImage
              projectName="Budding Writers"
              type="WORDPRESS WEBSITE"
              src="/images/landing-page/bw.png"
              altText="Budding Writers mockup"
              href="/projects/budding-writers"
            />
            <FeatureImage
              projectName="Tranquillity Cranes"
              type="MOBILE APP"
              src="/images/landing-page/tc.png"
              altText="Tranquillity Cranes mockup"
              href="/projects/tranquillity-cranes"
            />
            <FeatureImage
              projectName="Give Me Love"
              type="FILM POSTER"
              src="/images/landing-page/gml.png"
              altText="Give Me Love poster"
              href="/projects/give-me-love"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
