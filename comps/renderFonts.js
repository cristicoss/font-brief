import { loadingContainer, list } from "../globalVars.js";
import { nextTick } from "https://unpkg.com/petite-vue?module";

export function _showItemsWithFadeIn() {
  const fontItem = document.querySelectorAll(".font-list_item");
  loadingContainer.classList.remove("hidden");
  loadingContainer.classList.add("hidden");
  // list.classList.remove("hidden");
  fontItem.forEach((item) => {
    const index = item.dataset.index;

    // item.classList.add("visible");
    item.classList.remove("visible");
    setTimeout(() => {
      item.classList.add("visible");
    }, index * 100); // Delay each item's appearance by 100ms
  });
}
