"use client";
import { useState } from "react";
import Header from "../../../components/Header";
import SectionTitle from "../../../components/SectionTitle";
import Footer from "../../../components/Footer";
import Folder from "../../../components/Folder";

export default function Projects() {
  const [activeChip, setActiveChip] = useState("All");

  const handleChipClick = (chipText) => {
    setActiveChip(chipText);
  };

  return (
    <>
      <Header />
      <main>
      <SectionTitle title="PROJECTS" />
        <Folder />
      </main>
      <Footer />
    </>
  );
}
