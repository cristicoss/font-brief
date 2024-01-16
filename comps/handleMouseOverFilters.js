//// NOT WORKING THE WAY IT SHOULD ////
import { checkboxesContainer } from "../globalVars.js";

export default function _handleMouseover() {
  checkboxesContainer.forEach((container) => {
    container.addEventListener("mouseover", (e) => {
      const boxes = container.querySelectorAll(".filter_box");
      const uncheck = container.querySelector(".uncheck");
      let arrBoxes = [...boxes];

      boxes.forEach((box) => {
        box.addEventListener("mouseover", (e) => {
          if (uncheck.classList.contains("hidden")) {
            for (let i = 0; i <= 4; i++) {
              if (
                arrBoxes[i].classList.contains("blue") &&
                i < arrBoxes.indexOf(box) - 1
              ) {
                for (let a = i + 1; a < arrBoxes.indexOf(box); a++) {
                  arrBoxes[a].classList.add("hover-blue");
                }
                for (let b = arrBoxes.indexOf(box); b < 4; b++) {
                  arrBoxes[b].classList.remove("hover-blue");
                }
              }
              if (i === arrBoxes.indexOf(box))
                arrBoxes[i].classList.remove("hover-blue");

              if (
                arrBoxes[i].classList.contains("blue") &&
                arrBoxes.indexOf(box) < i
              ) {
                for (let a = arrBoxes.indexOf(box); a < i; a++) {
                  arrBoxes[a].classList.add("hover-blue");
                }
                for (let b = 0; b < arrBoxes.indexOf(box) + 1; b++) {
                  arrBoxes[b].classList.remove("hover-blue");
                }
              }
            }
          }
        });
      });
    });
  });
}
