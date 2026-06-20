import './history-section.css'

const Testimonials = [
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

export function HistorySection() {
  return (
    <section id="our-history" className="history-section">
      <div className="history-bg-glow history-bg-glow-left" />
      <div className="history-bg-glow history-bg-glow-right" />

      <div className="history-container">
        <div className="history-header">
          <div className="section-label">Nossa História</div>

          <h2 className="history-title">
            Histórias que a gente
            <span className="gradient-text"> nunca esquece</span>
          </h2>

          <p className="history-subtitle">
            Cada evento tem uma história. Essas são algumas das que temos
            orgulho de ter feito parte.
          </p>
        </div>

        <div className="history-grid">
          {Testimonials.map((t) => (
            <div key={t.handle} className="history-card">
              <div className="history-card-top">
                <div className="history-avatar">
                  {t.avatar}
                </div>

                <div className="history-user-info">
                  <span className="history-name">{t.name}</span>
                  <span className="history-handle">{t.handle}</span>
                </div>

                <div className="history-ig-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </div>
              </div>

              <div className="history-event-tag">
                {t.event} · {t.role}
              </div>

              <p className="history-text">
                "{t.text}"
              </p>

              <div className="history-card-footer">
                <div className="history-hearts">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--accent-pink)">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                  <span>{t.hearts}</span>
                </div>

                <div className="history-verified">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--accent-cyan)">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" stroke="var(--accent-cyan)" strokeWidth="2" fill="none" />
                  </svg>
                  <span>Cliente verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="history-cta">
          <a
            href="https://www.instagram.com/studioyastrees/"
            target="_blank"
            rel="noopener noreferrer"
            className="history-ig-button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  )
}