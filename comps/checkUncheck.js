import { checkboxesContainer } from "../globalVars.js";

export default function _checkUncheck() {
  checkboxesContainer.forEach((check) => {
    check.addEventListener("click", (e) => {
      const uncheck = check.querySelector(".uncheck");

      const allCheckboxes = [...check.querySelectorAll(".filter_box")];
      let arrToFilter = [];
      const currCheckbox = e.target.closest(".filter_box");
      const checkboxIndex = Number(currCheckbox.dataset?.atr.slice(0, -1));
      if (!currCheckbox) return;

      arrToFilter.push(currCheckbox.dataset.atr);
      if (this.store.clicks[checkboxIndex] === 0) {
        this._updateUrl([e.target.dataset.atr.slice(0, -1) + "x"]);

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
      this._updateUrl(uniqueArrToFilter);
    });
  });
}
