"use client";

import ProjectFeatIntro from "../../../../components/ProjectFeatIntro";
import ProjectFeatOverview from "../../../../components/ProjectFeatOverview";
import { useEffect } from "react";
import GalleryLayout from "../../../../components/GalleryLayout";
import styles from "./benefits-of-dancing.module.css";
import GalleryTitle from "../../../../components/GalleryTitle";
import Link from "next/link";
import Image from "next/image";
import ScaleImage from "../../../../components/ScaleImage";

export default function BenefitsOfDancing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main>
        <ProjectFeatIntro
          name="Benefits of Dancing"
          duration="4 week"
          role={<>Motion Designer</>}
          tools={
            <>
              Adobe After Effects <br />
              Adobe Illustrator
            </>
          }
        />
        <ProjectFeatOverview
          src="/images/projects/bod/bod1.png"
          altText="Give Me Love poster mockup"
          overview="The Benefits of Dancing is a vibrant motion graphics video 
          that highlights how dance enhances physical and mental health, cognitive
           skills, and confidence. Tailored for those who are new to or interested
            in the realm of dancing, this video dives into the various social and 
            personal aspects that dance affects, helping curious viewers become 
            more aware of what dancing can do for them. The video is designed to 
            use dynamic animations and complementary visuals to make the 
            information clear and engaging to follow. The design features a lively 
            palette of pinks, blues, and greens to reflect the joy of dance, with 
            recurring characters guiding viewers through the journey. The result is
            an uplifting, educational resource that inspires viewers to embrace 
            dance as a fun and transformative part of life."
          href="https://www.instagram.com/p/C_go6R0Sa43/?img_index=1"
          linkText=""
        />
        <GalleryLayout
          content={
            <section className={styles.finalDesign}>
              <GalleryTitle title="Full Video" />
              <section className={styles.videoContainer}>
                <video className={styles.video} playsInline controls>
                  <source
                    src="/images/projects/bod/bod-vid.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <p>Video not loading? View the video in a different browser:</p>
                <Link href="https://drive.google.com/file/d/1eTjkRxzUrqXr4lZKgPxV921jaYmUVHwy/view?usp=sharing">View alternative /</Link>
              </section>
              <div className={styles.storyboard}>
                <GalleryTitle title="Storyboarding" />
                <div className={styles.storyboardImages}>
                    <Image src="/images/projects/bod/sb/bod1.png" alt="scenes 1-6 of storyboard" width={260} height={500}/>
                    <Image src="/images/projects/bod/sb/bod2.png" alt="scenes 1-6 of storyboard" width={260} height={500}/>
                    <Image src="/images/projects/bod/sb/bod3.png" alt="scenes 1-6 of storyboard" width={260} height={500}/>
                    <Image src="/images/projects/bod/sb/bod4.png" alt="scenes 1-6 of storyboard" width={260} height={500}/>
                </div>
                <div className={styles.styleGuide}>
                    <GalleryTitle title="StyleGuide" />
                    <ScaleImage src="/images/projects/bod/bod2.png" altText="color palette" caption="COLOUR PALETTE"/>
                    <ScaleImage src="/images/projects/bod/bod3.png" altText="characters" caption="CHARACTERS"/>
                    <ScaleImage src="/images/projects/bod/bod4.png" altText="typography" caption="TYPOGRAPHY"/>
                </div>
              </div>
            </section>
          }
        />
      </main>
    </>
  );
}
