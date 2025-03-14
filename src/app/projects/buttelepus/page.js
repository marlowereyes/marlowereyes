"use client";

import ProjectFeatIntro from "../../../../components/ProjectFeatIntro";
import ProjectFeatOverview from "../../../../components/ProjectFeatOverview";
import { useEffect } from "react";
import GalleryLayout from "../../../../components/GalleryLayout";
import styles from "./buttelepus.module.css";
import GalleryTitle from "../../../../components/GalleryTitle";
import ScaleImage from "../../../../components/ScaleImage";

export default function GiveMeLove() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main>
        <ProjectFeatIntro
          name="Buttelepus"
          duration="2 week"
          role={<>Graphic Designer</>}
          tools={
            <>
              Adobe Photoshop <br />
              Adobe Illustrator
            </>
          }
        />
        <ProjectFeatOverview
          src="/images/projects/buttelepus/buttelepus1.png"
          altText="Buttelepus comic mockup"
          overview="Buttelepus is a comic book cover that captures the essence of classic superhero comics. 
          The project required blending three distinct animal images using Photoshop blending modes to create 
          a unique, hybrid character, which became the central figure of the design. The typography is reminiscent 
          of traditional comic book styles and primary colours dominate the design, evoking a sense of nostalgia eye catching boldness. The 
          layout draws inspiration from iconic superhero comic covers, with dramatic compositions that draw the 
          viewer’s eye. To achieve an authentic comic book aesthetic, Photoshop textures and filters—such as 
          threshold, high pass, and highlights—were used to create a sketch-like effect. This combination 
          of retro typography, vivid colors, and textured finishes brings Buttelepus to life, paying homage to the style 
          of classic comics while maintaining a fresh, modern appeal."
          href="https://www.instagram.com/p/C_go6R0Sa43/?img_index=1"
        />
        <GalleryLayout
          content={
            <section className={styles.finalDesign}>
              <GalleryTitle title="Full Comic Cover" />
              <ScaleImage
                src="/images/projects/buttelepus/buttelepus2.png"
                altText="Full comic cover for buttelepus"
              />
              <GalleryTitle title="Design Assets" />
              <ScaleImage
                caption="ORIGINAL IMAGES"
                src="/images/projects/buttelepus/image-gallery/combined.png"
                altText="butterfly elephant and octopus grid gallery"
                className={styles.spaceAbove}
              />
              <ScaleImage
                caption="VECTOR"
                src="/images/projects/buttelepus/buttelepus3.png"
                altText="vector assets"
              />
              <GalleryTitle title="Style Guide" />
              <ScaleImage
                caption="COLOUR PALETTE"
                src="/images/projects/buttelepus/buttelepus4.png"
                altText="buttelepus colour palette"
              />
              <ScaleImage
                caption="TYPOGRAPHY"
                src="/images/projects/buttelepus/buttelepus5.png"
                altText="buttelepus typefaces"
              />
            </section>
          }
        />
      </main>
    </>
  );
}
