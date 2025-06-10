export const growthTabs = (() => {
  const init = () => {
    const tabContainers = document.querySelectorAll('.growth__tabs');
    if (!tabContainers.length) return;

    tabContainers.forEach(container => {
      const navItems = container.querySelectorAll('.growth__nav-item');
      const contentItems = container.querySelectorAll('.growth__content-item');
      const navArrows = container.querySelectorAll('.growth__nav-arrow');
      const contentArrows = container.querySelectorAll('.growth__content-arrow');

      let isOpen = false;
      let activeIndex = null;

      if (!navItems.length || !contentItems.length) return;

      const deactivateAll = () => {
        navItems.forEach(item => item.classList.remove('is-active'));
        contentItems.forEach(item => item.classList.remove('is-visible'));
      };

      const activateTab = (index) => {
        deactivateAll();
        navItems[index]?.classList.add('is-active');
        contentItems[index]?.classList.add('is-visible');
        container.classList.add('is-active');
        activeIndex = index;
      };

      const closeTab = () => {
        deactivateAll();
        container.classList.remove('is-active');
        isOpen = false;
        activeIndex = null;
      };

      const openTab = (index) => {
        activateTab(index);
        isOpen = true;
      };

      const handleResize = () => {
        const isMobile = window.innerWidth < 1200;

        deactivateAll();
        container.classList.remove('is-active');
        isOpen = false;
        activeIndex = null;

        if (isMobile) {
          activateTab(0);
        }
      };

      const setupListeners = () => {
        navItems.forEach((navItem, index) => {
          const navArrow = navItem.querySelector('.growth__nav-arrow');
          
          navArrow?.addEventListener('click', (e) => {
            if (window.innerWidth >= 1200) {
              e.stopPropagation();
              openTab(index);
            }
          });

          navItem.addEventListener('click', () => {
            if (window.innerWidth < 1200) {
              activateTab(index);
            } else if (isOpen) {
              activateTab(index);
            }
          });
        });

        contentArrows.forEach((arrow) => {
          arrow.addEventListener('click', () => {
            if (window.innerWidth >= 1200) {
              closeTab();
            }
          });
        });
      };

      setupListeners();
      handleResize();
      window.addEventListener('resize', handleResize);
    });
  };

  return { init };
})();
