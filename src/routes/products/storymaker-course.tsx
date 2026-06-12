import { HighlightsSection } from './assets/highlights-section/highlights-section'
import { ModulesSection } from './assets/modules-section/modules-section'
import { ResultsSection } from './assets/results-section/results-section'
import { MarketsSection } from './assets/markets-section/markets-section'
import { BonusSection } from './assets/bonus-section/bonus-section'
import { FaqSection } from './assets/faq-section/faq-section'
import { CtaSection } from './assets/cta-section/cta-section'
import { createFileRoute } from '@tanstack/react-router'
import { StorymakerHero } from './assets/hero/hero'

export const Route = createFileRoute('/products/storymaker-course')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <StorymakerHero/>
    <MarketsSection/>
    <ModulesSection/>
    <HighlightsSection/>
    <ResultsSection/>
    <BonusSection/>
    <FaqSection/>
    <CtaSection/>
  </>
}

// hero.tsx          /*__*/
// market-section.tsx /*__*/
// modules-section.tsx /*__*/
// highlights-section.tsx
// results-section.tsx /*__*/
// bonus-section.tsx /*__*/
// faq-section.xtsx/*__*/
// cta-section.ts /*__*/
