export default function _updateUrl(str) {
  if (!str) {
    this._readUrl();
    return;
  }
  if (str.toString().endsWith("x")) {
    this.hashFragment = this.hashFragment.filter(
      (item) => !item.includes(str[0])
    );
  } else {
    this.hashFragment = Array.from(new Set(this.hashFragment.concat(str)));
  }

  const url = new URL(window.location.href);
  url.hash = this.hashFragment;

  history.pushState(null, null, url.toString().replace(/,/g, ""));
  this._readUrl();
}
