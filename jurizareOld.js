"use strict";
import {
  createApp,
  reactive,
  nextTick,
} from "./petite-vue/dist/petite-vue.es.js";

import {
  islandContainer,
  menuActionContainer,
  menuBig,
  menuSmall,
} from "./globalVars.js";

import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js";

import _uploadAnyImg from "./jurizare/changeAnyImg.js";
import changeAnyText from "./jurizare/changeAnyText.js";
import _updateUrl from "./comps/updateUrl.js";
import _readUrl from "./comps/readUrl.js";

const urlParams = new URLSearchParams(window.location.search);

const currFontName = urlParams.get("name").toLowerCase();
const moreInfoBtn = document.getElementById("more-info");

const url = window.location.href;
const lastSegment = currFontName ? currFontName : url.split("/").pop();

console.log(url.split("/").pop(), currFontName);

const supabaseUrl = "https://yununbjokononoevrwmu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1bnVuYmpva29ub25vZXZyd211Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM0NDU3ODAsImV4cCI6MTk5OTAyMTc4MH0.FYWysDGuFY0-dehJD3aBYEbPLjWOcfzTC3yz0SrW-rE";
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchedFont() {
  try {
    const { data, error } = await supabase
      .from("fonts")
      .select("*")
      .eq("Slug", currFontName);

    if (error) throw error;
    console.log(currFontName);
    return data.length ? data[0] : null;
  } catch (error) {
    console.error("Failed to fetch font:", error);
    return null; // Return an empty array or suitable default in case of failure Name
  }
}

async function fetchedImgDetails() {
  try {
    const { data, error } = await supabase
      .from("fonts-details")
      .select("*")
      .eq("Slug", currFontName);

    if (error) throw error;

    return data.length ? data[0] : null;
  } catch (error) {
    console.error("Failed to fetch font:", error);
    return null; // Return an empty array or suitable default in case of failure
  }
}

export class App2 {
  constructor(store) {
    this.store = store;
    this._readUrl = _readUrl;
    this._writeDescription();
    this._getRealtimeChanges();
    this._readUrl();
  }

  _writeDescription() {
    const description = document.getElementById("description");
    console.log(this.store.currFont.Description?.length);
    if (this.store.currFont.Description?.length > 170) {
      description.innerHTML =
        this.store.currFont.Description?.slice(0, 170) + "...";
      moreInfoBtn.classList.remove("hidden");
    }
    if (this.store.currFont.Description?.length <= 170) {
      description.innerHTML = this.store.currFont.Description;
    }
  }

  _getRealtimeChanges() {
    console.log("Realtime changes");
    // Create a function to handle inserts
    const handleDetailsChange = (payload, type) => {
      console.log("Change received!", payload.new, type);
      if (type === "fonts-details") {
        if (payload.new.Slug === currFontName) {
          this.store.fontImgDetails = [
            [payload.new?.detail1, , "detail1"],
            [payload.new?.detail2, , "detail2"],
            [payload.new?.detail3, , "detail3"],
            [payload.new?.detail4, , "detail4"],
            [payload.new?.detail5, , "detail5"],
            [payload.new?.detail6, , "detail6"],
          ];
        }
      }

      if (type === "fonts") {
        if (payload.new.Slug === currFontName) {
          this.store.fontImgs = [
            [payload.new?.font_name, , "font_name"],
            [payload.new?.Pangram, , "Pangram"],
            [payload.new?.Paragraph, , "Paragraph"],
          ];
        }
      }
    };
    console.log(this.store.fontImgDetails, this.store.fontImgs);

    // Listen to inserts from detail images
    supabase
      .channel("fonts-details")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "fonts-details" },
        handleDetailsChange
      )
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "fonts-details" },
        handleDetailsChange
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "fonts-details" },
        (payload) => handleDetailsChange(payload, "fonts-details")
      )
      .subscribe();

    // Listen to inserts from Font images
    supabase
      .channel("fonts")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "fonts" },
        handleDetailsChange
      )
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "fonts" },
        handleDetailsChange
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "fonts" },
        (payload) => handleDetailsChange(payload, "fonts")
      )
      .subscribe();
  }
}

