export const growthTabs = (() => {
    const init = () => {
      const items = document.querySelectorAll('.growth-tabs__item');
  
      if (!items.length) return;
  
      const closeAll = () => {
        items.forEach(item => item.classList.remove('is-open'));
      };
  
      const isAnyOpen = () => {
        return [...items].some(item => item.classList.contains('is-open'));
      };
  
      document.querySelectorAll('.growth-tabs__arrow-open').forEach(arrow => {
        arrow.addEventListener('click', (e) => {
          e.stopPropagation();
          closeAll();
        });
      });
  
      document.querySelectorAll('.growth-tabs__arrow-close').forEach(arrow => {
        arrow.addEventListener('click', (e) => {
          e.stopPropagation();
          if (!isAnyOpen()) {
            const item = arrow.closest('.growth-tabs__item');
            item?.classList.add('is-open');
          }
        });
      });
  
      document.querySelectorAll('.growth-tabs__item-close').forEach(closeBlock => {
        closeBlock.addEventListener('click', (e) => {
          const item = closeBlock.closest('.growth-tabs__item');
  
          if (item.classList.contains('is-open')) {
            return;
          }
  
          if (isAnyOpen()) {
            closeAll();
            item.classList.add('is-open');
          }
        });
      });
    };
  
    return { init };
})();
  
  