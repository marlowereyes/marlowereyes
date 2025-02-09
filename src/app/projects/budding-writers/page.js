"use client";

import ProjectFeatIntro from "../../../../components/ProjectFeatIntro";
import ProjectFeatOverview from "../../../../components/ProjectFeatOverview";
import { useEffect } from "react";
import styles from "./budding-writers.module.css";
import ScaleImage from "../../../../components/ScaleImage";
import FigmaEmbed from "../../../../components/FigmaEmbed";
import Image from "next/image";
import GalleryTitle from "../../../../components/GalleryTitle";
import GalleryLayout from "../../../../components/GalleryLayout";

export default function BuddingWriters() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main>
        <ProjectFeatIntro
          name="Budding Writers"
          duration="5 months"
          role={
            <>
              UX//UI Designer <br />
              Project Manager
            </>
          }
          tools={
            <>
              Figma <br />
              WordPress <br />
              Microsoft Excel <br />
              Adobe Illustrator <br />
              Adobe Photoshop
            </>
          }
        />
        <ProjectFeatOverview
          src="/images/projects/budding-writers/bw1.png"
          altText="Budding Writers desktop mockup for home page"
          overview="Budding Writers Café is a curated space for literary enthusiasts, offering a welcoming environment to discover secondhand books, connect with the writing community, or simply enjoy some pastries. The website aims to include useful features like a digital menu, advance reservations, an online bookstore, and a calendar of events—streamlining the customer experience and engaging with the café’s offerings both online and in person. Designed to evoke warmth and creativity, the site uses an earthy palette of soft greens, browns, and neutrals to reflect growth, while clean layouts, organic shapes, and classic typography reinforce its identity as a space for writers and book lovers."
          href="https://budding-writers.org/"
          linkText="View the site ↗"
        />
        <GalleryLayout 
          content={
              <>
          <div className={styles.features}>
            <GalleryTitle title="Features" />
            <ScaleImage
              caption="CAFE MENU & RESERVATIONS"
              altText="Reservation form and lunch menu"
              src="/images/projects/budding-writers/bw2.png"
            />
            <ScaleImage
              caption="EVENTS CALENDAR"
              altText="List of upcoming events in events page"
              src="/images/projects/budding-writers/bw3.png"
            />
            <ScaleImage
              caption="ONLINE SECONDHAND BOOKSTORE"
              altText="list of books to purchase and checkout form"
              src="/images/projects/budding-writers/bw4.png"
            />
          </div>
          <div className={styles.branding}>
          <GalleryTitle title="Branding" />
            <ScaleImage
              caption="COLOUR PALETTE"
              altText="color palette"
              src="/images/projects/budding-writers/bw5.png"
            />
            <div className={styles.brandSection}>
              <div className={styles.mockups}>
                <h6>VISUAL MOCKUPS</h6>
                <Image
                  src="/images/projects/budding-writers/bw6.png"
                  alt="mockups of budding writers logo"
                  width={500}
                  height={500}
                />
              </div>
              <div className={styles.designNotes}>
                <h6>DESIGN NOTES</h6>
                <p>
                  Classic, neutral, with a pop of natural freshness - these
                  colours were chosen according to the client’s vision. Jet and
                  White Smoke are the primary colours most used, with Walnut
                  Brown, Asparagus and Ash Blue being used as accent colours
                  (e.g. hover features, active buttons, borders, cards) for a
                  touch of vibrancy. Together, these colours offer a warm,
                  welcoming yet eccentric vibe.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.initialProcess}>
          <GalleryTitle title="Initial Process" />
            <FigmaEmbed src="https://embed.figma.com/board/K1nwshTKflCnJrz2ddvq6n/Budding-Writers-User-Story-Mapping?node-id=0-1&embed-host=share" />
            <h6>USER PERSONAS</h6>
            <div className={styles.userPersonas}>          
              <Image
                alt="Primary user persona for Juno"
                src="/images/projects/budding-writers/bw7.png"
                width={500}
                height={500}
              />
              <Image
                alt="Secondary user persona for Youssef"
                src="/images/projects/budding-writers/bw8.png"
                width={500}
                height={500}
              /> 
            </div>
          </div>    
              </>
          }
        />
      </main>
    </>
  );
}
