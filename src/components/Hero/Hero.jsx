import { Whatsapp } from "../../assets/icons/index.jsx";
import { hero, imagens, links } from "../../data/site.js";
import Button from "../ui/Button/Button.jsx";
import Picture from "../ui/Picture/Picture.jsx";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id={hero.id} className={styles.hero}>
      <div className={`container ${styles.grade}`}>
        <div className={styles.texto}>
          <p className={styles.eyebrow}>
            <span className={styles.longo}>{hero.eyebrow}</span>
            <span className={styles.curto}>{hero.eyebrowCurto}</span>
          </p>

          <h1 className={styles.titulo}>
            {hero.titulo.map((linha) => (
              <span key={linha}>{linha}</span>
            ))}
          </h1>

          <p className={styles.descricao}>{hero.descricao}</p>

          <div className={styles.acoes}>
            <Button
              href={links.whatsapp.padrao}
              externo
              icone={Whatsapp}
              seta
              aria-label={links.whatsapp.rotuloAcessivel}
            >
              {hero.acaoPrimaria}
            </Button>
            <Button variante="secundaria" href="#sobre">
              {hero.acaoSecundaria}
            </Button>
          </div>
        </div>

        <Picture
          className={styles.foto}
          imagem={imagens.hero}
          proporcao="4 / 5"
          zoom={1.12}
          prioridade
          sizes="(min-width: 1024px) 55vw, (min-width: 640px) 640px, 90vw"
        />
      </div>
    </section>
  );
}
