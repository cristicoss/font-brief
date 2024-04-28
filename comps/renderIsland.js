import { wrapper, headlineWrapper, islandContainer } from "../globalVars.js";

const fbTitle = document.querySelector(".fb_name-big");
const observedSection = document.querySelector(".section-observed");
// const fbTitleLogo = document.querySelector(".fb_name-logo");
const filterAttContainer = document.querySelector(
  ".filters_attributes-container"
);
const filterSecondaryContainer = document.querySelector(
  ".filters_secondary-container"
);
const filterContainer = document.querySelectorAll(".filter_container");

export default function showFilters() {
  function fadeIsland(element) {
    element.classList.add("active");
  }

  // setTimeout(fadeIsland(islandContainer), 5000);
  // setTimeout(fadeIsland(fbTitle), 3000);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!islandContainer.classList.contains("grow"))
            islandContainer.classList.add("grow");
        } else {
          islandContainer.classList.remove("grow");
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(observedSection);
  setTimeout(islandContainer.classList.add("active"), 500);

  function requestAnimationFrame() {
    fbTitle.classList.add("hidden");
    filterAttContainer.classList.remove("hidden");
    filterAttContainer.classList.add("active");
    filterSecondaryContainer.classList.remove("hidden");
    filterSecondaryContainer.classList.add("active");

    filterContainer.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("active");
      }, index * 100);
    });
  }

  // fbTitle.classList.add("hidden");

  setTimeout(requestAnimationFrame, 1000);
}
