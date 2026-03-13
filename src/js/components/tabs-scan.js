export const tabsScan = (() => {
  const init = () => {
    const tabsNode = document.querySelector('.tabs-scan')
    const tabButtons = tabsNode.querySelectorAll('.tab-button-scan');
    const tabItemsLaptop = tabsNode.querySelectorAll('.tab-content__item-scan');

    tabButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        tabButtons.forEach((b) => b.setAttribute('aria-expanded', 'false'));
        btn.setAttribute('aria-expanded', 'true');

        tabItemsLaptop.forEach((tab, i) => {
          if (i === index) {
            tab.setAttribute('aria-expanded', 'true');
          } else {
            tab.setAttribute('aria-expanded', 'false');
          }
        });
      });
    });

    if (tabButtons.length) {
      tabButtons[0].click();
    }
  };

  return {
    init
  };
})();
