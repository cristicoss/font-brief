"use strict";
import { createApp } from "./petite-vue/dist/petite-vue.es.js";
import {
  uploadImgs,
  _getRealtimeChanges,
} from "./jurizare/handleHeaderImgs.js";

import {
  handleMouseOverFont,
  handleMouseLeaveFont,
  _showItemsWithFadeIn,
  _handleListView,
  match,
  match2,
} from "./comps/handleFontList.js";

import { store } from "./store.js";

import {
  changePromoFonts,
  removePlaceholder,
  searchPromoFonts,
  setPromoFont,
  listenSupaPromoChanges,
  _pausePromoSection,
} from "./jurizare/handlePromoFonts.js";

import {
  handleClickFilters,
  handleMouseOverFilters,
  handleMouseOutFilters,
  openSearch,
  exitSearch,
  handleSearch,
  resetSlider,
} from "./comps/handleFilters.js";

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

import {
  createFont,
  removePlaceholderNewFont,
} from "./jurizare/createNewFont.js";

import {
  handleNewsletter,
  handleColorChange,
  handleFontSize,
  openMenu,
  handleMenuItemsOver,
  handleMenuItemsOut,
  openPopUp,
  handleSetFontSize,
  showHandles,
} from "./comps/genericFunctions.js";

await listenSupaPromoChanges("promo1");

createApp({
  store,

  //////// handleFilters.js ////////
  handleClickFilters(type, nr) {
    handleClickFilters(type, nr);
    console.log("click");
  },

  handleMouseOverFilters(event, filter, pos) {
    handleMouseOverFilters(event, filter, pos);
  },

  handleMouseOutFilters(event, filter) {
    handleMouseOutFilters(event, filter);
  },

  openSearch() {
    openSearch();
  },

  exitSearch() {
    exitSearch();
  },

  handleSearch(event) {
    handleSearch(event);
  },

  resetSlider() {
    resetSlider();
  },
  //////////////////////////////////

  //////// handle Font List ////////
  handleMouseOverFont(event, fontName, index) {
    handleMouseOverFont(event, fontName, index);
    showHandles(event);
  },

  handleMouseLeaveFont(event) {
    handleMouseLeaveFont(event);
    showHandles(event);
  },

  match(index) {
    return match(index);
  },

  match2() {
    return match2();
  },
  //////////////////////////////////

  //////// Open any popup ////////
  openPopUp(id, promoName = "") {
    openPopUp(id, promoName);
  },
  //////////////////////////////////

  //////// Change header image ////////
  handleChangeHeader(event) {
    // event.preventDefault();
    uploadImgs(store);
  },
  //////////////////////////////////

  //////// Change promo fonts ////////
  removePlaceholder() {
    removePlaceholder();
  },

  handleSetPromoFont(fontName) {
    setPromoFont(fontName);
  },

  handleSearchPromoFont(field, event) {
    searchPromoFonts(field, event);
  },
  //////////////////////////////////

  //////// Handle create new font ////////
  handleCreateFont(newFontName) {
    createFont(store, newFontName);
  },

  removePlaceholderNewFont() {
    removePlaceholderNewFont();
  },
  //////////////////////////////////

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

  handleSetFontSize(e) {
    handleSetFontSize(e);
  },

  handleNewsletter() {
    handleNewsletter();
  },
  //////////////////////////////////
}).mount("#app");

import showFilters from "./comps/renderIsland.js";
import _readUrl from "./comps/readUrl.js";
showFilters();
_readUrl();
_handleListView();
_getRealtimeChanges();
_pausePromoSection();
// handleMenu();
