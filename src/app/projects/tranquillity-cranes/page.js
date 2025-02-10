"use client";

import ProjectFeatIntro from "../../../../components/ProjectFeatIntro";
import ProjectFeatOverview from "../../../../components/ProjectFeatOverview";
import { useEffect } from "react";
import GalleryLayout from "../../../../components/GalleryLayout";
import GalleryTitle from "../../../../components/GalleryTitle";
import ScaleImage from "../../../../components/ScaleImage";
import styles from "./tranquillity-cranes.module.css";
import FigmaEmbed from "../../../../components/FigmaEmbed";

export default function TranquillityCranes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main>
        <ProjectFeatIntro
          name="Tranquillity Cranes"
          duration="5 months"
          role={
            <>
              UX//UI Designer <br />
              Graphic Designer
            </>
          }
          tools={
            <>
              Figma <br />
              Adobe Illustrator <br />
              Adobe Photoshop <br />
              Adobe After Effects <br />
              NextJS <br />
              React
            </>
          }
        />
        <ProjectFeatOverview
          src="/images/projects/tranquillity-cranes/tc1.png"
          altText="Tranquillity Cranes iphone mockup for home page"
          overview="Tranquility Cranes is a mobile app designed to support individuals facing 
        stress, anxiety, and other mental health challenges. The app bridges the gap in mental 
        health care with features like guided coping exercises, suggested mental health activities 
        and schedules, and community forums, creating a safe and convenient platform for users to 
        practice self-care. At its heart, the mascot, Terry Crane, serves as a supportive guide, 
        offering encouragement and companionship throughout the user’s journey. Additionally, the 
        app incorporates a unique egg feature, encouraging users to care for themselves as they would 
        care for an egg, symbolizing the importance of nurturing their mental well-being. Designed 
        with a calming aesthetic, the app uses a soothing palette of soft blues to reflect its mission 
        of fostering peace and tranquility."
          href="https://tranquillity-cranes.vercel.app/"
          linkText="View the site ↗"
        />
        <GalleryLayout
          content={
            <section>
              <GalleryTitle title="Features" />
              <ScaleImage
                caption="LIVE PUBLIC CHAT ROOM"
                src="/images/projects/tranquillity-cranes/tc2.png"
                altText="test"
              />
              <section className={styles.mockupVids}>
                <ScaleImage
                  caption="GUIDED RELATION EXERCISES"
                  src="/images/projects/tranquillity-cranes/tc3.png"
                  altText="test"
                />
                <video className={styles.video} autoPlay loop muted playsInline>
                  <source
                    src="/images/projects/tranquillity-cranes/tc4.mov"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </section>
              <ScaleImage
                caption="SUGGESTED ACTIVITIES QUIZ & SCHEDULE"
                src="/images/projects/tranquillity-cranes/tc5.png"
                altText="test"
              />
              <GalleryTitle title="Branding" />
              <ScaleImage
                caption="COLOUR PALETTE"
                src="/images/projects/tranquillity-cranes/tc6.png"
                altText="test"
              />
              <ScaleImage
                caption="MASCOT"
                src="/images/projects/tranquillity-cranes/tc7.png"
                altText="test"
              />
              <GalleryTitle title="Initial Process" />
              <FigmaEmbed src="https://embed.figma.com/design/mkxnHxbblxQ7cckhrTDX5G/MDIA-2106-Tranquility-Cranes-Set-F?node-id=0-1&embed-host=share" />
            </section>
          }
        />
      </main>
    </>
  );
}
