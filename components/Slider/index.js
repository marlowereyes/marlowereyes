"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./Slider.module.css";

export default function Slider({ imageLeft, imageRight, textLeft, textRight }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const updateSliderPosition = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const position = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handleMouseDown = () => (isDragging.current = true);
  const handleMouseUp = () => (isDragging.current = false);

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      updateSliderPosition(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    updateSliderPosition(e.touches[0].clientX);
  };

  return (
    <div className={styles.contentContainer}>
      <h6
        style={{
          color: sliderPosition < 50 ? "var(--cream-variant)" : "var(--cream)",
        }}
      >
        {textLeft}
      </h6>

      <div
        className={styles.container}
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        <Image
          src={imageLeft}
          alt="Client's Design"
          fill
          style={{ objectFit: "cover" }}
        />

        <div
          className={styles.overlay}
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <Image
            src={imageRight}
            alt="My Design Edits"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div
          className={styles.slider}
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        ></div>
      </div>

      <h6
        style={{
          color: sliderPosition >= 50 ? "var(--cream-variant)" : "var(--cream)",
        }}
      >
        {textRight}
      </h6>
    </div>
  );
}
