import { createFileRoute } from '@tanstack/react-router'
import { useState, useRef, useCallback } from 'react'
import './assets/image-editor/image-editor.css'

export const Route = createFileRoute('/products/image-editor')({
  component: RouteComponent,
})

//── Mock user state ──────────────────────────────────────────
const MOCK_USER = { credits: 3, loggedIn: false }

const TOOLS = [
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

const CREDIT_PACKS = [
  { id: 'starter',  credits: 10,  price: 'R$ 9,90',   perUnit: 'R$ 0,99 / crédito', highlight: false },
  { id: 'popular',  credits: 30,  price: 'R$ 24,90',  perUnit: 'R$ 0,83 / crédito', highlight: true  },
  { id: 'pro',      credits: 100, price: 'R$ 69,90',  perUnit: 'R$ 0,70 / crédito', highlight: false },
]

// ── Sub-components ───────────────────────────────────────────

function HeroSection() {
  return (
    <section className="ie-hero">
      <div className="ie-hero-glow" />
      <div className="ie-hero-container">
        <div className="ie-hero-badge">RESTAURAÇÃO COM IA</div>
        <h1 className="ie-hero-title">
          Reviva suas fotos com
          <span className="gradient-text"> inteligência artificial</span>
        </h1>
        <p className="ie-hero-desc">
          Upscaling, colorização e animação — tudo em segundos,
          sem precisar instalar nada.
        </p>
        <div className="ie-hero-stats">
          <div><strong>4×</strong><span>resolução</span></div>
          <div><strong>Segundos</strong><span>por imagem</span></div>
          <div><strong>100%</strong><span>online</span></div>
        </div>
      </div>
    </section>
  )
}

function ToolSelector({ selected, onSelect }: { selected: string; onSelect: (id: string) => void }) {
  return (
    <section className="ie-tools">
      <div className="ie-section-header">
        <div className="section-label">FERRAMENTAS</div>
        <h2 className="ie-section-title">O que você quer fazer?</h2>
      </div>

      <div className="ie-tools-grid">
        {TOOLS.map(tool => (
          <button
            key={tool.id}
            className={`ie-tool-card ${selected === tool.id ? 'ie-tool-card--active' : ''}`}
            onClick={() => onSelect(tool.id)}
          >
            <div className="ie-tool-badge" style={{ background: tool.badgeColor }}>
              {tool.badge}
            </div>

            <div className="ie-tool-emoji">{tool.emoji}</div>
            <h3 className="ie-tool-label">{tool.label}</h3>
            <p className="ie-tool-tagline">{tool.tagline}</p>
            <p className="ie-tool-desc">{tool.description}</p>

            <div className="ie-tool-meta">
              <div className="ie-tool-example">
                <span>{tool.example.before}</span>
                <span className="ie-tool-arrow">→</span>
                <span className="ie-tool-after">{tool.example.after}</span>
              </div>
              <div className="ie-tool-cost">
                <span className="ie-credit-dot" />
                {tool.cost} {tool.cost === 1 ? 'crédito' : 'créditos'}
              </div>
            </div>

            <div className={`ie-tool-selector ${selected === tool.id ? 'ie-tool-selector--on' : ''}`}>
              {selected === tool.id ? '✓ Selecionado' : 'Selecionar'}
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

function UploadZone({
  file,
  preview,
  onFile,
  onClear,
}: {
  file: File | null
  preview: string | null
  onFile: (f: File) => void
  onClear: () => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragging(false)
    const f = e.dataTransfer.files[0]
    if (f && f.type.startsWith('image/')) onFile(f)
  }, [onFile])

  if (preview && file) {
    return (
      <div className="ie-upload-preview">
        <img src={preview} alt="Preview" className="ie-preview-img" />
        <div className="ie-preview-info">
          <span className="ie-preview-name">{file.name}</span>
          <span className="ie-preview-size">{(file.size / 1024).toFixed(0)} KB</span>
        </div>
        <button className="ie-preview-clear" onClick={onClear}>✕ Trocar imagem</button>
      </div>
    )
  }

  return (
    <div
      className={`ie-upload-zone ${dragging ? 'ie-upload-zone--drag' : ''}`}
      onDragOver={e => { e.preventDefault(); setDragging(true) }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={e => { const f = e.target.files?.[0]; if (f) onFile(f) }}
      />
      <div className="ie-upload-icon">📁</div>
      <p className="ie-upload-label">Arraste sua foto aqui</p>
      <p className="ie-upload-sub">ou clique para selecionar · JPG, PNG, WEBP · até 10 MB</p>
    </div>
  )
}

function ProcessPanel({
  tool,
  file,
  preview,
  onFile,
  onClear,
  userCredits,
  loggedIn,
}: {
  tool: typeof TOOLS[0]
  file: File | null
  preview: string | null
  onFile: (f: File) => void
  onClear: () => void
  userCredits: number
  loggedIn: boolean
}) {
  const [status, setStatus] = useState<'idle' | 'processing' | 'done' | 'no-credits'>('idle')

  const canProcess = file && loggedIn && userCredits >= tool.cost

  const handleProcess = () => {
    if (!loggedIn) { alert('Faça login para continuar.'); return }
    if (userCredits < tool.cost) { setStatus('no-credits'); return }
    setStatus('processing')
    setTimeout(() => setStatus('done'), 3000)
  }

  return (
    <section className="ie-process">
      <div className="ie-section-header">
        <div className="section-label">PROCESSAR</div>
        <h2 className="ie-section-title">
          {tool.emoji} {tool.label}
          <span className="ie-cost-badge">
            <span className="ie-credit-dot" />
            {tool.cost} {tool.cost === 1 ? 'crédito' : 'créditos'}
          </span>
        </h2>
      </div>

      <div className="ie-process-layout">
        <div className="ie-process-left">
          <UploadZone file={file} preview={preview} onFile={onFile} onClear={onClear} />
        </div>

        <div className="ie-process-right">
          {/* Credits indicator */}
          <div className={`ie-credits-bar ${!loggedIn ? 'ie-credits-bar--guest' : ''}`}>
            {loggedIn ? (
              <>
                <span className="ie-credit-dot" />
                <span>Seus créditos: <strong>{userCredits}</strong></span>
              </>
            ) : (
              <span>
                <strong>Entre com Google</strong> para usar seus créditos
              </span>
            )}
          </div>

          {/* Status messages */}
          {status === 'processing' && (
            <div className="ie-status ie-status--processing">
              <div className="ie-spinner" />
              <span>Processando com IA… aguarde</span>
            </div>
          )}

          {status === 'done' && (
            <div className="ie-status ie-status--done">
              ✓ Pronto! Seu arquivo está disponível para download.
              <a href="#" className="btn-primary ie-download-btn">
                Baixar resultado
              </a>
            </div>
          )}

          {status === 'no-credits' && (
            <div className="ie-status ie-status--warn">
              ⚠ Créditos insuficientes — você tem <strong>{userCredits}</strong>, precisa de <strong>{tool.cost}</strong>.
            </div>
          )}

          <div className="ie-action-area">
            {!loggedIn && (
              <button className="ie-google-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Entrar com Google
              </button>
            )}

            <button
              className="btn-primary ie-process-btn"
              disabled={!file || status === 'processing'}
              onClick={handleProcess}
            >
              {status === 'processing' ? 'Processando…' : `Processar imagem · ${tool.cost} ${tool.cost === 1 ? 'crédito' : 'créditos'}`}
            </button>
          </div>

          <p className="ie-process-hint">
            Resultado disponível em segundos. Créditos são descontados somente após o processamento concluído.
          </p>
        </div>
      </div>
    </section>
  )
}

function CreditsSection() {
  const [selected, setSelected] = useState('popular')

  return (
    <section id="creditos" className="ie-credits">
      <div className="ie-credits-glow" />
      <div className="ie-section-header">
        <div className="section-label">CRÉDITOS</div>
        <h2 className="ie-section-title">Escolha seu pacote</h2>
        <p className="ie-section-sub">
          Créditos não expiram. Use no seu ritmo.
        </p>
      </div>

      <div className="ie-packs-grid">
        {CREDIT_PACKS.map(pack => (
          <button
            key={pack.id}
            className={`ie-pack-card ${pack.highlight ? 'ie-pack-card--highlight' : ''} ${selected === pack.id ? 'ie-pack-card--selected' : ''}`}
            onClick={() => setSelected(pack.id)}
          >
            {pack.highlight && <div className="ie-pack-popular">Mais popular</div>}
            <div className="ie-pack-credits">{pack.credits} <span>créditos</span></div>
            <div className="ie-pack-price">{pack.price}</div>
            <div className="ie-pack-per">{pack.perUnit}</div>

            <div className="ie-pack-uses">
              <div>🔍 {Math.floor(pack.credits / 1)}× upscaling</div>
              <div>🎨 {Math.floor(pack.credits / 2)}× colorização</div>
              <div>✨ {Math.floor(pack.credits / 5)}× animação</div>
            </div>

            <div className="ie-pack-cta">
              {selected === pack.id ? 'Comprar agora' : 'Selecionar'}
            </div>
          </button>
        ))}
      </div>

      <div className="ie-payment-note">
        🔒 Pagamento via Mercado Pago · Pix, Cartão ou Boleto · Seus dados ficam com o Mercado Pago
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { n: '1', title: 'Faça login', desc: 'Entre com sua conta Google — rápido e sem senha.' },
    { n: '2', title: 'Compre créditos', desc: 'Escolha um pacote. O pagamento é processado pelo Mercado Pago.' },
    { n: '3', title: 'Envie a foto', desc: 'Arraste ou selecione a imagem que quer transformar.' },
    { n: '4', title: 'Baixe o resultado', desc: 'Em segundos, sua foto processada fica disponível para download.' },
  ]

  return (
    <section className="ie-how">
      <div className="ie-section-header">
        <div className="section-label">COMO FUNCIONA</div>
        <h2 className="ie-section-title">Simples assim</h2>
      </div>

      <div className="ie-how-steps">
        {steps.map((s, i) => (
          <div key={s.n} className="ie-how-step">
            <div className="ie-how-num">{s.n}</div>
            <h3 className="ie-how-title">{s.title}</h3>
            <p className="ie-how-desc">{s.desc}</p>
            {i < steps.length - 1 && <div className="ie-how-line" />}
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Main page ────────────────────────────────────────────────

function RouteComponent() {
  const [selectedTool, setSelectedTool] = useState('upscale')
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const tool = TOOLS.find(t => t.id === selectedTool)!

  const handleFile = (f: File) => {
    setFile(f)
    const reader = new FileReader()
    reader.onload = e => setPreview(e.target?.result as string)
    reader.readAsDataURL(f)
  }

  const handleClear = () => { setFile(null); setPreview(null) }

  return (
    <div className="ie-page">
      <HeroSection />
      <ToolSelector selected={selectedTool} onSelect={id => { setSelectedTool(id); setFile(null); setPreview(null) }} />
      <ProcessPanel
        tool={tool}
        file={file}
        preview={preview}
        onFile={handleFile}
        onClear={handleClear}
        userCredits={MOCK_USER.credits}
        loggedIn={MOCK_USER.loggedIn}
      />
      <HowItWorks />
      <CreditsSection />
    </div>
  )
}