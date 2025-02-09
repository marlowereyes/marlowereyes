import styles from "./GalleryLayout.module.css";

export default function GalleryLayout({ content }){
    return (
        <section className={styles.gallery}>
            <div className={styles.layout}>
                {content}
            </div>
        </section>
    )
}