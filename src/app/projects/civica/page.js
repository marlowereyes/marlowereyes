"use client";

import ProjectFeatIntro from "../../../../components/ProjectFeatIntro";
import ProjectFeatOverview from "../../../../components/ProjectFeatOverview";
import { useEffect } from "react";
import styles from "./civica.module.css";
import ScaleImage from "../../../../components/ScaleImage";
import FigmaEmbed from "../../../../components/FigmaEmbed";
import Image from "next/image";
import GalleryTitle from "../../../../components/GalleryTitle";
import GalleryLayout from "../../../../components/GalleryLayout";
import FeatureSwitch from "../../../../components/FeatureSwitch";
import Link from "next/link";

export default function Civica() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main>
        <ProjectFeatIntro
          name="Civica"
          duration="3 months"
          role={
            <>
              UI Designer <br />
              Project Manager
            </>
          }
          tools={
            <>
              Figma <br />
              Expo <br />
              Adobe Illustrator <br />
              Adobe After Effects <br />
              Premiere Pro
            </>
          }
        />
        <ProjectFeatOverview
          src="/images/projects/civica/c1.png"
          altText="Civica mockup for logo and home page"
          overview="Civica is a legal app designed to empower underprivileged women to 
          exercise their legal rights. Through document reviews, explanations, and 
          simplification, Civica equips women with the tools to approach legal challenges 
          with greater confidence and clarity, helping to reduce the disadvantages they 
          often face in legal matters. The app’s design prioritizes minimal interactions 
          to prevent feelings of stress and information overload. Additionally, Civica 
          employs a calming blue-purple color scheme and personalized icons to create a 
          comforting experience at every step."
          href="https://github.com/Ktan61/civica"
          linkText="View GitHub ↗"
        />
        <GalleryLayout
          content={
            <>
              <section className={styles.gallery}>
                <div className={styles.problem}>
                  <h2>Minimal Access to Legal Aid for Women</h2>
                  <p>
                    Navigating legal challenges can be overwhelming, often
                    hindered by anxiety, high costs, or a lack of reliable
                    resources. For women, these barriers are even more
                    pronounced due to systemic inequities and limited access to
                    tailored support. In fact, a survey showed that 85% of
                    vulnerable women are unable to access civil legal aid, with
                    77% reaching a crisis point before receiving any legal help.
                    This gap highlights the urgent need for solutions that
                    simplify the process and provide reliable assistance. Civica
                    was created to address these barriers by offering accessible
                    information, support, guidance, and trust—key elements often
                    missing in the complex legal system.
                  </p>
                </div>
                <div className={styles.solution}>
                  <GalleryTitle title="Solution" />
                  <p>
                    To address the issue, Civica involves creating a platform
                    that provides women with the necessary tools to simplify the
                    process. These are tools that take the user step by step
                    through the mentally and emotionally taxing system, and
                    allow women to feel empowered to take the steps necessary to
                    take the proper legal action. Features include…
                  </p>
                  <FeatureSwitch />
                </div>
                <div className={styles.userResearch}>
                  <GalleryTitle title="User Research" />
                  <p>
                    At the beginning of the process, extensive research was
                    conducted to validate the problem and gain a deeper
                    understanding of the challenges faced by users. Research
                    through surveys, competitive analysis, interviews, and case
                    studies, informed the ideation of solutions and strategies
                    to address key pain points effectively. <br /> <br />
                    Civica’s design was tailored to address three key pain
                    points identified through research with the target audience.
                    The first is the
                    <span className={styles.bold}>
                      unfamiliarity with the legal process
                    </span>
                    , which often leads to intense emotional stress. The second
                    is the{" "}
                    <span className={styles.bold}>
                      confusion caused by complex legal documents and jargon
                    </span>
                    , making it difficult for individuals to take the necessary
                    steps. Finally, the{" "}
                    <span className={styles.bold}>
                      lack of affordable legal assistance and reliable online
                      resources
                    </span>{" "}
                    creates significant barriers to accessing help.
                  </p>
                  <div className={styles.personas}>
                    <h6>USER PERSONAS</h6>
                    <div className={styles.personaImages}>
                      <Image
                        src="/images/projects/civica/c2.png"
                        alt="primary user persona"
                        width={612}
                        height={1060}
                      />
                      <Image
                        src="/images/projects/civica/c3.png"
                        alt="secondary user persona"
                        width={612}
                        height={1060}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.designProcess}>
                  <GalleryTitle title="Design Process" />
                  <FigmaEmbed src="https://embed.figma.com/design/UObL4DUYzZocukSkpUtfgg/Wireframes?node-id=2060-5666&embed-host=share" />
                  <h6>AREAS FOR IMPROVEMENT</h6>
                  <p>
                    After the completion of the first iteration, usability
                    testing, interviews with professionals and more user
                    research was done to validate and improve the design. There
                    were two main areas of improvement:{" "}
                  </p>
                  <div className={styles.textContainer}>
                    <h4>Visual Seriousness</h4>
                    <p>
                      The mascot was initially introduced as a visual guide to
                      assist users while navigating the app. However, its random
                      appearances were deemed redundant and unhelpful,
                      detracting from its intended purpose. Furthermore, the
                      mascot’s overly cute design contributed to a lack of
                      seriousness, which conflicted with the app’s professional
                      tone. Additionally, the use of blues and pinks in the
                      color scheme was often perceived as reminiscent of a
                      gender reveal, and its softness did not align with the
                      authoritative nature of the legal system.
                    </p>
                  </div>
                  <div className={styles.textContainer}>
                    <h4>Information Architecture</h4>
                    <p>
                      The app’s main feature, document scanning, was often
                      hidden behind too many clicks, making it difficult for
                      users to access efficiently. Additionally, the grammar
                      check feature was found to be redundant and could be
                      seamlessly integrated with the AI chatbot to streamline
                      functionality. Usability tests revealed that users
                      struggled to locate the step-by-step guides, as they
                      expected to find them within the support section rather
                      than where they were placed.
                    </p>
                  </div>
                  <ScaleImage
                    src="/images/projects/civica/c4.png"
                    caption="SITE MAP"
                    altText="improved site map for final design"
                  />
                  <p className={styles.space}>
                    The elements highlighted were reconsidered to ensure the
                    design better reflected the app’s purpose and user
                    expectations, while also addressing usability concerns.
                    Based on the feedback given, the app’s information
                    architecture was reconstructed for better usability. At the
                    same time, the mascot was removed and color was changed,
                    while implementing dark mode screen variants.
                  </p>
                  <FigmaEmbed src="https://embed.figma.com/design/0NxjFtht1BziwLShVjdx5B/Civica-2.0?node-id=0-1&embed-host=share" />
                </div>
                <div className={styles.branding}>
                  <GalleryTitle title="Branding" />
                  <h6>COLOR PALETTE</h6>
                  <p>
                    Through research, it was found that blue is the most
                    commonly associated color with the legal system, making it a
                    natural choice for the app’s design. In color theory, blue
                    evokes feelings of calmness and trust—emotions Civica aims
                    to instill in women as they navigate the app. To further
                    tailor the design to its audience, a tint of purple was
                    incorporated to introduce a sense of femininity, reflecting
                    the app’s focus on empowering women.
                  </p>
                  <Image
                    src="/images/projects/civica/c5.png"
                    alt="Civica color palatte"
                    width={2979}
                    height={718}
                  />
                  <div className={styles.brandSplit}>
                    <div className={styles.logo}>
                      <h6>LOGO</h6>
                      <p>
                        The logo features two women depicted as hearts, united
                        in a warm embrace. This symbolizes Civica’s commitment
                        to providing support and solidarity to women during
                        challenging times. By visually representing care and
                        connection, the logo reinforces the app’s mission to
                        empower women through their legal journeys with
                        compassion and trust.
                      </p>
                      <Image
                        src="/images/projects/civica/civicaLogo.png"
                        alt="Civica logo"
                        width={245}
                        height={168}
                      />
                    </div>
                    <div className={styles.iconography}>
                      <h6>ICONOGRAPHY</h6>
                      <p>
                        While addressing serious legal challenges, Civica’s
                        design also showcases personalization and a welcoming,
                        non-intimidating aesthetic. Shapes such as hearts were
                        thoughtfully incorporated into the icons in consistency
                        with the logo, reflecting Civica’s core value of care.
                        This approach ensures the app feels approachable and
                        comforting, while balancing the gravity of its purpose
                        with an empathetic design.
                      </p>
                      <div className={styles.icons}>
                        <Image
                          src="/images/projects/civica/icons/ci1.png"
                          alt="icon 1"
                          width={300}
                          height={300}
                        />
                        <Image
                          src="/images/projects/civica/icons/ci2.png"
                          alt="icon 2"
                          width={300}
                          height={300}
                        />
                        <Image
                          src="/images/projects/civica/icons/ci3.png"
                          alt="icon 3"
                          width={300}
                          height={300}
                        />
                        <Image
                          src="/images/projects/civica/icons/ci4.png"
                          alt="icon 4"
                          width={300}
                          height={300}
                        />
                        <Image
                          src="/images/projects/civica/icons/ci5.png"
                          alt="icon 5"
                          width={300}
                          height={300}
                        />{" "}
                        <Image
                          src="/images/projects/civica/icons/ci6.png"
                          alt="icon 6"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.outcome}>
                  <GalleryTitle title="Outcome" />
                  <p></p>
                  <ScaleImage 
                    caption="OTHER SCREENS"
                    src="/images/projects/civica/c8.png"
                    altText="other screen mockups of the app"
                  />
                  <Link href="https://drive.google.com/file/d/19JG6cwvbK3n8anayYnTR3K-rsjTPJifR/view?usp=sharing">View walkthrough of the app ↗</Link>
                </div>
              </section>
            </>
          }
        />
      </main>
    </>
  );
}
