export const accordion = (() => {
  const init = () => {
    // accordion
    const toggles = document.querySelectorAll('[data-accordion]');

    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const currentAccordion = toggle.closest('.accordion-vertical');
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

        toggles.forEach(t => {
          t.setAttribute('aria-expanded', 'false');
          const acc = t.closest('.accordion-vertical');
          acc?.classList.remove('is-open');
        });

        if (!isExpanded) {
          toggle.setAttribute('aria-expanded', 'true');
          currentAccordion?.classList.add('is-open');
        }
      });
    });

    if (toggles.length) {
      toggles[0].setAttribute('aria-expanded', 'true');
      const acc = toggles[0].closest('.accordion-vertical');
      acc?.classList.add('is-open');
    }
    
    // accordion-native
    const accordions = document.querySelectorAll('.accordion');

    if (!accordions.length) return;

    accordions.forEach((accordion) => {
      const summary = accordion.querySelector('summary');

      summary.addEventListener('click', (e) => {
        e.preventDefault();

        const isOpen = accordion.hasAttribute('open');

        if (!isOpen) {
          accordions.forEach(item => item.removeAttribute('open'));
          accordion.setAttribute('open', '');
        }
      });
    });
  };

  return { init };
})();