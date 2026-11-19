import { siteConfig } from '../config/site.js';
import {
  medicalServices,
  diseaseFocus,
  proceduralFocus,
  mythReality,
  insuranceCoverage,
  faqItems
} from '../config/services.js?v=3';
import { navigationLinks, socialLinks } from '../config/social.js';

const whatsappUrl = (message = 'Hola Dr. Darío, quisiera solicitar información sobre una consulta.') =>
  `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

const socialIcons = {
  Instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="icon-fill" cx="17.6" cy="6.7" r="1"/></svg>',
  WhatsApp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.2a8.2 8.2 0 0 1-12.1 7.2L4 19l.7-3.7A8.2 8.2 0 1 1 20 11.2Z"/><path d="M8.4 8.3c.5 2.8 2.3 4.6 5.1 5.1l1.2-1.2 2 .8c-.2 1.1-.8 1.7-1.9 1.8-3.8-.3-7.3-3.8-7.6-7.6.1-1.1.7-1.7 1.8-1.9l.8 2-1.4 1Z"/></svg>',
  Correo: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>'
};

const renderNavigation = () => {
  const nav = document.querySelector('.nav-menu');
  if (!nav) return;

  nav.innerHTML = navigationLinks
    .map((link) => `<a href="${link.href}">${link.label}</a>`)
    .join('');
};

const whatsappLink = (message, label, className = 'text-link') => `
  <a class="${className}" href="${whatsappUrl(message)}" target="_blank" rel="noopener noreferrer">${label}</a>
