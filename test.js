"use strict";

window.onscroll = function () {
  myFunction();
};

const header = document.querySelector(".island-test");
const introSection = document.querySelector(".intro-section");
const headerRect = header.getBoundingClientRect();
const introSectionRect = introSection.getBoundingClientRect();
let sticky = header.offsetTop;
let originalPosition;

function myFunction() {
  if (window.pageYOffset > sticky || header.classList.contains("menu-full")) {
    header.style.position = "fixed";
  } else if (!header.classList.contains("menu-full")) {
    header.style.position = "sticky";
  }
}

header.addEventListener("click", function () {
  console.log(sticky);
  if (header.classList.contains("menu-full")) {
    header.classList.remove("menu-full");
    if (window.pageYOffset < sticky) {
      header.style.position = "sticky";
      // header.style.top = "0";
    }
  } else {
    header.classList.add("menu-full");
  }
});
