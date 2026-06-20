import { HighlightsSection } from '../components/products/storymaker-course/highlights-section/highlights-section'
import { ModulesSection } from '../components/products/storymaker-course/modules-section/modules-section'
import { ResultsSection } from '../components/products/storymaker-course/results-section/results-section'
import { MarketsSection } from '../components/products/storymaker-course/markets-section/markets-section'
import { BonusSection } from '../components/products/storymaker-course/bonus-section/bonus-section'
import { FaqSection } from '../components/products/storymaker-course/faq-section/faq-section'
import { CtaSection } from '../components/products/storymaker-course/cta-section/cta-section'
import { StorymakerHero } from '../components/products/storymaker-course/hero/hero'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/storymaker-course')({ 
  component: () => <>
    <StorymakerHero/>
    <MarketsSection/>
    <ModulesSection/>
    <HighlightsSection/>
    <ResultsSection/>
    <BonusSection/>
    <FaqSection/>
    <CtaSection/>
  </>
}) 