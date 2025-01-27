import styles from "./Chip.module.css";

export default function Chip({ text, isActive, onClick }) {
  return (
    <>
      <button
        className={`${styles.chip} ${isActive ? styles.active : ""}`}
        onClick={onClick}
      >
        <h5>{text}</h5>
      </button>
    </>
  );
}
