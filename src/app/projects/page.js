"use client";
import Link from "next/link";
import Header from "../../../components/Header";
import SectionTitle from "../../../components/SectionTitle"

export default function Projects() {
  return (
    <>
      <Header />
      <SectionTitle title="PROJECTS"/>
      <Link href="projects/budding-writers">Budding Writers ↗</Link>
      <Link href="projects/tranquillity-cranes">Tranquillity Cranes ↗</Link>
    </>
  );
}
