//// Trebuie sa schimb # cu & in url
//// Cand import toate functiile din js diferite, filtrele se misca greu

"use strict";
import { createApp, reactive } from "https://unpkg.com/petite-vue?module";

import fetchedFonts from "./apiFonts.js";

import _filterFonts from "./comps/filterFonts.js";
import _checkUncheck from "./comps/checkUncheck.js";
import { _handleListView } from "./comps/handleListView.js";
import _updateUrl from "./comps/updateUrl.js";
import _readUrl from "./comps/readUrl.js";
import { _paginate, _pagBtnHandler } from "./comps/pagHandler.js";
import _updateFilters from "./comps/updateFilterBtns.js";
import { _renderFonts, _showItemsWithFadeIn } from "./comps/renderFonts.js";
import _reset from "./comps/resetAll.js";

import { resetBtn } from "./globalVars.js";

let loadedFonts = [];

(async function () {
  try {
    const data = await fetchedFonts;
    loadedFonts.push(...data);
    createFontsList(loadedFonts);
    console.log(loadedFonts);
  } catch (error) {
    console.error("Error while fetching fonts data:", error);
  }
})();

export class App {
  // fonts = fonts;
  hashFragment = [];
  constructor(store, counter) {
    //Delare Petite Vue reactive store
    this.store = store;
    this.counter = counter;

    // Declare methods
    this._filterFonts = _filterFonts;
    this._renderFonts = _renderFonts;
    this._showItemsWithFadeIn = _showItemsWithFadeIn;
    this._checkUncheck = _checkUncheck;
    this._handleListView = _handleListView;
    this._updateUrl = _updateUrl;
    this._readUrl = _readUrl;
    this._paginate = _paginate;
    this._pagBtnHandler = _pagBtnHandler;
    this._updateFilters = _updateFilters;
    this._reset = _reset;

    // Call functions when page loads
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
}

const createFontsList = function (fonts) {
  //Petie Vue
  const store = reactive({
    loadedFonts: fonts,
    fonts: fonts.slice(0, 5),
    counter: 0,
    listType: true,
  });

  createApp({
    store,
    updateList: new App(store),
  }).mount("#app");
};
