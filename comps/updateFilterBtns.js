import { allCheckboxes, allUncheck } from "../globalVars.js";

export default function _updateFilters(array) {
  allCheckboxes.forEach(function (box) {
    if (!array) {
      box.classList.remove("blue");
      allUncheck.forEach(function (uncheck) {
        uncheck.classList.remove("hidden");
        uncheck.classList.add("hidden");
      });
      return;
    }

    box.classList.remove("blue");
    if (array.includes(box.dataset.atr)) {
      box.classList.add("blue");
    }
  });
}
