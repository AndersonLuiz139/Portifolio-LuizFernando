import { MapPin } from "../../assets/icons/index.jsx";
import { experiencia, imagens } from "../../data/site.js";
import Picture from "../ui/Picture/Picture.jsx";
import Realce from "../ui/Realce/Realce.jsx";
import SectionLabel from "../ui/SectionLabel/SectionLabel.jsx";
import styles from "./Experience.module.css";

export default function Experience() {
  const { locais } = experiencia;

  return (
    <section id={experiencia.id} className={styles.experiencia}>
      <div className={`container ${styles.grade}`}>
        <header className={styles.cabecalho} data-revelar>
          <SectionLabel numero={experiencia.numero}>
            {experiencia.rotulo}
          </SectionLabel>
          <h2>
            <Realce
              texto={experiencia.titulo}
              palavras={experiencia.destaque}
            />
          </h2>
        </header>

        <div className={styles.esquerda} data-revelar>
          <figure className={styles.figura}>
            <Picture
              imagem={imagens.experienciaPrincipal}
              proporcao="3 / 4"
              sizes="(min-width: 1024px) 42vw, 90vw"
            />
            <figcaption>— {imagens.experienciaPrincipal.legenda}</figcaption>
          </figure>

          <div className={styles.locais}>
            <p className={styles.locaisRotulo}>{locais.rotulo}</p>
            <p className={styles.locaisDescricao}>{locais.descricao}</p>

            <ul className={styles.locaisLista}>
              {locais.itens.map((local) => (
                <li key={local.nome} className={styles.local}>
                  <MapPin size={20} className={styles.pin} />
                  <span>
                    {local.nome}
                    {local.complemento && <small>{local.complemento}</small>}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.direita} data-revelar>
          <ol className={styles.etapas}>
            {experiencia.etapas.map((etapa) => (
              <li key={etapa.letra} className={styles.etapa}>
                <span className={styles.letra}>{etapa.letra}</span>
                <h3 className={styles.etapaTitulo}>{etapa.titulo}</h3>
                <p className={styles.etapaTexto}>{etapa.descricao}</p>
              </li>
            ))}
          </ol>

          <Picture
            className={styles.apoio}
            imagem={imagens.experienciaApoio}
            proporcao="4 / 5"
            sizes="(min-width: 1024px) 55vw, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
