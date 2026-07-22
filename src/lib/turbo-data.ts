  name: "Turbo Details",
  location: "Jequié, Bahia",
  address: "Rua Medeiros Neto, 42 — Centro",
  city: "Jequié - BA, 45203-610",
  instagram: "https://instagram.com/_turbodetails",
  instagramHandle: "@_turbodetails",
  agendar: "https://minhaautoagenda.com/p/turbodetails",
  whatsapp: "https://wa.me/5573999737318",
  whatsappPhone: "5573999737318",
  stats: [
    { value: "+1.200", label: "carros atendidos" },
    { value: "4.9★", label: "avaliação Google" },
    { value: "32", label: "serviços" },
    { value: "+2 anos", label: "no mercado" },
  ],
  hours: [
    ["Segunda-feira", "08h30 – 17h"],
    ["Terça-feira", "08h30 – 17h"],
    ["Quarta-feira", "08h30 – 17h"],
    ["Quinta-feira", "08h30 – 17h"],
    ["Sexta-feira", "08h30 – 17h"],
    ["Sábado", "08h30 – 15h"],
    ["Domingo", "Fechado"],
  ] as [string, string][],
  status: {
    open: false,
    label: "Fechado no momento",
    detail: "Fechamos às 17h — retornamos amanhã às 8h30.",
  },
};

export type ServiceTier = { size: "P" | "M" | "G"; price: number };
export type Service = {
  id: string;
  name: string;
  desc: string;
  price?: number;
  tiers?: ServiceTier[];
  from?: number;
  tag?: string;
  unit?: string;
};

export const CAR_SERVICES: Service[] = [
  {
    id: "lavagem-tradicional",
    name: "Lavagem Tradicional",
    desc: "Externa e interna completa com secagem e acabamento nos detalhes.",
    tiers: [{ size: "P", price: 70 }, { size: "M", price: 80 }, { size: "G", price: 95 }],
    from: 70,
  },
  {
    id: "manutencao-bronze",
    name: "Manutenção Bronze",
    desc: "Lavagem com manutenção da proteção da pintura entre detalhamentos.",
    tiers: [{ size: "P", price: 139 }, { size: "M", price: 149 }, { size: "G", price: 169 }],
    from: 139,
  },
  {
    id: "higienizacao-carpete",
    name: "Higienização do Carpete",
    desc: "Limpeza profunda do carpete, manchas antigas e odores eliminados.",
    price: 120,
  },
  {
    id: "higienizacao-bancos",
    name: "Higienização dos Bancos",
    desc: "Bancos de tecido ou couro tratados a fundo com hidratação.",
    price: 197,
    tag: "Popular",
  },
  {
    id: "premium-prata",
    name: "Premium Prata",
    desc: "Lavagem tradicional com camada de proteção e acabamento técnico.",
    tiers: [{ size: "P", price: 200 }, { size: "M", price: 220 }, { size: "G", price: 250 }],
    from: 200,
  },
  {
    id: "revitalizacao-farol",
    name: "Revitalização de Farol",
    desc: "Remove a opacidade e devolve transparência cristalina.",
    price: 170,
  },
  {
    id: "elite-gold",
    name: "Elite Gold",
    desc: "Tratamento estético completo, do interior à pintura externa.",
    tiers: [{ size: "P", price: 310 }, { size: "M", price: 335 }, { size: "G", price: 360 }],
    from: 310,
    tag: "Top de linha",
  },
  {
    id: "pacote-diamond",
    name: "Pacote Diamond",
    desc: "O mais completo: detalhamento total externo e interno, nível showroom.",
    tiers: [{ size: "P", price: 1000 }, { size: "M", price: 1100 }, { size: "G", price: 1200 }],
    from: 1000,
    tag: "Premium",
  },
];

export const MOTO_SERVICES: Service[] = [
  {
    id: "moto-tecnica",
    name: "Lavagem Técnica Moto",
    desc: "Lavagem completa com produtos adequados para motocicletas.",
    price: 50,
    tag: "Popular",
  },
  {
    id: "moto-detalhada",
    name: "Lavagem Detalhada Moto",
    desc: "Lavagem técnica com atenção especial à carenagem e acabamentos.",
    price: 150,
  },
  {
    id: "moto-polimento",
    name: "Polimento Moto",
    desc: "Polimento da pintura e peças cromadas, brilho original restaurado.",
    price: 150,
  },
];

