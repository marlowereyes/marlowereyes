import styles from "./ContactButton.module.css";

export default function ScrollButtons() {
    return (
      <div className={styles.contactButton}>
        <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}>
          Contact
        </button>
      </div>
    );
  }
  