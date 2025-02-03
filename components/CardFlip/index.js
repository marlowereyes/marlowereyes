"use client";
import { useState } from "react";
import styles from "./CardFlip.module.css"; 

export default function CardFlip({
    fact,
    answer,
    srcImg = "",
    srcVideo = "",
    backColor = "var(--cream-variant)" 
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={styles.cardContainer} onClick={() => setFlipped(!flipped)}>
      <div className={`${styles.card} ${flipped ? styles.flipped : ""}`}>
        {/* Front Side */}
        <div className={`${styles.cardFace} ${styles.front}`}>
          <h4>{fact}</h4>
        </div>

        {/* Back Side */}
        <div 
          className={`${styles.cardFace} ${styles.back}`} 
          style={{ backgroundColor: backColor }}
        >
          <h4>{answer}</h4>
          {srcImg && <img src={srcImg} alt="Card Image" />}
          {srcVideo && (
            <video className={styles.video} autoPlay loop muted playsInline>
              <source src={srcVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </div>
  );
}
