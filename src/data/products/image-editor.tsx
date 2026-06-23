export const TOOLS = [
  {
    id: 'upscale',
    emoji: '🔍',
    label: 'Upscaling',
    tagline: 'Resolução 4× maior',
    description: 'Amplia qualquer foto com IA — sem perder nitidez. Ideal para impressões grandes ou imagens de baixa resolução.',
    cost: 1,
    badge: 'Mais Usado',
    badgeColor: 'var(--accent-pink)',
    example: { before: '800×600 px', after: '3200×2400 px' },
  },
  {
    id: 'colorize',
    emoji: '🎨',
    label: 'Colorização',
    tagline: 'Fotos antigas ganham vida',
    description: 'A IA analisa textura, luz e contexto para adicionar cores realistas a fotos preto e branco ou desbotadas.',
    cost: 2,
    badge: 'Popular',
    badgeColor: 'var(--accent-cyan)',
    example: { before: 'P&B / desbotada', after: 'Colorida em HD' },
  },
  {
    id: 'animate',
    emoji: '✨',
    label: 'Animação',
    tagline: 'Fotos que se movem',
    description: 'Transforma retratos estáticos em pequenos loops animados — rostos que respiram, sorrisos que aparecem.',
    cost: 5,
    badge: 'Novo',
    badgeColor: 'var(--accent-orange)',
    example: { before: 'Imagem estática', after: 'GIF / MP4 animado' },
  },
]

export const CREDIT_PACKS = [
  { id: 'starter',  credits: 10,  price: 'R$ 9,90',   perUnit: 'R$ 0,99 / crédito', highlight: false },
  { id: 'popular',  credits: 30,  price: 'R$ 24,90',  perUnit: 'R$ 0,83 / crédito', highlight: true  },
  { id: 'pro',      credits: 100, price: 'R$ 69,90',  perUnit: 'R$ 0,70 / crédito', highlight: false },
]

//── Mock user state ──────────────────────────────────────────

export const MOCK_USER = { credits: 3, loggedIn: false }

export const STEPS = [
  { n: '1', title: 'Faça login', desc: 'Entre com sua conta Google — rápido e sem senha.' },
  { n: '2', title: 'Compre créditos', desc: 'Escolha um pacote. O pagamento é processado pelo Mercado Pago.' },
  { n: '3', title: 'Envie a foto', desc: 'Arraste ou selecione a imagem que quer transformar.' },
  { n: '4', title: 'Baixe o resultado', desc: 'Em segundos, sua foto processada fica disponível para download.' },
]