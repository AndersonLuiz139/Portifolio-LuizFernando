export const marca = {
  nome: "Luiz Fernando",
  profissao: "Educação Física",
  papel: "Estudante de Educação Física",
  cidade: "Timbaúba — PE",
  cidadeCompleta: "Timbaúba — Pernambuco, Brasil",
};

const WHATSAPP_NUMERO = "5581994524153";

const linkWhatsapp = (mensagem) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;

export const links = {
  whatsapp: {
    telefone: "(81) 99452-4153",
    padrao: linkWhatsapp(
      "Olá, Luiz Fernando! Vi seu site e gostaria de saber mais sobre seu trabalho.",
    ),
    comMensagem: linkWhatsapp,
    rotuloAcessivel: "Falar com Luiz Fernando pelo WhatsApp (abre em nova aba)",
  },
  instagram: {
    usuario: "@lulafernaandes",
    url: "https://www.instagram.com/lulafernaandes/",
    rotuloAcessivel: "Acompanhar Luiz Fernando no Instagram (abre em nova aba)",
  },
};

export const linkExterno = {
  target: "_blank",
  rel: "noopener noreferrer",
};

export const navegacao = [
  { id: "inicio", rotulo: "Início" },
  { id: "sobre", rotulo: "Sobre" },
  { id: "atuacao", rotulo: "Atuação", tambemAtivaEm: ["experiencia"] },
  { id: "contato", rotulo: "Contato" },
];

export const imagens = {
  hero: {
    nome: "luiz-corda-naval",
    larguras: [640, 960],
    alt: "Luiz Fernando treinando com cordas navais em uma academia",
    posicao: "30% 18%",
  },
  sobre: {
    nome: "luiz-retrato-medalha",
    larguras: [640, 854],
    alt: "Luiz Fernando sorrindo após uma corrida de rua, segurando a medalha de participação",
    posicao: "55% 30%",
    legenda: "Depois da linha de chegada.",
  },
  experienciaPrincipal: {
    nome: "luiz-corrida-orla",
    larguras: [640, 900],
    alt: "Luiz Fernando correndo em uma avenida à beira-mar, em plena passada",
    posicao: "50% 20%",
    legenda: "Movimento: treino de corrida na orla.",
  },
  experienciaApoio: {
    nome: "luiz-corrida-prova",
    larguras: [640, 1066],
    alt: "Luiz Fernando durante uma prova de rua de 5 km",
    posicao: "40% 70%",
  },
};

export const hero = {
  id: "inicio",
  eyebrow: "Estudante de Educação Física · Timbaúba — PE",
  eyebrowCurto: "Estudante de Ed. Física · Timbaúba — PE",
  titulo: ["Treine com propósito.", "Evolua com consistência."],
  destaque: ["propósito", "consistência"],
  descricao:
    "Estudante de Educação Física, com foco no treinamento físico, no desenvolvimento das capacidades físicas e na evolução por meio do movimento.",
  acaoPrimaria: "Falar pelo WhatsApp",
  acaoSecundaria: "Conheça minha trajetória",
};

export const sobre = {
  id: "sobre",
  numero: "01",
  rotulo: "Sobre",
  titulo: "Movimento com propósito.",
  lead: "Sou estudante do 3º período de Educação Física, movido pela paixão pelo treinamento físico e pelo propósito de transformar vidas por meio do movimento.",
  paragrafos: [
    "Com nove meses de experiência prática na área, venho construindo minha trajetória com dedicação, responsabilidade e busca constante por conhecimento. Essa experiência tem contribuído para o desenvolvimento das minhas habilidades no acompanhamento e na orientação de atividades físicas.",
    "Acredito que o treinamento vai além dos resultados estéticos: envolve o desenvolvimento das capacidades físicas, o controle dos movimentos, a coordenação e a funcionalidade corporal.",
    "Vejo a Educação Física como uma área de aprendizado contínuo e de grande impacto na qualidade de vida. Meu objetivo é construir uma trajetória pautada pelo conhecimento, pela responsabilidade e pelo compromisso com o movimento humano.",
  ],
  verMais: "Ler biografia completa",
  dados: [
    { rotulo: "Formação", valor: "3º período · Educação Física" },
    { rotulo: "Prática", valor: "9 meses de experiência" },
    { rotulo: "Cidade", valor: "Timbaúba — PE" },
  ],
  citacao:
    "Treinar com propósito, evoluir com consistência e transformar vidas por meio do movimento.",
};

export const areas = {
  id: "atuacao",
  numero: "02",
  rotulo: "Áreas de interesse",
  titulo: "O foco é evoluir.",
  descricao:
    "Temas que guiam meus estudos e minha prática enquanto estudante de Educação Física.",
  itens: [
    {
      numero: "01",
      titulo: "Musculação",
      descricao:
        "Desenvolvimento da força e das capacidades físicas por meio do treinamento.",
    },
    {
      numero: "02",
      titulo: "Treinamento esportivo",
      descricao:
        "Movimento, condicionamento e preparação física relacionados à prática esportiva.",
    },
    {
      numero: "03",
      titulo: "Capacidades físicas",
      descricao:
        "Força, coordenação, controle dos movimentos e funcionalidade corporal.",
    },
  ],
};

export const experiencia = {
  id: "experiencia",
  numero: "03",
  rotulo: "Experiência e movimento",
  titulo: "Aprender, praticar, evoluir.",
  destaque: ["evoluir"],
  etapas: [
    {
      letra: "A",
      titulo: "Aprender",
      descricao:
        "3º período de Educação Física, com busca constante por conhecimento.",
    },
    {
      letra: "P",
      titulo: "Praticar",
      descricao:
        "Nove meses de experiência prática no acompanhamento e na orientação de atividades físicas.",
    },
    {
      letra: "E",
      titulo: "Evoluir",
      descricao:
        "Treino e esporte como parte da própria rotina — da academia à pista.",
    },
  ],
  locais: {
    rotulo: "Onde venho praticando",
    descricao:
      "Acompanhamento e orientação de atividades físicas na rotina de academia e centro de treinamento.",
    itens: [
      { nome: "Bravus Gym" },
      { nome: "CTTC", complemento: "Centro de Treinamento Titanium Core" },
    ],
  },
};

export const contato = {
  id: "contato",
  numero: "04",
  rotulo: "Contato · A linha de chegada",
  titulo: "Vamos conversar?",
  descricao:
    "Quer conhecer melhor minha trajetória e conversar sobre treinamento físico? Entre em contato e vamos conversar.",
  convite: "Comece com uma mensagem pronta:",
  acaoPrimaria: "Falar pelo WhatsApp",
  acaoInstagram: "Acompanhar no Instagram",
  atalhos: ["Quero conhecer sua trajetória", "Quero falar sobre treinamento"],
};

export const rodape = {
  descricao: "Estudante · Timbaúba — PE",
  titular: "Luiz Fernando",
};
