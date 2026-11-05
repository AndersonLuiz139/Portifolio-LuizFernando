import styles from "./Picture.module.css";

function srcset(nome, larguras, extensao) {
  return larguras
    .map((l) => `/images/${nome}-${l}.${extensao} ${l}w`)
    .join(", ");
}

export default function Picture({
  imagem,
  sizes,
  proporcao,
  zoom,
  prioridade = false,
  className,
  ...props
}) {
  const { nome, larguras, alt, posicao } = imagem;
  const maior = larguras[larguras.length - 1];

  return (
    <picture
      className={[styles.picture, className].filter(Boolean).join(" ")}
      {...props}
    >
      <source
        type="image/webp"
        srcSet={srcset(nome, larguras, "webp")}
        sizes={sizes}
      />
      <img
        src={`/images/${nome}-${maior}.jpg`}
        srcSet={srcset(nome, larguras, "jpg")}
        sizes={sizes}
        alt={alt}
        loading={prioridade ? "eager" : "lazy"}
        fetchPriority={prioridade ? "high" : "auto"}
        decoding={prioridade ? "sync" : "async"}
        className={styles.img}
        style={{
          aspectRatio: proporcao,
          objectPosition: posicao,
          "--zoom": zoom,
        }}
      />
    </picture>
  );
}
