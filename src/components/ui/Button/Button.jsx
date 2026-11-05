import { ArrowDown, ArrowRight } from "../../../assets/icons/index.jsx";
import { linkExterno } from "../../../data/site.js";
import styles from "./Button.module.css";

export default function Button({
  children,
  variante = "primaria",
  tamanho = "md",
  href,
  externo = false,
  icone: Icone,
  seta = false,
  className,
  ...props
}) {
  const classes = [styles.botao, styles[variante], styles[tamanho], className]
    .filter(Boolean)
    .join(" ");

  const paraBaixo = seta === "baixo";
  const Seta = paraBaixo ? ArrowDown : ArrowRight;

  const conteudo = (
    <>
      {Icone && <Icone size={20} />}
      <span>{children}</span>
      {seta && (
        <Seta
          size={20}
          className={paraBaixo ? styles.setaBaixo : styles.seta}
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(externo ? linkExterno : null)}
        {...props}
      >
        {conteudo}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {conteudo}
    </button>
  );
}
