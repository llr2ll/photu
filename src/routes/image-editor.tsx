import { CreditsSection } from '@/components/products/image-editor/image-editor-credits/image-editor-credits';
import { HeroSection } from '@/components/products/image-editor/image-editor-hero/image-editor-hero';
import { ProcessPanel } from '@/components/products/image-editor/image-editor-process-panel/image-editor-process-panel';
import { ToolSelector } from '@/components/products/image-editor/image-editor-tool-selector/image-editor-tool-selector';
import { HowItWorks } from '@/components/products/image-editor/image-editor-upload/image-editor-upload';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';

export const Route = createFileRoute('/image-editor')({ component: RouteComponent })

function RouteComponent() {
  const [selectedTool, setSelectedTool] = useState('upscale')
  const [preview, setPreview] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)

  function OnSelect(id: string) { setSelectedTool(id); setFile(null); setPreview(null) }

  return <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
    <HeroSection />
    <ToolSelector selected={selectedTool} onSelect={OnSelect} />
    <ProcessPanel file={file} preview={preview}/>
    <HowItWorks/>
    <CreditsSection />
  </div>
}