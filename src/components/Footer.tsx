import { Palette, Instagram } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandRow}>
          <a href="#inicio" className={styles.logo}>
            <Palette className={styles.logoIcon} size={20} />
            <span className={styles.logoText}>
              Elizabeth <span className={styles.logoLastName}>Aquino Villeda</span>
            </span>
          </a>
          <p className={styles.brandTag}>Diseño, Animación y Arte Digital</p>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.copyrightRow}>
          <p className={styles.copyText}>
            &copy; {currentYear} Elizabeth Aquino Villeda. Todos los derechos reservados.
          </p>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <a href="https://www.instagram.com/sinombreazul" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)", textDecoration: "none" }}>
              <Instagram size={18} />
              <span>@SINOMBREAZUL</span>
            </a>
          </div>
          <p className={styles.unitecText}>
            UNITEC Campus &ldquo;Los Reyes&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
