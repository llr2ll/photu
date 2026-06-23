export const FAQS = [
  { question: 'Os vídeos são entregues no dia do evento?', answer: 'Os stories são postados em tempo real durante o evento. Os Reels editados são entregues em até 48 horas após o evento.' },
  { question: 'Quantos profissionais vão ao meu evento?', answer: 'Todos os pacotes incluem 2 profissionais Storymakers e editores fixos durante todo o período de captação contratado.' },
  { question: 'Posso adicionar horas ao meu pacote?', answer: 'Sim. O valor da hora adicional de storymaker é R$ 200, podendo ser incluída antes ou no dia do evento conforme disponibilidade.' },
  { question: 'Vocês atendem em quais cidades?', answer: 'Somos baseados em Santos - SP e atendemos toda a Baixada Santista. Para outras regiões, entre em contato para verificar disponibilidade.' },
  { question: 'Como faço para reservar minha data?', answer: 'Entre em contato pelo WhatsApp, informe a data e o tipo de evento. A reserva é confirmada com o pagamento de sinal, e o orçamento tem validade de 7 dias.' },
  { question: 'O que é marcação de @ nos stories?', answer: 'Durante os stories ao vivo, marcamos até 10 perfis do Instagram, como familiares, convidados ou fornecedores do evento.' },
]

export const EventTypes = [
  {
    id: 'aniversarios',
    label: '🎂 Aniversários',
    packages: [
      {
        hours: '4 Horas',
        tag: 'MAIS VENDIDO',
        reels: 4,
        price: 'R$ 600',
        featured: true,
      },
      {
        hours: '6 Horas',
        tag: null,
        reels: 6,
        price: 'R$ 900',
        featured: false,
      },
    ],
  },
  {
    id: 'quinze',
    label: '👑 15 Anos',
    packages: [
      {
        hours: '4 Horas',
        tag: 'MAIS VENDIDO',
        reels: 4,
        price: 'R$ 800',
        featured: true,
      },
      {
        hours: '6 Horas',
        tag: null,
        reels: 6,
        price: 'R$ 1.200',
        featured: false,
      },
    ],
  },
  {
    id: 'casamentos',
    label: '💍 Casamentos',
    packages: [
      {
        hours: '4 Horas',
        tag: 'MAIS VENDIDO',
        reels: 4,
        price: 'R$ 800',
        featured: true,
      },
      {
        hours: '8 Horas',
        tag: null,
        reels: 8,
        price: 'R$ 1.600',
        featured: false,
      },
    ],
  },
]

export const Includes = [
  '📲 Stories ilimitados durante todo o período',
  '🎬 Resolução em qualidade alta 4K',
  '🤩 Captação em ângulos diferentes',
  '👥 2 profissionais Storymakers / editores fixos',
  '📍 Marcamos até 10 @ nos stories do perfil',
]

export const Items = [
  {
    icon: '📲',
    title: 'Stories Ilimitados',
    description:
      'Postagens ao vivo durante todo o evento, sem limite de stories, para que ninguém perca nenhum momento.',
  },
  {
    icon: '⭐',
    title: 'Reels Tratados em 4K',
    description:
      'Vídeos editados profissionalmente e entregues em até 48h após o evento, prontos para publicar.',
  },
  {
    icon: '👥',
    title: '2 Profissionais Fixos',
    description:
      'Uma dupla exclusiva dedicada ao seu evento do início ao fim, captando em ângulos diferentes.',
  },
  {
    icon: '📍',
    title: 'Marcações nos Stories',
    description:
      'Marcamos até 10 perfis (@) nos stories, podendo ser familiares, convidados e fornecedores.',
  },
  {
    icon: '🎬',
    title: 'Alta Resolução',
    description:
      'Toda a captação em qualidade 4K, garantindo o melhor visual para o Instagram e para guardar.',
  },
  {
    icon: '🤩',
    title: 'Múltiplos Ângulos',
    description:
      'Captamos os melhores momentos de perspectivas variadas para conteúdo mais dinâmico e completo.',
  },
]

export const Steps = [
  {
    number: '01',
    title: 'Entre em contato',
    description: 'Fale com a gente pelo WhatsApp, escolha o pacote e confirme a data do seu evento.',
  },
  {
    number: '02',
    title: 'Nós chegamos antes',
    description: 'No dia do evento nossa equipe chega antes de todos para não perder nenhum detalhe.',
  },
  {
    number: '03',
    title: 'Cobertura ao vivo',
    description: 'Stories ilimitados ao longo de todo o evento, captados em ângulos diferentes em 4K.',
  },
  {
    number: '04',
    title: 'Reels em até 48h',
    description: 'Após o evento, você recebe todos os Reels editados e tratados prontos para publicar.',
  },
]