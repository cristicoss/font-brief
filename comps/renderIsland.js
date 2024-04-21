import { wrapper, island, islandContainer } from "../globalVars.js";

const fbTitle = document.querySelector(".fb_name-big");
const fbTitleLogo = document.querySelector(".fb_name-logo");
const filterAttContainer = document.querySelector(
  ".filters_attributes-container"
);
const filterSecondaryContainer = document.querySelector(
  ".filters_secondary-container"
);
const filterContainer = document.querySelectorAll(".filter_container");

export default function showFilters() {
  islandContainer.classList.remove("island-intro");
  islandContainer.classList.add("island-intro");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset <= 20) {
      islandContainer.classList.remove("island-intro");
      islandContainer.classList.add("island-intro");
    } else {
      islandContainer.classList.remove("island-intro");
    }
  });
  fbTitleLogo.classList.add("active");
  fbTitle.classList.add("active");

  requestAnimationFrame(() => {
    fbTitle.classList.add("hidden");
    filterAttContainer.classList.remove("hidden");
    filterAttContainer.classList.add("active");
    filterSecondaryContainer.classList.remove("hidden");

    filterContainer.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("active");
      }, index * 100);
    });
  });

  requestAnimationFrame(() => {
    filterSecondaryContainer.classList.add("active");
  });
}
