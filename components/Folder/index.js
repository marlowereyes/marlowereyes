"use client";
import { useState } from "react";
import Link from "next/link";
import Chip from "../Chip";
import styles from "./Folder.module.css";
import HoverImage from "../HoverImage";
import imagesData from "../../data/projects.json";

export default function Folder() {
  const [activeChip, setActiveChip] = useState("All");

  const handleChipClick = (chipText) => {
    setActiveChip(chipText);
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.tabs}>
          <Chip
            text="All"
            isActive={activeChip === "All"}
            onClick={() => handleChipClick("All")}
          />
          <Chip
            text="UX/UI"
            isActive={activeChip === "UX/UI"}
            onClick={() => handleChipClick("UX/UI")}
          />
          <Chip
            text="Graphic"
            isActive={activeChip === "Graphic"}
            onClick={() => handleChipClick("Graphic")}
          />
          <Chip
            text="Motion"
            isActive={activeChip === "Motion"}
            onClick={() => handleChipClick("Motion")}
          />
        </div>
        <div className={styles.bodyFolder}>
          {imagesData
            .filter((image) => image.categories.includes(activeChip))
            .map((image) => (
              <HoverImage
                key={image.name}
                href={image.href}
                name={image.name}
                src={image.src}
              />
            ))}
        </div>
      </section>
    </>
  );
}
