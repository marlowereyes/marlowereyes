"use client"
import Link from "next/link";
import Header from "../../../components/Header";

export default function Projects() {
    return (
        <>
            <Header />
            <h1>PROJECTS PAGE</h1>
            <Link href="projects/budding-writers">Budding Writers ↗</Link>
            <Link href="projects/tranquillity-cranes">Tranquillity Cranes ↗</Link>
        </>
    )
}