(function () {
  "use strict";

  const $navMobile = document.querySelector(".nav-mobile");
  const $hamburguerMenuIcon = document.querySelector(".header-buttonMenu");
  const $closeMenuIcon = document.querySelector(".nav-mobile-buttonMenu");
  const $scapeArea = document.querySelector(".scape-area");

  const $linkCompanyMenuHeader = document.querySelector(".company");
  const $subMenuPrimary = document.querySelector(".subMenuPrimary-content");

  const $linkMoreSubMenuPrimary = document.querySelector(".more");
  const $subMenuSecondary = document.querySelector(".subMenuSecondary-content");

  let toggleMenu = false;
  let toggleSubMenuPrimary = false;
  let toggleSubMenuSecondary = false;

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
      $subMenuPrimary.style.visibility = "visible";
      $subMenuPrimary.style.opacity = "1";
    } else {
      $subMenuPrimary.style.visibility = "hidden";
      $subMenuPrimary.style.opacity = "0";
    }
  };
  subMenuPrimaryViewControl();

  const subMenuSecondaryViewControl = () => {
    if (toggleSubMenuSecondary) {
      $subMenuSecondary.style.visibility = "visible";
      $subMenuSecondary.style.opacity = "1";
    } else {
      $subMenuSecondary.style.visibility = "hidden";
      $subMenuSecondary.style.opacity = "0";
    }
  };
  subMenuSecondaryViewControl();

  const handleToggleMenu = () => {
    toggleMenu = !toggleMenu;
    mobileMenuViewControl();
  };

  const handleToggleSubMenuPrimary = () => {
    toggleSubMenuPrimary = !toggleSubMenuPrimary;
    subMenuPrimaryViewControl();

    if (toggleSubMenuSecondary) {
      toggleSubMenuSecondary = !toggleSubMenuSecondary;
      return subMenuSecondaryViewControl();
    }
  };

  const handleToggleSubMenuSecondary = () => {
    toggleSubMenuSecondary = !toggleSubMenuSecondary;
    subMenuSecondaryViewControl();
  };

  $hamburguerMenuIcon.addEventListener("click", handleToggleMenu);
  $closeMenuIcon.addEventListener("click", handleToggleMenu);
  $scapeArea.addEventListener("click", handleToggleMenu);
  $linkCompanyMenuHeader.addEventListener("click", handleToggleSubMenuPrimary);
  $linkMoreSubMenuPrimary.addEventListener(
    "click",
    handleToggleSubMenuSecondary
  );
})();
