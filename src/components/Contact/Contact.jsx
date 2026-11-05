import {
  ArrowRight,
  Instagram,
  MapPin,
  Whatsapp,
} from "../../assets/icons/index.jsx";
import { contato, linkExterno, links, marca } from "../../data/site.js";
import SectionLabel from "../ui/SectionLabel/SectionLabel.jsx";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id={contato.id} className={styles.contato}>
      <div className="container">
        <div className={styles.cartao} data-revelar>
          <div className={styles.topo}>
            <div className={styles.textos}>
              <SectionLabel numero={contato.numero}>
                {contato.rotulo}
              </SectionLabel>
              <h2>{contato.titulo}</h2>
              <p className={styles.descricao}>{contato.descricao}</p>
            </div>

            <a
              className={styles.cta}
              href={links.whatsapp.padrao}
              aria-label={links.whatsapp.rotuloAcessivel}
              {...linkExterno}
            >
              <span className={styles.ctaIcone}>
                <Whatsapp size={20} />
              </span>
              <span className={styles.ctaTextos}>
                {contato.acaoPrimaria}
                <small>{links.whatsapp.telefone}</small>
              </span>
              <ArrowRight size={20} className={styles.ctaSeta} />
            </a>
          </div>

          <div className={styles.base}>
            <div className={styles.atalhos}>
              <p className={styles.convite}>{contato.convite}</p>
              <ul className={styles.atalhosLista}>
                {contato.atalhos.map((mensagem) => (
                  <li key={mensagem}>
                    <a
                      className={styles.atalho}
                      href={links.whatsapp.comMensagem(mensagem)}
                      {...linkExterno}
                    >
                      {mensagem}
                      <ArrowRight size={16} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.redes}>
              <a
                className={styles.rede}
                href={links.instagram.url}
                aria-label={links.instagram.rotuloAcessivel}
                {...linkExterno}
              >
                <Instagram size={20} className={styles.redeIcone} />
                <span>{contato.acaoInstagram}</span>
                <small>{links.instagram.usuario}</small>
              </a>

              <p className={styles.local}>
                <MapPin size={20} className={styles.redeIcone} />
                {marca.cidadeCompleta}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
