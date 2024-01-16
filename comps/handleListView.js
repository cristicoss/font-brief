import { list, gridBtn, listBtn, columnsBtn } from "../globalVars.js";
let viewList = "list";

export function _handleListView() {
  const secondThis = this;

  const changeView = function () {
    secondThis._readUrl();
  };
  columnsBtn.addEventListener("click", function () {
    // console.log(filterF);
    list.classList.remove("grid");
    list.classList.add("columns");
    viewList = "columns";
    changeView();
  });

  gridBtn.addEventListener("click", function () {
    list.classList.remove("columns");
    list.classList.add("grid");
    viewList = "grid";
    changeView();
  });

  listBtn.addEventListener("click", function () {
    list.classList.remove("columns");
    list.classList.remove("grid");
    viewList = "list";
    changeView();
  });
}

export { viewList };
