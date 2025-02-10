"use client";

import { useState } from "react";
import styles from "./FeatureSwitch.module.css";

const images = {
  chatbot: "/images/projects/civica/cf1.png",
  document: "/images/projects/civica/cf2.png",
  support: "/images/projects/civica/cf3.png",
};

export default function FeatureSwitch() {
  const [selectedImage, setSelectedImage] = useState(images.chatbot);

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div
          className={`${styles.textBox} ${
            selectedImage === images.chatbot ? styles.active : ""
          }`}
          onClick={() => setSelectedImage(images.chatbot)}
        >
          <h3>Chatbot Guidance</h3>
          <p>
            Get personalized guidance on your legal issue, like how to get
            started or reviewing your letters, by chatting with the AI Chatbot.
          </p>
        </div>
        <div
          className={`${styles.textBox} ${
            selectedImage === images.document ? styles.active : ""
          }`}
          onClick={() => setSelectedImage(images.document)}
        >
          <h3>Document Simplifier</h3>
          <p>
            Simplify complex legal jargon and summarize your documents to better
            understand your situation.
          </p>
        </div>
        <div
          className={`${styles.textBox} ${
            selectedImage === images.support ? styles.active : ""
          }`}
          onClick={() => setSelectedImage(images.support)}
        >
          <h3>Personal Support</h3>
          <p>
            Access directories for lawyers and counsellors providing you with an
            additional source for humanized care and a list of support groups
            that connect you with others who may understand what you are going
            through
          </p>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <img src={selectedImage} alt="Selected" className={styles.image} />
      </div>
    </div>
  );
}
