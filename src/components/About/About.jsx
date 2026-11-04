import { useState } from "react";
import { imagens, marca, sobre } from "../../data/site.js";
import Picture from "../ui/Picture/Picture.jsx";
import SectionLabel from "../ui/SectionLabel/SectionLabel.jsx";
import styles from "./About.module.css";

export default function About() {
  const [expandido, setExpandido] = useState(false);

  return (
    <section id={sobre.id} className={styles.sobre}>
      <div className={`container ${styles.grade}`}>
        <header className={styles.cabecalho}>
          <SectionLabel numero={sobre.numero}>{sobre.rotulo}</SectionLabel>
          <h2>{sobre.titulo}</h2>
        </header>

        <div className={styles.corpo}>
          <p className={styles.lead}>{sobre.lead}</p>

          <div
            id="biografia"
            className={[styles.paragrafos, expandido && styles.expandido]
              .filter(Boolean)
              .join(" ")}
          >
            {sobre.paragrafos.map((texto) => (
              <p key={texto}>{texto}</p>
            ))}
          </div>

          <button
            type="button"
            className={styles.verMais}
            aria-expanded={expandido}
            aria-controls="biografia"
            onClick={() => setExpandido((valor) => !valor)}
          >
            {expandido ? "Recolher biografia" : sobre.verMais}
          </button>
        </div>

        <figure className={styles.figura}>
          <Picture
            imagem={imagens.sobre}
            proporcao="4 / 5"
            sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 90vw"
          />
          <figcaption>— {imagens.sobre.legenda}</figcaption>
        </figure>

        <dl className={styles.dados}>
          {sobre.dados.map((dado) => (
            <div key={dado.rotulo} className={styles.dado}>
              <dt>{dado.rotulo}</dt>
              <dd>{dado.valor}</dd>
            </div>
          ))}
        </dl>

        <blockquote className={styles.citacao}>
          <p>“{sobre.citacao}”</p>
          <footer className={styles.assinatura}>
            <span className={styles.assinaturaNome}>{marca.nome}</span>
            <span className={styles.barra} aria-hidden="true" />
            <span className={styles.assinaturaProfissao}>{marca.profissao}</span>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
