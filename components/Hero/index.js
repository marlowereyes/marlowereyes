import { useState, useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
    const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
    const cursorPositionRef = useRef({ x: 50, y: 50 });
    const gradientRef = useRef({ x: 50, y: 50 });
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const animate = () => {
        gradientRef.current.x +=
          (cursorPositionRef.current.x - gradientRef.current.x) * 0.1;
        gradientRef.current.y +=
          (cursorPositionRef.current.y - gradientRef.current.y) * 0.1;
  
        setGradientPosition({
          x: Math.round(gradientRef.current.x * 100) / 100,
          y: Math.round(gradientRef.current.y * 100) / 100,
        });
  
        requestAnimationFrame(animate);
      };
  
      animate();
    }, []);
  
    const handleMouseMove = (e) => {
      const { clientX, clientY, currentTarget } = e;
      const { width, height, left, top } = currentTarget.getBoundingClientRect();
  
      const x = ((clientX - left) / width) * 100;
      const y = ((clientY - top) / height) * 100;
  
      cursorPositionRef.current = { x, y };
    };
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <>
      <div
        className={styles.gradientBackground}
        onMouseMove={handleMouseMove}
        style={{
          "--x": `${gradientPosition.x}%`,
          "--y": `${gradientPosition.y}%`,
        }}
      >
        <div className={styles.hero}>
          <h1>
            MARLOWE
            <br />
            REYES
          </h1>
          <h6>DESIGN PORTFOLIO.</h6>
        </div>
      </div>
    </>
  );
}
