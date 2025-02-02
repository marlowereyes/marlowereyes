import FooterLinks from "../FooterLinks";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.mainLinks}>
              <h3>Allow me to help bring your vision to life!</h3>
            <FooterLinks />
            </div>
          </div>
          <h6>
            <span className={styles.copyright}>© 2024 Marlowe Reyes |</span> MR4
            Visions
          </h6>
        </div>
        <Image src="/footer-logo.png" width={400} height={200} alt="Marlowe Reyes logo" className={styles.logo}/>
      </footer>
    </>
  );
}
