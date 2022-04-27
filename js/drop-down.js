//breakpoints
const breakpointMobile = window.matchMedia("(min-width: 320px)");
const breakpointTablet = window.matchMedia("(min-width: 480px)");

//btn desktop
const dropMenu = document.querySelector(".drop-down-menu");
const wrapBtnLinks = document.querySelector(".wrapper-btn-links");
const wrapBtnLinkMessage = document.querySelector(
  ".wrapper-btn-links__message-btn"
);
const wrapBtnLinkPhone = document.querySelector(
  ".wrapper-btn-links__phone-btn"
);

//left modal 
const leftModal = document.querySelector(".left-modal-container");

//buttons Sidebar
const sideBar = document.querySelector(".drop-down-sidebar");
const sideBarCall = document.querySelector(".drop-down-sidebar-call");
const sideBarPhoneButton = document.querySelector(
  ".drop-down-btn-links__phone-btn"
);
const sideBarMessageButton = document.querySelector(
  ".drop-down-btn-links__message-btn"
);

// delete buttons mobile
const deleteMobSideCall = document.querySelector(".drop-down-button-delete-mobile-sidebar-call");
const deleteMobSide = document.querySelector(".drop-down-button-delete-mobile-sidebar");

// delete buttons desktop
const deleteDeskSideCall = document.querySelector(".drop-down-btn-delete-desktop-sidebar-call");
const deleteDeskSide = document.querySelector(".drop-down-btn-delete-desktop-sidebar");

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



// drop-down-menu phone mob and desk

const activeSidebarCallMobilePhone = sideBarPhoneButton.addEventListener('click', function () {
  if (breakpointMobile.matches == true) {
    sideBarCall.classList.add("drop-down-sidebar-call_active");
    deleteMobSideCall.addEventListener("click", function () {
      sideBarCall.classList.remove("drop-down-sidebar-call_active");
    });
  } 
});

const activeSidebarCallTabletPhone = sideBarPhoneButton.addEventListener("click", function (event) {
  if (breakpointTablet.matches == true) {
    event.preventDefault()
    body.style.overflow = "hidden";
    sideBarCall.classList.add("drop-down-sidebar-call_active");
    deleteDeskSideCall.addEventListener("click", function () {
      sideBarCall.classList.remove("drop-down-sidebar-call_active");
      body.style.overflow = "scroll";
    });
  }
});


// drop-down-menu message mob and desk

const activeSidebarMobileMessage = sideBarMessageButton.addEventListener('click', function(){
   if (breakpointMobile.matches == true) {
     sideBar.classList.add("drop-down-sidebar_active");
     deleteMobSide.addEventListener("click", function () {
       sideBar.classList.remove("drop-down-sidebar_active");
     });
   } 
});

const activeSidebarTabletMessage = sideBarMessageButton.addEventListener('click', function(event){
   if (breakpointTablet.matches == true) {
     event.preventDefault();
     body.style.overflow = "hidden";
     sideBar.classList.add("drop-down-sidebar_active");
     deleteDeskSide.addEventListener("click", function () {
       sideBar.classList.remove("drop-down-sidebar_active");
       body.style.overflow = "scroll";
     });
   } 
}) 


// header buttons modal

const activeDesktopPhone = wrapBtnLinkPhone.addEventListener('click', function(){
  if (breakpointTablet.matches == true) {
    sideBarCall.classList.add("drop-down-sidebar-call_active");
    body.style.overflow = "hidden";
    deleteDeskSideCall.addEventListener("click", function () {
      sideBarCall.classList.remove("drop-down-sidebar-call_active");
      body.style.overflow = "scroll";
    });
  } 
})

const activeDesktopMessage = wrapBtnLinkMessage.addEventListener(
  "click",
  function () {
    if (breakpointTablet.matches == true) {
      sideBar.classList.add("drop-down-sidebar_active");
      body.style.overflow = "hidden";
      deleteDeskSide.addEventListener("click", function () {
        sideBar.classList.remove("drop-down-sidebar_active");
        body.style.overflow = "scroll";
      });
    }
  }
); 



