import styles from "./GalleryTitle.module.css";

export default function GalleryTitle({ title }) {
    return (
        <>
            <div className={styles.title}>
              <h2>{title}</h2>
            </div>
        </>
    )
}