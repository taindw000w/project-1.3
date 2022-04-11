const unionLink = document.querySelector(".union-container__link");
const unionLineFirst = document.querySelector(".union-container__line-first");
const unionLineCenter = document.querySelector(".union-container__line-center");
const unionLineThird = document.querySelector(".union-container__line-third");
const dropDownMenu = document.querySelector(".drop-down-menu");

function clicker() {
  unionLineFirst.classList.toggle("line-first_active");
  unionLineCenter.classList.toggle("line-center_active");
  unionLineThird.classList.toggle("line-third_active");
  dropDownMenu.classList.toggle("drop-down-menu_active");
}

const unionClickLines = unionLink.addEventListener("click", clicker);


