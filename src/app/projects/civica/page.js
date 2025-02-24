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
import Tabs from "../../../../components/Tabs";

export default function Civica() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs = [
    {
      key: "one",
      title: "Case 1",
      content: (
        <div className={styles.caseContent}>
          <h3>
            Exploitation of a Permanent Resident – Worker at a Public Laundry
          </h3>
          <h4>Background</h4>
          <p>
            The employee was a permanent resident (PR) of Canada and was working
            at a public laundry. She was new to Canada – a single mom (age
            35-45) with two children, making her particularly vulnerable in this
            new environment.
          </p>
          <h4>Conditions & Legal Violations</h4>
          <p>
            The employee faced harsh working conditions, including long hours
            from 9 AM to 8 PM without official breaks and unpaid overtime if
            customers were still present after closing. She was also required to
            perform additional tasks, such as washing and ironing the owner’s
            personal clothes, without extra pay. Legally, she was paid below the
            minimum wage, receiving only half of the mandated amount. The owner
            falsely claimed that the low wage exempted her from tax obligations
            and insisted on handling her tax filing, misleading her about her
            rights and violating labour and tax laws.
          </p>
          <h4>Pain Points</h4>
          <p>
            The employee’s unfamiliarity with Canadian labour laws and her
            vulnerable position as a single mother with no relatives in Canada
            left her open to exploitation. She endured long hours, underpayment,
            lack of overtime compensation, and unpaid additional tasks. The
            financial pressure of supporting two children in a new country
            forced her to tolerate these poor conditions, while the owner’s
            misleading claims about taxes further compounded her challenges.
          </p>
        </div>
      ),
    },
    {
      key: "two",
      title: "Case 2",
      content: (
        <div className={styles.caseContent}>
          <h3>Unpaid Training Period for Employees at a Grocery Store</h3>
          <h4>Background</h4>
          <p>
            The grocery store employees were all legally authorized to work in
            Canada, with most being permanent residents (PR) or Canadian
            citizens. One particular employee, a woman aged 18-24, was new to
            Canada, and this was her first job after arriving. Her status as a
            newcomer and lack of prior work experience in Canada made her
            particularly vulnerable to exploitative practices.
          </p>
          <h4>Conditions & Legal Violations</h4>
          <p>
            The employee was required to undergo a month-long unpaid training
            period, working four days a week for four hours each day. During
            this time, she was tasked with serving customers, memorizing grocery
            codes, and stocking shelves—tasks typically performed by paid
            employees. Despite completing the training, she was not included in
            the work schedule for a month. When she asked the manager about her
            employment status, she was told she was "not ready yet," leaving her
            in limbo. This unpaid training violated labour laws, as employees
            must be compensated for all hours worked, including training.
          </p>
          <h4>Pain Points</h4>
          <p>
            The employee faced financial strain and uncertainty due to the
            unpaid training period and the delay in being added to the work
            schedule. Her lack of awareness about labour rights, shared by other
            cashier staff (mostly permanent residents), allowed the unethical
            practice to persist. While employees eventually received minimum
            wage and legal breaks post-training, the initial exploitation during
            the training period highlights systemic issues in labour practices
            and the vulnerability of newcomers unfamiliar with their rights.
          </p>
        </div>
      ),
    },
    {
      key: "three",
      title: "Case 3",
      content: (
        <div className={styles.caseContent}>
          <h3>Driver’s Test Incident and Insurance Misconduct</h3>
          <h4>Background</h4>
          <p>
            A woman, new to Canada and unemployed, began taking driving lessons
            at a local driving school. As a single mother navigating a new
            country and facing financial pressures, she was particularly
            vulnerable to exploitation. Her unfamiliarity with Canadian systems,
            including insurance practices, made her an easy target for unethical
            behaviour.
          </p>
          <h4>Conditions & Legal Violations</h4>
          <p>
            On the day of her driving test, the instructor charged her 50 for
            the use of his car, which was higher than the usual 50 for the use
            of his car,which was higher than the usual 30 lesson fee. During the
            test, she was involved in an accident that caused damage to both
            vehicles. Despite the driving examiner clarifying that the
            instructor’s insurance covered the damages, the instructor demanded
            7,000 from her for the repairs. He pressured her to negotiate
            directly with the other party instead of filing a claim with ICBC,
            falsely claiming it would increase his insurance premiums. This was
            a clear violation of ethical and legal standards, as the 50 fee
            already included insurance coverage.
          </p>
          <h4>Pain Points</h4>
          <p>
            The woman faced significant stress and fear due to the instructor’s
            harassment and demands for payment. Her lack of familiarity with
            Canadian insurance practices left her vulnerable to manipulation.
            The instructor exploited her situation, attempting to force her to
            pay $7,000 out of pocket despite her financial struggles as a single
            mother. This incident highlights the challenges newcomers face when
            navigating unfamiliar systems and the potential for exploitation by
            those in positions of authority.
          </p>
        </div>
      ),
    },
    {
      key: "four",
      title: "Case 4",
      content: (
        <div className={styles.caseContent}>
          <h3>At-Home Child Caregiver Harassment</h3>
          <h4>Background</h4>
          <p>
            The caregiver initially immigrated to Canada as a live-in child
            caregiver and has since obtained permanent residency (PR). She lived
            with the family she worked for, caring for their child while being
            treated as part of the household. While this arrangement created a
            sense of inclusion, it also blurred the lines between her
            professional duties and personal life, leaving her vulnerable to
            exploitation and mistreatment.
          </p>
          <h4>Conditions & Legal Violations</h4>
          <p>
            Officially, the caregiver worked 8-hour shifts with breaks, but her
            responsibilities extended beyond these hours due to her live-in
            arrangement, leading to overwork and stress. The wife’s insecurity
            and jealousy resulted in verbal bullying, false allegations of
            inappropriate behaviour, and damaging accusations about the
            caregiver’s character. The wife escalated the harassment by
            installing spy cameras to monitor the caregiver and intentionally
            leaving her alone with the husband to fabricate compromising
            situations. This constant surveillance and mental abuse violated the
            caregiver’s rights and created a hostile work environment.
          </p>
          <h4>Pain Points</h4>
          <p>
            The caregiver endured severe mental stress, including anxiety and
            panic attacks, which eventually led to her hospitalization. Her fear
            of losing her PR status and lack of awareness about her legal rights
            left her unable to speak up or seek help. The wife’s false
            accusations, surveillance, and bullying not only damaged the
            caregiver’s reputation but also left her feeling trapped and
            powerless. This case highlights the need for better protections and
            awareness of legal rights for live-in caregivers to prevent such
            exploitation and abuse.
          </p>
        </div>
      ),
    },
    {
      key: "five",
      title: "Case 5",
      content: (
        <div className={styles.caseContent}>
          <h3>PR Fraud through Marriage and Business Exploitation</h3>
          <h4>Background</h4>
          <p>
            A Canadian woman, previously employed at a fast-food restaurant,
            married her coworker, an international student. Together, they
            worked hard and eventually acquired a franchise of the restaurant.
            After having a son, the woman stepped back from the business to
            focus on childcare, while her husband took over its management. She
            also sponsored him for permanent residency (PR) in Canada,
            demonstrating her commitment to their shared future.
          </p>
          <h4>Conditions & Legal Violations</h4>
          <p>
            After obtaining PR status, the husband’s behavior changed
            dramatically. He began initiating fights over minor issues and
            started an affair with another employee at their restaurant. Shortly
            after receiving PR, he filed for divorce, leaving the woman
            emotionally and financially vulnerable. Despite her contributions to
            building the business, she lost ownership of the franchise in the
            divorce. This situation highlights the potential for exploitation in
            marriages tied to immigration motives, where one partner may use the
            relationship fraudulently to gain PR status.
          </p>
          <h4>Pain Points</h4>
          <p>
            The woman faced significant emotional and financial hardship, losing
            both her marriage and the business she helped build. She now has
            sole custody of her son and works a regular job to support herself,
            struggling to rebuild her life. The betrayal and loss of the
            business underscore the emotional and financial toll of fraudulent
            marriages linked to immigration. This case emphasizes the need for
            greater awareness and safeguards to protect individuals from such
            exploitation.
          </p>
        </div>
      ),
    },
    {
      key: "six",
      title: "Case 6",
      content: (
        <div className={styles.caseContent}>
          <h3>Domestic Violence Against a Canadian Woman</h3>
          <h4>Background</h4>
          <p>
            The woman married at the age of 18 in a love marriage and has three
            children. Her in-laws disapprove of her, and her husband regularly
            abuses her both verbally and publicly. Her parents are unable to
            financially support her, leaving her in a vulnerable position.
            Despite immigrating to Canada, the abuse continued, with her husband
            cycling between periods of kindness and cruelty, creating a toxic
            and unstable environment for her and her children.
          </p>
          <h4>Conditions & Legal Violations</h4>
          <p>
            The husband’s abuse includes physical violence, public humiliation,
            and emotional manipulation. He often hits her and then attempts to
            appease her with gifts, perpetuating a cycle of abuse and
            forgiveness. The abuse extends to the children as well, creating a
            harmful environment for the entire family. After years of enduring
            this treatment, the grown children called the police when the
            husband escalated his behavior by breaking things at home. However,
            the woman, fearing her husband, withdrew the case, highlighting the
            challenges victims face in seeking legal recourse against their
            abusers.
          </p>
          <h4>Pain Points</h4>
          <p>
            The woman remains trapped in a cycle of abuse due to fear,
            manipulation, and a lack of external support. Despite the
            involvement of her children and the police, she continues to forgive
            her husband, often pressured by his manipulative tactics and her
            financial and emotional dependence. This case underscores the
            challenges faced by victims of domestic violence, particularly when
            financial, emotional, and social vulnerabilities prevent them from
            breaking free from abusive relationships. It highlights the need for
            stronger support systems and resources to help victims escape such
            cycles and rebuild their lives.
          </p>
        </div>
      ),
    },
    {
      key: "seven",
      title: "Case 7",
      content: (
        <div className={styles.caseContent}>
          <h3>Landlord Harassment and Uncomfortable Living Conditions</h3>
          <h4>Background</h4>
          <p>
            A woman in her mid-20s immigrated to Canada as a student, completed
            her post-secondary education, and now works as an assistant manager
            at a retail store. After facing roommate issues at her previous
            rental, she moved into a new place, renting a room in an older
            couple’s house. Another woman of a similar age rented the room next
            to hers. Initially, the landlords promised amenities such as a
            heater, fan, TV, and WiFi, but these promises were quickly withdrawn
            after she moved in.
          </p>
          <h4>Conditions & Legal Violations</h4>
          <p>
            The landlords began unplugging the TV and WiFi and refused to
            provide heating in her room, despite their initial agreements. The
            woman also felt uncomfortable when she realized the elderly man’s
            room was directly across from hers, a detail she was unaware of
            before moving in. Additionally, the other tenant frequently brought
            male friends over when the landlords were away, creating an
            uncomfortable environment. This led the woman to avoid communal
            areas like the kitchen, confining herself to her small room. The
            landlords further restricted her by refusing to let her break the
            rental agreement, trapping her in the situation for three more
            months.
          </p>
          <h4>Pain Points</h4>
          <p>
            The woman experienced significant stress and discomfort due to the
            landlords’ unfulfilled promises, invasion of privacy, and the other
            tenant’s behavior. This led to a decline in her health, as she
            stopped using the kitchen and struggled to eat properly. Feeling
            trapped and unable to move out, she endured emotional strain and
            exploitation. This case highlights the vulnerability of young
            immigrants in rental situations and the need for better protections
            against landlord harassment and unethical practices.
          </p>
        </div>
      ),
    },
  ];

  const tabsPrinted = [
    {
      key: "one",
      title: "Brochure",
      content: (
        <>
          <img
            src="/images/projects/civica/promotional-materials/cpm1.png"
            alt="brochure"
          />
        </>
      ),
    },
    {
      key: "two",
      title: "Business Cards",
      content: (
        <>
          <img
            src="/images/projects/civica/promotional-materials/cpm2.png"
            alt="business cards"
          />
        </>
      ),
    },
    {
      key: "three",
      title: "Poster",
      content: (
        <>
          <img
            src="/images/projects/civica/promotional-materials/cpm3.png"
            alt="poster"
          />
        </>
      ),
    },
    {
      key: "four",
      title: "Table Tents",
      content: (
        <>
          <img
            src="/images/projects/civica/promotional-materials/cpm4.png"
            alt="table tents"
          />
        </>
      ),
    },
  ];

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
          href="https://www.figma.com/proto/XDykVW4zwL9GCGgLgYrfbo/Civica-Final-Design?node-id=1-1360&p=f&t=NBk5NFjHvb4eC22b-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A1166"
          linkText="View Figma prototype ↗"
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
                  <div className={styles.webSupplement}>
                    <Image
                      src="/images/projects/civica/cf4.png"
                      alt="web supplement mockup"
                      width={1920}
                      height={1080}
                    />
                    <div className={styles.webSuppText}>
                      <h3>Web Supplement</h3>
                      <p>
                        All simplified documents are added to your history, that
                        way, you can access them later on any type of device,
                        making it possible to read your important files
                        regardless of the circumstances.
                      </p>
                      <Link
                        href="https://www.web.civicalaw.ca/documents"
                        target="_blank"
                      >
                        View the web supplement ↗
                      </Link>
                    </div>
                  </div>
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
                      {" "}
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
                    <div className={styles.interview}>
                      <h6>INTERVIEW</h6>
                      <p>
                        To ensure that Civica’s initiatives address real-life
                        challenges with practical solutions, an interview was
                        conducted with an immigration lawyer to gather insights
                        from actual cases. This approach provided a deeper
                        understanding of the struggles, needs, and legal
                        obstacles faced by women, enabling Civica to refine its
                        strategies and better support individuals in similar
                        circumstances.
                      </p>
                      <Tabs tabs={tabs} className={styles.tabs} />
                      <div className={styles.possibleFeatures}>
                        <h3>
                          Main Possible Features Focused on Women's Support
                        </h3>
                        <ul>
                          <li>
                            <span className={styles.bold}>
                              Women-Centric AI Chatbot:
                            </span>{" "}
                            An AI assistant that offers quick answers tailored
                            to women’s legal and emotional challenges.
                          </li>
                          <li>
                            <span className={styles.bold}>
                              Legal Aid for Women:
                            </span>{" "}
                            Connections to female-focused legal services.
                          </li>
                          <li>
                            <span className={styles.bold}>
                              Document Templates for Women:
                            </span>{" "}
                            Pre-drafted forms to help women report violations,
                            submit complaints, or file legal actions.
                          </li>
                          <li>
                            <span className={styles.bold}>
                              Mental Health Support:
                            </span>{" "}
                            Resources and services for emotional well-being,
                            specifically addressing women’s struggles with
                            harassment, abuse, and exploitation.
                          </li>
                          <li>
                            <span className={styles.bold}>
                              Tailored Step-by-Step Guides:
                            </span>{" "}
                            Clear, personalized navigation through legal
                            processes, designed for the unique challenges women
                            face.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.designProcess}>
                  <GalleryTitle title="Design Process" />
                  <FigmaEmbed src="https://embed.figma.com/design/EwyqwyXDLgQGG01d3oQH5e/Civica-First-Iteration?embed-host=share" />
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
                    caption="IMPROVED SITE MAP"
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
                  <FigmaEmbed src="https://embed.figma.com/design/XDykVW4zwL9GCGgLgYrfbo/Civica-Final-Design?node-id=0-1&embed-host=share" />
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
                <div className={styles.marketing}>
                  <GalleryTitle title="Marketing" />
                  <p>
                    To enhance the visibility and engagement surrounding Civica,
                    a series of promotional initiatives were implemented to
                    provide external audiences with a comprehensive
                    understanding of its development process and benefits. A
                    dedicated website featuring a blog was established to
                    document weekly progress updates, introduce the team, and
                    highlight the platform’s features, while also offering
                    opportunities to connect. Furthermore, content was actively
                    promoted on Instagram to raise awareness about the upcoming
                    Student Design & Technology Showcase, where Civica was
                    showcased as a key project. These efforts aimed to foster
                    interest, transparency, and engagement with the broader
                    community.
                  </p>
                  <div className={styles.socials}>
                    <div className={styles.blog}>
                      <h6>WEBSITE</h6>
                      <Image
                        src="/images/projects/civica/c6.png"
                        alt="icon 6"
                        width={1920}
                        height={1080}
                      />
                      <br />
                      <Link href="https://www.civicalaw.ca/" target="_blank">
                        View the website ↗
                      </Link>
                    </div>
                    <div className={styles.instagram}>
                      <h6>INSTAGRAM</h6>
                      <Image
                        src="/images/projects/civica/c7.png"
                        alt="icon 6"
                        width={1920}
                        height={1080}
                      />
                      <br />
                      <Link
                        href="https://www.instagram.com/civicalaw_/"
                        target="_blank"
                      >
                        View the Instagram ↗
                      </Link>
                    </div>
                  </div>
                  <br />
                  <h6>PROMOTIONAL VIDEO</h6>
                  <p>
                    In addition, a promotional video was created to be presented
                    at the Student Design & Technology Showcase. The video was
                    outlined with Storyboarder, filmed with Sony Camera, and
                    edited with Premiere Pro.
                  </p>
                  <br />
                  <Link
                      href="https://drive.google.com/file/d/1Obi7XkIwFcc4b2aT4VIdwl9PQNiB6A0I/view?usp=sharing"
                      target="_blank"
                    >
                      View promotional video ↗
                    </Link>
                  <ScaleImage src="/images/projects/civica/videopic.png" altText="clip of video" />
                  <h6>PRINTED MATERIALS</h6>
                  <Tabs tabs={tabsPrinted} className={styles.tabs} />
                </div>
                <div className={styles.outcome}>
                  <GalleryTitle title="Other Screens" />
                  <ScaleImage
                    src="/images/projects/civica/c8.png"
                    altText="other screen mockups of the app"
                  />
                </div>
              </section>
            </>
          }
        />
      </main>
    </>
  );
}
