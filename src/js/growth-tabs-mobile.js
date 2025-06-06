export const growthTabsMobile = (() => {
    const init = () => {
      const tabBlock = document.querySelector('.section-growth__tabs-mobile');
  
      if (!tabBlock) return;
  
      const toggles = tabBlock.querySelectorAll('.growth-toggle__item');
      const contents = tabBlock.querySelectorAll('.growth-tabs__text');
  
      if (!toggles.length || !contents.length) return;
  
      const reset = () => {
        toggles.forEach(toggle => toggle.classList.remove('is-active'));
        contents.forEach(content => content.classList.remove('is-open'));
      };
  
      toggles.forEach((toggle, index) => {
        toggle.addEventListener('click', () => {
          reset();
          toggle.classList.add('is-active');
          if (contents[index]) contents[index].classList.add('is-open');
        });
      });
  
      toggles[0].classList.add('is-active');
      contents[0].classList.add('is-open');
    };
  
    return { init };
})();
  