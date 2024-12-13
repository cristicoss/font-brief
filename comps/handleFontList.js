import { nextTick } from "../petite-vue/dist/petite-vue.es.js";
import { store } from "../store.js";
import {
  list,
  gridBtn,
  listBtn,
  columnsBtn,
  loadingContainer,
} from "../globalVars.js";
import _readUrl from "./readUrl.js";

const handleMouseOverFont = function (event, fontname, index) {
  event.target.querySelectorAll(".save_button_wrapper").forEach((el) => {
    el.classList.add("visiblefade");
  });
};

const handleMouseLeaveFont = function (event) {
  event.target.querySelectorAll(".save_button_wrapper").forEach((el) => {
    el.classList.remove("visiblefade");
  });
};

const _showItemsWithFadeIn = function () {
  const fontItem = document.querySelectorAll(".font-list_item");

  loadingContainer.classList.remove("hidden");
  loadingContainer.classList.add("hidden");
  // list.classList.remove("hidden");
  fontItem.forEach((item) => {
    const index = item.dataset.index;

    item.classList.remove("visible");
    setTimeout(() => {
      item.classList.add("visible");
    }, index * 100); // Delay each item's appearance by 100ms
  });
};

const _renderFonts = async function (fonts, itemsPerPage) {
  store.fonts = fonts.slice(0, itemsPerPage);

  const fontItem = document.querySelectorAll(".font-list_item");

  nextTick(() => {
    if (store.itemFlex === "grid") {
      store.gridType = true;
      store.listType = false;
      store.columnType = false;
    } else if (store.itemFlex === "list") {
      store.gridType = false;
      store.columnType = false;
      store.listType = true;
    } else if (store.itemFlex === "columns") {
      store.gridType = false;
      store.listType = false;
      store.columnType = true;
    }
    _showItemsWithFadeIn();
  });
};

const _handleListView = function () {
  const secondThis = this;

  const changeView = function () {
    store.sliderValue = 100;
    _readUrl();
  };

  gridBtn.addEventListener("click", function () {
    gridBtn.classList.add("clicked");
    columnsBtn.classList.remove("clicked");
    listBtn.classList.remove("clicked");
    list.classList.remove("columns");
    list.classList.remove("list");
    list.classList.add("grid");
    changeView();
    store.itemFlex = "grid";
  });

  columnsBtn.addEventListener("click", function () {
    columnsBtn.classList.add("clicked");
    gridBtn.classList.remove("clicked");
    listBtn.classList.remove("clicked");
    list.classList.remove("grid");
    list.classList.add("columns");
    changeView();
    store.itemFlex = "columns";
  });

  listBtn.addEventListener("click", function () {
    listBtn.classList.add("clicked");
    gridBtn.classList.remove("clicked");
    columnsBtn.classList.remove("clicked");
    list.classList.remove("columns");
    list.classList.remove("grid");
    changeView();
    store.itemFlex = "list";
  });
};

const match = function (index) {
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
};

const match2 = function () {
  if (store.itemFlex === "list") return "dyn-style-3";
};

export {
  handleMouseOverFont,
  handleMouseLeaveFont,
  _renderFonts,
  _showItemsWithFadeIn,
  _handleListView,
  match,
  match2,
};