`;

const renderServices = () => {
  const grid = document.querySelector('#services-grid');
  if (!grid) return;

  grid.innerHTML = medicalServices
    .map(
      (service, index) => `
        <article class="service-card journey-step" aria-label="Paso ${String(index + 1).padStart(2, '0')}: ${service.title}">
          <span class="journey-step-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <p class="detail">${service.detail}</p>
          ${whatsappLink(`Hola Dr. Darío, quisiera información sobre ${service.title}.`, service.cta, 'card-link')}
        </article>
      `
    )
    .join('');
};

const renderFocusCards = (selector, items, messageFor) => {
  const grid = document.querySelector(selector);
  if (!grid) return;

  grid.innerHTML = items
    .filter((item) => item.confirmed)
    .map(
      (item) => `
        <article class="mini-card">
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <small>${item.note}</small>
          ${whatsappLink(messageFor(item), item.cta, 'disease-cta')}
        </article>
      `
    )
    .join('');
};

const renderMythReality = () => {
  const grid = document.querySelector('#myth-grid');
  if (!grid) return;

  grid.innerHTML = mythReality
    .filter((item) => item.confirmed)
    .map(
      (item) => `
        <article class="myth-card">
          <div class="myth-copy myth-copy-false">
            <p class="myth-label">Lo que suele pensarse</p>
            <p>${item.title}</p>
          </div>
          <div class="myth-copy myth-copy-true">
            <p class="myth-label myth-label-accent">Criterio clínico</p>
            <p>${item.reality}</p>
          </div>
        </article>
      `
    )
    .join('');
};

const renderInsurance = () => {
  const list = document.querySelector('#coverage-grid');
  if (!list) return;

  const confirmedOptions = insuranceCoverage.filter((option) => option.confirmed);
  const privateOption = confirmedOptions.find((option) => option.name === 'Atención privada');
  const paymentOptions = [
    {
      title: 'Pago particular',
      description: 'Puedes pagar tu consulta o procedimiento de forma directa. Aceptamos tarjetas de crédito, débito y efectivo.',
      note: privateOption?.highlight
    },
    {
      title: 'Financiamiento MEND',
      description: 'Consulta si puedes dividir el costo de tu procedimiento en mensualidades. Las condiciones dependen de la aprobación del proveedor.',
      link: '<a class="text-link" href="#" target="_blank" rel="noopener noreferrer" data-contact="financing">Conocer opciones de MEND</a>'
    },
    {
      title: 'Seguro de gastos médicos mayores',
      description: 'Revisa si tu póliza privada cubre la atención. La cobertura, el reembolso o el pago directo dependen de tu plan y deducible; esta opción no se refiere a cobertura del IMSS.'
    },
    ...confirmedOptions
      .filter((option) => option !== privateOption)
      .map((option) => ({
        title: option.name,
        description: option.highlight || option.status,
        note: option.highlight && option.status ? option.status : ''
      }))
  ];

  list.innerHTML = paymentOptions
    .map((option, index) => `
        <article class="coverage-card">
          <span class="coverage-icon" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
          <h3>${option.title}</h3>
          <p>${option.description}</p>
          ${option.note ? `<p class="coverage-card-note">${option.note}</p>` : ''}
          ${option.link || ''}
        </article>
      `)
    .join('');
};

const renderFaq = () => {
  const list = document.querySelector('#faq-list');
  if (!list) return;

  list.innerHTML = faqItems
    .map(
      (item) => `
        <details class="faq-item">
          <summary>${item.question}</summary>
          <p>${item.answer}</p>
        </details>
      `
    )
    .join('');
};

const renderReviews = () => {
  const reviewPanel = document.querySelector('#review-panel');
  if (!reviewPanel) return;

  reviewPanel.innerHTML = `
    <div class="review-card">
      <div class="review-mark" aria-hidden="true">G</div>
      <div class="review-copy">
        <p class="label">Opiniones</p>
        <h2>Lee las opiniones disponibles en Google Maps.</h2>
        <p>Consulta directamente los comentarios publicados en el perfil del consultorio.</p>
        <div class="review-actions">
          <a class="button button-primary" href="${siteConfig.contact.reviewsUrl}" target="_blank" rel="noopener noreferrer">Ver perfil y opiniones en Google Maps</a>
        </div>
      </div>
    </div>
  `;
};

const renderFooterSocials = () => {
  const container = document.querySelector('#footer-socials');
  if (!container) return;

  container.innerHTML = socialLinks.map((link) => `
    <a class="footer-social-link" href="${link.href}" target="${link.target}" rel="${link.rel}" aria-label="${link.label}" title="${link.label}">
      ${socialIcons[link.label] || ''}
      <span>${link.label}</span>
    </a>
  `).join('');
};

const populateStaticText = () => {
  document.title = `${siteConfig.brand.name} | ${siteConfig.brand.specialty}`;
  const yearNode = document.querySelector('#year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  document.querySelectorAll('[data-contact="phone"]').forEach((link) => {
    link.href = `tel:${siteConfig.contact.phoneHref}`;
    if (link.hasAttribute('data-phone-display')) {
      link.textContent = siteConfig.contact.phoneDisplay;
    }
  });

  document.querySelectorAll('[data-contact="whatsapp"]').forEach((link) => {
    link.href = whatsappUrl();
  });

  document.querySelectorAll('[data-contact="financing"]').forEach((link) => {
    link.href = siteConfig.contact.financingProfile;
  });

  document.querySelectorAll('[data-contact="reviews"]').forEach((link) => {
    link.href = siteConfig.contact.reviewsUrl;
  });

  document.querySelectorAll('[data-contact="email"]').forEach((link) => {
    link.href = `mailto:${siteConfig.contact.email}`;
  });

  document.querySelectorAll('[data-contact="instagram"]').forEach((link) => {
    link.href = siteConfig.contact.instagramUrl;
  });
};

const bindMobileNav = () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');

  if (!toggle || !menu) return;

  const setMenuOpen = (isOpen) => {
    menu.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', `${isOpen ? 'Cerrar' : 'Abrir'} menú de navegación`);
  };

  toggle.addEventListener('click', () => {
    setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      setMenuOpen(false);
      toggle.focus();
    }
  });
};

const bindContactVisibility = () => {
  const bubbles = document.querySelector('.desktop-contact-bubbles');
  const mobileBar = document.querySelector('.mobile-contact-bar');
  const footer = document.querySelector('.site-footer');
  if (!footer || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(([entry]) => {
    bubbles?.classList.toggle('is-footer-visible', entry.isIntersecting);
    mobileBar?.classList.toggle('is-footer-visible', entry.isIntersecting);
  }, { rootMargin: '0px 0px 140px 0px' });
  observer.observe(footer);
};

const init = () => {
  renderNavigation();
  renderServices();
  renderFocusCards(
    '#disease-grid',
    diseaseFocus,
    (item) => `Hola Dr. Darío, quiero más información sobre ${item.title} y su tratamiento.`
  );
  renderFocusCards(
    '#procedural-grid',
    proceduralFocus,
    (item) => `Hola Dr. Darío, quisiera información sobre ${item.title}.`
  );
  renderMythReality();
  renderInsurance();
  renderFaq();
  renderReviews();
  renderFooterSocials();
  populateStaticText();
  bindMobileNav();
  bindContactVisibility();
};

init();
