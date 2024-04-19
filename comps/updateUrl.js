export default function _updateUrl(str, checkboxIndex) {
  if (!str) {
    this._readUrl();
    return;
  }

  const paramValue = str.join("");
  const url = new URL(window.location.href);

  if (paramValue.startsWith("page")) {
    updateQueryParam("pag", paramValue.slice(4));
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
    {
      name: "sans",
      value: "",
    },
    {
      name: "wrkhrs",
      value: "",
    },
    {
      name: "free",
      value: "",
    },
  ];

  function updateQueryParam(key, value) {
    url.searchParams.set(key, value);

    if (value.endsWith("x")) {
      url.searchParams.delete(key);
    }
    window.history.pushState({}, "", url);
  }

  params.forEach((param, index) => {
    if (checkboxIndex === index + 1) {
      param.value = paramValue;
      updateQueryParam(param.name, param.value);
    }
  });

  this._readUrl();
}
