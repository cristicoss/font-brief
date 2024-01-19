export default function _updateUrl(str) {
  /*
  if (!str) {
    this._readUrl();
    return;
  }

  console.log(str);
  let expr = "";
  let elgnt = "";
  let frndl = "";
  let orgnc = "";
  let prgrssv = "";
  let drng = "";
  let dscrt = "";
  let wrm = "";

  const paramValue = str.join("");
  console.log(paramValue);
  if (paramValue.slice(0, 1) === "1") expr = "expr";
  if (paramValue.slice(0, 1) === "2") elgnt = "elgnt";

  if (str.toString().endsWith("x")) {
    const url = new URL(window.location.href);
    url.searchParams.delete(expr);
    window.history.pushState({}, "", url);
    return;
  }

  const baseUrl = [
    window.location.protocol,
    "//",
    window.location.host,
    window.location.pathname,
  ].join("");

  const url = new URL(baseUrl);
  url.searchParams.set(expr, paramValue);

  // Update the URL without reloading the page
  window.history.pushState({ path: url.href }, "", url.href);
  this._readUrl();
  */

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
