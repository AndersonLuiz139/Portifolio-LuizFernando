import { Activity, Dumbbell, Runner } from "../../assets/icons/index.jsx";
import { areas } from "../../data/site.js";
import SectionLabel from "../ui/SectionLabel/SectionLabel.jsx";
import styles from "./Areas.module.css";

const ICONES = [Dumbbell, Runner, Activity];

export default function Areas() {
  return (
    <section id={areas.id} className={styles.areas}>
      <div className="container">
        <header className={styles.cabecalho}>
          <div className={styles.titulos}>
            <SectionLabel numero={areas.numero}>{areas.rotulo}</SectionLabel>
            <h2>{areas.titulo}</h2>
          </div>
          <p className={styles.descricao}>{areas.descricao}</p>
        </header>

        <ol className={styles.lista}>
          {areas.itens.map((item, indice) => {
            const Icone = ICONES[indice];
            return (
              <li key={item.numero} className={styles.item}>
                <span className={styles.numero}>{item.numero}</span>
                <Icone size={24} className={styles.icone} />
                <h3 className={styles.nome}>{item.titulo}</h3>
                <p className={styles.texto}>{item.descricao}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
