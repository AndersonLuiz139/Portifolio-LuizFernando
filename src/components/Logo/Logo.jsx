import { marca } from "../../data/site.js";
import styles from "./Logo.module.css";

export function Monograma({ size = 28, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="16 12 76 76"
      fill="currentColor"
      aria-hidden="true"
      className={[styles.monograma, className].filter(Boolean).join(" ")}
    >
      <rect x="16" y="12" width="12" height="76" />
      <rect x="16" y="76" width="58" height="12" />
      <rect x="40" y="12" width="12" height="52" />
      <rect x="40" y="12" width="44" height="12" />
      <rect x="40" y="34" width="32" height="12" />
      <circle cx="86" cy="82" r="6" fill="var(--c-blue)" />
    </svg>
  );
}

export default function Logo({ variante = "header" }) {
  const noRodape = variante === "rodape";

  return (
    <a
      href="#inicio"
      className={styles[variante]}
      aria-label={`${marca.nome}, voltar ao início`}
    >
      <Monograma size={noRodape ? 40 : 28} />
      {noRodape && <span className={styles.divisoria} />}
      <span className={styles.nome}>
        {marca.nome}
        {noRodape && <small>{marca.profissao}</small>}
      </span>
    </a>
  );
}
