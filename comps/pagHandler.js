import { listTop, pagContainer, itemsPerPage } from "../globalVars.js";
import { nextTick } from "../petite-vue/dist/petite-vue.es.js";

export function _paginate(fonts, pageNr, store) {
  const generatePagNr = function (nrPages, pageNr) {
    for (let i = 1; i <= nrPages; i++) {
      const htmlNumbers = `
        <div class="pagination_btn">
        <span class="pagination_text ${
          pageNr === i ? "text_blue" : ""
        }" data-goto="${i}">${i}</span>
        </div>
        `;
      pagContainer.insertAdjacentHTML("beforeend", htmlNumbers);
    }
  };

  pagContainer.innerHTML = "";
  const nrPages = Math.ceil(fonts.length / itemsPerPage);

  const htmlNext = `<div class="pagination_btn">
    <span class="pagination_text" data-goto="${pageNr + 1}">Next</span>
    </div>
    `;

  const htmlPrev = `
    <div class="pagination_btn">
    <span class="pagination_text" data-goto="${pageNr - 1}">Previous</span>
    </div>
    `;

  // If we are on the first page & there are more page
  if (pageNr === 1 && nrPages > 1) {
    generatePagNr(nrPages, pageNr);
    pagContainer.insertAdjacentHTML("beforeend", htmlNext);
  }

  // If we are on the last page & there are more page
  if (pageNr === nrPages && nrPages > 1) {
    pagContainer.insertAdjacentHTML("beforeend", htmlPrev);
    generatePagNr(nrPages, pageNr);
  }

  //If we are in the middle
  if (pageNr < nrPages && pageNr !== 1) {
    pagContainer.insertAdjacentHTML("beforeend", htmlPrev);
    generatePagNr(nrPages, pageNr);
    pagContainer.insertAdjacentHTML("beforeend", htmlNext);
  }
  if (nrPages === 1) pagContainer.innerHTML = "";

  const arrRange = fonts.slice(
    (pageNr - 1) * itemsPerPage,
    (pageNr - 1) * itemsPerPage + itemsPerPage
  );

  // this._renderFonts(arrRange, itemsPerPage);
  const renderFonts = function (fonts, itemsPerPage) {
    console.log(store.fonts);
    store.fonts = fonts.slice(0, itemsPerPage);

    const fontItem = document.querySelectorAll(".font-list_item");

    nextTick(() => {
      if (store.itemFlex === "grid") {
        store.gridType = true;
        store.listType = false;
        store.columnType = false;
      } else if (store.itemFlex === "list") {
        store.gridType = false;
        store.columnType = false;
        store.listType = true;
      } else if (store.itemFlex === "columns") {
        store.gridType = false;
        store.listType = false;
        store.columnType = true;
      }

      this._showItemsWithFadeIn();
    });
  };
  renderFonts(arrRange, itemsPerPage);
}

//////// Handle click page //////////
export function _pagBtnHandler(fonts) {
  pagContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".pagination_text");
    if (!btn) return;
    const pagNr = +btn.dataset.goto;
    console.log(pagNr);

    this._paginate(fonts, +pagNr);
    this._updateUrl([`page${pagNr}`]);
  });
}
