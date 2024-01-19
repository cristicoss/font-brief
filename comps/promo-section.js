"use strict";

export default function _pausePromoSection() {
  const observedSection = document.querySelector("#highlights");
  const promoRow = document.querySelectorAll(".promo-font_wrapper");
  const promoRow2 = document.querySelectorAll(".promo-font-2_wrapper");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          promoRow[0].classList.add("a");
          promoRow[1].classList.add("b");
          promoRow[2].classList.add("c");
          promoRow2[0].classList.add("a");
          promoRow2[1].classList.add("b");
          promoRow2[2].classList.add("c");
        } else {
          promoRow[0].classList.remove("a");
          promoRow[1].classList.remove("b");
          promoRow[2].classList.remove("c");
          promoRow2[0].classList.remove("a");
          promoRow2[1].classList.remove("b");
          promoRow2[2].classList.remove("c");
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(observedSection);
}
