import {
  burgerMenu,
  filtersContainer,
  islandContainer,
  islandParentContainer,
  fbLogo1,
  fbLogo2,
  menuActionContainer,
  fbNameIsland,
  titlesWrapper,
  menuBig,
  menuSmall,
} from "../globalVars.js";

import { store } from "../store.js";
import changeAnyText from "../jurizare/changeAnyText.js";

const openMenu = function () {
  islandContainer.classList.toggle("menu-state");
  islandParentContainer.classList.toggle("menu-state");
  fbLogo1.classList.toggle("hidden");
  fbLogo2.classList.toggle("hidden");
  menuActionContainer.classList.toggle("hidden");
  fbNameIsland.classList.toggle("hidden");
  titlesWrapper.classList.toggle(".hidden");
  filtersContainer.classList.toggle("hidden");
  if (menuBig.classList.contains("hidden")) {
    setTimeout(() => {
      menuBig.classList.toggle("hidden");
      menuSmall.classList.toggle("hidden");
    }, 300);
  } else {
    menuBig.classList.toggle("hidden");
    menuSmall.classList.toggle("hidden");
  }
};

const handleMenuItemsOver = function (event) {
  document
    .querySelectorAll(`.${event.currentTarget.classList[0]}`)
    .forEach((item) => {
      item.classList.remove("text_black");
      item.classList.add("text_dark-grey");
    });
  event.currentTarget.classList.add("text_black");
};

const handleMenuItemsOut = function (event) {
  document
    .querySelectorAll(`.${event.currentTarget.classList[0]}`)
    .forEach((item) => {
      item.classList.remove("text_dark-grey");
    });
  event.currentTarget.classList.remove("text_black");
};

const openPopUp = function (id, promoName = "") {
  if (promoName !== "") {
    store.promoName = promoName;
  }

  const popUp = document.querySelector(`.${id}`);
  if (popUp.classList.contains("hidden")) {
    popUp.classList.remove("hidden");
    // document.body.classList.add("freeze");
    return;
  }

  popUp.classList.add("hidden");
  // document.body.classList.remove("freeze");
};

const handleColorChange = function (event) {
  if (!event) return store.styles[0];

  store.stylesIndex++;
  if (store.stylesIndex >= store.styles.length) store.stylesIndex = 0;
  return store.stylesIndex;
};

const handleFontSize = function (event) {
  if (event) store.sliderValue = event.target.value / 100;
};

const handleNewsletter = function () {
  document.querySelector(".newsletter_wrapper-fixed").classList.add("active");
  this.store.subscribed = true;
};

const handleMoreInfo = function (event, store) {
  store.countMoreInfo++;
  if (store.countMoreInfo === 1) {
    description.innerHTML = store.currFont.Description;
    event.target.innerHTML = "Less";
  }
  if (store.countMoreInfo === 2) {
    store.countMoreInfo = 0;
    description.innerHTML = store.currFont.Description?.slice(0, 170) + "...";
    event.target.innerHTML = "More";
  }
};

const handleSetFontSize = function (e) {
  const imageContainer = e.target.closest(".font_image-wrapper");

  const draggableImage = imageContainer.querySelector(".font_image-crop");
  const currFontName = draggableImage.getAttribute("alt").toLowerCase();

  let isResizing = false;
  let initialContainerWidth = 0;
  let originalWidth, originalHeight, originalX, originalY;

  isResizing = true;
  initialContainerWidth = imageContainer.offsetWidth; // Store initial width
  console.log(initialContainerWidth, imageContainer.offsetWidth);
  originalWidth = draggableImage.offsetWidth;
  originalHeight = draggableImage.offsetHeight;
  originalX = e.clientX;
  originalY = e.clientY;
  e.preventDefault();

  document.addEventListener("mousemove", (e) => {
    if (!isResizing) return;

    const deltaX = e.clientX - originalX;
    const newWidth = originalWidth + deltaX;

    // Update image container width while keeping aspect ratio
    const aspectRatio =
      draggableImage.naturalHeight / draggableImage.naturalWidth;
    draggableImage.style.width = `${newWidth}px`;
    draggableImage.style.height = `${newWidth * aspectRatio}px`;
  });

  document.addEventListener("mouseup", () => {
    if (isResizing) {
      isResizing = false;

      // Calculate and store width as percentage of the parent container width
      const widthPercentage = (
        (draggableImage.offsetWidth / initialContainerWidth) *
        100
      ).toFixed(2);
      console.log(`Image Width Percentage: ${widthPercentage}%`);

      // Optional: Store in local storage or use as needed
      localStorage.setItem("imageWidthPercentage", widthPercentage);

      changeAnyText("fonts", "imgsize", widthPercentage, currFontName);
    }
  });
};

const showHandles = function (e) {
  e.preventDefault();
  const handleContainer = e.target.querySelector(".resize-handles_container");
  handleContainer.classList.toggle("hidden");
};

export {
  openMenu,
  handleMenuItemsOver,
  handleMenuItemsOut,
  openPopUp,
  handleColorChange,
  handleFontSize,
  handleNewsletter,
  handleMoreInfo,
  handleSetFontSize,
  showHandles,
};
