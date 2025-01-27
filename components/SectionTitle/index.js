import styles from "./SectionTitle.module.css";

export default function SectionTitle({
    title
}) {
  return (
    <>
      <section className={styles.container}>
        <h1>{title}</h1>
        <div className={styles.gradient}></div>
      </section>
    </>
  );
}
