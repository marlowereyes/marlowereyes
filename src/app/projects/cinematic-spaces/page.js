"use client";

import ProjectFeatIntro from "../../../../components/ProjectFeatIntro";
import ProjectFeatOverview from "../../../../components/ProjectFeatOverview";
import { useEffect } from "react";
import GalleryLayout from "../../../../components/GalleryLayout";
import styles from "./cinematic-spaces.module.css";
import GalleryTitle from "../../../../components/GalleryTitle";
import ScaleImage from "../../../../components/ScaleImage";
import FigmaEmbed from "../../../../components/FigmaEmbed";
import Carousel from "../../../../components/Carousel";

export default function GiveMeLove() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main>
        <ProjectFeatIntro
          name="Cinematic Spaces"
          duration="1 month"
          role={<>Graphic Designer</>}
          tools={
            <>
              Adobe InDesign <br />
              Adobe Photoshop <br />
              Figma
            </>
          }
        />
        <ProjectFeatOverview
          src="/images/projects/cinematic-spaces/cs1.png"
          altText="Cinematic Spaces magazine mockup"
          overview="Cinematic Spaces is a film magazine that explores the architecture of movie sets and its role in shaping the narrative and atmosphere of films. This particular issue delves into the critically acclaimed movie *Parasite*, examining how its meticulously designed sets contribute to the story’s themes of class disparity and tension. The design embraces a clean, professional aesthetic, using black and white text, bold typography, and dynamic lines to evoke the iconic clapperboard used in filmmaking. This minimalist approach ensures the focus remains on the striking imagery, while the structured layout reinforces the magazine’s commitment to sophistication and clarity."
          href="https://www.instagram.com/p/C_go6R0Sa43/?img_index=1"
        />
        <GalleryLayout
          content={
            <section className={styles.finalDesign}>
              <GalleryTitle title="Print Version" />
              <Carousel />
              <GalleryTitle title="Digital Version" />
              <FigmaEmbed src="https://embed.figma.com/proto/KLWFGVXaYpVkxeubRtQoYZ/Marlowe_Reyes_Midterm?node-id=85-933&p=f&scaling=scale-down&content-scaling=fixed&page-id=25%3A588&starting-point-node-id=85%3A933&embed-host=share" />
            </section>
          }
        />
      </main>
    </>
  );
}
