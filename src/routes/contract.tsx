import { ContractProblems } from '../components/products/contract/contract-problems/contract-problems'
import { ContractBenefits } from '../components/products/contract/contract-benefits/contract-benefits'
import { ContractProcess } from '../components/products/contract/contract-process/contract-process'
import { ContractDetails } from '../components/products/contract/contract-details/contract-details'
import { ContractHero } from '../components/products/contract/contract-hero/contract-hero'
import { ContractCTA } from '../components/products/contract/contract-cta/contract-cta'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contract')({ 
  component: () => <>
    <ContractHero />
    <ContractProblems/>
    <ContractDetails/>
    <ContractBenefits/>
    <ContractProcess />
    <ContractCTA />
  </>
}) 