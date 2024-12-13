"use strict";
import { createApp } from "./petite-vue/dist/petite-vue.es.js";

import { store2 } from "./storeJurizare.js";

import {
  _writeDescription,
  _getRealtimeChanges,
  handleFullScreen,
  handleFontSize,
  handleSlider,
  handleChangeText,
  openPopUpJurizare,
  handleChangeImage,
  setFilters,
} from "./jurizare/handleFontPage.js";

import {
  handleClickFilters,
  handleMouseOverFilters,
  handleMouseOutFilters,
  resetSlider,
} from "./comps/handleFilters.js";

import {
  handleNewsletter,
  handleColorChange,
  openMenu,
  handleMenuItemsOver,
  handleMenuItemsOut,
  openPopUp,
  handleMoreInfo,
} from "./comps/genericFunctions.js";

// import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js";

import _uploadAnyImg from "./jurizare/changeAnyImg.js";
import changeAnyText from "./jurizare/changeAnyText.js";
import _updateUrl from "./comps/updateUrl.js";

const urlParams = new URLSearchParams(window.location.search);

const currFontName = urlParams.get("name").toLowerCase();
const requiredParams = [
  "expr",
  "elgnt",
  "frndl",
  "orgnc",
  "prgrssv",
  "drng",
  "dscrt",
  "wrm",
  "sans",
];

const url = window.location.href;
const setFiltersBtn = document.querySelector(".set-filters_btn");

createApp({
  store2,

  //////// handleFilters.js ////////
  handleClick(type, nr) {
    handleClickFilters(type, nr);
    const newUrlParams = new URLSearchParams(window.location.search);
    const allParamsPresent = requiredParams.every((value) => {
      return [...newUrlParams.keys()].includes(value);
    });

    if (!allParamsPresent) {
      setFiltersBtn.classList.add("hidden");
    } else {
      setFiltersBtn.classList.remove("hidden");
    }
  },

  handleMouseOver(event, filter, pos) {
    handleMouseOverFilters(event, filter, pos);
  },

  handleMouseOut(event, filter) {
    handleMouseOutFilters(event, filter);
  },

  resetSlider() {
    resetSlider(currFontName);
  },
  //////////////////////////////////

  //////// Open any popup ////////
  openPopUp(imgToChange, index, imgStorageToChange) {
    openPopUpJurizare(imgToChange, index, imgStorageToChange);
  },
  //////////////////////////////////

  handleChangeImage(imgToChange, index, imgStorageToChange) {
    handleChangeImage(imgToChange, index, imgStorageToChange);
  },
  //////// generic Functions ////////
  openMenu() {
    openMenu();
  },

  handleMenuItemsOver(event) {
    handleMenuItemsOver(event);
  },

  handleMenuItemsOut(event) {
    handleMenuItemsOut(event);
  },

  handleColor(event) {
    return handleColorChange(event);
  },

  handleFontSize(event) {
    handleFontSize(event);
  },

  handleNewsletter() {
    handleNewsletter();
  },

  handleFullScreen(value) {
    handleFullScreen(value);
  },

  handleSlider(index, btn, direction, currSlide, container) {
    handleSlider(index, btn, direction, currSlide, container);
  },

  handleChangeText(table, column, field, event) {
    handleChangeText(table, column, field, event, currFontName);
  },

  handleMoreInfo(event) {
    handleMoreInfo(event, store2);
  },
  //////////////////////////////////

  //////// Handle set Filters ////////
  handleSetFilters() {
    setFilters();
  },
  //////////////////////////////////
}).mount("#app");

import _readUrl from "./comps/readUrl.js";

_readUrl();
_getRealtimeChanges();
_writeDescription();

const allParamsPresent = requiredParams.every((value) => {
  return [...urlParams.keys()].includes(value);
});

if (!allParamsPresent) {
  setFiltersBtn.classList.add("hidden");
}
