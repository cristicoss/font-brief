import { checkboxesContainer, allSubfilters } from "../globalVars.js";

export default function _checkUncheck() {
  allSubfilters.forEach((subfilter) => {
    subfilter.addEventListener("click", (e) => {
      console.log(e.currentTarget);
      const checkboxIndex = e.currentTarget.dataset?.index;
      let atr = e.currentTarget.dataset?.atr;
      let checkbox = e.currentTarget.querySelector(".filter_sans-check");

      if (checkbox.classList.contains("blue")) {
        checkbox.classList.remove("blue");
        atr = "sansx";
      }
      if (atr === "sans") {
        allSubfilters[1]
          .querySelector(".filter_sans-check")
          .classList.remove("blue");
      }
      if (atr === "serif") {
        allSubfilters[0]
          .querySelector(".filter_sans-check")
          .classList.remove("blue");
      }

      this._updateUrl([atr], +checkboxIndex);
    });
  });

  checkboxesContainer.forEach((check) => {
    check.addEventListener("click", (e) => {
      const uncheck = check.querySelector(".uncheck");

      const allCheckboxes = [...check.querySelectorAll(".filter_box")];
      let arrToFilter = [];
      const currCheckbox = e.target.closest(".filter_box");
      const checkboxIndex = Number(currCheckbox.dataset?.index);
      if (!currCheckbox) return;

      arrToFilter.push(currCheckbox.dataset.atr);
      if (this.store.clicks[checkboxIndex] === 0) {
        this._updateUrl([checkboxIndex + "x"], checkboxIndex);

        return;
      } else {
        allCheckboxes.forEach((active) => {
          if (active.classList.contains("blue") && active !== currCheckbox) {
            // if first box is before the last box
            if (
              allCheckboxes.indexOf(active) <
              allCheckboxes.indexOf(currCheckbox)
            ) {
              for (
                let i = allCheckboxes.indexOf(active);
                i <= allCheckboxes.indexOf(currCheckbox);
                i++
              ) {
                arrToFilter.push(allCheckboxes[i].dataset.atr);
              }
            }

            // if first box is after the last box
            if (
              allCheckboxes.indexOf(active) >
              allCheckboxes.indexOf(currCheckbox)
            ) {
              for (
                let i = allCheckboxes.indexOf(currCheckbox);
                i <= allCheckboxes.indexOf(active);
                i++
              ) {
                arrToFilter.push(allCheckboxes[i].dataset.atr);
              }
            }
          }
        });
      }

      const uniqueArrToFilter = [...new Set(arrToFilter)];
      this._updateUrl(uniqueArrToFilter, checkboxIndex);
    });
  });
}
