export default function _updateFilters(urlParams) {
  if (urlParams.size === 0) {
    document.querySelectorAll(".filter_box").forEach((box) => {
      box.classList.remove("blue");
    });
    document.querySelectorAll(".filter_sans-check").forEach((box) => {
      box.classList.remove("blue");
    });
    return;
  }

  const allParams = [
    "expr",
    "elgnt",
    "frndl",
    "orgnc",
    "prgrssv",
    "drng",
    "dscrt",
    "wrm",
  ];

  const subFilterparams = ["sans", "wrkhrs", "free"];

  subFilterparams.forEach((param) => {
    let paramValue = urlParams.get(param);

    if (!paramValue) {
      if (param === "sans") {
        document
          .querySelector(`#serif > .filter_sans-check`)
          .classList.remove("blue");
      }
      const filterBox = document.querySelector(
        `#${param} > .filter_sans-check`
      );
      filterBox.classList.remove("blue");
    }

    if (paramValue) {
      const filterBox = document.querySelector(
        `#${paramValue} > .filter_sans-check`
      );

      filterBox.classList.remove("blue");
      filterBox.classList.add("blue");

      if (paramValue === "sans") {
        document
          .querySelector(`#serif > .filter_sans-check`)
          .classList.remove("blue");
      }

      if (paramValue === "serif") {
        document
          .querySelector(`#sans > .filter_sans-check`)
          .classList.remove("blue");
      }
    }

    // const filterBox = document.querySelector(
    //   `#${paramValue} > .filter_sans-check`
    // );
  });

  let nonExistingParams = [];
  urlParams.forEach((value, key) => {
    nonExistingParams = allParams.filter((param) => !urlParams.has(param));

    if (key && key !== "name") {
      if (value && value !== "0") {
        const startEnd =
          value.split("").length > 1 ? value.split("") : [value, value];
        const filterBoxes = document.querySelectorAll(`#${key} .filter_box`);
        filterBoxes.forEach((box) => {
          box.classList.remove("blue");
          if (
            box.dataset.pos >= startEnd[0] &&
            box.dataset.pos <= startEnd[1]
          ) {
            box.classList.remove("blue");
            box.classList.add("blue");
          }
        });
      }

      const allParamsFromSearch = new URLSearchParams(window.location.search);
    }
  });

  nonExistingParams.forEach((param) => {
    const filterBoxes = document.querySelectorAll(`#${param} .filter_box`);
    filterBoxes.forEach((box) => {
      box.classList.remove("blue");
    });
  });
}
