import { useState } from "react"
import { UploadZone } from "../image-editor-upload/image-editor-upload"
import { MOCK_USER, TOOLS } from "@/data/products/image-editor"

export function ProcessPanel({ file, preview, selectedTool }: { 
  file: File | null, preview: string | null, selectedTool: string 
}) {
  const [status, setStatus] = useState<'idle' | 'processing' | 'done' | 'no-credits'>('idle')
  const userCredits = MOCK_USER.credits
  const loggedIn = MOCK_USER.loggedIn

  const tool = TOOLS.find(t => t.id === selectedTool)!
  const canProcess = file && loggedIn && userCredits >= tool.cost

  const handleProcess = () => {
    if (!loggedIn) { alert('Faça login para continuar.'); return }
    if (userCredits < tool.cost) { setStatus('no-credits'); return }
    setStatus('processing')
    setTimeout(() => setStatus('done'), 3000)
  }

  const handleFile = (f: File) => {
    // setFile(f)
    // const reader = new FileReader()
    // reader.onload = e => setPreview(e.target?.result as string)
    // reader.readAsDataURL(f)
  }

  
  const handleClear = () => { /* setFile(null); setPreview(null)  */ }

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
          <UploadZone file={file} preview={preview} onFile={handleFile} onClear={handleClear} />
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