(function () {
  "use strict";

  const $navMobile = document.querySelector(".nav-mobile");
  const $hamburguerMenuIcon = document.querySelector(".header-button-menu");
  const $closeMenuIcon = document.querySelector(".nav-mobile-button-menu");

  const $linkCompanyMenuHeader = document.querySelector(".company");
  const $sunMenuPrimary = document.querySelector(".subMenuPrimary-content");

  let toggleMenu = false;
  let toggleSubMenuPrimary = false;

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

  const subMenuPrimaryViewControl = () => {
    if (toggleSubMenuPrimary) {
      $sunMenuPrimary.style.visibility = "visible";
      $sunMenuPrimary.style.opacity = "1";
    } else {
      $sunMenuPrimary.style.visibility = "hidden";
      $sunMenuPrimary.style.opacity = "0";
    }
  };
  subMenuPrimaryViewControl();

  const handleToggleMenu = () => {
    toggleMenu = !toggleMenu;
    mobileMenuViewControl();
  };

  const handleToggleSubMenuPrimary = () => {
    toggleSubMenuPrimary = !toggleSubMenuPrimary;
    subMenuPrimaryViewControl();
  };

  $hamburguerMenuIcon.addEventListener("click", handleToggleMenu);
  $closeMenuIcon.addEventListener("click", handleToggleMenu);
  $linkCompanyMenuHeader.addEventListener("click", handleToggleSubMenuPrimary);
})();
