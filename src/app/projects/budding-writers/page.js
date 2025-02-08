"use client";

import ProjectFeatIntro from "../../../../components/ProjectFeatIntro";
import ProjectFeatOverview from "../../../../components/ProjectFeatOverview";
import { useEffect } from "react";

export default function BuddingWriters() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
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
        href="https://tranquillity-cranes.vercel.app/"
        linkText="View the site ↗"
      />
    </>
  );
}
