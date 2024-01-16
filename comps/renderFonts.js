import { loadingContainer, list } from "../globalVars.js";
import { viewList } from "./handleListView.js";
import { nextTick } from "https://unpkg.com/petite-vue?module";

export async function _renderFonts(fonts, itemsPerPage) {
  const fontItem = document.querySelectorAll(".font-list_item");
  this.store.fonts = fonts.slice(0, itemsPerPage);
  const span2El = list.querySelectorAll(":nth-child(6n+3), :nth-child(6n+4)");

  if (viewList === "grid") {
    fontItem.forEach((el) => el.classList.add("dyn-style-1"));
    span2El.forEach((element) => {
      element.classList.remove("dyn-style-1");
      element.classList.add("dyn-style-2");
    });
  } else if (viewList === "columns") {
    fontItem.forEach((element) => {
      element.classList.remove("dyn-style-1");
      element.classList.remove("dyn-style-2");
      element.classList.add("dyn-style-1");
    });
  } else {
    span2El.forEach((element) => {
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
    // console.log(this.store.count);
  });
}

export function _showItemsWithFadeIn() {
  const fontItem = document.querySelectorAll(".font-list_item");
  loadingContainer.classList.remove("hidden");
  loadingContainer.classList.add("hidden");
  // list.classList.remove("hidden");
  console.log(fontItem);
  fontItem.forEach((item) => {
    const index = item.dataset.index;

    console.log(item);
    // item.classList.add("visible");
    item.classList.remove("visible");
    setTimeout(() => {
      item.classList.add("visible");
    }, index * 100); // Delay each item's appearance by 100ms
  });
}
