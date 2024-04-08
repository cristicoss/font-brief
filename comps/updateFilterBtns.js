import { allCheckboxes, allUncheck } from "../globalVars.js";

export default function _updateFilters(params) {
  let paramString = "";

  params.forEach((value, key) => {
    paramString += value;
  });
  // paramString = paramString.slice(0, -1);
  /*
  allCheckboxes.forEach(function (box) {
    if (!paramString) {
      box.classList.remove("blue");
      return;
    }

    box.classList.remove("blue");
    if (paramString.includes(box.dataset.atr)) {
      box.classList.add("blue");
    }
  });
  */

  allCheckboxes.forEach(function (box) {
    if (!paramString) {
      box.classList.remove("blue");
      allUncheck.forEach(function (uncheck) {
        uncheck.classList.remove("hidden");
        uncheck.classList.add("hidden");
      });
      return;
    }

    // console.log(+box.dataset.atr.slice(0, 1));
    box.classList.remove("blue");
    if (paramString.includes(box.dataset.atr)) {
      box.classList.add("blue");
    }
  });
}
