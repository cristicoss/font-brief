import {
  burgerMenu,
  filtersContainer,
  islandContainer,
  islandParentContainer,
  fbLogo1,
  fbLogo2,
  menuActionContainer,
  fbNameIsland,
  titlesWrapper,
  menuBig,
  menuSmall,
} from "../globalVars.js";

const openMenu = function () {
  islandContainer.classList.toggle("menu-state");
  islandParentContainer.classList.toggle("menu-state");
  fbLogo1.classList.toggle("hidden");
  fbLogo2.classList.toggle("hidden");
  menuActionContainer.classList.toggle("hidden");
  fbNameIsland.classList.toggle("hidden");
  titlesWrapper.classList.toggle(".hidden");
  filtersContainer.classList.toggle("hidden");
  if (menuBig.classList.contains("hidden")) {
    setTimeout(() => {
      menuBig.classList.toggle("hidden");
      menuSmall.classList.toggle("hidden");
    }, 300);
  } else {
    menuBig.classList.toggle("hidden");
    menuSmall.classList.toggle("hidden");
  }
};

const handleMenuItemsOver = function (event) {
  document
    .querySelectorAll(`.${event.currentTarget.classList[0]}`)
    .forEach((item) => {
      item.classList.remove("text_black");
      item.classList.add("text_dark-grey");
    });
  event.currentTarget.classList.add("text_black");
};

const handleMenuItemsOut = function (event) {
  document
    .querySelectorAll(`.${event.currentTarget.classList[0]}`)
    .forEach((item) => {
      item.classList.remove("text_dark-grey");
    });
  event.currentTarget.classList.remove("text_black");
};

export { openMenu, handleMenuItemsOver, handleMenuItemsOut };
