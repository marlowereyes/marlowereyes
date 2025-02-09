import styles from "./FigmaEmbed.module.css";

export default function FigmaEmbed({ src, caption }) {
    return (
      <div className={styles.container}>
        <iframe
          style={{ border: '1px solid #ccc', borderRadius: '8px' }}
          width="960"
          height="540"
          src={src}
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  

  