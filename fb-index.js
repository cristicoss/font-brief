/* De pus in Webflow pt test
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@1.24.0"></script>
<!--<script src="https://cristicoss.github.io/fontbrief-dynamic-list/fonts.js" defer></script>-->
<!--<script src="https://hcxyoffxqkwbpmsktmub.supabase.co/storage/v1/object/public/test/fontbrief-dynamic-list_index.js?t=2023-10-19T15%3A51%3A54.042Z" defer></script>-->
<!--<link rel="stylesheet" href="https://hcxyoffxqkwbpmsktmub.supabase.co/storage/v1/object/public/test/style-fontbrief.css?t=2023-10-19T15%3A52%3A54.648Z" defer>-->

<script type="module" src="http://localhost:5500/fb-index.js" defer></script>
<link rel="stylesheet" href="http://localhost:5500/style-fontbrief.css" defer>

<script type="module" src="https://cristicoss.github.io/font-brief/fb-index.js" defer></script>
<link rel="stylesheet" href="https://cristicoss.github.io/font-brief/style-fontbrief.css" defer>
*/

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
import _pausePromoSection from "./comps/promo-section.js";

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
    this._pausePromoSection = _pausePromoSection;

    this.store = store;
    this.counter = counter;

    this._pausePromoSection();
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
      fontItem.forEach((el) => el.classList.add("dyn-style-0"));
      span2El.forEach((element) => {
        element.classList.remove("dyn-style-2");
        element.classList.remove("dyn-style-1");
        element.classList.remove("dyn-style-0");
        element.classList.add("dyn-style-2");
      });
    }

    if (viewList === "columns") {
      fontItem.forEach((element) => {
        element.classList.remove("dyn-style-1");
        element.classList.remove("dyn-style-2");
        element.classList.remove("dyn-style-0");
        element.classList.add("dyn-style-1");
      });
    }

    if (viewList === "list") {
      fontItem.forEach((element) => {
        element.classList.remove("dyn-style-1");
        element.classList.remove("dyn-style-2");
        element.classList.remove("dyn-style-0");
      });
    }

    nextTick(() => {
      if (viewList === "grid" || viewList === "columns") {
        this.store.listType = false;
      } else this.store.listType = true;
      this._showItemsWithFadeIn();
      this.store.counter = fonts.length;
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

    clicks: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    divIndex: 0,
    allFiltersFromThisCat: [],
    divPos: 0,
  });

  createApp({
    store,
    handleClick(event) {
      this.store.divIndex = parseInt(event.target.getAttribute("data-atr"));
      this.store.divPos = parseInt(event.target.getAttribute("data-pos"));
      this.store.clicks[this.store.divIndex] =
        (this.store.clicks[this.store.divIndex] + 1) % 3;

      const selector = `div[data-atr^="${this.store.divIndex}"]`;
      this.store.allFiltersFromThisCat = document.querySelectorAll(selector);
    },

    handleMouseOver(event) {
      if (
        this.store.divIndex ===
          parseInt(event.target.getAttribute("data-atr")) &&
        this.store.clicks[parseInt(event.target.getAttribute("data-atr"))] === 1
      ) {
        const boxIndex = parseInt(event.target.getAttribute("data-pos"));
        if (boxIndex < this.store.divPos) {
          for (let i = boxIndex - 1; i <= this.store.divPos - 1; i++) {
            this.store.allFiltersFromThisCat[i].classList.remove("blue");
            this.store.allFiltersFromThisCat[i].classList.add("blue");
          }

          for (let i = 0; i <= boxIndex - 2; i++) {
            this.store.allFiltersFromThisCat[i].classList.remove("blue");
          }
        }

        if (boxIndex > this.store.divPos) {
          for (let i = this.store.divPos - 1; i <= boxIndex; i++) {
            this.store.allFiltersFromThisCat[i].classList.remove("blue");
            this.store.allFiltersFromThisCat[i].classList.add("blue");
          }

          for (let i = boxIndex; i <= 4; i++) {
            this.store.allFiltersFromThisCat[i].classList.remove("blue");
          }
        }
      }
      if (
        this.store.clicks[parseInt(event.target.getAttribute("data-atr"))] !== 1
      )
        event.target.classList.add("hover-blue");
    },

    handleMouseOut(event) {
      if (
        this.store.divIndex ===
          parseInt(event.target.getAttribute("data-atr")) &&
        this.store.clicks[parseInt(event.target.getAttribute("data-atr"))] === 1
      ) {
        const boxIndex = parseInt(event.target.getAttribute("data-pos"));
        console.log(this.store.divPos, boxIndex);
        for (let i = 0; i < this.store.divPos - 1; i++) {
          this.store.allFiltersFromThisCat[i].classList.remove("blue");
        }
        for (let i = this.store.divPos; i < 5; i++) {
          this.store.allFiltersFromThisCat[i].classList.remove("blue");
        }
      }
      event.target.classList.remove("hover-blue");
    },
    updateList: new App(store),
  }).mount("#app");
};
