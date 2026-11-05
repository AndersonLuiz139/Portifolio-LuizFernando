import { linkExterno, links, rodape } from "../../data/site.js";
import Logo from "../Logo/Logo.jsx";
import styles from "./Footer.module.css";

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className={styles.rodape}>
      <div className={`container ${styles.conteudo}`}>
        <div className={styles.marca}>
          <Logo variante="rodape" />
          <p className={styles.descricao}>{rodape.descricao}</p>
        </div>

        <div className={styles.direita}>
          <nav className={styles.redes} aria-label="Redes sociais">
            <a
              href={links.instagram.url}
              aria-label={links.instagram.rotuloAcessivel}
              {...linkExterno}
            >
              Instagram
            </a>
            <a
              href={links.whatsapp.padrao}
              aria-label={links.whatsapp.rotuloAcessivel}
              {...linkExterno}
            >
              WhatsApp
            </a>
          </nav>

          <p className={styles.direitos}>
            © {ano} {rodape.titular}
          </p>
        </div>
      </div>
    </footer>
  );
}
