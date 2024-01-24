export default function _updateUrl(str) {
  if (!str) {
    this._readUrl();
    return;
  }

  const params = [
    {
      name: "expr",
      value: "",
    },
    {
      name: "elgnt",
      value: "",
    },
    {
      name: "frndl",
      value: "",
    },
    {
      name: "orgnc",
      value: "",
    },
    {
      name: "prgrssv",
      value: "",
    },
    {
      name: "drng",
      value: "",
    },
    {
      name: "dscrt",
      value: "",
    },
    {
      name: "wrm",
      value: "",
    },
  ];

  const url = new URL(window.location.href);

  function updateQueryParam(key, value) {
    url.searchParams.set(key, value);

    if (value.endsWith("x")) {
      url.searchParams.delete(key);
    }
    window.history.pushState({}, "", url);
  }

  const paramValue = str.join("");

  params.forEach((param, index) => {
    if (+paramValue.slice(0, 1) - 1 === index) {
      param.value = paramValue;
      updateQueryParam(param.name, param.value);
    }
  });

  if (paramValue.startsWith("page")) {
    updateQueryParam("pag", paramValue.slice(4));
  }

  this._readUrl();

  /*

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
  */
}
