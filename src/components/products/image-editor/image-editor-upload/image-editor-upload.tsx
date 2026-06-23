import { STEPS } from "@/data/products/image-editor"
import { useCallback, useRef, useState } from "react"

export function UploadZone({
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

export function HowItWorks() {
  return (
    <section className="ie-how">
      <div className="ie-section-header">
        <div className="section-label">COMO FUNCIONA</div>
        <h2 className="ie-section-title">Simples assim</h2>
      </div>

      <div className="ie-how-steps">
        {STEPS.map((s, i) => (
          <div key={s.n} className="ie-how-step">
            <div className="ie-how-num">{s.n}</div>
            <h3 className="ie-how-title">{s.title}</h3>
            <p className="ie-how-desc">{s.desc}</p>
            {i < STEPS.length - 1 && <div className="ie-how-line" />}
          </div>
        ))}
      </div>
    </section>
  )
}