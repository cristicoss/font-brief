"use strict";

export function _displayPromotedFonts(store) {
  console.log(store.sortedFonts[0]);
}

export function _pausePromoSection() {
  const observedSection = document.querySelector("#highlights");
  const promoRow = document.querySelectorAll(".promo-font_wrapper");
  const promoRow2 = document.querySelectorAll(".promo-font-2_wrapper");
  const sponsorRow = document.querySelectorAll(".sponsor-stripe_text");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          promoRow.forEach((row) => {
            row.classList.remove("paused");
          });
          promoRow2.forEach((row) => {
            row.classList.remove("paused");
          });
          sponsorRow.forEach((row) => {
            row.classList.remove("paused");
          });
          console.log("intersected");
        } else {
          promoRow.forEach((row) => {
            row.classList.add("paused");
          });
          promoRow2.forEach((row) => {
            row.classList.add("paused");
          });
          sponsorRow.forEach((row) => {
            row.classList.add("paused");
          });
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(observedSection);
}
