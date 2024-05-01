"use strict";

window.onscroll = function () {
  myFunction();
};

const island = document.querySelector(".test2-island");
const islandParent = document.querySelector(".test2-parent");
const clickTest = document.querySelector(".clicking");

function myFunction() {
  if (window.pageYOffset > 100) {
    island.classList.remove("test2-grow");
  } else {
    island.classList.add("test2-grow");
  }
}

island.addEventListener("click", function () {
  island.classList.toggle("test2-full-menu");
  islandParent.classList.toggle("test2-menu-mode");
});

clickTest.addEventListener("click", function () {
  console.log("click behind parent");
});
