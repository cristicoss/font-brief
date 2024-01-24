export default function _readUrl() {
  const urlParams = new URLSearchParams(window.location.search);

  this._filterFonts(urlParams);
  this._updateFilters(urlParams);

  // else this._renderFonts(this.store.loadedFonts);

  /*
  const selection = window.location.hash.slice(1);
  console.log(window.location.hash.slice(1));
  if (window.location.hash.slice(1) !== "") this._filterFonts(selection);
  else this._renderFonts(this.store.loadedFonts);
  console.log(selection.match(/.{1,2}/g));
  this._updateFilters(selection.match(/.{1,2}/g));
  */
}
