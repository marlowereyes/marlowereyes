"use client";

import ProjectFeatIntro from "../../../../components/ProjectFeatIntro";
import ProjectFeatOverview from "../../../../components/ProjectFeatOverview";
import { useEffect } from "react";

export default function TranquillityCranes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
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
    </>
  );
}
