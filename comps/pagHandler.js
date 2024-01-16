import { listTop, pagContainer, itemsPerPage } from "../globalVars.js";

export function _paginate(array, pageNr = 1) {
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
  const nrPages = Math.ceil(array.length / itemsPerPage);
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
}

//////// Handle click page //////////
export function _pagBtnHandler(fonts) {
  pagContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".pagination_text");
    if (!btn) return;
    const pagNr = +btn.dataset.goto;

    const arrRange = fonts.slice(
      (pagNr - 1) * itemsPerPage,
      (pagNr - 1) * itemsPerPage + itemsPerPage
    );
    this._renderFonts(arrRange, itemsPerPage);
    this._paginate(fonts, +pagNr);
    listTop.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
