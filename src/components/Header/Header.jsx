import { useEffect, useRef, useState } from "react";
import { Close, Menu } from "../../assets/icons/index.jsx";
import { links, navegacao } from "../../data/site.js";
import Logo from "../Logo/Logo.jsx";
import Button from "../ui/Button/Button.jsx";
import styles from "./Header.module.css";

const DESKTOP = "(min-width: 820px)";

export default function Header() {
  const [aberto, setAberto] = useState(false);
  const painelRef = useRef(null);
  const alternarRef = useRef(null);

  /* Quem abre o menu e gira o celular não fica com o painel preso aberto. */
  useEffect(() => {
    const consulta = window.matchMedia(DESKTOP);
    const aoMudar = (evento) => evento.matches && setAberto(false);
    consulta.addEventListener("change", aoMudar);
    return () => consulta.removeEventListener("change", aoMudar);
  }, []);

  useEffect(() => {
    if (!aberto) return;

    const focaveis = painelRef.current.querySelectorAll("a, button");
    const primeiro = focaveis[0];
    const ultimo = focaveis[focaveis.length - 1];
    primeiro?.focus();

    function aoTeclar(evento) {
      if (evento.key === "Escape") {
        setAberto(false);
        alternarRef.current?.focus();
        return;
      }

      if (evento.key !== "Tab" || focaveis.length === 0) return;

      /* Foco preso: o Tab circula dentro do painel. */
      if (evento.shiftKey && document.activeElement === primeiro) {
        evento.preventDefault();
        ultimo.focus();
      } else if (!evento.shiftKey && document.activeElement === ultimo) {
        evento.preventDefault();
        primeiro.focus();
      }
    }

    document.addEventListener("keydown", aoTeclar);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", aoTeclar);
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.barra}`}>
        <Logo />

        <nav className={styles.navegacao} aria-label="Navegação principal">
          <ul className={styles.lista}>
            {navegacao.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={styles.link}>
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.acao}>
          <Button
            variante="secundaria"
            tamanho="sm"
            href={links.whatsapp.padrao}
            externo
            aria-label={links.whatsapp.rotuloAcessivel}
          >
            Fale comigo
          </Button>
        </div>

        <button
          ref={alternarRef}
          type="button"
          className={styles.alternar}
          aria-expanded={aberto}
          aria-controls="menu-principal"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          onClick={() => setAberto((valor) => !valor)}
        >
          {aberto ? <Close /> : <Menu />}
        </button>
      </div>

      {aberto && (
        <div id="menu-principal" ref={painelRef} className={styles.painel}>
          <ul className={styles.listaPainel}>
            {navegacao.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={styles.linkPainel}
                  onClick={() => setAberto(false)}
                >
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>

          <Button
            href={links.whatsapp.padrao}
            externo
            seta
            aria-label={links.whatsapp.rotuloAcessivel}
          >
            Fale comigo
          </Button>
        </div>
      )}
    </header>
  );
}
