import { ProductsSection } from './home/products-section/products-section'
import { ServiceSection } from './home/service-section/services-section'
import { HistorySection } from './home/history-section/history-section'
import { createFileRoute } from '@tanstack/react-router'
import { Hero } from './home/hero/hero-section'

export const Route = createFileRoute('/')({ 
    component: () => <>
        <Hero/>
        <HistorySection/>
        <ProductsSection/>
        <ServiceSection/>
    </>  
})