export const PLANOS: Service[] = [
  {
    id: "plano-quinzenal",
    name: "Plano Quinzenal",
    desc: "Visita a cada 15 dias, prioridade no agendamento e carro sempre limpo.",
    tiers: [{ size: "P", price: 129 }, { size: "M", price: 149 }, { size: "G", price: 179 }],
    from: 129,
    unit: "/visita",
    tag: "Quinzenal",
  },
  {
    id: "plano-semanal",
    name: "Plano Semanal",
    desc: "Para quem não abre mão do carro impecável toda semana.",
    tiers: [{ size: "P", price: 249 }, { size: "M", price: 289 }, { size: "G", price: 339 }],
    from: 249,
    unit: "/visita",
    tag: "Semanal",
  },
];

export const BEFORE_AFTER = [
  {
    id: "farol",
    title: "Revitalização de Farol",
    caption: "Farol opaco e amarelado → transparência cristalina restaurada",
    before: "https://turbo-details.vercel.app/assets/farol-antes.jpeg",
    after: "https://turbo-details.vercel.app/assets/farol-depois.jpeg",
  },
  {
    id: "cola",
    title: "Remoção de Cola de Tecido",
    caption: "Cola de tecido impregnada → interior renovado e limpo",
    before: "https://turbo-details.vercel.app/assets/cola-antes.jpeg",
    after: "https://turbo-details.vercel.app/assets/cola-depois.jpeg",
  },
];

export const REVIEWS = [
  { name: "Davi Neto", when: "há um mês", text: "Lavagem excelente, um atendimento personalizado e com muita qualidade, satisfação total com o serviço prestado." },
  { name: "Jamile Martins", when: "há um mês", text: "Melhor lavagem de Jequié. Equipe atenciosa e educada!" },
  { name: "Jálvaro Santana", when: "4 semanas atrás", text: "Excelente, lavagem cuidadosa e de qualidade, o veículo sempre sai no padrão." },
  { name: "Cleisson Silva", when: "8 meses atrás", text: "Lavagem de primeira qualidade. Super recomendo!" },
  { name: "Josiane Brustolin", when: "3 semanas atrás", text: "Atendimento gentil, prestativo e trabalho eficiente." },
  { name: "Luma Chaves", when: "8 meses atrás", text: "Serviço excepcional!!!! Volto sempreeee!!!" },
  { name: "Ângelo Miguel", when: "8 meses atrás", text: "Ótimo serviço, atendimento de qualidade." },
  { name: "Danilo Santana", when: "há um mês", text: "Excelente serviço!" },
  { name: "Cássia Reiis", when: "8 meses atrás", text: "Melhor da cidade!! 👏🏻👏🏻 Atendimento perfeito!!" },
  { name: "Thiago Antônio", when: "há um mês", text: "Aí de excelência!" },
];

export const FAQ = [
  {
    q: "Preciso agendar com antecedência?",
    a: "Não é obrigatório, atendemos por ordem de chegada, Seg–Sáb das 8h às 18h. Para serviços mais longos como polimento, recomendamos avisar antes pelo WhatsApp.",
  },
  {
    q: "Quanto tempo demora cada serviço?",
    a: "Lavagem tradicional: 40min–1h30. Serviços técnicos como polimento ou Pacote Diamond podem levar de algumas horas a um dia completo. Sempre informamos o prazo antes.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Pix, cartão de crédito, cartão de débito e dinheiro.",
  },
  {
    q: "O preço muda conforme o porte do carro?",
    a: "Sim, para vários serviços o valor varia entre porte P, M e G. Os valores aparecem no card de cada serviço e na tabela completa.",
  },
  {
    q: "Atendem motos também?",
    a: "Sim! Temos serviços próprios para motos com produtos e técnicas adequadas para cada superfície.",
  },
];

export const DIFERENCIAIS = [
  "Atendimento individual, sem terceirização",
  "Produtos e técnicas atualizados para cada superfície",
  "Preço combinado é preço cobrado, sem surpresas",
  "Atendemos carros e motos",
];

export const HERO_IMAGE = "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1600&auto=format&fit=crop";
export const INTERIOR_IMAGE = "https://turbo-details.vercel.app/assets/interior.jpeg";
