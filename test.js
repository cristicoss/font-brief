"use strict";
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

const parentRect = parent.getBoundingClientRect();
const childRect = child.getBoundingClientRect();
const targetY = -(parentRect.height * 0.5 - childRect.height * 0.5); // Move the child up 50% of the parent's height
// child.style.transform = `translateY(${-targetY}px)`;
child.classList.add("grow");

function fadeIsland() {
  child.classList.add("active");
}

setTimeout(fadeIsland, 1000);

// Listen to intro section scroll

// Observe the target element
const introSection = document.querySelector(".intro-section");
const fontSection = document.querySelector(".section-observed");

function isCloseToTop(element) {
  const rect = element.getBoundingClientRect();
  return rect.top;
}

function moveChildUp() {
  child.style.transform = "translateY(0)";
}

// Function to move the child element back to the middle
function moveChildToMiddle() {
  const parentRect = parent.getBoundingClientRect();
  const targetY = -(parentRect.height * 0.5 - childRect.height * 0.5);
  child.style.transform = `translateY(${-targetY}px)`;
}

// Add click event listener to the child element
child.addEventListener("click", () => {
  if (!child.classList.contains("full-menu")) {
    child.classList.add("full-menu");
    moveChildUp();
  } else {
    const parentRect = parent.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();
    child.classList.remove("full-menu");
    if (
      parentRect.height >
      10 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    )
      moveChildToMiddle();
  }
});
let isFixed = false;
window.addEventListener("scroll", function () {
  const parentRect = parent.getBoundingClientRect();
  if (parentRect.height < window.innerHeight * 0.5)
    child.classList.remove("grow");
  else child.classList.add("grow");
});
