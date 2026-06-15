import { createFileRoute } from '@tanstack/react-router'
import { StorymakersHero } from './assets/storymaker-hero/storymaker-hero'
import { StorymakersPackages } from './assets/storymaker-packages/storymaker-packages'
import { StorymakersIncludes } from './assets/storymaker-includes/storymaker-includes'
import { StorymakersProcess } from './assets/storymaker-process/storymaker-process'
import { StorymakersCtaSection } from './assets/storymaker-cta/storymaker-cta'

// FAQ inline to avoid naming issues
import './assets/storymaker-faq/storymaker-faq.css'

const FAQS = [
  { question: 'Os vídeos são entregues no dia do evento?', answer: 'Os stories são postados em tempo real durante o evento. Os Reels editados são entregues em até 48 horas após o evento.' },
  { question: 'Quantos profissionais vão ao meu evento?', answer: 'Todos os pacotes incluem 2 profissionais Storymakers e editores fixos durante todo o período de captação contratado.' },
  { question: 'Posso adicionar horas ao meu pacote?', answer: 'Sim. O valor da hora adicional de storymaker é R$ 200, podendo ser incluída antes ou no dia do evento conforme disponibilidade.' },
  { question: 'Vocês atendem em quais cidades?', answer: 'Somos baseados em Santos - SP e atendemos toda a Baixada Santista. Para outras regiões, entre em contato para verificar disponibilidade.' },
  { question: 'Como faço para reservar minha data?', answer: 'Entre em contato pelo WhatsApp, informe a data e o tipo de evento. A reserva é confirmada com o pagamento de sinal, e o orçamento tem validade de 7 dias.' },
  { question: 'O que é marcação de @ nos stories?', answer: 'Durante os stories ao vivo, marcamos até 10 perfis do Instagram, como familiares, convidados ou fornecedores do evento.' },
]

function StorymakersFrequentlyAskedQuestions() {
  return (
    <section className="sm-faq">
      <div className="sm-faq-container">
        <div className="sm-faq-header">
          <div className="section-label">DÚVIDAS FREQUENTES</div>
          <h2 className="sm-faq-title">Perguntas que você pode ter</h2>
          <p className="sm-faq-description">
            Tudo o que você precisa saber antes de contratar o Studio Yastrees.
          </p>
        </div>
        <div className="sm-faq-list">
          {FAQS.map(item => (
            <details key={item.question} className="sm-faq-item">
              <summary className="sm-faq-question">{item.question}</summary>
              <p className="sm-faq-answer">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Route = createFileRoute('/services/storymaker-service')({ component: RouteComponent })

function RouteComponent() {
  return (
    <>
      <StorymakersHero />
      <StorymakersIncludes />
      <StorymakersPackages />
      <StorymakersProcess />
      <StorymakersFrequentlyAskedQuestions />
      <StorymakersCtaSection />
    </>
  )
}