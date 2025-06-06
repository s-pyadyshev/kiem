import { accordion } from './components/accordion.js';
import { mobileMenu } from './components/mobile-menu.js';
import { tabs } from './components/tabs.js';
import { growthTabs } from './growth-tabs.js';
import { teamTabsMobile } from './team-tabs-mobile.js';
import { growthTabsMobile } from './growth-tabs-mobile.js';
// import { toggle } from "./components/toggle.js";
// import { scrollspy } from "./components/scrollspy.js";
// import { slider } from "./components/slider.js";

window.addEventListener(
	'load',
	() => {
		mobileMenu.init();
		tabs.init();
		accordion.init();

		growthTabs.init();
		teamTabsMobile.init();
		growthTabsMobile.init();

		// toggle.init();
		// scrollspy.init();

		// slider.init();

		document.querySelector('body').classList.add('page-loaded');
	},
	false
);
