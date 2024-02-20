(function () {
  "use strict";

  const $navMobile = document.querySelector(".nav-mobile");
  const $hamburguerMenuIcon = document.querySelector(".header-button-menu");
  const $closeMenuIcon = document.querySelector(".nav-mobile-button-menu");

  let toggleMenu = false;

  const mobileMenuViewControl = () => {
    if (toggleMenu) {
      $navMobile.style.visibility = "visible";
      $navMobile.style.opacity = "1";
    } else {
      $navMobile.style.visibility = "hidden";
      $navMobile.style.opacity = "0";
    }
  };
  mobileMenuViewControl();

  const handleToggleMenu = () => {
    toggleMenu = !toggleMenu;
    mobileMenuViewControl();
  };

  $hamburguerMenuIcon.addEventListener("click", handleToggleMenu);
  $closeMenuIcon.addEventListener("click", handleToggleMenu);
})();
