export const teamTabsMobile = (() => {
	const init = () => {
		const tabBlocks = document.querySelectorAll('.tabs-team');

		tabBlocks.forEach((tabBlock) => {
			const buttons = tabBlock.querySelectorAll('.tabs__toggle-img');
			const contents = tabBlock.querySelectorAll('.tab-content__text');
			const names = tabBlock.querySelectorAll('.tabs__team-name');

			buttons.forEach((btn, index) => {
				btn.addEventListener('click', () => {
					buttons.forEach((b) => b.setAttribute('aria-expanded', 'false'));
					names.forEach((n) => n.classList.remove('active'));
					contents.forEach((c, i) => {
						c.setAttribute('aria-expanded', 'false');
					});

					btn.setAttribute('aria-expanded', 'true');
					names[index].classList.add('active');
					contents[index].setAttribute('aria-expanded', 'true');
				});
			});

			if (buttons.length) {
				buttons[0].click();
			}
		});
	};

	return { init };
})();
