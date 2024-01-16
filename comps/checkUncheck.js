import { checkboxesContainer } from "../globalVars.js";

export default function _checkUncheck() {
  // let counter = 0;
  checkboxesContainer.forEach((check) => {
    check.addEventListener("click", (e) => {
      // counter++;
      // console.log(counter);
      // listTop.scrollIntoView();
      // console.log(window.location.hash.slice(1));
      const uncheck = check.querySelector(".uncheck");

      const allCheckboxes = [...check.querySelectorAll(".filter_box")];
      let arrToFilter = [];
      const currCheckbox = e.target.closest(".filter_box");
      // console.log(currCheckbox.dataset.atr);
      if (!currCheckbox) return;

      arrToFilter.push(currCheckbox.dataset.atr);
      // console.log(arrToFilter);

      if (currCheckbox.classList.contains("blue")) {
        //   currCheckbox.classList.remove("blue");

        this._updateUrl(e.target.dataset.atr.slice(0, -1) + "x");
        // console.log(e.target.dataset.atr.slice(0, -1) + "x");

        return;
      } else {
        //   currCheckbox.classList.add("blue");

        allCheckboxes.forEach((active) => {
          if (active.classList.contains("blue") && active !== currCheckbox) {
            // uncheck.classList.remove("hidden");
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
                //   allCheckboxes[i].classList.remove("blue");
                //   allCheckboxes[i].classList.add("blue");
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
                //   allCheckboxes[i].classList.remove("blue");
                //   allCheckboxes[i].classList.add("blue");
                arrToFilter.push(allCheckboxes[i].dataset.atr);
              }
            }
          }
        });
      }
      /*
        // Uncheck all
        uncheck?.addEventListener("click", (e) => {
          console.log("uncheck");
          for (check of allCheckboxes) {
            check.classList.remove("blue");
          }
          //   for (let i = 0; i <= 4; i++)
          //     allCheckboxes[i].classList.remove("blue");
          uncheck.classList.remove("hidden");
          uncheck.classList.add("hidden");
          // this._updateUrl(e.target.dataset.atr.slice(0, -1) + "x");
          console.log(e.target.dataset.atr.slice(0, -1) + "x");

          return;
        });
        */

      const uniqueArrToFilter = [...new Set(arrToFilter)];
      this._updateUrl(uniqueArrToFilter);
    });
  });
}
