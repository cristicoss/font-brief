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

const urlParams = new URLSearchParams(window.location.search);

const currFontName = urlParams.get("name");
const moreInfoBtn = document.getElementById("more-info");
const fontInfoContainer = document.querySelector(".font-info_cell-info");

const url = window.location.href;
const lastSegment = currFontName ? currFontName : url.split("/").pop();

console.log(lastSegment, currFontName);

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
    console.log(data);

    return data.length ? data[0] : null;
  } catch (error) {
    console.error("Failed to fetch font:", error);
    return null; // Return an empty array or suitable default in case of failure
  }
}

async function fetchedImgDetails() {
  try {
    const { data, error } = await supabase
      .from("fonts-details")
      .select("*")
      .eq("name", currFontName);

    if (error) throw error;

    return data.length ? data[0] : null;
  } catch (error) {
    console.error("Failed to fetch font:", error);
    return null; // Return an empty array or suitable default in case of failure
  }
}

export class App {
  constructor(store) {
    this.store = store;
    this._writeDescription();
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
}

async function init() {
  const fontData = await fetchedFont();
  const fontImgDetails = await fetchedImgDetails();

  console.log(fontData);

  if (!fontData) {
    console.log("No fonts available");
    return;
  }

  //Petie Vue fonts
  const store = reactive({
    currFont: fontData,
    fontImgs: [fontData.font_name, fontData.Pangram, fontData.Paragraph],
    fontImgDetails: [
      fontImgDetails?.detail1,
      fontImgDetails?.detail2,
      fontImgDetails?.detail3,
      fontImgDetails?.detail4,
      fontImgDetails?.detail5,
      fontImgDetails?.detail6,
    ],

    currBigSlide: 0,
    currSmallSlide: 0,
    sliderValue: 54,
    countMoreInfo: 0,

    resetSlider(e) {
      store.sliderValue = 54;
    },

    handleFontSize(event) {
      if (event) store.sliderValue = event.target.value;
    },
  });

  createApp({
    store,

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
        // console.log(store.sliderValue);
      });
    },

    addSlide(event) {
      console.log(event.target.getAttribute("src"));
      if (store.fontImgs.includes(event.target.getAttribute("src"))) return;
      store.fontImgs.unshift(event.target.getAttribute("src"));

      this.handleSlider(
        0,
        "slider_btn",
        null,
        store.currBigSlide,
        "font-slide_container"
      );
    },

    handleMoreInfo(event) {
      store.countMoreInfo++;
      if (store.countMoreInfo === 1) {
        description.innerHTML = store.currFont.Description;
        event.target.innerHTML = "Less";
        fontInfoContainer.classList.add("height-auto");
      }
      if (store.countMoreInfo === 2) {
        store.countMoreInfo = 0;
        description.innerHTML =
          store.currFont.Description?.slice(0, 170) + "...";
        event.target.innerHTML = "More";
        fontInfoContainer.classList.remove("height-auto");
      }
    },

    updateList: new App(store),
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
