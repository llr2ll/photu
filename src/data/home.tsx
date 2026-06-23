export const Testimonials = [
  {
    name: 'Ana Beatriz',
    handle: '@anabeatriz',
    avatar: 'A',
    role: 'Noiva',
    text: 'A Photu transformou o nosso casamento em algo eterno. Os stories em tempo real fizeram nossos convidados reviverem cada momento mesmo de longe. Não tem preço.',
    event: '💍 Casamento',
    hearts: '847',
  },
  {
    name: 'Carla Mendes',
    handle: '@carlamendes',
    avatar: 'C',
    role: 'Mãe de Aniversariante',
    text: 'Contratei para o aniversário de 15 anos da minha filha e fiquei sem palavras. O conteúdo ficou pronto antes de acabar a festa! Todo mundo pediu o contato.',
    event: '🎂 Festa de 15 Anos',
    hearts: '1.2k',
  },
  {
    name: 'Rodrigo Lima',
    handle: '@rodlima.biz',
    avatar: 'R',
    role: 'Empresário',
    text: 'Usamos a Photu no lançamento da nossa loja e o conteúdo gerou mais engajamento do que qualquer campanha paga que já fizemos. Profissionalismo do início ao fim.',
    event: '🛍️ Lançamento',
    hearts: '512',
  },
  {
    name: 'Fernanda Costa',
    handle: '@fecosta',
    avatar: 'F',
    role: 'Formanda',
    text: 'Cada segundo da minha formatura foi registrado com tanto cuidado e emoção. Revejo os stories até hoje e choro de felicidade. Obrigada, Photu!',
    event: '🎓 Formatura',
    hearts: '934',
  },
  {
    name: 'Marcelo Tavares',
    handle: '@marcelotav',
    avatar: 'M',
    role: 'Organizador de Eventos',
    text: 'Parceiro fixo em todos os meus eventos. A entrega é sempre impecável, o time chega antes de todo mundo e sai depois de todo mundo. Recomendo sem hesitar.',
    event: '🎤 Evento Corporativo',
    hearts: '2.1k',
  },
  {
    name: 'Julia Ribeiro',
    handle: '@ju.ribeiro',
    avatar: 'J',
    role: 'Aniversariante',
    text: 'Meu aniversário virou referência na família graças ao trabalho da Photu. As fotos, os reels, os stories... Tudo com uma sensibilidade que poucos têm.',
    event: '🎉 Aniversário',
    hearts: '673',
  },
]

export const Products = [
    {
        title: 'Curso Storymaker de Foto ao Profissional',
        desc: 'Aprenda a criar histórias incríveis com seus vídeos.',
        price: 'R$497,00',
        oldPrice: 'R$697,00',
        badge: 'Mais Vendido',
        badgeColor: 'var(--accent-pink)',
        rating: 5,
        students: '1.2k',
        icon: <img src="/camera.jpeg" alt='Reviva Suas Fotos'/>,
        gradient: 'linear-gradient(135deg, #1a0a14, #2d0e22)',
        route: '/storymaker-course'
    },
    {
        title: 'Contratos Jurídicos para Fotógrafos',
        desc: 'Proteja seu trabalho com contratos profissionais.',
        price: 'R$97,00',
        badge: 'Em Alta',
        badgeColor: 'var(--accent-cyan)',
        rating: 5,
        students: '834',
        icon: <img src="/contract.png" alt='Reviva Suas Fotos'/>,
        gradient: 'linear-gradient(135deg, #0a1a1a, #0d2626)',
        route: '/contract'
    },
    {
        title: 'Reviva Suas Fotos',
        desc: 'Restauração e edição profissional de fotografias antigas.',
        price: 'R$24,90',
        badge: 'Novo',
        badgeColor: 'var(--accent-orange)',
        rating: 4,
        students: '567',
        icon: <img src="/old-photo.jpeg" alt='Reviva Suas Fotos'/>,
        gradient: 'linear-gradient(135deg, #1a1000, #2d1c00)',
        route: '/image-editor'
    },
]

export const Features = [
    { icon: '⚡', label: 'Atendimento Personalizado', desc: 'Foco total nas suas necessidades' },
    { icon: '💳', label: 'Pagamento Facilitado', desc: 'Parcele em até 12x sem juros' },
    { icon: '🔄', label: 'Entrega Rápida', desc: 'Todos os Serviços entregues em até 48 horas' },
    { icon: '✅', label: 'Satisfação Garantida', desc: '100% de garantia ou reembolso' },
]