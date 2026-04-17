/*
   Navbar — Barra de navegación principal.
 
 */

import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoLink}>
          <div className={styles.logoGroup}>
            <div className={styles.logoIcon}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="28" height="28" rx="7" fill="var(--color-accent)" />
                <path d="M11 8.5L20 14L11 19.5V8.5Z" fill="white" />
              </svg>
            </div>
            <h1 className={styles.logo}>FrameLix</h1>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
