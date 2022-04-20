const dropMenu = document.querySelector(".drop-down-menu");
const nav = document.querySelector(".drop-down-nav");
const linkConnection = document.querySelector(".drop-down-btn-links");
const sideBar = document.querySelector(".drop-down-sidebar");
const sideBarButton = document.querySelector(".drop-down-button");
const burgerMenu = document.querySelector(".union-container__menu-burger");
const body = document.querySelector("body");
const section = document.querySelector(".section");
const wrapBtnLink = document.querySelector(".wrapper-btn-links__message-btn");

burgerMenu.addEventListener("click", function () {
  body.classList.toggle("inactive_body")
 
})

linkConnection.addEventListener("click", function () {
  burgerMenu.style.display = "none";
  body.style.position = "fixed";
  section.style.opacity = "0.2";
  dropMenu.style.opacity = "0.2";
  sideBar.style.transition = ".4s";
  sideBar.classList.add("drop-down-sidebar_active");
});

wrapBtnLink.addEventListener("click", function () {
  burgerMenu.style.display = "none";
  body.style.position = "fixed";
  section.style.opacity = "0.2";
  dropMenu.style.opacity = "0.2";
  sideBar.style.transition = ".4s";
  sideBar.classList.add("drop-down-sidebar_active");
});

sideBarButton.addEventListener("click", function () {
  sideBar.classList.remove("drop-down-sidebar_active");
  burgerMenu.style.display = "flex";
  body.style.position = "static";
  section.style.opacity = "1";
  dropMenu.style.opacity = "1";
});

console.log(linkConnection);