async function init() {
  const fontData = await fetchedFont();
  const fontImgDetails = await fetchedImgDetails();

  console.log(fontData);

  if (!fontData) {
    console.log("No fonts available");
    //aici se opreste. de asta nu se incarca nimic.
    return;
  }

  //Petie Vue fonts
  const store = reactive({
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
      store.sliderValue = 54;
    },

    handleFontSize(event) {
      if (event) store.sliderValue = event.target.value;
    },

    jurizarePage: true,
  });

  createApp({
    store,

    handleClick(type, nr) {
      console.log(type, nr);
      const urlParams = new URLSearchParams(window.location.search);
      const urlType = urlParams.get(type);

      if (type === "wrkhrs" || type === "free") {
        console.log(urlType, type, nr);
        if (urlType === nr) {
          _updateUrl(type, "");
          return;
        }
        _updateUrl(type, nr);
        return;
      }

      if (type === "sans") {
        console.log(urlType, type, nr);
        if (urlType === nr) {
          _updateUrl(type, "");
          return;
        }
        _updateUrl(type, nr);
        return;
      }

      console.log("stop");
      if (store.startClick) {
        store.type = type;
        store.startClick = false;
        store.rangeStart = +nr;
        store.rangeEnd = +nr;
        store.click = 1;
        _updateUrl(type, store.rangeStart, store.rangeEnd, store.startClick);
        return;
      }

      if (store.type === type) {
        store.click++;
        if (store.click === 1) {
          store.rangeStart = +nr;
          store.rangeEnd = +nr;
        }
        if (store.click === 2) {
          store.rangeEnd = +nr;
        }
        if (store.click === 3) {
          store.rangeStart = "";
          store.rangeEnd = "";
          store.click = 0;
        }
        console.log("same type", "clicks:", store.click);
      }

      if (store.type !== type) {
        store.rangeStart = +nr;
        store.rangeEnd = +nr;
        store.type = type;
        store.click = 1;
        console.log("different type");
      }

      store.startClick = false;
      _updateUrl(
        type,
        store.rangeStart,
        store.rangeEnd,
        store.startClick,
        store.click
      );
    },

    handleSubfilters(subfilter) {
      this.store.allFiltersFromThisCat = subfilter;
    },

    handleMouseOver(event, filter, pos) {
      console.log(filter, pos);
      const blueBoxes = document.querySelectorAll(
        `#${filter} .filter_box.blue`
      );
      const boxIndex = document.querySelectorAll(`#${filter} .filter_box`);
      const currBox = event.target;
      event.target.classList.remove("hover-blue");
      event.target.classList.add("hover-blue");

      if (blueBoxes.length !== 1 || store.type !== filter) return;

      let positions = [+pos, +blueBoxes[0].dataset.pos];

      positions.sort((a, b) => a - b);
      console.log(positions);

      boxIndex.forEach((box) => {
        if (
          +box.dataset.pos >= positions[0] &&
          +box.dataset.pos <= positions[1]
        ) {
          box.classList.remove("hover-blue");
          box.classList.add("hover-blue");
        }
        if (
          +box.dataset.pos < positions[0] &&
          +box.dataset.pos > positions[1]
        ) {
          box.classList.remove("hover-blue");
        }
      });

      /*
      if (
        this.store.divIndex ===
          parseInt(event.target.getAttribute("data-atr")) &&
        this.store.clicks[parseInt(event.target.getAttribute("data-atr"))] === 1
      ) {
        const boxIndex = parseInt(event.target.getAttribute("data-pos"));
        if (boxIndex < this.store.divPos) {
          for (let i = boxIndex - 1; i <= this.store.divPos - 1; i++) {
            this.store.allFiltersFromThisCat[i].classList.remove("blue");
            this.store.allFiltersFromThisCat[i].classList.add("blue");
          }

          for (let i = 0; i <= boxIndex - 2; i++) {
            this.store.allFiltersFromThisCat[i].classList.remove("blue");
          }
        }

        if (boxIndex > this.store.divPos) {
          for (let i = this.store.divPos - 1; i <= boxIndex - 1; i++) {
            // console.log(this.store.allFiltersFromThisCat[i]);
            this.store.allFiltersFromThisCat[i].classList.remove("blue");
            this.store.allFiltersFromThisCat[i].classList.add("blue");
          }

          for (let i = boxIndex; i <= 4; i++) {
            this.store.allFiltersFromThisCat[i].classList.remove("blue");
          }
        }
      }
      if (
        this.store.clicks[parseInt(event.target.getAttribute("data-atr"))] !== 1
      )
        event.target.classList.add("hover-blue");
        */
    },

    handleMouseOut(event, filter) {
      const boxIndex = document.querySelectorAll(`#${filter} .filter_box`);
      boxIndex.forEach((box) => {
        box.classList.remove("hover-blue");
      });
      /*
      if (
        this.store.divIndex ===
          parseInt(event.target.getAttribute("data-atr")) &&
        this.store.clicks[parseInt(event.target.getAttribute("data-atr"))] === 1
      ) {
        const boxIndex = parseInt(event.target.getAttribute("data-pos"));
        // console.log(this.store.divPos, boxIndex);
        for (let i = 0; i < this.store.divPos - 1; i++) {
          this.store.allFiltersFromThisCat[i].classList.remove("blue");
        }
        for (let i = this.store.divPos; i < 5; i++) {
          this.store.allFiltersFromThisCat[i].classList.remove("blue");
        }
      }
      event.target.classList.remove("hover-blue");
      */
    },

    openMenu() {
      islandContainer.classList.toggle("menu-state");
      menuActionContainer.classList.toggle("hidden");
      if (menuBig.classList.contains("hidden")) {
        setTimeout(() => {
          menuBig.classList.toggle("hidden");
          menuSmall.classList.toggle("hidden");
        }, 300);
      } else {
        menuBig.classList.toggle("hidden");
        menuSmall.classList.toggle("hidden");
      }
    },

    handleMenuItemsOver(event) {
      console.log(event.currentTarget.classList[1]);
      document
        .querySelectorAll(`.${event.currentTarget.classList[0]}`)
        .forEach((item) => {
          item.classList.remove("text_black");
          item.classList.add("text_dark-grey");
        });
      event.currentTarget.classList.add("text_black");
    },

    handleMenuItemsOut(event) {
      document
        .querySelectorAll(`.${event.currentTarget.classList[0]}`)
        .forEach((item) => {
          item.classList.remove("text_dark-grey");
        });
      event.currentTarget.classList.remove("text_black");
    },

    handleSlider(index, btn, direction, currSlide, container) {
      const sliderBtn = document.querySelectorAll(`.${btn}`);
      sliderBtn.forEach((item) => item.classList.remove("blue"));
      const sliderContainer = document.querySelector(`.${container}`);

      const translateX = function (amount) {
        if (container === "font-detail_wrapper") {
          store.currSmallSlide = currSlide;
          sliderContainer.style.transform = `translateX(-${amount * 100}%)`;
          sliderBtn[currSlide].classList.add("blue");
        }
        if (container === "font-slide_container") {
          store.currBigSlide = currSlide;
          sliderContainer.style.transform = `translateX(-${amount * 100}VW)`;
          sliderBtn[currSlide].classList.add("blue");
        }
      };

      if (index || index === 0) {
        currSlide = index;
        translateX(index);
        return;
      }

      if (direction === "right") {
        currSlide++;
        if (currSlide > sliderBtn.length - 1) currSlide = 0;
        translateX(currSlide);
      }

      if (direction === "left") {
        currSlide--;
        if (currSlide < 0) currSlide = sliderBtn.length - 1;
        translateX(currSlide);
      }
    },

    handleFullScreen(value) {
      if (value) {
        document
          .querySelector(".controls_wrapper")
          .classList.remove("opacity-zero");
        document
          .querySelector(".controls_wrapper")
          .classList.add("opacity-zero");

        document
          .querySelector(".font-info_container")
          .classList.remove("opacity-zero");
        document
          .querySelector(".font-info_container")
          .classList.add("opacity-zero");

        document
          .querySelector(".island_pre-container")
          .classList.remove("opacity-zero");
        document
          .querySelector(".island_pre-container")
          .classList.add("opacity-zero");
      } else {
        document
          .querySelector(".controls_wrapper")
          .classList.remove("opacity-zero");

        document
          .querySelector(".font-info_container")
          .classList.remove("opacity-zero");

        document
          .querySelector(".island_pre-container")
          .classList.remove("opacity-zero");
      }
    },

    handleFontSize(e) {
      const fontImg = document.querySelectorAll(".font-title_image");

      fontImg.forEach((item) => {
        item.style.width = store.sliderValue + "REM";
        console.log(store.sliderValue);
      });
    },

    openPopUp(imgToChange, index, imgStorageToChange) {
      console.log(index);
      const popUp = document.getElementById(`form-uploadImg_container`);
      if (imgStorageToChange === "fonts-details") {
        store.imgToChange = `detail${+index + 1}`;
      }
      if (imgStorageToChange === "fonts") {
        if (index === 0) store.imgToChange = "font_name";
        if (index === 1) store.imgToChange = "Pangram";
        if (index === 2) store.imgToChange = "Paragraph";
      }
      store.imgIndexToChange = index;
      store.imgStorageToChange = imgStorageToChange;
      if (popUp.classList.contains("hidden")) {
        popUp.classList.remove("hidden");
        return;
      }

      popUp.classList.add("hidden");
    },

    handleChangeImage(imgToChange, index, imgStorageToChange) {
      console.log(
        imgToChange,
        index,
        imgStorageToChange,
        store.fontImgs,
        store.fontImgDetails
      );
      // event.preventDefault();
      _uploadAnyImg(
        store.imgToChange,
        currFontName,
        store.imgStorageToChange,
        store
      );
    },

    handleChangeText(table, column, field, event) {
      if (
        event.type === "blur" ||
        (event.type === "keydown" && event.key === "Enter")
      ) {
        event.preventDefault();
        const content = event.target.innerText.trim();
        console.log(table, column, content, currFontName);
        console.log(`Field: ${field}, Content: ${content}`);
        changeAnyText(table, column, content, currFontName);
      }
    },

    handleMoreInfo(event) {
      store.countMoreInfo++;
      if (store.countMoreInfo === 1) {
        description.innerHTML = store.currFont.Description;
        event.target.innerHTML = "Less";
      }
      if (store.countMoreInfo === 2) {
        store.countMoreInfo = 0;
        description.innerHTML =
          store.currFont.Description?.slice(0, 170) + "...";
        event.target.innerHTML = "More";
      }
    },

    updateList: new App2(store),
  }).mount("#app");

  document
    .querySelectorAll(".unloaded-content")
    .forEach((item) => item.classList.add("hidden"));

  document
    .querySelectorAll(".loaded-content")
    .forEach((item) => item.classList.remove("hidden"));

  document.querySelectorAll(".slider_btn")[0].classList.add("blue");
  document.querySelectorAll(".slider-details_btn")[0].classList.add("blue");
}

init();
