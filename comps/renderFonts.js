import { loadingContainer, list } from "../globalVars.js";
import { nextTick } from "./petite-vue/dist/petite-vue.es.js";
import { store } from "../store.js";

const _showItemsWithFadeIn = function () {
  const fontItem = document.querySelectorAll(".font-list_item");

  loadingContainer.classList.remove("hidden");
  loadingContainer.classList.add("hidden");
  // list.classList.remove("hidden");
  fontItem.forEach((item) => {
    const index = item.dataset.index;
    console.log(item);

    // item.classList.add("visible");
    item.classList.remove("visible");
    setTimeout(() => {
      item.classList.add("visible");
    }, index * 100); // Delay each item's appearance by 100ms
  });
};

const _renderFonts = function (fonts, itemsPerPage) {
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

export { _showItemsWithFadeIn, _renderFonts };
