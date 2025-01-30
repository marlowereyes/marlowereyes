import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        <Link href="/projects" className={styles.navLink}>
          Projects
        </Link>
        <Link href="/about" className={styles.navLink}>
          About
        </Link>
        <Link href="/#contact" className={styles.contactButton}>
          Contact
        </Link>
      </nav>
      <nav className={styles.navMobile}>
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        {menuOpen && (
          <div className={styles.mobileMenu}>
            <button
              className={styles.closeButton}
              onClick={() => setMenuOpen(false)}
            >
              ✖
            </button>
            <Link
              href="/projects"
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              <h2>PROJECTS</h2>
            </Link>
            <Link
              href="/about"
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              <h2>ABOUT</h2>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
