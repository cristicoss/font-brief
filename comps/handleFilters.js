import { store } from "../store.js";
import _updateUrl from "./updateUrl.js";
import { islandContainer, filtersContainer } from "../globalVars.js";
import _readUrl from "./readUrl.js";

const handleClickFilters = function (type, nr) {
  const urlParams = new URLSearchParams(window.location.search);
  const urlType = urlParams.get(type);

  if (type === "wrkhrs" || type === "free") {
    if (urlType === nr) {
      _updateUrl(type, "");
      return;
    }
    _updateUrl(type, nr);
    return;
  }

  if (type === "sans") {
    if (urlType === nr) {
      _updateUrl(type, "");
      return;
    }
    _updateUrl(type, nr);
    return;
  }

  if (store.startClick) {
    store.type = type;
    store.startClick = false;
    store.rangeStart = +nr;
    store.rangeEnd = +nr;
    store.click = 1;
    _updateUrl(
      type,
      store.rangeStart,
      store.rangeEnd,
      store.startClick,
      store.click,
      store.sortedFonts,
      store
    );
    return;
  }

  if (store.type === type) {
    store.click++;
    if (store.click === 1) {
      store.rangeStart = +nr;
      store.rangeEnd = +nr;
    }
    if (store.click === 2) {
      store.rangeEnd = +nr;
    }
    if (store.click === 3) {
      store.rangeStart = "";
      store.rangeEnd = "";
      store.click = 0;
    }
  }

  if (store.type !== type) {
    store.rangeStart = +nr;
    store.rangeEnd = +nr;
    store.type = type;
    store.click = 1;
  }

  store.startClick = false;
  _updateUrl(
    type,
    store.rangeStart,
    store.rangeEnd,
    store.startClick,
    store.click,
    store.sortedFonts,
    store
  );
};

const handleMouseOverFilters = function (event, filter, pos) {
  const blueBoxes = document.querySelectorAll(`#${filter} .filter_box.blue`);
  const boxIndex = document.querySelectorAll(`#${filter} .filter_box`);
  const currBox = event.target;
  event.target.classList.remove("hover-blue");
  event.target.classList.add("hover-blue");

  if (blueBoxes.length !== 1 || store.type !== filter) return;

  let positions = [+pos, +blueBoxes[0].dataset.pos];

  positions.sort((a, b) => a - b);

  boxIndex.forEach((box) => {
    if (+box.dataset.pos >= positions[0] && +box.dataset.pos <= positions[1]) {
      box.classList.remove("hover-blue");
      box.classList.add("hover-blue");
    }
    if (+box.dataset.pos < positions[0] && +box.dataset.pos > positions[1]) {
      box.classList.remove("hover-blue");
    }
  });
};

const handleMouseOutFilters = function (event, filter) {
  const boxIndex = document.querySelectorAll(`#${filter} .filter_box`);
  boxIndex.forEach((box) => {
    box.classList.remove("hover-blue");
  });
};

const openSearch = function () {
  const searchContainer = document.querySelector(".search_container");
  islandContainer.classList.toggle("search-state");
  filtersContainer.classList.add("hidden");
  searchContainer.classList.remove("hidden");
};

const exitSearch = function () {
  console.log("exit");
  const url = new URL(window.location.href);
  console.log(url.searchParams);
  url.searchParams.delete("search");
  window.history.replaceState(null, "", url.href);
  _readUrl(store);
  const searchField = document.querySelector(".search_field");
  searchField.value = "";
  const searchContainer = document.querySelector(".search_container");
  islandContainer.classList.remove("search-state");
  filtersContainer.classList.remove("hidden");
  searchContainer.classList.add("hidden");
};

const handleSearch = function (e) {
  e.preventDefault();
  _updateUrl("search", [e.target.value]);
};

const resetSlider = function (name) {
  store.sliderValue = 90;
  const url = new URL(window.location.href);
  url.search = ""; // Clear the query string
  if (name) url.searchParams.set("name", `${name}`);
  window.history.replaceState(null, "", url.href);
  _readUrl(store);
};

export {
  handleClickFilters,
  handleMouseOverFilters,
  handleMouseOutFilters,
  openSearch,
  exitSearch,
  handleSearch,
  resetSlider,
};
