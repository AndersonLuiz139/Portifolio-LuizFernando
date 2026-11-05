import styles from "./Realce.module.css";

export default function Realce({ texto, palavras = [] }) {
  const alvo = palavras.find((palavra) => texto.includes(palavra));
  if (!alvo) return texto;

  const [antes, depois] = texto.split(alvo);
  return (
    <>
      {antes}
      <span className={styles.realce}>{alvo}</span>
      {depois}
    </>
  );
}
