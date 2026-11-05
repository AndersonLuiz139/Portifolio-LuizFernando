import { useEffect, useState } from "react";

const FAIXA = "-88px 0px -55% 0px";

export default function useScrollSpy(ids) {
  const [ativo, setAtivo] = useState(ids[0]);

  useEffect(() => {
    const secoes = ids.map((id) => document.getElementById(id)).filter(Boolean);

    if (secoes.length === 0) return;

    const visiveis = new Set();

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) visiveis.add(entrada.target.id);
          else visiveis.delete(entrada.target.id);
        }

        const atual = ids.find((id) => visiveis.has(id));
        if (atual) setAtivo(atual);
      },
      { rootMargin: FAIXA },
    );

    secoes.forEach((secao) => observador.observe(secao));
    return () => observador.disconnect();
  }, [ids]);

  return ativo;
}
