import { allCheckboxes, allUncheck, allSubfilters } from "../globalVars.js";

export default function _updateFilters(params) {
  let paramString = "";

  params.forEach((value, key) => {
    paramString += value;
  });

  allSubfilters.forEach(function (subfilter) {
    const checkbox = subfilter.querySelector(".filter_sans-check");
    if (paramString.includes(subfilter.dataset.atr)) {
      checkbox.classList.add("blue");
    } else {
      checkbox.classList.remove("blue");
    }
  });

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
