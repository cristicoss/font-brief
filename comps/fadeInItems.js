import { loadingContainer } from "../globalVars.js";

export default function _showItemsWithFadeIn() {
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
