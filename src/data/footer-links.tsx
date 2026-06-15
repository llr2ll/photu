export const WhatsappLink = 'https://api.whatsapp.com/send/?phone=13996545872&text&type=phone_number&app_absent=0&utm_source=ig'
export const InstagramLink = 'https://www.instagram.com/studioyastrees'

export const PaymentMethodLinks = [
  { name: 'Visa', img: '/payments/visa.svg' },
  { name: 'Mastercard', img: '/payments/mastercard.svg' },
  { name: 'Mercado Pago', img: '/payments/mercado-pago.png' },
]

export const SocialLinks = [
    { name: 'Instagram', url: InstagramLink },
    { name: 'Google', url: 'https://share.google/b0s5ybQMWRRJxT0Ap' },
]

export const FooterLinks = [
    { 
        title: 'Produtos', 
        links: [
            { label: 'Curso Storymaker', url: '/products/storymaker-course', target: false },
            { label: 'Contratos Jurídicos', url: '/products/contract', target: false },
            { label: 'Reviva Suas Fotos', url: '/products/image-editor', target: false },
        ] 
    },
    { 
        title: 'Serviços', 
        links: [
            { label: 'Storymaker', url: WhatsappLink, target: true },
            { label: 'Fotografia', url: WhatsappLink, target: true },
        ] 
    },
    {   
        title: 'Empresa', 
        links: [
            { label: 'Nossa História', url: '/#our-history', target: false },
            { label: 'Portifólio', url: InstagramLink, target: true },
            { label: 'Contato', url: WhatsappLink, target: true },
        ] 
    },
]