import { HighlightsSection } from './assets/storymaker-course/highlights-section/highlights-section'
import { ModulesSection } from './assets/storymaker-course/modules-section/modules-section'
import { ResultsSection } from './assets/storymaker-course/results-section/results-section'
import { MarketsSection } from './assets/storymaker-course/markets-section/markets-section'
import { BonusSection } from './assets/storymaker-course/bonus-section/bonus-section'
import { FaqSection } from './assets/storymaker-course/faq-section/faq-section'
import { CtaSection } from './assets/storymaker-course/cta-section/cta-section'
import { createFileRoute } from '@tanstack/react-router'
import { StorymakerHero } from './assets/storymaker-course/hero/hero'

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