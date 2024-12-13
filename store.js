"use strict";
import { reactive } from "./petite-vue/dist/petite-vue.es.js";

import showFilters from "./comps/renderIsland.js";

showFilters();

import { fetchAll } from "./fetchAll.js";
const [allFonts, promo1, promo2, new1, new2, headerImg] = await fetchAll();

//Petie Vue
export const store = reactive({
  islandAtTop: false,
  promo1: promo1,
  promo2: promo2,
  new1: new1,
  new2: new2,
  sortedFonts: allFonts,
  headerImg: headerImg,
  fonts: allFonts.slice(0, 5),
  allFonts: allFonts,
  promoFontList: allFonts,
  counter: 0,
  listType: false,
  gridType: true,
  columnType: false,
  promoFontListArray: allFonts.map((font) => font.Slug),
  promoName: "",

  sliderValue: 60,

  fontBGColor: "white-black",
  fontFGColor: "",
  imgColorOver: "normal",

  stylesIndex: 0,
  styles: [
    {
      bgColor: "white",
      infoColor: "text_dark-grey",
    },
    {
      bgColor: "white",
      fgColor: "blue",
      infoColor: "text_dark-grey",
    },
    {
      bgColor: "white",
      fgColor: "red",
      infoColor: "text_dark-grey",
    },
    {
      bgColor: "yellow",
      fontBlend: "multiply",
      infoColor: "text_dark-grey",
    },
    {
      bgColor: "blue",
      fontBlend: "invert",
      infoColor: "text_light-grey",
      newLabel: "white",
      promoLabel: "white",
      saveColor: "white",
    },
    {
      bgColor: "black",
      fontBlend: "invert",
      infoColor: "text_light-grey",
      newLabel: "white",
      promoLabel: "white",
    },
    {
      bgColor: "green",
      fontBlend: "multiply",
      infoColor: "text_dark-grey",
      strokeColor: "light-stroke",
    },
    {
      bgColor: "pink",
      fontBlend: "multiply",
      infoColor: "text_dark-grey",
      strokeColor: "light-stroke",
    },
    {
      bgColor: "orange",
      fontBlend: "multiply",
      infoColor: "text_dark-grey",
      strokeColor: "light-stroke",
    },
  ],

  subscribed: false,

  itemFlex: "grid",
  imgSize: "",

  loadImgs() {
    const loadedImgs = document.querySelectorAll(".font_image-crop");
    loadedImgs.forEach((img) => {
      const imgWidth = img.width;
      const imgHeight = img.height;
      const aspectRatio = imgWidth / imgHeight;

      var maxHeightPercent = 90; // 90% of container height
      var maxWidthPercent = 90; // 90% of container width

      // Calculate the proportional height and width within bounds
      var proportionalHeightPercent, proportionalWidthPercent;

      let parent = img.parentNode;
      while (parent) {
        if (parent.classList && parent.classList.contains("dyn-style-2")) {
          if (imgHeight > imgWidth) {
            proportionalHeightPercent = Math.min(store.sliderValue, 100) / 1.5;
            proportionalWidthPercent = proportionalHeightPercent / aspectRatio;
          } else {
            proportionalWidthPercent = Math.min(store.sliderValue, 100) / 1.5;
            proportionalHeightPercent = proportionalWidthPercent * aspectRatio;
          }
          img.style.width = proportionalWidthPercent + "%";
          img.style.height = proportionalHeightPercent + "%";
          break;
        }

        if (parent.classList && parent.classList.contains("dyn-style-0")) {
          if (imgHeight > imgWidth) {
            proportionalHeightPercent = Math.min(store.sliderValue, 100) / 1.3;
            proportionalWidthPercent = proportionalHeightPercent / aspectRatio;
          } else {
            proportionalWidthPercent = Math.min(store.sliderValue, 100) / 1.3;
            proportionalHeightPercent = proportionalWidthPercent * aspectRatio;
          }
          img.style.width = proportionalWidthPercent + "%";
          img.style.height = proportionalHeightPercent + "%";
          break;
        }

        if (parent.classList && parent.classList.contains("dyn-style-1")) {
          if (imgHeight > imgWidth) {
            proportionalHeightPercent = Math.min(store.sliderValue, 100) / 1.7;
            proportionalWidthPercent = proportionalHeightPercent / aspectRatio;
          } else {
            proportionalWidthPercent = Math.min(store.sliderValue, 100) / 1.7;
            proportionalHeightPercent = proportionalWidthPercent * aspectRatio;
          }
          img.style.width = proportionalWidthPercent + "%";
          img.style.height = proportionalHeightPercent + "%";
          break;
        }

        if (parent.classList && parent.classList.contains("dyn-style-3")) {
          if (imgHeight > imgWidth) {
            img.style.width =
              ((imgWidth / imgHeight) * 20 * store.sliderValue) / 100 + "rem";
            proportionalHeightPercent = proportionalWidthPercent * aspectRatio;
          } else {
            img.style.width =
              ((imgWidth / imgHeight) * 5 * store.sliderValue) / 100 + "rem";
            if (imgWidth / imgHeight < 2.5 && imgWidth / imgHeight > 1) {
              img.style.width =
                ((imgWidth / imgHeight) * 10 * store.sliderValue) / 100 + "rem";
              proportionalHeightPercent =
                proportionalWidthPercent * aspectRatio;
            }
          }

          break;
        }

        parent = parent.parentNode;
      }
    });
  },
});
