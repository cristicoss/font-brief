"use strict";
import {
  createApp,
  reactive,
  nextTick,
} from "./petite-vue/dist/petite-vue.es.js";

// const { createApp, reactive, nextTick } = petite;

import showFilters from "./comps/renderIsland.js";

showFilters();

import {
  fetchedFonts,
  fetchedPromotedFonts,
  fetchedHeaderImg,
  supabase,
} from "./apiFonts.js";
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
import _uploadImgs from "./jurizare/uploadImgs.js";

import {
  resetBtn,
  allCheckboxes,
  islandWrapper,
  islandContainer,
  parentIsland,
  menuBig,
  menuSmall,
  islandParentContainer,
  titlesWrapper,
  fbLogo1,
  fbLogo2,
  menuActionContainer,
  fbNameIsland,
  filtersContainer,
} from "./globalVars.js";

async function fetchHeader() {
  try {
    const { data, error } = await supabase
      .from("header-imgs")
      .select("*")
      .order("updated_at", { ascending: false })
      .limit(1);

    if (error) throw error;

    return data.length ? data[0] : null;
  } catch (error) {
    console.error("Failed to fetch font:", error);
    return null; // Return an empty array or suitable default in case of failure
  }
}

let loadedFonts = [];
let promotedFontsIds = [];

async function allFetchedFonts() {
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

    const randomizedNonPromotedFonts = sortedNonPromotedFonts
      .slice(2)
      .sort(() => Math.random() - 0.5);
    // Insert promoted fonts at the 3rd and 4th positions
    const sortedFonts = [
      ...sortedNonPromotedFonts.slice(0, 2), // First two non-promoted fonts
      ...promotedFonts, // Promoted fonts
      ...randomizedNonPromotedFonts, // Remaining non-promoted fonts
    ];
    // end //

    sortedFonts[0].new = true;
    sortedFonts[1].new = true;
    sortedFonts[2].promoted = true;
    sortedFonts[3].promoted = true;
    sortedFonts[4].new = true;
    sortedFonts[5].new = true;

    return sortedFonts;
  } catch (error) {
    console.error("Error while fetching fonts data:", error);
  }
}

export class App {
  // fonts = fonts;
  hashFragment = [];
  constructor(store) {
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
    this._uploadImgs = _uploadImgs;

    this.store = store;

    this._pausePromoSection();
    this._checkUncheck();

    resetBtn.addEventListener("click", () => this._reset());

    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, this._readUrl())
    );

    this._setClicks();

    this._handleListView(store);
    this._handleNewsletter();
    this._getRealtimeChanges();
  }

  async _getRealtimeChanges() {
    // Create a function to handle inserts
    const handleChange = (payload) => {
      console.log("Change received!", payload);
      console.log(this.store.headerImg.image_url);
      this.store.headerImg = payload.new;
      console.log(this.store.headerImg.name);
      // this.store.headerImg = payload.new.image_url;
    };

    // Listen to inserts
    supabase
      .channel("header-imgs")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "header-imgs" },
        handleChange
      )
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "header-imgs" },
        handleChange
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "header-imgs" },
        handleChange
      )
      .subscribe();
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

    window.onscroll = function () {
      grow();
    };

    function grow() {
      if (window.pageYOffset > 100) {
        islandContainer.classList.remove("bigger");
        titlesWrapper.classList.add("active");
      } else {
        islandContainer.classList.add("bigger");
        titlesWrapper.classList.remove("active");
      }
    }

    grow();
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

