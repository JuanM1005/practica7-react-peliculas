import styles from "./Footer.module.css";
// IMPORTANTE: Así se importan las imágenes que están dentro de la carpeta 'src'
import escudoCucei from "../assets/escudo-cucei.webp";

/**
 * Componente Footer
 * Propósito: Mostrar créditos del equipo, profesor y datos de la institución (CUCEI).
 */
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        {/* Lado izquierdo: Datos divididos en dos columnas para más elegancia */}
        <div className={styles.footerContent}>
          <div className={styles.column}>
            <p>
              <span className={styles.label}>Integrantes:</span> Renata Margarita, Juan Antonio,
              Eriberto Orozco
            </p>
            <p>
              <span className={styles.label}>Profesor:</span> Zeus Emmanuel Gutierrez Cobian
            </p>
            <p>
              <span className={styles.label}>Materia:</span> Desarrollo Web
            </p>
          </div>
          <div className={styles.column}>
            <p>
              <span className={styles.label}>Calendario:</span> 2026A
            </p>
            <p>
              <span className={styles.label}>Fecha:</span> Abril 2026
            </p>
            <p>
              <span className={styles.label}>Institución:</span> CUCEI - UDG
            </p>
          </div>
        </div>

        {/* Lado derecho: El logo */}
        <div className={styles.logoContainer}>
          <img src={escudoCucei} alt="Escudo CUCEI" className={styles.logo} />
        </div>
      </div>

      {/* Línea de copyright extra para darle el toque pro */}
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Proyecto Práctica 7. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
