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
} from "./petite-vue/dist/petite-vue.es.js";

// const { createApp, reactive, nextTick } = petite;

import showFilters from "./comps/renderIsland.js";

showFilters();

import { fetchedFonts, fetchedPromotedFonts } from "./apiFonts.js";
import { _showItemsWithFadeIn } from "./comps/renderFonts.js";
import { _paginate, _pagBtnHandler } from "./comps/pagHandler.js";
import { _handleListView } from "./comps/handleListView.js";
import _reset from "./comps/resetAll.js";
import _checkUncheck from "./comps/checkUncheck.js";
import _handleMouseover from "./comps/handleMouseOverFilters.js";
import _updateFilters from "./comps/updateFilterBtns.js";
import _updateUrl from "./comps/updateUrl.js";
import _readUrl from "./comps/readUrl.js";
import _filterFonts from "./comps/filterFonts.js";
import _pausePromoSection from "./comps/promo-section.js";
import _newsletter from "./handleNewsletter.js";

import {
  list,
  resetBtn,
  itemsPerPage,
  allCheckboxes,
  fontImageCrop,
} from "./globalVars.js";

let loadedFonts = [];
let promotedFontsIds = [];

(async function () {
  try {
    const data = await fetchedFonts;
    const dataPromoted = await fetchedPromotedFonts;
    loadedFonts.push(...data);
    dataPromoted.forEach((el) => promotedFontsIds.push(el.id));

    ///// create font list with promo first followed by new fonts /////

    const isPromoted = (font) => promotedFontsIds.includes(font.id);

    // Separate promoted fonts from non-promoted fonts
    const promotedFonts = loadedFonts.filter((font) => isPromoted(font));
    const nonPromotedFonts = loadedFonts.filter((font) => !isPromoted(font));

    // Sort non-promoted fonts by created_at in descending order
    const sortedNonPromotedFonts = nonPromotedFonts.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    // Insert promoted fonts at the 3rd and 4th positions
    const sortedFonts = [
      ...sortedNonPromotedFonts.slice(0, 2), // First two non-promoted fonts
      ...promotedFonts, // Promoted fonts
      ...sortedNonPromotedFonts.slice(2), // Remaining non-promoted fonts
    ];
    // end //

    sortedFonts[0].new = true;
    sortedFonts[1].new = true;
    sortedFonts[2].promoted = true;
    sortedFonts[3].promoted = true;
    sortedFonts[4].new = true;
    sortedFonts[5].new = true;

    createFontsList(sortedFonts);
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
    this._setClicks = this._setClicks.bind(this);
    this._handleNewsletter = _newsletter;

    this.store = store;
    this.counter = counter;
    this._pausePromoSection();
    this._checkUncheck();

    resetBtn.addEventListener("click", () => this._reset());

    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, this._readUrl())
    );

    this._setClicks();

    this._handleListView(store);
    this._handleNewsletter();
  }

  _setClicks() {
    const self = this;
    const indexBox = [];
    allCheckboxes.forEach(function (box) {
      if (box.classList.contains("blue")) {
        indexBox.push(+box.dataset.atr.slice(0, 1));
      }
    });
    const uniqueIndexBox = [...new Set(indexBox)];

    uniqueIndexBox.forEach(function (index) {
      self.store.clicks[index] = 2;
    });
  }

  ////// Render list of fonts /////
  ////// Don't move it in a separate file, it work with a delay /////
  _renderFonts(fonts, itemsPerPage) {
    this.store.fonts = fonts.slice(0, itemsPerPage);

    const fontItem = document.querySelectorAll(".font-list_item");

    nextTick(() => {
      if (this.store.itemFlex === "grid") {
        this.store.gridType = true;
        this.store.listType = false;
        this.store.columnType = false;
      } else if (this.store.itemFlex === "list") {
        this.store.gridType = false;
        this.store.columnType = false;
        this.store.listType = true;
      } else if (this.store.itemFlex === "columns") {
        this.store.gridType = false;
        this.store.listType = false;
        this.store.columnType = true;
      }

      this._showItemsWithFadeIn();
    });
  }
}

