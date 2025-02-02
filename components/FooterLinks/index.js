import { useState } from "react"; // Import useState
import styles from "./FooterLinks.module.css";
import Link from "next/link";
import LinkedIn from "../Icons/LinkedIn";
import GitHub from "../Icons/GitHub";
import Email from "../Icons/Email";

export default function FooterLinks() {
  const [copied, setCopied] = useState(false); // Define copied state

  function handleEmail(e) {
    if (!copied) navigator.clipboard.writeText("marlowerreyes@gmail.com");
    setCopied(!copied);
  }
  return (
    <>
        <div className={styles.externalLinks}>
          <Link
            href="https://www.linkedin.com/in/marlowe-reyes/"
            className={styles.link}
          >
            <LinkedIn className={styles.icon} />
          </Link>
          <Link href="https://github.com/marlowereyes" className={styles.link}>
            <GitHub className={styles.icon} />
          </Link>
          <button className={styles.link}>
            <Email
              className={styles.icon}
              src="/images/icons/mail-black.svg"
              onMouseOver={(e) =>
                (e.currentTarget.src = "/images/icons/mail-brightblue.svg")
              }
              onMouseOut={(e) => {
                if (!copied)
                  e.currentTarget.src = "/images/icons/mail-black.svg";
              }}
              onClick={handleEmail}
            />
          </button>
          {copied && (
            <div>
              <p style={{ color: "var(--red)" }}>marlowerreyes@gmail.com</p>
              <p>Copied to clipboard!</p>
            </div>
          )}
        </div>
    </>
  );
}
