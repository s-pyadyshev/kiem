import { accordion } from './components/accordion.js';
import { accordionVertical } from './components/accordionVertical.js';
import { mobileMenu } from './components/mobile-menu.js';
import { tabs } from './components/tabs.js';
import { growthTabs } from './growth-tabs.js';
import { teamTabsMobile } from './team-tabs-mobile.js';
import { growthTabsMobile } from './growth-tabs-mobile.js';

window.addEventListener(
  'load',
  () => {
    mobileMenu.init();
    tabs.init();
    accordion.init();
    accordionVertical.init();

    growthTabs.init();
    teamTabsMobile.init();
    growthTabsMobile.init();

    document.querySelector('body').classList.add('page-loaded');
  },
  false
);
