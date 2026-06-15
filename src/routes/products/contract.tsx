import { ContractProcess } from './assets/contract/contract-process/contract-process'
import { ContractDetails } from './assets/contract/contract-details/contract-details'
import { ContractHero } from './assets/contract/contract-hero/contract-hero'
import { ContractCTA } from './assets/contract/contract-cta/contract-cta'
import { createFileRoute } from '@tanstack/react-router'
import { ContractProblems } from './assets/contract/contract-problems/contract-problems'
import { ContractBenefits } from './assets/contract/contract-benefits/contract-benefits'

export const Route = createFileRoute('/products/contract')({ component: RouteComponent })

function RouteComponent() {
  return (
    <>
      <ContractHero />
      <ContractProblems/>
      <ContractDetails/>
      <ContractBenefits/>
      <ContractProcess />
      <ContractCTA />
    </>
  )
}