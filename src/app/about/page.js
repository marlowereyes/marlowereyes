"use client";
import Header from "../../../components/Header";
import SectionTitle from "../../../components/SectionTitle";
import Footer from "../../../components/Footer";
import styles from "../../styles/About.module.css";
import Image from "next/image";
import Link from "next/link";
import CardFlip from "../../../components/CardFlip";

export default function About() {
  return (
    <>
      <Header />
      <main>
        <SectionTitle title="ABOUT" />
        <section className={styles.intro}>
          <div className={styles.greeting}>
            <h2>What's Up!</h2>
            <Image
              src="/images/about/me.jpg"
              width={1000}
              height={1000}
              alt="Marlowe about photo"
              className={styles.imageMe}
            />
          </div>
          <div className={styles.aboutText}>
            <h3>I’m Marlowe, a UX/UI & Graphic Designer</h3>
            <p>
              Rooted in my dance background, storytelling is at the heart of my
              work. I create graphic designs that evoke emotional depth and
              UI/UX solutions that are user-focused. Leveraging my design
              skills, I craft seamless digital experiences that balance
              functionality, creativity, and accessibility across web and mobile
              platforms.
              <br />
              <br />I pride myself on being highly organized and an effective
              communicator, enabling me to collaborate seamlessly with teams. I
              strive to foster clarity and alignment in every project I
              contribute to, helping to bring your vision to life. Additionally,
              I am detail-oriented, consistently refining my work to ensure that
              every element serves a purpose and enhances the user experience.
            </p>
            <div className={styles.externalLinks}>
              <Link href="https://drive.google.com/file/d/1S6Vi8VhkQsW5-kKoq2ELPW8kn5fZSD3x/view?usp=sharing">My Resume ↗</Link>
              <Link href="/projects">View my work ↗</Link>
            </div>
          </div>
        </section>
        <section className={styles.truthsLie}>
          <div className={styles.container}>
            <h3>2 Truths 1 Lie</h3>
            <p>
              Play this game to get to know me better! Flip the card to reveal
              the correct answer...
            </p>
            <div className={styles.cardsContainer}>
              <CardFlip
                fact="I was on America's Got Talent"
                answer="TRUTH"
                srcVideo="/images/about/agt.mov"
              />
              <CardFlip
                fact="I was scouted by a K-pop agency"
                answer="TRUTH"
                srcImg="/images/about/sm.png"
              />
              <CardFlip
                fact="I taught my dog how to dance"
                answer="LIE"
                srcImg="/images/about/icancode.jpeg"
                backColor="var(--red-variant)"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
