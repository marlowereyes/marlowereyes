"use client";
import styles from "../styles/Page.module.css";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

export default function Home() {

  return (
    <>
      <Header />
      <Hero />
      <div className={styles.backgroundAfterGradient}>
        <div style={{ height: "200vh" }}>
          <h3>Portfolio currently under progress!</h3>
        </div>
      </div>
    </>
  );
}
