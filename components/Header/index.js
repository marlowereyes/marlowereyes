import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <Link href="/">
        <Image
          src={"/simple-logo.png"}
          width={64}
          height={24}
          alt="marlowe reyes logo"
        />
      </Link>
      <nav className={styles.nav}>
        <Link href="/projects" className={styles.navLink}>Projects</Link>
        <Link href="/about" className={styles.navLink}>About</Link>
        <Link href="/#contact" className={styles.contactButton}>Contact</Link>
      </nav>
    </header>
  );
}
