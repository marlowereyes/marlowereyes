import { useState } from "react";
import styles from "./Carousel.module.css";

const images = [
  "/images/projects/cinematic-spaces/full/cs1-1.png",
  "/images/projects/cinematic-spaces/full/cs2-1.png",
  "/images/projects/cinematic-spaces/full/cs3-1.png",
  "/images/projects/cinematic-spaces/full/cs4-1.png",
  "/images/projects/cinematic-spaces/full/cs5-1.png",
  "/images/projects/cinematic-spaces/full/cs6-1.png",
  "/images/projects/cinematic-spaces/full/cs7-1.png",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.imageContainer}>
        <img
          src={images[currentIndex]}
          alt="carousel"
          className={styles.image}
        />
      </div>
      <div className={styles.arrows}>
        <button onClick={prevSlide} className={styles.arrow}>
          ❮
        </button>
        <button onClick={nextSlide} className={styles.arrow}>
          ❯
        </button>
      </div>
    </div>
  );
}
