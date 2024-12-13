"use strict";
import { reactive } from "./petite-vue/dist/petite-vue.es.js";

import { fetchedFont, fetchedImgDetails } from "./fetchAll.js";

// import { loadedContent } from "./globalVars.js";

const fontData = await fetchedFont();
const fontImgDetails = await fetchedImgDetails();

//Petie Vue
export const store2 = reactive({
  currFont: fontData,
  fontImgs: [
    [fontData?.font_name, "font_name"],
    [fontData?.Pangram, "Pangram"],
    [fontData?.Paragraph, "Paragraph"],
  ],
  fontImgDetails: [
    [fontImgDetails?.detail1, "detail1"],
    [fontImgDetails?.detail2, "detail2"],
    [fontImgDetails?.detail3, "detail3"],
    [fontImgDetails?.detail4, "detail4"],
    [fontImgDetails?.detail5, "detail5"],
    [fontImgDetails?.detail6, "detail6"],
  ],

  fontDescription: fontData.Description?.slice(0, 170) + "...",

  currBigSlide: 0,
  currSmallSlide: 0,
  sliderValue: 54,
  imgToChange: "",
  imgIndexToChange: 0,
  imgStorageToChange: "",
  countMoreInfo: 0,
  subfilterClicks: [0, 0, 0, 0],

  clicks: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  divIndex: 0,
  allFiltersFromThisCat: [],
  divPos: 0,
  rangeStart: 0,
  rangeEnd: 0,
  startClick: true,
  click: 0,
  type: "",

  resetSlider(e) {
    store2.sliderValue = 54;
  },

  handleFontSize(event) {
    if (event) store2.sliderValue = event.target.value;
  },

  jurizarePage: true,
});

// if (fontData) {
//   loadedContent.forEach((el) => {
//     if (!el.textContent.includes("{{")) el.classList.remove("hidden");
//   });
// }
