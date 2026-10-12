import { siteConfig } from './site.js';

export const navigationLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Cobertura', href: '#cobertura' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' }
];

export const socialLinks = [
  {
    label: 'Instagram',
    href: siteConfig.contact.instagramUrl,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent('Hola Dr. Darío, quiero solicitar información sobre una consulta.')}`,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  {
    label: 'Correo',
    href: `mailto:${siteConfig.contact.email}`,
    target: '_self',
    rel: ''
  }
];
