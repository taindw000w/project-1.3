//breakpoint
const breakpoint = window.matchMedia("(min-width: 1120px)");

//btn desktop
const dropMenu = document.querySelector(".drop-down-menu");
const wrapBtnLinks = document.querySelector(".wrapper-btn-links");
const wrapBtnLinkMessage = document.querySelector(
  ".wrapper-btn-links__message-btn"
);
const wrapBtnLinkPhone = document.querySelector(
  ".wrapper-btn-links__phone-btn"
);

//buttonsSidebar
const sideBar = document.querySelector(".drop-down-sidebar");
const sideBarCall = document.querySelector(".drop-down-sidebar-call");
const sideBarButton = document.querySelector(".drop-down-button");
const sideBarPhoneButton = document.querySelector(
  ".drop-down-btn-links__phone-btn"
);
const sideBarMessageButton = document.querySelector(
  ".drop-down-btn-links__message-btn"
);

const btnDesktopWrapper = document.querySelector(".btn-desktop-wrapper");
const sideBarBurgCall = document.querySelector(".drop-down-button-call");
const deleteBtn = document.querySelector(".drop-down-button-call-desktop");
const newBtn = document.querySelector(".drop-down-btn-delete");

//burgerMenu
const burgerMenu = document.querySelector(".union-container__menu-burger");
//body
const body = document.querySelector("body");
const section = document.querySelector(".section");

burgerMenu.addEventListener("click", function () {
  (function () {
    if (body.classList.contains != "inactive_body") {
      body.classList.toggle("inactive_body");
    }
  })();
});

//phone drop-down-buttons and sidebar
const clickPhoneBtn = sideBarPhoneButton.addEventListener("click", function () {
  sideBarCall.classList.add("drop-down-sidebar-call_active");
  section.style.opacity = "0.2";
  if (body.classList.contains == "inactive_body") {
    return;
  }
  (function () {
    if (breakpoint.matches == true) {
      body.classList.add("inactive_body");
    }
  }());
});
const outClickPhoneBtn = sideBarBurgCall.addEventListener("click", function () {
  sideBarCall.classList.remove("drop-down-sidebar-call_active");
  section.style.opacity = "1";

});

// message drop-down-buttons and sidebar
const clickMessageBtn = sideBarMessageButton.addEventListener(
  "click",
  function () {
    sideBar.classList.add("drop-down-sidebar_active");
    section.style.opacity = "0.2";
    (function () {
      if (breakpoint.matches === true) {
        body.classList.add("inactive_body");
      }
    })();
  }
);
const outMessageBtn = sideBarButton.addEventListener("click", function () {
  sideBar.classList.remove("drop-down-sidebar_active");
  section.style.opacity = "1";
});

// desktop phone header buttons and sidebar
const wrapPhoneBtn = wrapBtnLinkPhone.addEventListener("click", function () {
  sideBarCall.classList.add("drop-down-sidebar-call_active");
  section.style.opacity = "0.2";
  body.classList.add("inactive_body");
});

const outPhoneBtn = newBtn.addEventListener("click", function () {
  sideBarCall.classList.remove("drop-down-sidebar-call_active");
  section.style.opacity = "1";
  body.classList.remove("inactive_body");
});

// desktop message header buttons and sidebar
const wrapMessageBtn = wrapBtnLinkMessage.addEventListener(
  "click",
  function () {
    sideBar.classList.add("drop-down-sidebar_active");
    section.style.opacity = "0.2";
    body.classList.add("inactive_body");
  }
);
const wrapOutMessageBtn = deleteBtn.addEventListener("click", function () {
  sideBarCall.classList.remove("drop-down-sidebar-call_active");
  sideBar.classList.remove("drop-down-sidebar_active");
  section.style.opacity = "1";
  body.classList.remove("inactive_body");
});


