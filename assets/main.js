/* ============================================================
   PORTFOLIO — main.js
   Responsibilities:
     - Theme (dark/light) persistence
     - Lucide icon initialization with retry (fixes defer timing bug)
     - Navbar scroll shadow
     - Mobile nav drawer
     - Active section tracking via IntersectionObserver
     - Section-aware background/accent transitions
     - Scroll reveal (fade-in-up on viewport enter)
     - Current year in footer
   ============================================================ */

'use strict';

/* ── Constants ─────────────────────────────────────────────── */
const SECTIONS = ['work', 'experience', 'research', 'skills', 'contact'];

const SECTION_THEMES = {
  work:       { bg: 'transparent',                        accent: '#1a73e8' },
  experience: { bg: 'rgba(248, 250, 252, 0)',              accent: '#1a73e8' },
  research:   { bg: 'rgba(15, 118, 110, 0.03)',            accent: '#0f766e' },
  skills:     { bg: 'transparent',                        accent: '#1a73e8' },
  contact:    { bg: 'transparent',                        accent: '#1a73e8' },
};

/* ── Lucide icon init with retry ───────────────────────────── */
/*
 * Root cause of the icon-until-click bug:
 * Lucide is loaded with `defer`, meaning it executes after the HTML parser
 * finishes but the exact order relative to inline scripts and Alpine init
 * is not guaranteed. createIcons() must be called AFTER window.lucide exists.
 * We poll with requestAnimationFrame until available, then call once.
 */
function initIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
    return;
  }
  // Retry up to ~1s (60 frames) before falling back to a timeout
  let attempts = 0;
  function tryInit() {
    attempts++;
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    } else if (attempts < 120) {
      requestAnimationFrame(tryInit);
    }
  }
  requestAnimationFrame(tryInit);
}

/* ── Theme ─────────────────────────────────────────────────── */
function getPreferredTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || saved === 'light') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  // Re-run icon init in case dark mode swap resets SVGs
  initIcons();
  updateThemeButton();
}

function updateThemeButton() {
  const isDark = document.documentElement.classList.contains('dark');
  const moonIcons = document.querySelectorAll('[data-theme-icon="moon"]');
  const sunIcons  = document.querySelectorAll('[data-theme-icon="sun"]');
  moonIcons.forEach(el => el.style.display = isDark ? 'none' : 'block');
  sunIcons.forEach(el  => el.style.display = isDark ? 'block' : 'none');
}

/* ── Navbar scroll shadow ──────────────────────────────────── */
function initNavScroll() {
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ── Mobile drawer ─────────────────────────────────────────── */
function initMobileNav() {
  const btn    = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  if (!btn || !drawer) return;

  btn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  // Close on any link click inside drawer
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      drawer.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ── Active section + section-aware accent ─────────────────── */
function initSectionTracking() {
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  const sections = SECTIONS.map(id => document.getElementById(id)).filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;

      // Update nav active state
      navLinks.forEach(a => {
        a.classList.toggle('active', a.dataset.section === id);
      });

      // Update section-aware CSS variable on root
      const theme = SECTION_THEMES[id];
      if (theme) {
        document.documentElement.style.setProperty('--section-accent', theme.accent);
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0,
  });

  sections.forEach(s => observer.observe(s));
}

/* ── Scroll reveal ─────────────────────────────────────────── */
function initScrollReveal() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) {
    // Make everything immediately visible
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -6% 0px',
    threshold: 0.05,
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ── Footer year ───────────────────────────────────────────── */
function initYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ── Theme toggle button wiring ───────────────────────────── */
function initThemeButton() {
  const btns = document.querySelectorAll('[data-action="toggle-theme"]');
  btns.forEach(btn => btn.addEventListener('click', toggleTheme));
}

/* ── Bootstrap ─────────────────────────────────────────────── */
function boot() {
  // 1. Apply saved/preferred theme before first paint (no flash)
  applyTheme(getPreferredTheme());

  // 2. Wire up all behaviors
  initThemeButton();
  updateThemeButton();
  initNavScroll();
  initMobileNav();
  initSectionTracking();
  initScrollReveal();
  initYear();

  // 3. Initialize icons — with retry to handle Lucide defer timing
  initIcons();
}

// Run immediately if DOM is ready, otherwise wait
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

// Also hook into Lucide's own load event as a secondary safety net
window.addEventListener('load', () => {
  if (window.lucide) window.lucide.createIcons();
  updateThemeButton();
});
