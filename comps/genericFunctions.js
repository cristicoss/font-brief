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

import { store } from "../store.js";

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

const openPopUp = function (id, promoName = "") {
  if (promoName !== "") {
    store.promoName = promoName;
  }

  const popUp = document.querySelector(`.${id}`);
  if (popUp.classList.contains("hidden")) {
    popUp.classList.remove("hidden");
    // document.body.classList.add("freeze");
    return;
  }

  popUp.classList.add("hidden");
  // document.body.classList.remove("freeze");
};

const handleColorChange = function (event) {
  if (!event) return store.styles[0];

  store.stylesIndex++;
  if (store.stylesIndex >= store.styles.length) store.stylesIndex = 0;
  return store.stylesIndex;
};

const handleFontSize = function (event) {
  if (event) store.sliderValue = event.target.value / 60;
};

const handleNewsletter = function () {
  document.querySelector(".newsletter_wrapper-fixed").classList.add("active");
  this.store.subscribed = true;
};

const handleMoreInfo = function (event, store) {
  store.countMoreInfo++;
  if (store.countMoreInfo === 1) {
    description.innerHTML = store.currFont.Description;
    event.target.innerHTML = "Less";
  }
  if (store.countMoreInfo === 2) {
    store.countMoreInfo = 0;
    description.innerHTML = store.currFont.Description?.slice(0, 170) + "...";
    event.target.innerHTML = "More";
  }
};

export {
  openMenu,
  handleMenuItemsOver,
  handleMenuItemsOut,
  openPopUp,
  handleColorChange,
  handleFontSize,
  handleNewsletter,
  handleMoreInfo,
};
