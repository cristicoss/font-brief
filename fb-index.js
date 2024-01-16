//// Trebuie sa schimb # cu & in url

"use strict";
import {
  createApp,
  reactive,
  nextTick,
} from "https://unpkg.com/petite-vue?module";

import fetchedFonts from "./apiFonts.js";
import { _showItemsWithFadeIn } from "./comps/renderFonts.js";
import { _paginate, _pagBtnHandler } from "./comps/pagHandler.js";
import { _handleListView, viewList } from "./comps/handleListView.js";
import _reset from "./comps/resetAll.js";
import _checkUncheck from "./comps/checkUncheck.js";
import _handleMouseover from "./comps/handleMouseOverFilters.js";
import _updateFilters from "./comps/updateFilterBtns.js";
import _updateUrl from "./comps/updateUrl.js";
import _readUrl from "./comps/readUrl.js";
import _filterFonts from "./comps/filterFonts.js";

import { list, resetBtn, itemsPerPage } from "./globalVars.js";

let loadedFonts = [];

(async function () {
  try {
    const data = await fetchedFonts;
    loadedFonts.push(...data);
    createFontsList(loadedFonts);
  } catch (error) {
    console.error("Error while fetching fonts data:", error);
  }
})();

export class App {
  // fonts = fonts;
  hashFragment = [];
  constructor(store, counter) {
    this._showItemsWithFadeIn = _showItemsWithFadeIn;
    this._pagBtnHandler = _pagBtnHandler;
    this._paginate = _paginate;
    this._handleListView = _handleListView;
    this._reset = _reset;
    this._checkUncheck = _checkUncheck;
    this._handleMouseover = _handleMouseover;
    this._updateFilters = _updateFilters;
    this._updateUrl = _updateUrl;
    this._readUrl = _readUrl;
    this._filterFonts = _filterFonts;

    this.store = store;
    this.counter = counter;
    console.log(this.store.clicks1);

    this._checkUncheck();

    resetBtn.addEventListener("click", () => this._reset());
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, this._readUrl)
    );

    this._renderFonts(this.store.fonts);
    this._paginate(this.store.fonts);
    this._pagBtnHandler(this.store.fonts);

    this._handleListView();
    // this._handleMouseover();
  }

  ////// Render list of fonts /////
  ////// Don't move it in a separate file, it work with a delay /////
  async _renderFonts(fonts) {
    const fontItem = document.querySelectorAll(".font-list_item");
    this.store.fonts = fonts.slice(0, itemsPerPage);
    const span2El = list.querySelectorAll(":nth-child(6n+3), :nth-child(6n+4)");

    if (viewList === "grid") {
      fontItem.forEach((el) => el.classList.add("dyn-style-1"));
      span2El.forEach((element) => {
        element.classList.remove("dyn-style-2");
        element.classList.remove("dyn-style-1");
        element.classList.add("dyn-style-2");
      });
    }

    if (viewList === "columns") {
      fontItem.forEach((element) => {
        element.classList.remove("dyn-style-1");
        element.classList.remove("dyn-style-2");
        element.classList.add("dyn-style-1");
      });
    }

    if (viewList === "list") {
      fontItem.forEach((element) => {
        element.classList.remove("dyn-style-1");
        element.classList.remove("dyn-style-2");
      });
    }

    nextTick(() => {
      if (viewList === "grid" || viewList === "columns") {
        this.store.listType = false;
      } else this.store.listType = true;
      this._showItemsWithFadeIn();
      this.store.counter = fonts.length;
      console.log(this.store.clicks1);
    });
  }
}

const createFontsList = function (fonts) {
  //Petie Vue
  const store = reactive({
    loadedFonts: fonts,
    fonts: fonts.slice(0, 5),
    counter: 0,
    listType: true,

    clicks1: 0,
    clicks2: 0,
    clicks3: 0,
    clicks4: 0,
    clicks5: 0,
    clicks6: 0,
    clicks7: 0,
    clicks8: 0,
  });

  createApp({
    store,
    updateList: new App(store),
  }).mount("#app");
};