const createFontsList = async function () {
  const fonts = await allFetchedFonts();
  const headerImg = await fetchHeader();
  console.log(headerImg["name"]);
  //Petie Vue
  const store = reactive({
    islandAtTop: false,
    sortedFonts: fonts,
    headerImg: headerImg,
    fonts: fonts.slice(0, 5),
    counter: 0,
    listType: false,
    gridType: true,
    columnType: false,

    subfilter: "",

    sliderValue: 90,

    throttle(func, limit) {
      let inThrottle;
      return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    },

    handleSubFilters(subFilter) {
      store.subfilter = subFilter;
      console.log(store.subfilter);
    },

    resetSlider(e) {
      store.sliderValue = 90;
      store.loadImgs();
    },

    removePlaceholder() {
      const promoFonts = document.querySelectorAll(".promo-font_wrapper");
      const promoFonts2 = document.querySelectorAll(".promo-font-2_wrapper");
      const placeHolder = document.querySelectorAll(".placeholder_container");

      placeHolder.forEach((el) => {
        el.classList.add("loaded");
      });

      const allPromoFonts = [...promoFonts, ...promoFonts2];
      allPromoFonts.forEach((el) => {
        el.classList.add("active");
      });
    },

    loadImgs() {
      const loadedImgs = document.querySelectorAll(".font_image-crop");
      loadedImgs.forEach((img) => {
        const imgWidth = img.width;
        const imgHeight = img.height;
        const aspectRatio = imgWidth / imgHeight;

        var maxHeightPercent = 90; // 90% of container height
        var maxWidthPercent = 90; // 90% of container width

        // Calculate the proportional height and width within bounds
        var proportionalHeightPercent, proportionalWidthPercent;

        let parent = img.parentNode;
        while (parent) {
          if (parent.classList && parent.classList.contains("dyn-style-2")) {
            if (imgHeight > imgWidth) {
              proportionalHeightPercent =
                Math.min(store.sliderValue, 100) / 1.5;
              proportionalWidthPercent =
                proportionalHeightPercent / aspectRatio;
            } else {
              proportionalWidthPercent = Math.min(store.sliderValue, 100) / 1.5;
              proportionalHeightPercent =
                proportionalWidthPercent * aspectRatio;
            }
            img.style.width = proportionalWidthPercent + "%";
            img.style.height = proportionalHeightPercent + "%";
            break;
          }

          if (parent.classList && parent.classList.contains("dyn-style-0")) {
            if (imgHeight > imgWidth) {
              proportionalHeightPercent =
                Math.min(store.sliderValue, 100) / 1.3;
              proportionalWidthPercent =
                proportionalHeightPercent / aspectRatio;
            } else {
              proportionalWidthPercent = Math.min(store.sliderValue, 100) / 1.3;
              proportionalHeightPercent =
                proportionalWidthPercent * aspectRatio;
            }
            img.style.width = proportionalWidthPercent + "%";
            img.style.height = proportionalHeightPercent + "%";
            break;
          }

          if (parent.classList && parent.classList.contains("dyn-style-1")) {
            if (imgHeight > imgWidth) {
              proportionalHeightPercent =
                Math.min(store.sliderValue, 100) / 1.7;
              proportionalWidthPercent =
                proportionalHeightPercent / aspectRatio;
            } else {
              proportionalWidthPercent = Math.min(store.sliderValue, 100) / 1.7;
              proportionalHeightPercent =
                proportionalWidthPercent * aspectRatio;
            }
            img.style.width = proportionalWidthPercent + "%";
            img.style.height = proportionalHeightPercent + "%";
            break;
          }

          if (parent.classList && parent.classList.contains("dyn-style-3")) {
            if (imgHeight > imgWidth) {
              img.style.width =
                ((imgWidth / imgHeight) * 20 * store.sliderValue) / 100 + "rem";
              proportionalHeightPercent =
                proportionalWidthPercent * aspectRatio;
            } else {
              img.style.width =
                ((imgWidth / imgHeight) * 5 * store.sliderValue) / 100 + "rem";
              if (imgWidth / imgHeight < 2.5 && imgWidth / imgHeight > 1) {
                img.style.width =
                  ((imgWidth / imgHeight) * 10 * store.sliderValue) / 100 +
                  "rem";
                proportionalHeightPercent =
                  proportionalWidthPercent * aspectRatio;
              }
            }

            break;
          }

          parent = parent.parentNode;
        }
      });
    },

    handleFontSize(event) {
      if (event) store.sliderValue = event.target.value;

      store.loadImgs();
    },

    subfilterClicks: [0, 0, 0, 0],

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
    // app: new App(store),
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

    handleColor(event) {
      if (!event) return store.styles[0];

      store.stylesIndex++;
      if (store.stylesIndex >= store.styles.length) store.stylesIndex = 0;
      return store.stylesIndex;
    },

    handleSubfiltersClick() {},

    handleClick(event) {
      this.store.divIndex = parseInt(event.target.getAttribute("data-atr"));
      this.store.divPos = parseInt(event.target.getAttribute("data-pos"));
      this.store.clicks[this.store.divIndex] =
        (this.store.clicks[this.store.divIndex] + 1) % 3;

      const selector = `div[data-atr^="${this.store.divIndex}"]`;
      this.store.allFiltersFromThisCat = document.querySelectorAll(selector);
    },

    handleSubfilters(subfilter) {
      this.store.allFiltersFromThisCat = subfilter;
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

    openMenu() {
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

    openSearch() {
      const searchContainer = document.querySelector(".search_container");
      islandContainer.classList.toggle("search-state");
      filtersContainer.classList.add("hidden");
      searchContainer.classList.remove("hidden");
    },

    exitSearch() {
      this.app._updateUrl(["x"], 12);
      const searchField = document.querySelector(".search_field");
      searchField.value = "";
      const searchContainer = document.querySelector(".search_container");
      islandContainer.classList.remove("search-state");
      filtersContainer.classList.remove("hidden");
      searchContainer.classList.add("hidden");
    },
    handleSearch(e) {
      e.preventDefault();

      // Call the _readUrl method
      this.app._reset();
      this.app._updateUrl([e.target.value], 12);
    },

    showChangeIcon(id) {
      const icon = document.getElementById(`${id}`);
      icon.classList.remove("hidden");
    },

    hideChangeIcon(id) {
      console.log("hide");
      const icon = document.getElementById(`${id}`);
      icon.classList.remove("hidden");
      icon.classList.add("hidden");
    },

    openPopUp(id) {
      const popUp = document.querySelector(`.${id}`);
      console.log(popUp);
      if (popUp.classList.contains("hidden")) {
        popUp.classList.remove("hidden");
        return;
      }

      popUp.classList.add("hidden");
    },

    handleChangeHeader() {
      _uploadImgs(store);
    },

    app: new App(store),
  }).mount("#app");

  return store;
};

createFontsList();
