/* ============================================================
   PORTFOLIO — main.js
   Responsibilities:
     - Theme (dark/light) persistence + no-flash on load
     - Lucide icon initialization with retry (fixes defer timing bug)
     - Navbar scroll shadow
     - Nav scroll progress bar
     - Mobile nav overlay: open/close, focus trap, Escape key, focus return
     - Active section tracking via IntersectionObserver
     - Section-aware accent colour transitions (--section-accent CSS var)
     - Scroll reveal with data-reveal-delay auto-stagger
     - Current year in footer
   ============================================================ */

'use strict';

/* ── Constants ─────────────────────────────────────────────── */
const SECTIONS = ['projects', 'experience', 'research', 'skills', 'contact'];

const SECTION_THEMES = {
  projects:   { bg: 'transparent',                        accent: '#1a73e8' },
  experience: { bg: 'rgba(248, 250, 252, 0)',              accent: '#1a73e8' },
  research:   { bg: 'rgba(15, 118, 110, 0.03)',            accent: '#0f766e' },
  skills:     { bg: 'transparent',                        accent: '#1a73e8' },
  contact:    { bg: 'transparent',                        accent: '#1a73e8' },
};

/* ── Lucide icon init ─────────────────────────────── */
/*
 * Lucide is loaded synchronously (no defer) so window.lucide is guaranteed
 * to exist before this script executes. Direct call is safe.
 */
function initIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
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

/* ── Nav scroll progress bar ───────────────────────────────── */
function initNavProgress() {
  const bar = document.getElementById('nav-progress');
  if (!bar) return;
  const update = () => {
    const scrollTop  = window.scrollY;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width  = pct.toFixed(2) + '%';
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ── Mobile drawer with focus trap ────────────────────────── */
function initMobileNav() {
  const openBtn   = document.getElementById('mobile-menu-btn');
  const closeBtn  = document.getElementById('mobile-close-btn');
  const drawer    = document.getElementById('mobile-drawer');
  if (!openBtn || !drawer) return;

  const iconOpen  = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  let lastFocus = null;

  /* Focusable elements inside the drawer panel */
  function getFocusable() {
    return Array.from(
      drawer.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    ).filter(el => !el.closest('[hidden]'));
  }

  function openDrawer() {
    lastFocus = document.activeElement;
    drawer.removeAttribute('hidden');
    openBtn.setAttribute('aria-expanded', 'true');
    if (iconOpen)  iconOpen.style.display  = 'none';
    if (iconClose) iconClose.style.display = 'block';
    document.body.style.overflow = 'hidden';

    /* Move focus to close button after paint */
    requestAnimationFrame(() => {
      const first = getFocusable()[0];
      if (first) first.focus();
    });
  }

  function closeDrawer() {
    drawer.setAttribute('hidden', '');
    openBtn.setAttribute('aria-expanded', 'false');
    if (iconOpen)  iconOpen.style.display  = 'block';
    if (iconClose) iconClose.style.display = 'none';
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  /* Open */
  openBtn.addEventListener('click', openDrawer);

  /* Close button inside drawer */
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  /* Close on backdrop click (outside the inner panel) */
  drawer.addEventListener('click', (e) => {
    const inner = drawer.querySelector('.mobile-nav-inner');
    if (inner && !inner.contains(e.target)) closeDrawer();
  });

  /* Close on nav link click */
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeDrawer);
  });

  /* Escape key closes */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !drawer.hasAttribute('hidden')) {
      closeDrawer();
    }
  });

  /* Focus trap */
  drawer.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focusable = getFocusable();
    if (!focusable.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

/* ── Active section + section-aware accent ─────────────────── */
function initSectionTracking() {
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  const sections = SECTIONS.map(id => document.getElementById(id)).filter(Boolean);

  if (!sections.length) return;

  /*
   * rootMargin: top offset keeps the nav height in account so a section
   * becomes "active" when its top edge clears the navbar.
   * Bottom margin of -55% means we need at least 45% of the viewport
   * covered before triggering — works on both desktop and mobile where
   * sections can be taller than the viewport.
   */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;

      // Update nav active state
      navLinks.forEach(a => {
        const isActive = a.dataset.section === id;
        a.classList.toggle('active', isActive);
        // aria-current is more semantically correct than just a CSS class
        if (isActive) {
          a.setAttribute('aria-current', 'location');
        } else {
          a.removeAttribute('aria-current');
        }
      });

      // Update section-aware CSS variable on root
      const theme = SECTION_THEMES[id];
      if (theme) {
        document.documentElement.style.setProperty('--section-accent', theme.accent);
      }
    });
  }, {
    rootMargin: '-10% 0px -55% 0px',
    threshold: 0,
  });

  sections.forEach(s => observer.observe(s));
}

/* ── Scroll reveal with auto-stagger ──────────────────────── */
function initScrollReveal() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  /*
   * Auto-stagger: siblings sharing the same direct parent get sequential
   * data-reveal-delay attributes (1–4) so they cascade without needing
   * per-element inline styles. Existing explicit data-reveal-delay values
   * are preserved.
   */
  const parentsSeen = new Set();
  document.querySelectorAll('.reveal').forEach(el => {
    const parent = el.parentElement;
    if (!parent || parentsSeen.has(parent)) return;
    parentsSeen.add(parent);
    const siblings = Array.from(parent.querySelectorAll(':scope > .reveal'));
    if (siblings.length < 2) return;
    siblings.forEach((sib, i) => {
      if (!sib.hasAttribute('data-reveal-delay')) {
        // cap at 4 to avoid delays growing too long
        sib.setAttribute('data-reveal-delay', String(Math.min(i + 1, 4)));
      }
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -5% 0px',
    threshold: 0.04,
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
  // 1. Theme is already applied by the inline script in <head>.
  //    Only persist if there is no saved value yet (first visit).
  if (!localStorage.getItem('theme')) {
    applyTheme(getPreferredTheme());
  }

  // 2. Wire up all behaviors
  initThemeButton();
  updateThemeButton();
  initNavScroll();
  initNavProgress();
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
