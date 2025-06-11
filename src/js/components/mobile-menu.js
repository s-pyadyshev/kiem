import { throttle } from "../helpers.js";

export const mobileMenu = (() => {
  const init = () => {
    const mobileMenuToggle = document.querySelector(".js-toggle-menu");

    if (!mobileMenuToggle) {
      return;
    }

    const menu = document.querySelector(".menu");
    const body = document.querySelector("body");

    const openMenu = () => {
      mobileMenuToggle.classList.add("active");
      body.classList.toggle("menu-active");
      menu.classList.add("menu--open");
    };

    const closeMenu = () => {
      mobileMenuToggle.classList.remove("active");
      body.classList.toggle("menu-active");
      menu.classList.remove("menu--open");
    };

    mobileMenuToggle.addEventListener("click", function () {
      if (!mobileMenuToggle.classList.contains("active")) {
        openMenu();
      } else {
        closeMenu();
      }
    });

    const handleResize = throttle(() => {
      if (
        window.matchMedia("(min-width: 1025px)").matches &&
        document.body.classList.contains("menu-active")
      ) {
        closeMenu();
      }
    }, 200);

    window.addEventListener("resize", handleResize);
  };

  return {
    init,
  };
})();