const createFontsList = function (fonts) {
  //Petie Vue
  const store = reactive({
    sortedFonts: fonts,
    fonts: fonts.slice(0, 5),
    counter: 0,
    listType: false,
    gridType: true,
    columnType: false,

    sliderValue: 100,

    resizeGridImgs(event, img) {
      if (event || img) {
        const image = event.target || img;
        const classes = image.className.split(" ");
        if (classes.length > 1) {
          // Keep the first class and remove all other classes
          image.className = classes[0];
        }

        // Traverse up the DOM tree to find the parent div with class "dyn-style-2"
        let parentDiv = image.parentElement;
        const { width, height } = image.getBoundingClientRect();

        while (parentDiv) {
          if (parentDiv.classList.contains("dyn-style-1")) {
            console.log("dyn-style-1");
            if (width / height < 2.5) {
              image.classList.remove("title-img-extreme-landscape-column");
              image.classList.add("title-img-portrait-column");
            } else image.classList.add("title-img-landscape-column");

            // image.dataset.initialHeight = getComputedStyle(image).height;
          } else if (parentDiv.classList.contains("dyn-style-3")) {
            if (width / height < 1.7) {
              image.classList.add("title-img-portrait-list");
            }
            if (width / height < 2.5 && width / height >= 1.7) {
              image.classList.add("title-img-portrait2-list");
            } else if (width / height >= 2.5) {
              image.classList.add("title-img-landscape-list");
            }
            // image.dataset.initialHeight = getComputedStyle(image).height;
          } else if (parentDiv.classList.contains("dyn-style-2")) {
            if (width / height <= 2.3) {
              image.classList.add("title-img-portrait-big");
            } else image.classList.add("title-img-landscape-big");

            // image.dataset.initialHeight = getComputedStyle(image).height;
          }

          if (parentDiv.classList.contains("dyn-style-0")) {
            if (width / height < 2) {
              image.classList.add("title-img-portrait-small");
            } else if (width / height >= 2) {
              image.classList.add("title-img-landscape-small");
            }
            // image.dataset.initialHeight = getComputedStyle(image).height;
          }

          parentDiv = parentDiv.parentElement;
        }
        // image.style.height =
        //   +image.dataset.initialHeight + this.sliderValue + "px";
      } else console.log("no image");
    },

    loadedImages: function () {
      console.clear();
      const loadedImgs = document.querySelectorAll(".font_image-crop");
      loadedImgs.forEach((img) => {
        this.resizeGridImgs(false, img);
        // img.dataset.initialHeight = "";
      });
    },

    clicks: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    divIndex: 0,
    allFiltersFromThisCat: [],
    divPos: 0,

    fontBGColor: "white-black",
    fontFGColor: "",
    imgColorOver: "normal",

    stylesIndex: 0,
    styles: [
      {
        bgColor: "white",
        infoColor: "text_dark-grey",
      },
      {
        bgColor: "white",
        fgColor: "blue",
        infoColor: "text_dark-grey",
      },
      {
        bgColor: "white",
        fgColor: "red",
        infoColor: "text_dark-grey",
      },
      {
        bgColor: "yellow",
        fontBlend: "multiply",
        infoColor: "text_dark-grey",
      },
      {
        bgColor: "blue",
        fontBlend: "invert",
        infoColor: "text_light-grey",
        newLabel: "white",
        promoLabel: "white",
        saveColor: "white",
      },
      {
        bgColor: "black",
        fontBlend: "invert",
        infoColor: "text_light-grey",
        newLabel: "white",
        promoLabel: "white",
      },
      {
        bgColor: "green",
        fontBlend: "multiply",
        infoColor: "text_dark-grey",
        strokeColor: "light-stroke",
      },
      {
        bgColor: "pink",
        fontBlend: "multiply",
        infoColor: "text_dark-grey",
        strokeColor: "light-stroke",
      },
      {
        bgColor: "orange",
        fontBlend: "multiply",
        infoColor: "text_dark-grey",
        strokeColor: "light-stroke",
      },
    ],

    subscribed: false,

    itemFlex: "grid",
    imgSize: "",
  });

  createApp({
    store,

    match(index) {
      if (
        store.itemFlex === "grid" &&
        ((index - 2) % 6 === 0 || (index - 2) % 6 === 1)
      ) {
        return "dyn-style-2";
      } else if (
        store.itemFlex === "grid" &&
        ((index - 2) % 6 !== 0 || (index - 2) % 6 !== 1)
      ) {
        return "dyn-style-0";
      } else if (store.itemFlex === "columns") {
        return "dyn-style-1";
      } else return "dyn-style-3";
    },

    match2() {
      if (store.itemFlex === "list") return "dyn-style-3";
    },

    handleFontSize(event) {
      if (!event) store.sliderValue = 100;

      if (event) {
        store.sliderValue = +event.target.value;
      }

      const fontImageLink = document.querySelectorAll(".image_link");
      const fontImageGrid1 = document.querySelectorAll(
        ".font_image-crop.title-img-portrait-big"
      );
      const fontImageGrid2 = document.querySelectorAll(
        ".font_image-crop.title-img-portrait-small"
      );
      const fontImageGrid3 = document.querySelectorAll(
        ".font_image-crop.title-img-extreme-landscape-big"
      );
      const fontImageGrid4 = document.querySelectorAll(
        ".font_image-crop.title-img-landscape-big"
      );
      const fontImageGrid5 = document.querySelectorAll(
        ".font_image-crop.title-img-landscape-small"
      );
      const fontImageGrid6 = document.querySelectorAll(
        ".font_image-crop.title-img-extreme-landscape-small"
      );
      const fontImageColumn1 = document.querySelectorAll(
        ".font_image-crop.title-img-portrait-column"
      );
      const fontImageColumn2 = document.querySelectorAll(
        ".font_image-crop.title-img-landscape-column"
      );
      const fontImageColumn3 = document.querySelectorAll(
        ".font_image-crop.title-img-extreme-landscape-column"
      );

      const fontImage = document.querySelectorAll(
        ".font_image-crop.title-img-landscape-list"
      );
      const fontImage2 = document.querySelectorAll(
        ".font_image-crop.title-img-portrait-list"
      );
      const fontImage3 = document.querySelectorAll(
        ".font_image-crop.title-img-portrait2-list"
      );

      if (store.gridType) {
        // Portrait Big
        fontImageGrid1.forEach((el) => {
          el.style.height = store.sliderValue - 25 + "%";
          el.style.width = "auto";
          if (+el.style.height.slice(0, -1) <= 15) el.style.height = "15%";
          if (+el.style.height.slice(0, -1) >= 120) el.style.height = "120%";
        });
        // Portrait Small
        fontImageGrid2.forEach((el) => {
          el.style.height = store.sliderValue - 55 + "%";
          el.style.width = "auto";
          if (+el.style.height.slice(0, -1) <= 10) el.style.height = "10%";
          if (+el.style.height.slice(0, -1) >= 120) el.style.height = "120%";
        });
        // Extreme Landscape Big
        fontImageGrid3.forEach((el) => {
          el.style.height = "100%";
          el.style.width = store.sliderValue - 15 + "%";
          if (+el.style.width.slice(0, -1) <= 10) el.style.width = "10%";
          if (+el.style.width.slice(0, -1) >= 98) el.style.width = "98%";
        });
        // Landscape Big
        fontImageGrid4.forEach((el) => {
          el.style.maxWidth = "none";
          el.style.width = store.sliderValue - 25 + "%";
          if (+el.style.width.slice(0, -1) <= 10) el.style.width = "10%";
          if (+el.style.width.slice(0, -1) >= 98) el.style.width = "98%";
        });
        // Landscape Small
        fontImageGrid5.forEach((el) => {
          el.style.maxWidth = "none";
          el.style.height = store.sliderValue - 85 + "%";
          el.style.width = "auto";
          if (+el.style.height.slice(0, -1) <= 5) el.style.height = "5%";
          if (+el.style.height.slice(0, -1) >= 20) el.style.height = "20%";
        });
        // Extreme Landscape Small
        fontImageGrid6.forEach((el) => {
          el.style.height = "100%";
          el.style.width = store.sliderValue - 10 + "%";
          if (+el.style.height.slice(0, -1) <= 5) el.style.height = "5%";
          if (+el.style.height.slice(0, -1) >= 20) el.style.height = "20%";
        });
      }

      if (store.columnType) {
        // Portrait
        fontImageColumn1.forEach((el) => {
          el.style.height = store.sliderValue - 45 + "%";
          el.style.width = "auto";
          if (+el.style.height.slice(0, -1) <= 20) el.style.height = "20%";
          if (+el.style.height.slice(0, -1) >= 140) el.style.height = "140%";
        });
        // Landscape
        fontImageColumn2.forEach((el) => {
          el.style.height = store.sliderValue - 70 + "%";
          el.style.width = store.sliderValue - 35 + "%";
          // if (+el.style.height.slice(0, -1) <= 5) el.style.height = "5%";
          // if (+el.style.width.slice(0, -1) >= 97) el.style.width = "97%";
        });
        // Extreme Landscape
        fontImageColumn3.forEach((el) => {
          el.style.height = "auto";
          el.style.width = store.sliderValue - 25 + "%";
          if (+el.style.width.slice(0, -1) <= 20) el.style.width = "20%";
          if (+el.style.width.slice(0, -1) >= 70) el.style.width = "70%";
        });
      }

      if (store.listType) {
        // Landscape
        if (store.sliderValue < 150 && store.sliderValue > 60) {
          fontImage.forEach((el) => {
            el.style.height = store.sliderValue / 10 - 5 + "rem";
          });
        }

        // Portrait
        if (store.sliderValue > 30) {
          fontImage2.forEach((el) => {
            el.style.height = store.sliderValue / 10 + 5 + "rem";
          });
        }

        // Portrait 2
        if (store.sliderValue < 140 && store.sliderValue > 40) {
          fontImage3.forEach((el) => {
            el.style.height = store.sliderValue / 10 + "rem";
          });
        }
      }
    },

    handleColor(event) {
      if (!event) return store.styles[0];

      store.stylesIndex++;
      if (store.stylesIndex >= store.styles.length) store.stylesIndex = 0;
      return store.stylesIndex;
    },

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
          for (let i = this.store.divPos - 1; i <= boxIndex - 1; i++) {
            // console.log(this.store.allFiltersFromThisCat[i]);
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
        // console.log(this.store.divPos, boxIndex);
        for (let i = 0; i < this.store.divPos - 1; i++) {
          this.store.allFiltersFromThisCat[i].classList.remove("blue");
        }
        for (let i = this.store.divPos; i < 5; i++) {
          this.store.allFiltersFromThisCat[i].classList.remove("blue");
        }
      }
      event.target.classList.remove("hover-blue");
    },

    handleMouseOverFont(event, fontName, index) {
      event.target.querySelectorAll(".save_button_wrapper").forEach((el) => {
        el.classList.add("visiblefade");
      });
    },

    handleMouseLeaveFont(event) {
      event.target.querySelectorAll(".save_button_wrapper").forEach((el) => {
        el.classList.remove("visiblefade");
      });
    },

    handleNewsletter() {
      document
        .querySelector(".newsletter_wrapper-fixed")
        .classList.add("active");
      this.store.subscribed = true;
    },

    updateList: new App(store),
  }).mount("#app");
};
