import { list, gridBtn, listBtn, columnsBtn } from "../globalVars.js";
let viewList = "list";

export function _handleListView() {
  const secondThis = this;

  const changeView = function () {
    secondThis._readUrl();
  };

  gridBtn.addEventListener("click", function () {
    gridBtn.classList.add("clicked");
    columnsBtn.classList.remove("clicked");
    listBtn.classList.remove("clicked");
    list.classList.remove("columns");
    list.classList.remove("list");
    list.classList.add("grid");
    viewList = "grid";
    changeView();
  });

  columnsBtn.addEventListener("click", function () {
    columnsBtn.classList.add("clicked");
    gridBtn.classList.remove("clicked");
    listBtn.classList.remove("clicked");
    list.classList.remove("grid");
    list.classList.add("columns");
    viewList = "columns";
    changeView();
  });

  listBtn.addEventListener("click", function () {
    listBtn.classList.add("clicked");
    gridBtn.classList.remove("clicked");
    columnsBtn.classList.remove("clicked");
    list.classList.remove("columns");
    list.classList.remove("grid");
    viewList = "list";
    changeView();
  });
}

export { viewList };
