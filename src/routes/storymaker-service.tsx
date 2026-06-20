import { StorymakersFrequentlyAskedQuestions } from '../components/services/storymaker-faq/storymaker-faq'
import { StorymakersPackages } from '../components/services/storymaker-packages/storymaker-packages'
import { StorymakersIncludes } from '../components/services/storymaker-includes/storymaker-includes'
import { StorymakersProcess } from '../components/services/storymaker-process/storymaker-process'
import { StorymakersCtaSection } from '../components/services/storymaker-cta/storymaker-cta'
import { StorymakersHero } from '../components/services/storymaker-hero/storymaker-hero'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/storymaker-service')({ 
  component: () => <>
    <StorymakersHero />
    <StorymakersIncludes />
    <StorymakersPackages />
    <StorymakersProcess />
    <StorymakersFrequentlyAskedQuestions />
    <StorymakersCtaSection />
  </>
}) 