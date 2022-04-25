// burger-menu
const unionLink = document.querySelector(".union-container");
const unionLineFirst = document.querySelector(".union-container__line-first");
const unionLineCenter = document.querySelector(".union-container__line-center");
const unionLineThird = document.querySelector(".union-container__line-third");
const dropDownMenu = document.querySelector(".drop-down-menu");
const burger = document.querySelector(".union-container__menu-burger");
const container = document.querySelector(".container");
const deskLinks = document.querySelector(".flex-container-links");


// body 
const header = document.querySelector(".section-header");
const main = document.querySelector(".section-main-content");
const footer = document.querySelector(".section-footer");

const clicker = () => {
    unionLineFirst.classList.toggle("line-first_active");
    unionLineCenter.classList.toggle("line-center_active");
    unionLineThird.classList.toggle("line-third_active");
    dropDownMenu.classList.toggle("drop-down-menu_active");
};

const clickerDesktopElems = () => {
  main.classList.toggle("inactive");
  footer.classList.toggle("inactive");
  container.classList.toggle("container-active");
  deskLinks.classList.toggle("container-active");
}

burger.addEventListener("click", clickerDesktopElems);
burger.addEventListener("click", clicker);




