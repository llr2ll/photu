import { ProductsSection } from '../components/home/products-section/products-section'
import { ServiceSection } from '../components/home/service-section/services-section'
import { HistorySection } from '../components/home/history-section/history-section'
import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/home/hero/hero-section'

export const Route = createFileRoute('/')({ 
    component: () => <>
        <Hero/>
        <HistorySection/>
        <ProductsSection/>
        <ServiceSection/>
    </>  
})