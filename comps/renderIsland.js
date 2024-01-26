const fbTitle = document.querySelector(".fb_name-big");
const fbTitleLogo = document.querySelector(".fb_name-logo");
const filterAttContainer = document.querySelector(
  ".filters_attributes-container"
);
const filterSecondaryContainer = document.querySelector(
  ".filters_secondary-container"
);
const filterContainer = document.querySelectorAll(".filter_container");
console.log(filterContainer);

export default function showFilters() {
  setTimeout(() => {
    fbTitleLogo.classList.add("active");
    fbTitle.classList.add("active");
  }, 2000);

  setTimeout(() => {
    fbTitle.classList.add("hidden");
    filterAttContainer.classList.remove("hidden");
    filterAttContainer.classList.add("active"); // Delay each item's appearance by 100ms
    filterSecondaryContainer.classList.remove("hidden");

    filterContainer.forEach((item) => {
      const atr = item.dataset.fadeNr;
      setTimeout(() => {
        item.classList.add("active");
        console.log(atr);
      }, +atr * 100);
    });
  }, 2400);

  setTimeout(() => {
    filterSecondaryContainer.classList.add("active");
  }, 3000);
}
