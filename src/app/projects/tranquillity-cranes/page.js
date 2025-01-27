import ProjectFeatIntro from "../../../../components/ProjectFeatIntro";
import ProjectFeatDetails from "../../../../components/ProjectFeatDetails";
import Image from "next/image";
import styles from "./tranquillity-cranes.module.css";

export default function BuddingWriters() {
  return (
    <>
      <ProjectFeatIntro
        name="Tranquillity Cranes"
        type="UX/UI DESIGN"
        paragraph="Many individuals experience stress, anxiety, and other mental health challenges, 
        often without easy access to professional help. Tranquility Cranes is an app and companion 
        designed to bridge this gap by providing users with a convenient platform to access resources, 
        learn coping techniques, and connect with a supportive community.  A team of 3 carefully 
        crafted this mobile app’s UX/UI with Figma, graphics with Illustrator and After Effects, and 
        developed it with with React—all with intention to aid those who are in need of mental health."
        href="https://tranquillity-cranes.vercel.app/"
        hrefText="View the site ↗"
        src="/images/tranquillity-cranes/tc1.png"
        altText="phone of tranquillity cranes login pages"
      />
      <ProjectFeatDetails
        src="/images/tranquillity-cranes/tc-vid1.gif"
        altText="loging in to tranquillity cranes app"
        duration="3 months"
        role="Graphic & UI Designer — Wireframing, Prototyping, Sitemap, Usability Testing, Vector character drawings, Motion graphics animation"
        tools={
          <>
            Figma <br />
            Adobe Illustrator <br />
            Adobe After Effects <br />
            Visual Studio Code – React, NextJS
          </>
        }
      />
      <div className={styles.imageGallery}>
        <Image
          src="/images/tranquillity-cranes/tc2.png"
          width={2000}
          height={700}
          alt="budding writers colour scheme"
          className={styles.image2}
        />
        <div className={styles.gallerySection}>
            <Image
              src="/images/tranquillity-cranes/tc-vid2.gif"
              alt="completing the activities quiz in the tranquillity cranes app"
              width={430}
              height={932}
              className={styles.gif2}
            />
            <Image
              src="/images/tranquillity-cranes/tc3.png"
              width={1000}
              height={2000}
              alt="budding writers Figma reservation page"
              className={styles.image3}
            />
            <Image
              src="/images/tranquillity-cranes/tc4.png"
              width={1000}
              height={2000}
              alt="budding writers Figma reservation page"
              className={styles.image4}
            />
        </div>
        <Image
          src="/images/tranquillity-cranes/tc5.png"
          width={1800}
          height={1200}
          alt="tranquillity cranes Figma wireframes"
          className={styles.image5}
        />
      </div>
    </>
  );
}
