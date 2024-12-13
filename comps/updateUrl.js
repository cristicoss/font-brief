import _readUrl from "./readUrl.js";

export default function _updateUrl(
  type,
  start,
  end,
  startClick,
  clicks,
  store
) {
  if (!type) {
    return;
  }

  if (start === "search") {
  }

  let startEnd =
    end !== 0 ? [start, end].sort((a, b) => a - b).join("") : start;
  const url = new URL(window.location.href);
  const urlParams = new URLSearchParams(window.location.search);
  console.log(url.search);

  function updateQueryParam(key, value, nr) {
    url.searchParams.set(key, value);

    if (type === "sans" || type === "wrkhrs" || type === "free") {
      console.log("type: ", type, "nr: ", nr);
      if (nr === "") {
        url.searchParams.delete(type);
      }
    }

    if (
      (startClick && urlParams.get(type).split("").length === 0) ||
      clicks === 0
    ) {
      url.searchParams.delete(key);
    }

    window.history.pushState({}, "", url);
  }

  if (type === "search") {
    updateQueryParam(type, start);
    _readUrl(store);
    return;
  }

  updateQueryParam(type, startEnd, start);
  _readUrl(store);
}
