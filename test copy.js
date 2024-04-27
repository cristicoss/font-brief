"use strict";
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

const parentRect = parent.getBoundingClientRect();
const childRect = child.getBoundingClientRect();
const targetY = -(parentRect.height * 0.5 - childRect.height * 0.5); // Move the child up 50% of the parent's height
child.style.transform = `translateY(${-targetY}px)`;

function fadeIsland() {
  child.classList.add("active");
}

setTimeout(fadeIsland, 1000);

// Listen to intro section scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Element is in view, get its visible height
        const visibleHeight = entry.boundingClientRect.height;
        child.classList.remove("grow");
        child.classList.add("grow");
      } else {
        child.classList.remove("grow");
      }
    });
  },
  { threshold: 0.1 } // Trigger when 10% of the element is visible
);

function isSectionInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return rect.top >= 0 && rect.bottom <= windowHeight + scrollTop;
}

// Observe the target element
const introSection = document.querySelector(".intro-section");
const fontSection = document.querySelector(".section-observed");
observer.observe(fontSection);

function moveChildUp() {
  const parentRect = parent.getBoundingClientRect();
  // const childRect = child.getBoundingClientRect();
  const targetY = -(parentRect.height * 0.5 - childRect.height * 0.5); // Move the child up 50% of the parent's height
  child.style.transform = "translateY(0)";
  child.classList.remove("grow");
  child.classList.add("full-menu");
}

// Function to move the child element back to the middle
function moveChildToMiddle() {
  const parentRect = parent.getBoundingClientRect();
  const targetY = -(parentRect.height * 0.5 - childRect.height * 0.5); // Move the child up 50% of the parent's height
  child.style.transform = `translateY(${-targetY}px)`;
  child.classList.remove("full-menu");
}

// Add click event listener to the child element
child.addEventListener("click", () => {
  console.log(!isSectionInViewport(fontSection));
  if (child.style.transform === "translateY(0px)") {
    moveChildToMiddle();
    if (!isSectionInViewport(fontSection)) {
      child.classList.remove("grow");
    } else {
      child.classList.remove("grow");
      child.classList.add("grow");
    }
  } else {
    moveChildUp();
  }
});
