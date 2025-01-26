import ProjectFeatIntro from "../../../../components/ProjectFeatIntro";
import ProjectFeatDetails from "../../../../components/ProjectFeatDetails";

export default function BuddingWriters() {
  return (
    <>
      <ProjectFeatIntro
        name="Budding Writers"
        type="UX/UI DESIGN"
        paragraph="Budding Writers is a café curated for literary enthusiasts. 
        It offers aspiring writers a haven to find secondhand books, connect with 
        the writing community, or simply enjoy coffee and pastries. For this project, 
        a team of four used Figma to design and WordPress to develop a website for 
        Budding Writers. The website aims to enhance the customer experience by offering 
        features such as online ordering, reservations, a bookstore, and an events calendar."
        href="https://www.budding-writers.org/"
        hrefText="View the site ↗"
        src="/images/budding-writers/bw1.png"
        altText="computer of budding writers home screen"
      />
      <ProjectFeatDetails
        duration="5 months"
        role="Project Manager & UX/UI Designer — Wireframing, Prototyping, Content Inventory, User Journey Mapping, User Research, Usability Testing"
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
    </>
  );
}
