import { useLayoutEffect } from "react";

/* Revela um pouco antes de encostar na borda, para o movimento não começar
   já com o bloco no meio da tela. */
const MARGEM = "0px 0px -10% 0px";

export default function useReveal() {
  useLayoutEffect(() => {
    const raiz = document.documentElement;
    const reduzido = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    /* Sem o atributo o CSS não esconde nada: se o JS falhar ou o visitante
       pedir menos movimento, o conteúdo aparece normalmente. */
    if (reduzido) return;
    raiz.dataset.revelacao = "ativa";

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (!entrada.isIntersecting) continue;
          entrada.target.dataset.visivel = "";
          observador.unobserve(entrada.target);
        }
      },
      { rootMargin: MARGEM },
    );

    document
      .querySelectorAll("[data-revelar]")
      .forEach((alvo) => observador.observe(alvo));

    return () => {
      observador.disconnect();
      delete raiz.dataset.revelacao;
    };
  }, []);
}
