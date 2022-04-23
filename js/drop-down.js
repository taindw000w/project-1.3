const dropMenu = document.querySelector(".drop-down-menu");
const nav = document.querySelector(".drop-down-nav");
const linkConnection = document.querySelector(".drop-down-btn-links");
const wrapBtnLinks = document.querySelector(".wrapper-btn-links");
const wrapBtnLinkMessage = document.querySelector(".wrapper-btn-links__message-btn");
const wrapBtnLinkPhone = document.querySelector(".wrapper-btn-links__phone-btn");

//buttonsSidebar
const sideBar = document.querySelector(".drop-down-sidebar");
const sideBarCall = document.querySelector(".drop-down-sidebar-call");
const sideBarButton = document.querySelector(".drop-down-button");
const sideBarCallButton = document.querySelector(".drop-down-button-call");
const sideBarPhoneButton = document.querySelector(".drop-down-btn-links__phone-btn");
const sideBarMessageButton = document.querySelector(".drop-down-btn-links__message-btn");
const sideBarBurgCall = document.querySelector(".drop-down-button-call");
//burgerMenu
const burgerMenu = document.querySelector(".union-container__menu-burger");
//body
const body = document.querySelector("body");
const section = document.querySelector(".section");


burgerMenu.addEventListener("click", function () {
  body.classList.toggle("inactive_body");
})

wrapBtnLinkPhone.addEventListener("click", function () {
  body.classList.add("inactive_body");
  burgerMenu.style.display = "none";
  section.style.opacity = "0.2";
  dropMenu.style.opacity = "0.2";
  sideBarCall.style.transition = ".4s";
  sideBarCall.classList.toggle("drop-down-sidebar-call_active");
});

sideBarPhoneButton.addEventListener("click", function () {
  burgerMenu.style.display = "none";
  body.classList.toggle("inactive_body");
  section.style.opacity = "0.2";
  dropMenu.style.opacity = "0.2";
  sideBarCall.style.transition = ".4s";
  sideBarCall.classList.toggle("drop-down-sidebar-call_active");
});

sideBarBurgCall.addEventListener("click", function () {
  burgerMenu.style.display = "flex";
  section.style.opacity = "1";
  dropMenu.style.opacity = "1";
  sideBarCall.classList.toggle("drop-down-sidebar-call_active");
  body.classList.remove("inactive_body");
});

sideBarMessageButton.addEventListener("click", function () {
  body.classList.add("inactive_body");
  burgerMenu.style.display = "none";
  section.style.opacity = "0.2";
  dropMenu.style.opacity = "0.2";
  sideBar.style.transition = ".4s";
  sideBar.classList.toggle("drop-down-sidebar_active");
  
});

wrapBtnLinkMessage.addEventListener("click", function () {
  burgerMenu.style.display = "none";
  section.style.opacity = "0.2";
  dropMenu.style.opacity = "0.2";
  sideBar.style.transition = ".4s";
  sideBar.classList.add("drop-down-sidebar_active");
});

sideBarButton.addEventListener("click", function () {
  sideBar.classList.remove("drop-down-sidebar_active");
  body.classList.remove("inactive_body");
  burgerMenu.style.display = "flex";
  section.style.opacity = "1";
  dropMenu.style.opacity = "1";
});
