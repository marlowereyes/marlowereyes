"use client";

import ProjectFeatIntro from "../../../../components/ProjectFeatIntro";
import ProjectFeatOverview from "../../../../components/ProjectFeatOverview";
import { useEffect } from "react";
import GalleryLayout from "../../../../components/GalleryLayout";
import styles from "./give-me-love.module.css";
import GalleryTitle from "../../../../components/GalleryTitle";
import Slider from "../../../../components/Slider";
import ScaleImage from "../../../../components/ScaleImage";

export default function GiveMeLove() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main>
        <ProjectFeatIntro
          name="Give Me Love"
          duration="1 week"
          role={<>Graphic Designer</>}
          tools={
            <>
              Adobe Photoshop <br />
              Adobe Illustrator
            </>
          }
        />
        <ProjectFeatOverview
          src="/images/projects/gml/gml1.png"
          altText="Give Me Love poster mockup"
          overview="Give Me Love is a dance film that delves into the repression of male emotions 
        and its impact on those around us. This project involved restructuring and editing a 
        promotional poster for the film’s screening at the Innovate Film Festival. The goal was 
        to improve how the poster visually reflects the film’s themes by enhancing the use of 
        dark colors and negative space to evoke struggle, somberness, and emptiness. The design 
        edits drew inspiration from contemporary movie theater posters, incorporating their 
        distinctive layout, typography, and focal points to achieve a more professional and cohesive 
        visual representation of the film’s emotional tone."
          href="https://www.instagram.com/p/C_go6R0Sa43/?img_index=1"
          linkText="View the posted promotion ↗"
        />
        <GalleryLayout
          content={
            <section className={styles.finalDesign}>
              <GalleryTitle title="Final Design" />
              <Slider
                imageLeft="/images/projects/gml/gml2.JPG"
                imageRight="/images/projects/gml/gml3.jpeg"
                textLeft="CLIENT'S DESIGN"
                textRight="MY EDITS"
              />
              <GalleryTitle title="Implemented Promotion" />
              <ScaleImage
                src="/images/projects/gml/gml5.png"
                altText="Instagram mockup of promotional poster"
              />
              <GalleryTitle title="Design Layout Inspiration" />
              <ScaleImage
                src="/images/projects/gml/gml4.png"
                altText="Mood board of poster inspiration"
              />
            </section>
          }
        />
      </main>
    </>
  );
}
