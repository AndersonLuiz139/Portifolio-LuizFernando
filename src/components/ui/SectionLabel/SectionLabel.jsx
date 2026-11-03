import styles from "./SectionLabel.module.css";

export default function SectionLabel({ numero, children }) {
  return (
    <p className={styles.rotulo}>
      <span className={styles.raia} aria-hidden="true" />
      {numero} / {children}
    </p>
  );
}
