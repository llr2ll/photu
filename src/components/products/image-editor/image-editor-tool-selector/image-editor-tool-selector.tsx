import { TOOLS } from "@/data/products/image-editor";

export function ToolSelector({ selected, onSelect }: { selected: string; onSelect: (id: string) => void }) {
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