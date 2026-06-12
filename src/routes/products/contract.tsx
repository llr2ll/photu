import { ContractProcess } from './assets/contract-process/contract-process'
import { ContractDetails } from './assets/contract-details/contract-details'
import { ContractHero } from './assets/contract-hero/contract-hero'
import { ContractCTA } from './assets/contract-cta/contract-cta'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/contract')({ component: RouteComponent })

function RouteComponent() {
  return (
    <>
      <ContractHero />
      <ContractDetails />
      <ContractProcess />
      <ContractCTA />
    </>
  )
}