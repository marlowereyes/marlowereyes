"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../../../components/Header";
import SectionTitle from "../../../components/SectionTitle";
import Folder from "../../../components/Folder";

export default function Projects() {
  const [activeChip, setActiveChip] = useState("All");

  const handleChipClick = (chipText) => {
    setActiveChip(chipText);
  };

  return (
    <>
      <Header />
      <SectionTitle title="PROJECTS" />
        <Folder />
    </>
  );
}
