import { supabase } from "../apiFonts.js";
import { store2 } from "../storeJurizare.js";
import changeAnyText from "./changeAnyText.js";
import _uploadAnyImg from "./changeAnyImg.js";
import { moreInfoBtn } from "../globalVars.js";
import { resetSlider } from "../comps/handleFilters.js";
// import { _getRealtimeChanges } from "./getRealTimeChanges.js";
const setFiltersBtn = document.querySelector(".set-filters_btn");

const _writeDescription = function () {
  const description = document.getElementById("description");
  console.log(store2.currFont.Description?.length);
  if (store2.currFont.Description?.length > 170) {
    description.innerHTML = store2.currFont.Description?.slice(0, 170) + "...";
    moreInfoBtn.classList.remove("hidden");
  }
  if (store2.currFont.Description?.length <= 170) {
    description.innerHTML = store2.currFont.Description;
  }
};

let currFontName = store2.currFont.Slug;
const handleChangeText = function (table, column, field, event, currFontName) {
  if (
    event.type === "blur" ||
    (event.type === "keydown" && event.key === "Enter")
  ) {
    event.preventDefault();
    const content = event.target.innerText.trim();

    changeAnyText(table, column, content, currFontName);
  }
};

const openPopUpJurizare = function (imgToChange, index, imgStorageToChange) {
  console.log(index);
  const popUp = document.getElementById(`form-uploadImg_container`);
  if (imgStorageToChange === "fonts-details") {
    store2.imgToChange = `detail${+index + 1}`;
  }
  if (imgStorageToChange === "fonts") {
    if (index === 0) store2.imgToChange = "font_name";
    if (index === 1) store2.imgToChange = "Pangram";
    if (index === 2) store2.imgToChange = "Paragraph";
  }
  store2.imgIndexToChange = index;
  store2.imgStorageToChange = imgStorageToChange;
  if (popUp.classList.contains("hidden")) {
    popUp.classList.remove("hidden");
    return;
  }

  popUp.classList.add("hidden");
};

const handleChangeImage = function (imgToChange, index, imgStorageToChange) {
  _uploadAnyImg(
    store2.imgToChange,
    currFontName,
    store2.imgStorageToChange,
    store2
  );
};

const handleFullScreen = function (value) {
  if (value) {
    document
      .querySelector(".controls_wrapper")
      .classList.remove("opacity-zero");
    document.querySelector(".controls_wrapper").classList.add("opacity-zero");

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
};

const handleFontSize = function (e) {
  const fontImg = document.querySelectorAll(".font-title_image");

  fontImg.forEach((item) => {
    item.style.width = store2.sliderValue + "REM";
    console.log(store2.sliderValue);
  });
};

const handleSlider = function (index, btn, direction, currSlide, container) {
  const sliderBtn = document.querySelectorAll(`.${btn}`);
  sliderBtn.forEach((item) => item.classList.remove("blue"));
  const sliderContainer = document.querySelector(`.${container}`);

  const translateX = function (amount) {
    if (container === "font-detail_wrapper") {
      store2.currSmallSlide = currSlide;
      sliderContainer.style.transform = `translateX(-${amount * 100}%)`;
      sliderBtn[currSlide].classList.add("blue");
    }
    if (container === "font-slide_container") {
      store2.currBigSlide = currSlide;
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
};

const _getRealtimeChanges = async function () {
  console.log("Realtime changes");
  // Create a function to handle inserts
  const handleDetailsChange = (payload, type) => {
    console.log("Change received!", payload.new, type);
    if (type === "fonts-details") {
      if (payload.new.Slug === currFontName) {
        store2.fontImgDetails = [
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
        store2.fontImgs = [
          [payload.new?.font_name, , "font_name"],
          [payload.new?.Pangram, , "Pangram"],
          [payload.new?.Paragraph, , "Paragraph"],
        ];
      }
    }
  };

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
};

const setFilters = async function () {
  const urlParams = new URLSearchParams(window.location.search);
  const nameFont = urlParams.get("name");

  let filters = [
    { name: "name", value: urlParams.get("name") },
    { name: "expr", value: urlParams.get("expr") },
    { name: "elgnt", value: urlParams.get("elgnt") },
    { name: "frndl", value: urlParams.get("frndl") },
    { name: "orgnc", value: urlParams.get("orgnc") },
    { name: "prgrssv", value: urlParams.get("prgrssv") },
    { name: "drng", value: urlParams.get("drng") },
    { name: "dscrt", value: urlParams.get("dscrt") },
    { name: "wrm", value: urlParams.get("wrm") },
    { name: "sans", value: urlParams.get("sans") },
    { name: "wrkhrs", value: urlParams.get("wrkhrs") },
    { name: "free", value: urlParams.get("free") },
  ];

  // Insert the name, foundry, and image URL into the Supabase table
  const { data: insertData, error: insertError } = await supabase
    .from(`fonts`)
    .update({
      expr: filters[1].value,
      elgnt: filters[2].value,
      frndl: filters[3].value,
      orgnc: filters[4].value,
      prgrssv: filters[5].value,
      drng: filters[6].value,
      dscrt: filters[7].value,
      wrm: filters[8].value,
      sans: filters[9].value,
      workhorse: filters[10].value,
      free: filters[11].value,
    })
    .eq("Slug", currFontName);

  if (insertError) {
    console.error("Error inserting data:", insertError);
  } else {
    console.log("Data inserted successfully:", insertData);
    resetSlider(currFontName);
    setFiltersBtn.classList.add("hidden");
  }
};

export {
  _writeDescription,
  handleFullScreen,
  handleFontSize,
  _getRealtimeChanges,
  handleSlider,
  handleChangeText,
  openPopUpJurizare,
  handleChangeImage,
  setFilters,
};
