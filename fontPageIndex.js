"use strict";
import {
  createApp,
  reactive,
  nextTick,
} from "./petite-vue/dist/petite-vue.es.js";

import { fetchedFonts, fetchedPromotedFonts } from "./apiFonts.js";

import {
  islandContainer,
  menuActionContainer,
  menuBig,
  menuSmall,
} from "./globalVars.js";

let loadedFonts = [];
let promotedFontsIds = [];

(async function () {
  try {
    const data = await fetchedFonts;
    const dataPromoted = await fetchedPromotedFonts;
    loadedFonts.push(...data);
    dataPromoted.forEach((el) => promotedFontsIds.push(el.id));

    createFontsList(loadedFonts);
  } catch (error) {
    console.error("Error while fetching fonts data:", error);
  }
})();

export class App {
  constructor(store) {}
}

const createFontsList = function (fonts) {
  //Petie Vue
  const store = reactive({
    sliderValue: 90,

    resetSlider(e) {
      store.sliderValue = 90;
    },

    handleFontSize(event) {
      if (event) store.sliderValue = event.target.value;
    },
  });

  createApp({
    store,

    openMenu() {
      islandContainer.classList.toggle("menu-state");
      menuActionContainer.classList.toggle("hidden");
      if (menuBig.classList.contains("hidden")) {
        setTimeout(() => {
          menuBig.classList.toggle("hidden");
          menuSmall.classList.toggle("hidden");
        }, 300);
      } else {
        menuBig.classList.toggle("hidden");
        menuSmall.classList.toggle("hidden");
      }
    },

    handleMenuItemsOver(event) {
      console.log(event.currentTarget.classList[1]);
      document
        .querySelectorAll(`.${event.currentTarget.classList[0]}`)
        .forEach((item) => {
          item.classList.remove("text_black");
          item.classList.add("text_dark-grey");
        });
      event.currentTarget.classList.add("text_black");
    },

    handleMenuItemsOut(event) {
      document
        .querySelectorAll(`.${event.currentTarget.classList[0]}`)
        .forEach((item) => {
          item.classList.remove("text_dark-grey");
        });
      event.currentTarget.classList.remove("text_black");
    },
    updateList: new App(store),
  }).mount("#app");

  return store;
};
