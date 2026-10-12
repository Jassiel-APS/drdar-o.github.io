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

const serviceIcons = [
  '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.6"/><path d="m16 16 4.2 4.2M10.8 7.5v6.6M7.5 10.8h6.6"/></svg>',
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19.5h16M6 16V8.5a6 6 0 0 1 12 0V16M9 16v-4a3 3 0 0 1 6 0v4M12 3.5V2"/></svg>',
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M8 5h11v11M4 8V4h4M20 16v4h-4"/></svg>',
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.2a8.2 8.2 0 0 1-12.1 7.2L4 19l.7-3.7A8.2 8.2 0 1 1 20 11.2Z"/><path d="M8.4 8.3c.5 2.8 2.3 4.6 5.1 5.1l1.2-1.2 2 .8c-.2 1.1-.8 1.7-1.9 1.8-3.8-.3-7.3-3.8-7.6-7.6.1-1.1.7-1.7 1.8-1.9l.8 2-1.4 1Z"/></svg>'
];

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

const renderServices = () => {
  const grid = document.querySelector('#services-grid');
  if (!grid) return;

  grid.innerHTML = medicalServices
    .map(
      (service, index) => `
        <article class="service-card journey-step" aria-label="Paso ${index + 1}: ${service.title}">
          <span class="journey-step-number" aria-hidden="true">0${index + 1}</span>
          <span class="journey-step-icon">${serviceIcons[index]}</span>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <p class="detail">${service.detail}</p>
          <a class="card-link" href="${whatsappUrl(`Hola Dr. Darío, quisiera información sobre ${service.title}.`)}" target="_blank" rel="noopener">${service.cta}</a>
        </article>
      `
    )
    .join('');
};

const renderDiseaseFocus = () => {
  const grid = document.querySelector('#disease-grid');
  if (!grid) return;

  grid.innerHTML = diseaseFocus
    .filter((item) => item.confirmed)
    .map(
      (item) => `
        <article class="mini-card">
          <img class="disease-image" src="${item.image}" alt="${item.imageAlt}" loading="lazy">
          <div class="mini-card-head">
            <h3>${item.title}</h3>
          </div>
          <p>${item.summary}</p>
          <small>${item.note}</small>
          <a class="text-link" href="${whatsappUrl(`Hola Dr. Darío, quisiera información sobre ${item.title}.`)}" target="_blank" rel="noopener">${item.cta}</a>
        </article>
      `
    )
    .join('');
};

const renderProceduralFocus = () => {
  const grid = document.querySelector('#procedural-grid');
  if (!grid) return;

  grid.innerHTML = proceduralFocus
    .filter((item) => item.confirmed)
    .map(
      (item) => `
        <article class="mini-card">
          <div class="mini-card-head">
            <h3>${item.title}</h3>
          </div>
          <p>${item.summary}</p>
          <small>${item.note}</small>
          <a class="text-link" href="${whatsappUrl(`Hola Dr. Darío, quisiera información sobre ${item.title}.`)}" target="_blank" rel="noopener">${item.cta}</a>
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
            <span class="myth-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 7 10 10M17 7 7 17"/></svg></span>
            <div><div class="myth-label">Mito</div><p>${item.title}</p></div>
          </div>
          <div class="myth-divider"></div>
          <div class="myth-copy myth-copy-true">
            <span class="myth-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7"/></svg></span>
            <div><div class="myth-label myth-label-accent">Realidad</div><p>${item.reality}</p></div>
          </div>
        </article>
      `
    )
    .join('');
};

const renderInsurance = () => {
  const list = document.querySelector('#insurance-list');
  if (!list) return;

  list.innerHTML = insuranceCoverage
    .filter((option) => option.confirmed)
    .map(
      (option) => `
        <article class="insurance-item">
          <div class="meta">
            <h3>${option.name}</h3>
            ${option.status ? `<span class="status">${option.status}</span>` : ''}
          </div>
          ${option.highlight ? `<span class="highlight">${option.highlight}</span>` : ''}
        </article>
      `
    )
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
          <a class="button button-primary" href="${siteConfig.contact.reviewsUrl}" target="_blank" rel="noopener">Ver perfil y opiniones en Google Maps</a>
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

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
};

const bindDesktopContactBubbles = () => {
  const bubbles = document.querySelector('.desktop-contact-bubbles');
  const footer = document.querySelector('.site-footer');
  if (!bubbles || !footer || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(([entry]) => {
    bubbles.classList.toggle('is-footer-visible', entry.isIntersecting);
  }, { rootMargin: '0px 0px 140px 0px' });
  observer.observe(footer);
};

const init = () => {
  renderNavigation();
  renderServices();
  renderDiseaseFocus();
  renderProceduralFocus();
  renderMythReality();
  renderInsurance();
  renderFaq();
  renderReviews();
  renderFooterSocials();
  populateStaticText();
  bindMobileNav();
  bindDesktopContactBubbles();
};

init();
