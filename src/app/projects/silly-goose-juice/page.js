"use client";

import ProjectFeatIntro from "../../../../components/ProjectFeatIntro";
import ProjectFeatOverview from "../../../../components/ProjectFeatOverview";
import { useEffect } from "react";
import GalleryLayout from "../../../../components/GalleryLayout";
import styles from "./silly-goose-juice.module.css";
import GalleryTitle from "../../../../components/GalleryTitle";
import Link from "next/link";
import Image from "next/image";
import ScaleImage from "../../../../components/ScaleImage";

export default function SillyGooseJuice() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main>
        <ProjectFeatIntro
          name="Silly Goose Juice"
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
          src="/images/projects/sgj/sgj1.png"
          altText="Silly Goose Juice mockup cans"
          overview="Silly Goose Juice is a carbonated flavoured drink made for 
          Gen Z and Millennials who want to bring a little pop of silliness to 
          their everyday sip. At first glance, it might seem like just another 
          fruity juice, but look closer—it’s full of unexpected fizz and fun. 
          Inspired by playful misdirection, each can features a simple goose on 
          the front, but flip it around, and you'll find it has disorienting yet 
          quirky human legs—because why not? The design was made to be bold, with 
          bubble typography and a vibrant colour palette, carefully picked from 
          opposite sides of the colour wheel, making sure this drink stands out. 
          Whether it’s a casual hangout, a party, or just a moment to treat 
          yourself, Silly Goose Juice is here to shake up your expectations and 
          remind you to embrace the unexpected. Because bit's important to be who 
          you want, even if it's silly."
          href="https://www.instagram.com/p/C_go6R0Sa43/?img_index=1"
          linkText=""
        />
        <GalleryLayout
          content={
            <section className={styles.mockups}>
              <GalleryTitle title="Mockups" />
                <ScaleImage src="/images/projects/sgj/sgj2.png" altText="stacked can mockups for all flavours" />
              <div className={styles.dielines}>
                <GalleryTitle title="Dielines" />
                <div className={styles.dielineImages}>
                    <ScaleImage src="/images/projects/sgj/dielines/sgj1.png" altText="strawberry dieline" caption="STRAWBERRY FLAVOUR"/>
                    <ScaleImage src="/images/projects/sgj/dielines/sgj2.png" altText="blueberry dieline" caption="BLUEBERRY FLAVOUR"/>
                    <ScaleImage src="/images/projects/sgj/dielines/sgj3.png" altText="grape dieline" caption="GRAPE FLAVOUR"/>
                </div>
                <div className={styles.styleGuide}>
                    <GalleryTitle title="StyleGuide" />
                    <ScaleImage src="/images/projects/sgj/sgj3.png" altText="color palette" caption="COLOUR PALETTE"/>
                    <div className={styles.styleGuideSection}>
                    <ScaleImage src="/images/projects/sgj/sgj4.png" altText="typography" caption="TYPOGRAPHY"/>
                    <ScaleImage src="/images/projects/sgj/sgj5.png" altText="assets" caption="DESIGN ASSETS"/>
                    </div>
                </div>
              </div>
            </section>
          }
        />
      </main>
    </>
  );
}
