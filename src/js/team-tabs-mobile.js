export const teamTabsMobile = (() => {
    const init = () => {
        const mobileTabs = document.querySelectorAll('.tabs-team-momile');

        mobileTabs.forEach(tabBlock => {
          const buttons = tabBlock.querySelectorAll('.team-toggle__item');
          const contents = tabBlock.querySelectorAll('.team-mobile__text');
      
          buttons.forEach((btn, index) => {
            btn.addEventListener('click', () => {

              buttons.forEach(b => b.setAttribute('aria-expanded', 'false'));
              btn.setAttribute('aria-expanded', 'true');
      
              contents.forEach((c, i) => {
                c.setAttribute('aria-expanded', i === index ? 'true' : 'false');
              });
            });
          });

          if (buttons.length) {
            buttons[0].click();
          }
        });
    };
  
    return {
      init,
    };
  })();
        
  